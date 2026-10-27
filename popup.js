(async () => {
  const items = document.querySelector('#items');
  const status = document.querySelector('#status');
  const KEY = 'vttByTab';
  const checkbox = document.querySelector('#timestamps');
  const preference = await chrome.storage.local.get('includeTimestamps');
  checkbox.checked = preference.includeTimestamps !== false;
  checkbox.addEventListener('change', () => chrome.storage.local.set({ includeTimestamps: checkbox.checked }));

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const stored = await chrome.storage.session.get(KEY);
  const entries = (stored[KEY] || {})[tab.id] || [];
  const identity = url => { const u = new URL(url); return u.origin + u.pathname; };

  // Mantieni l'ultima richiesta per ogni VTT e mostra solo l'ultimo video.
  // Non modificare lo storage: il popup filtra soltanto ciò che visualizza.
  const unique = [...new Map(entries.map(item => [identity(item.url), item])).values()];
  const found = entries.length ? [entries[entries.length - 1]] : [];

  await chrome.action.setBadgeText({ tabId: tab.id, text: found.length ? '1' : '' });
  items.textContent = '';
  if (!found.length) {
    items.textContent = 'Nessun file VTT rilevato. Avvia il video, apri la sezione relativa alla trascrizione e riapri questa finestra. Se il video era già avviato, ricarica la pagina.';
  }

  const cleanName = value => (value || 'trascrizione').replace(/[\\/:*?"<>|\x00-\x1f]/g, ' ').replace(/\s+/g, ' ').trim().replace(/\.+$/, '').slice(0, 120) || 'trascrizione';
  // Usa il nome originale del VTT, senza estensione, come valore iniziale.

  async function getVttText(item) {
    const response = await chrome.runtime.sendMessage({ type: 'fetchVtt', url: item.url });
    if (!response?.ok) throw new Error(response?.error || 'Impossibile leggere il VTT');
    return response.text;
  }

  function toTxt(vtt, withTimestamps) {
    const blocks = vtt.replace(/^\uFEFF?WEBVTT[^\n]*\n/i, '').split(/\r?\n\s*\r?\n/);
    return blocks.map(block => {
      const rows = block.trim().split(/\r?\n/);
      const at = rows.findIndex(row => /\d{2}:\d{2}(?::\d{2})?\.\d{3}\s*-->/.test(row));
      if (at < 0) return null;
      const timestamps = rows[at].split(/\s*-->\s*/);
      const start = timestamps[0].trim();
      const end = (timestamps[1] || '').trim().split(/\s+/)[0];
      const content = rows.slice(at + 1).join(' ').replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').trim();
      return content ? (withTimestamps ? `[${start} --> ${end}] ${content}` : content) : null;
    }).filter(Boolean).join('\n\n');
  }

  for (const item of found) {
    const box = document.createElement('div');
    box.className = 'item';
    const label = document.createElement('div');
    label.className = 'name';
    label.textContent = `Trascrizione rilevata · ${new URL(item.url).pathname.split('/').pop()}`;
    box.append(label);

    const nameLabel = document.createElement('label');
    nameLabel.className = 'field-label';
    nameLabel.textContent = 'Nome del file';
    const nameInput = document.createElement('input');
    nameInput.className = 'filename';
    nameInput.type = 'text';
    const originalName = decodeURIComponent(new URL(item.url).pathname.split('/').pop() || 'trascrizione');
    nameInput.value = cleanName(originalName.replace(/\.vtt$/i, ''));
    nameLabel.append(nameInput);
    box.append(nameLabel);

    for (const type of ['VTT', 'TXT', 'COPY']) {
      const button = document.createElement('button');
      button.textContent = type === 'COPY' ? 'Copia TXT' : `Scarica ${type}`;
      if (type !== 'VTT') button.className = 'secondary';
      button.addEventListener('click', async () => {
        status.textContent = type === 'COPY' ? 'Copio la trascrizione…' : 'Preparazione download…';
        button.disabled = true;
        try {
          const filename = cleanName(nameInput.value);
          if (type === 'VTT') {
            await chrome.downloads.download({ url: item.url, filename: `${filename}.vtt`, saveAs: true });
            status.textContent = 'Download avviato.';
          } else {
            const txt = toTxt(await getVttText(item), checkbox.checked);
            if (type === 'COPY') {
              await navigator.clipboard.writeText(txt);
              status.textContent = 'Trascrizione copiata negli appunti.';
            } else {
              const url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt);
              await chrome.downloads.download({ url, filename: `${filename}.txt`, saveAs: true });
              status.textContent = 'Download avviato.';
            }
          }
        } catch (err) {
          status.textContent = `Errore: ${err.message}`;
        } finally {
          button.disabled = false;
        }
      });
      box.append(button);
    }
    items.append(box);
  }
})().catch(err => {
  document.querySelector('#items').textContent = 'Errore: ' + err.message;
  console.error(err);
});

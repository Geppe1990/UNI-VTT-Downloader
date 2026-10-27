const KEY = 'vttByTab';
const identity = url => { const u = new URL(url); return u.origin + u.pathname; };
const unique = entries => [...new Map(entries.map(item => [identity(item.url), item])).values()];
chrome.webRequest.onCompleted.addListener(async details => {
  if (details.tabId < 0 || !/^https?:/i.test(details.url)) return;
  let path;
  try { path = new URL(details.url).pathname; } catch { return; }
  if (!/\.vtt$/i.test(path)) return;
  const stored = await chrome.storage.session.get(KEY);
  const all = stored[KEY] || {};
  const entries = unique([...(all[details.tabId] || []), {url: details.url, time: Date.now()}]);
  all[details.tabId] = entries.slice(-30);
  await chrome.storage.session.set({[KEY]: all});
  chrome.action.setBadgeText({tabId: details.tabId, text: String(all[details.tabId].length)}).catch(() => {});
}, {urls: ['<all_urls>']});
chrome.tabs.onRemoved.addListener(async tabId => {
  const stored = await chrome.storage.session.get(KEY);
  const all = stored[KEY] || {};
  delete all[tabId];
  await chrome.storage.session.set({[KEY]: all});
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type !== 'fetchVtt') return;
  (async () => {
    try {
      const response = await fetch(message.url, {credentials:'include'});
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      sendResponse({ok:true,text:await response.text()});
    } catch(error) { sendResponse({ok:false,error:error.message}); }
  })();
  return true;
});

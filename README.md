🎓 UNI VTT Downloader

Un’estensione gratuita per Google Chrome che permette di scaricare e copiare le trascrizioni delle videolezioni universitarie in formato VTT o TXT.

UNI VTT Downloader nasce per semplificare il recupero delle trascrizioni delle lezioni online, evitando di dover utilizzare gli strumenti per sviluppatori del browser.

L’estensione è stata sviluppata per facilitare lo studio delle videolezioni dell’Università di Ferrara (UniFE), ma può funzionare anche su altre piattaforme che utilizzano sottotitoli in formato WebVTT.

📥 Download

Scarica l’ultima versione dell’estensione dalla sezione Releases di questo repository.

1. Apri la sezione Releases su GitHub.
2. Seleziona l’ultima versione disponibile.
3. Nella sezione Assets, scarica UNI-VTT-Downloader.zip.
4. Estrai il contenuto dello ZIP in una cartella del computer.

⚠️ Importante: non scaricare i file denominati Source code (zip) o Source code (tar.gz). Utilizza il file ZIP disponibile nella sezione Assets.

⸻

🧩 Installazione

L’estensione non è attualmente disponibile sul Chrome Web Store, quindi deve essere installata manualmente.

La procedura è semplice e richiede soltanto pochi minuti.

🪟 Windows

1. Estrai il file ZIP

* Individua il file UNI-VTT-Downloader.zip nella cartella Download.
* Clicca con il tasto destro sul file.
* Seleziona Estrai tutto.
* Scegli una cartella in cui conservare l’estensione.

⚠️ Non eliminare o spostare la cartella dopo l’installazione: Chrome utilizza direttamente i file contenuti al suo interno.

2. Apri le estensioni di Chrome

* Apri Google Chrome.
* Digita nella barra degli indirizzi:

chrome://extensions

* Premi Invio.

3. Attiva la modalità sviluppatore

Nella pagina delle estensioni:

* Individua l’interruttore Modalità sviluppatore, in alto a destra.
* Attivalo.

4. Installa l’estensione

* Clicca su Carica estensione non pacchettizzata.
* Seleziona la cartella estratta precedentemente, quella contenente il file manifest.json.
* Conferma.

L’estensione apparirà nell’elenco delle estensioni installate.

🍎 macOS

1. Estrai il file ZIP

* Individua UNI-VTT-Downloader.zip nella cartella Download.
* Fai doppio clic sul file per estrarlo.
* Conserva la cartella estratta in una posizione permanente.

2. Apri le estensioni di Chrome

* Apri Google Chrome.
* Digita nella barra degli indirizzi:

chrome://extensions

* Premi Invio.

3. Attiva la modalità sviluppatore

* Attiva l’interruttore Modalità sviluppatore in alto a destra.

4. Installa l’estensione

* Clicca su Carica estensione non pacchettizzata.
* Seleziona la cartella contenente il file manifest.json.
* Conferma.

L’estensione è pronta per essere utilizzata.

📌 Aggiungere l’estensione alla barra di Chrome

Per accedere più facilmente all’estensione:

1. Clicca sull’icona a forma di puzzle 🧩 nella barra degli strumenti di Chrome.
2. Cerca UNI VTT Downloader.
3. Clicca sull’icona della puntina 📌 accanto al nome.

L’icona dell’estensione rimarrà visibile nella barra degli strumenti.

⸻

▶️ Come utilizzare l’estensione

1. Apri una videolezione

Accedi alla piattaforma universitaria e apri la videolezione di cui desideri recuperare la trascrizione.

2. Avvia il video

Avvia la riproduzione della lezione.

Se la piattaforma dispone di una sezione dedicata alla trascrizione o ai sottotitoli, aprila.

Questo passaggio può essere necessario affinché il browser carichi il file VTT.

3. Apri UNI VTT Downloader

Clicca sull’icona dell’estensione nella barra di Chrome.

Se è stata rilevata una trascrizione, questa comparirà automaticamente nella finestra dell’estensione.

L’estensione mostra una sola voce per ogni file VTT identificato, evitando di visualizzare duplicati quando lo stesso file viene caricato più volte.

4. Scegli cosa fare con la trascrizione

Per ogni trascrizione rilevata sono disponibili tre operazioni.

📄 Scarica VTT

Scarica la trascrizione nel formato originale .vtt.

Il file conserva i sottotitoli e i relativi riferimenti temporali.

📝 Scarica TXT

Scarica la trascrizione come file di testo .txt.

Questo formato è particolarmente utile per:

* Leggere la trascrizione.
* Copiare il contenuto in Word o Pages.
* Creare appunti personali.
* Utilizzare la trascrizione con strumenti di intelligenza artificiale.

📋 Copia TXT

Copia direttamente la trascrizione negli appunti del computer, senza scaricare alcun file.

Puoi successivamente incollarla in un documento o in un’altra applicazione utilizzando:

* Windows: Ctrl + V
* macOS: Cmd + V

⸻

⚙️ Opzioni disponibili

🕒 Includi timestamp nel TXT

L’estensione permette di scegliere se mantenere i riferimenti temporali nella trascrizione TXT.

Con l’opzione attiva:

[00:00:07.120 --> 00:00:09.560]
Oggi affrontiamo la seconda parte
[00:00:09.560 --> 00:00:13.200]
della lezione dedicata alla semiotica.

Con l’opzione disattivata:

Oggi affrontiamo la seconda parte
della lezione dedicata alla semiotica.

I timestamp sono utili per ritrovare rapidamente un passaggio della lezione.

La preferenza viene salvata automaticamente e rimane attiva anche dopo la chiusura del browser.

Nota: questa impostazione riguarda esclusivamente il testo TXT. Il file VTT mantiene sempre i timestamp originali.

✏️ Personalizzazione del nome

L’estensione permette di modificare il nome della trascrizione prima di scaricarla.

Il nome viene proposto automaticamente utilizzando il titolo della pagina, quando disponibile.

Puoi sostituirlo con un nome più significativo, ad esempio:

Semiotica - Lezione 04 - Peirce II.txt

In questo modo sarà più semplice organizzare le trascrizioni delle diverse materie.

⸻

❓ Risoluzione dei problemi

Non viene rilevata nessuna trascrizione

Se l’estensione mostra il messaggio:

Nessun file VTT rilevato. Avvia il video, apri la sezione relativa alla trascrizione e riapri questa finestra. Se il video era già avviato, ricarica la pagina.

Prova a seguire questi passaggi:

1. Verifica di aver avviato la riproduzione del video.
2. Apri la sezione dedicata alla trascrizione, se presente.
3. Chiudi e riapri la finestra dell’estensione.
4. Se il problema persiste, ricarica la pagina della videolezione.
5. Avvia nuovamente il video.

Perché succede?

L’estensione rileva i file VTT quando vengono richiesti dal browser.

Se la trascrizione è stata caricata prima che l’estensione potesse rilevarla, potrebbe essere necessario ricaricare la pagina.

L’estensione non compare nella barra di Chrome

Clicca sull’icona del puzzle 🧩 nella barra degli strumenti e verifica che UNI VTT Downloader sia presente.

Puoi utilizzare la puntina per mantenerla sempre visibile.

Il file TXT non contiene i timestamp

Apri l’estensione e verifica che la casella Includi timestamp nel TXT sia selezionata.

Non riesco a installare l’estensione

Verifica che:

* Il file ZIP sia stato estratto.
* La modalità sviluppatore sia attiva.
* Tu abbia selezionato la cartella contenente manifest.json.
* Tu stia utilizzando Google Chrome.

Se utilizzi un computer gestito dall’università o da un’organizzazione, alcune impostazioni potrebbero impedire l’installazione manuale delle estensioni.

⸻

🔄 Aggiornamento dell’estensione

Gli aggiornamenti non vengono installati automaticamente.

Quando viene pubblicata una nuova versione:

1. Scarica il nuovo file ZIP dalla sezione Releases.
2. Estrai il contenuto.
3. Sostituisci i file della versione precedente nella cartella dell’estensione.
4. Apri chrome://extensions.
5. Individua UNI VTT Downloader.
6. Clicca sul pulsante di aggiornamento 🔄 presente nella scheda dell’estensione.

La nuova versione sarà disponibile immediatamente.

⸻

🗑️ Disinstallazione

Per rimuovere l’estensione:

1. Apri Google Chrome.
2. Digita chrome://extensions.
3. Individua UNI VTT Downloader.
4. Clicca su Rimuovi.
5. Conferma la disinstallazione.

Successivamente puoi eliminare anche la cartella dell’estensione dal computer.

⸻

🔒 Privacy e limitazioni

UNI VTT Downloader è un’estensione che lavora direttamente nel browser.

Non richiede la creazione di un account dedicato.

Il funzionamento dipende dalla disponibilità dei file VTT sulla piattaforma utilizzata.

L’estensione non genera trascrizioni: permette di recuperare quelle già disponibili e caricate dal browser.

Non tutti i video dispongono di sottotitoli o trascrizioni compatibili.

L’estensione non sostituisce i materiali didattici ufficiali e non garantisce la correttezza delle trascrizioni, specialmente quando queste sono state generate automaticamente.

Le trascrizioni devono essere utilizzate nel rispetto delle condizioni d’uso della piattaforma e dei diritti sui materiali didattici.

⸻

🎓 Perché è stata creata?

UNI VTT Downloader nasce da un’esigenza concreta: semplificare la raccolta delle trascrizioni delle videolezioni universitarie.

Disporre del testo delle lezioni permette di consultare più facilmente gli argomenti trattati, ritrovare passaggi importanti e preparare materiale di studio personale.

Il progetto è stato sviluppato inizialmente per gli studenti del corso di laurea in Comunicazione Digitale dell’Università di Ferrara.

Non è un’estensione ufficiale dell’Università di Ferrara e non è affiliata o approvata dall’Ateneo.

⸻

📄 Licenza

Consulta il file LICENSE del repository per conoscere le condizioni di utilizzo, modifica e distribuzione del software.

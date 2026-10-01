# ESCP MiM Planner — guida all'installazione

Questa cartella contiene l'app completa: nessun pezzo mancante, nessuna dipendenza da
account Claude. I dati (checkbox fatto/non fatto, date che inserisci) restano **sul tuo
dispositivo**, nel browser, e funzionano anche offline.

Per usarla come vera app sul Mac (Dock, finestra propria, offline, avvio automatico) va
prima messa online a un indirizzo web — anche gratuito — perché sia Safari sia iOS
richiedono che una PWA sia servita in https prima di poterla "installare". Il modo più
semplice e gratuito è **GitHub Pages**. Sotto trovi tutti i passaggi.

---

## 1. Pubblicare l'app su GitHub Pages (una tantum, ~10 minuti)

1. Vai su [github.com](https://github.com) e crea un account gratuito, se non ce l'hai già
   (Sign up — basta un'email).
2. Una volta dentro, clicca il **+** in alto a destra → **New repository**.
   - Nome: `escp-mim-planner` (o quello che preferisci)
   - Visibilità: **Public** (necessario per GitHub Pages gratuito)
   - Non spuntare nessuna casella aggiuntiva (README, .gitignore, licenza) — lascia tutto vuoto
   - Clicca **Create repository**
3. Nella pagina del repository appena creato, clicca **uploading an existing file**
   (o "Add file" → "Upload files" in alto).
4. Trascina dentro **tutti i file e le cartelle** che trovi in questa cartella
   (`index.html`, `styles.css`, `app.js`, `manifest.json`, `sw.js`, la cartella `icons/`,
   la cartella `fonts/`) — GitHub mantiene automaticamente le sottocartelle.
5. In basso, scrivi un messaggio tipo "Prima versione del planner" e clicca
   **Commit changes**.
6. Vai su **Settings** (in alto nel repository) → **Pages** (nel menu a sinistra).
7. Sotto "Build and deployment" → "Branch", seleziona **main** e la cartella **/ (root)**,
   poi clicca **Save**.
8. Aspetta un minuto, poi ricarica la pagina: in alto comparirà un riquadro verde con il
   link, tipo `https://<tuo-username>.github.io/escp-mim-planner/`. Quello è il tuo link
   definitivo — aprilo per controllare che l'app carichi.

Da qui in avanti, ogni volta che vorrai aggiornare il contenuto (nuovi corsi, correzioni),
basterà ricaricare i file modificati nello stesso repository ("Add file" → "Upload files"
sovrascrive i file con lo stesso nome).

---

## 2. Installarla come app sul Mac

1. Apri il link GitHub Pages in **Safari** (Chrome su macOS non ha ancora questa funzione
   nativa allo stesso modo).
2. Dal menu in alto: **File → Aggiungi al Dock…** (richiede macOS Sonoma 14.4 o successivo;
   se non vedi la voce, controlla di avere Safari e macOS aggiornati).
3. Conferma: l'app comparirà con la sua icona nel **Dock** e come applicazione vera e
   propria, apribile anche da Launchpad/Spotlight, in una finestra tutta sua senza le
   barre di Safari.

## 3. Avvio automatico all'accensione del Mac

1. Apri **Impostazioni di Sistema → Generali → Elementi login**.
2. Clicca il **+** sotto "Apri automaticamente all'accensione" e seleziona l'app
   "ESCP MiM Planner" (la trovi cercandola o nella cartella Applicazioni/sul Dock).
3. Da ora si aprirà da sola a ogni accensione del Mac.

## 4. iPhone / iPad

1. Apri lo stesso link in **Safari** su iPhone/iPad.
2. Tocca l'icona **Condividi** (il quadrato con la freccia) → **Aggiungi a Home**.
3. Comparirà come app a sé, con la sua icona, nella schermata Home.

Nota: su iPhone/iPad l'app funziona bene, ma i dati che segni lì (checkbox, date) **non
si sincronizzano automaticamente** con quelli sul Mac — sono salvati localmente su ogni
dispositivo. Usa "Esporta dati" sul Mac e "Importa dati" sul telefono (o viceversa) se vuoi
portarti dietro i progressi: trovi entrambi i pulsanti in basso a sinistra nell'app.

---

## Cosa è cambiato rispetto alla versione precedente

- **Stesso identico contenuto**: tutti i 7 corsi, tutte le sessioni, tutte le scadenze,
  tutte le note — nulla è stato tolto, rinominato o inventato.
- **Persistenza locale**: prima i dati passavano dall'account Claude (serviva essere
  online e loggati); ora vivono nel browser del tuo dispositivo tramite `localStorage`,
  quindi l'app funziona anche offline e non dipende più da Claude per restare aperta o
  salvare quello che spunti.
- **Nuovo design**: sidebar di navigazione, tile riassuntive (scadenze imminenti, in
  ritardo, completate), palette blu elettrico/lilla, font Inter, modalità scura automatica
  (più un interruttore manuale in basso a sinistra).
- **Esporta/Importa dati**: un backup manuale in JSON, utile anche solo per sicurezza.

## Per aggiungere nuovi corsi in futuro

Mandami pure il materiale dei prossimi corsi come hai sempre fatto: aggiornerò i file
(`app.js` principalmente) e ti ridarò la cartella aggiornata da ricaricare su GitHub — il
passaggio 1 sopra (upload file) basta rifarlo solo per i file cambiati.

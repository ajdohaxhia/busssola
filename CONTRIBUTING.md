# Contribuire a Busssola 🧭

Grazie per il tuo interesse nel contribuire a Busssola! Il progetto è aperto a chiunque voglia aiutare a rendere la burocrazia e i diritti in Italia più comprensibili.

## Cosa puoi fare
- **Aggiungere una nuova guida**: se conosci bene una procedura (es. Bonus Nido, richiesta Passaporto, ecc.).
- **Aggiungere un Life Hack (Tip)**: consigli pratici, scorciatoie legali o errori comuni da evitare.
- **Creare un Kit/Checklist**: liste di controllo per situazioni specifiche.
- **Aggiornare fonti o link**: le procedure cambiano, aiutaci a tenere il sito aggiornato.
- **Migliorare i testi**: correggere bozze, semplificare il linguaggio o migliorare il tono.
- **Segnalare bug**: problemi tecnici, di accessibilità o di visualizzazione su mobile.

## Linee Guida Editoriali

### 1. Tono di voce
- **Umano e chiaro**: evita il gergo burocratico inutilmente complesso.
- **Istituzionale ma non freddo**: sii professionale e serio, ma rassicurante.
- **Assenza di Hype**: non usare termini come "rivoluzionario", "magico", "unico". Siamo una guida pratica, non un prodotto marketing.
- **Inclusivo**: scrivi per tutti, indipendentemente dal livello di istruzione o competenza tecnica.

### 2. Struttura dei Contenuti
- **Guide**: schema completo con titoli, passi, link ufficiali e fonti. Mappato sui file `.ts` in `src/data/modules/`.
- **Life Hacks**: micro-consigli con beneficio chiaro, passi rapidi e fonti. Mappato in `src/data/life-hacks.ts`.
- **Checklist**: liste puntate di documenti o azioni (kit).

### 3. Fonti e Veridicità
Non accettiamo contenuti basati su "sentito dire" o memoria. Ogni contributo deve:
- Citare almeno una fonte ufficiale (sito del Governo, INPS, Polizia Postale, Gazzetta Ufficiale, ecc.).
- Usare il registry centrale delle fonti in `src/data/officialSources.ts` quando possibile.
- Indicare la data dell'ultima verifica.

### 4. SEO e Trovabilità (Novità v2)
Vogliamo che le guide siano trovate da chi ne ha bisogno su Google. Segui queste regole:
- **Titoli**: devono rispondere a una domanda o un bisogno (es. "Come fare domanda NASpI" invece di "Indennità NASpI").
- **Slug (URL)**: brevi, in minuscolo, parole separate da trattini (es. `cambio-residenza-online`).
- **Sommario (Description)**: una o due frasi concrete che spiegano cosa imparerà l'utente. Evita testi generici.
- **FAQ**: aggiungi 3-5 domande frequenti reali per ogni guida importante per intercettare le ricerche "long-tail".
- **Link Interni**: collega la tua guida ad altre lezioni correlate o a termini del glossario.

## Workflow Tecnico

### Come aggiungere o modificare un contenuto
1. **Guide/Moduli**: naviga in `src/data/modules/`. Crea un nuovo file o modificane uno esistente.
2. **Life Hacks**: aggiungi un oggetto all'array `LIFE_HACKS` in `src/data/life-hacks.ts`.
3. **Glossario**: aggiungi termini in `src/app/glossario/page.tsx`.
4. **Fonti**: aggiungi entità in `src/data/officialSources.ts`.
5. **Validazione**: esegui `npm run validate:content` per verificare che la struttura sia corretta (inclusi controlli SEO).
6. **Statistiche**: esegui `npm run update-stats` per aggiornare i metadati del sito.
7. **PR**: apri una Pull Request su GitHub spiegando le modifiche.

## Requisiti Tecnici
- Usa TypeScript in modo rigoroso.
- Non aggiungere librerie esterne senza motivo.
- Mantieni il CSS pulito usando le utility di Tailwind v4.
- Testa sempre la visualizzazione su schermi piccoli (mobile-first).

---
Grazie per il tuo supporto! Insieme possiamo rendere i diritti più accessibili a tutti.

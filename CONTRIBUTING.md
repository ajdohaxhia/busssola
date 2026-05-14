# Contribuire a Busssola 🧭

Grazie per il tuo interesse nel contribuire a Busssola! Il progetto è aperto a chiunque voglia aiutare a rendere la burocrazia e i diritti in Italia più comprensibili.

## Cosa puoi fare
- **Aggiungere una nuova guida**: se conosci bene una procedura (es. Bonus Nido, richiesta Passaporto, ecc.).
- **Aggiornare fonti o link**: le procedure cambiano, aiutaci a tenere il sito aggiornato.
- **Migliorare i testi**: correggere bozze, semplificare il linguaggio o migliorare il tono.
- **Segnalare bug**: problemi tecnici, di accessibilità o di visualizzazione su mobile.

## Linee Guida Editoriali

### 1. Tono di voce
- **Umano e chiaro**: evita il gergo burocratico inutilmente complesso.
- **Istituzionale ma non freddo**: sii professionale e serio, ma rassicurante.
- **Assenza di Hype**: non usare termini come "rivoluzionario", "magico", "unico". Siamo una guida pratica, non un prodotto marketing.
- **Inclusivo**: scrivi per tutti, indipendentemente dal livello di istruzione o competenza tecnica.

### 2. Struttura delle Guide
Ogni guida deve seguire questo schema (mappato sui campi del file `.ts` del modulo):
- **Titolo**: chiaro e orientato all'azione (es. "Come richiedere lo SPID").
- **A chi serve**: indica chiaramente il target (cittadini, famiglie, ecc.).
- **Quando farla**: descrivi la situazione in cui serve questa procedura.
- **Cosa serve**: lista dei documenti e requisiti necessari.
- **Dove si fa**: ente di riferimento (Comune, INPS, online, ecc.).
- **Passaggi**: sequenza numerata di azioni concrete.
- **Link Ufficiali**: cita sempre le fonti istituzionali.

### 3. Fonti e Veridicità
Non accettiamo guide basate su "sentito dire" o memoria. Ogni contenuto deve:
- Citare almeno una fonte ufficiale (sito del Governo, INPS, Gazzetta Ufficiale, ecc.).
- Indicare la data dell'ultima verifica.

## Workflow Tecnico

### Come aggiungere o modificare un modulo
1. Naviga in `src/data/modules/`.
2. Crea un nuovo file `.ts` o modificane uno esistente seguendo il formato attuale.
3. Se crei un nuovo file, importalo e aggiungilo all'array `ALL_MODULES` in `src/data/modules/index.ts`.
4. Esegui `npm run validate:content` per verificare che la struttura sia corretta.
5. Esegui `npm run update-stats` per aggiornare i metadati del sito.
6. Apri una Pull Request su GitHub spiegando le modifiche.

## Requisiti Tecnici
- Usa TypeScript in modo rigoroso.
- Non aggiungere librerie esterne senza motivo.
- Mantieni il CSS pulito usando le utility di Tailwind v4.
- Testa sempre la visualizzazione su schermi piccoli (mobile-first).

---
Grazie per il tuo supporto! Insieme possiamo rendere i diritti più accessibili a tutti.

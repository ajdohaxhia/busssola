# 🧭 Bussola

> 🧭 **Core v1 — Contenuti Verificati e Stabili**
>
> Bussola ha raggiunto lo stato **Core v1**. Tutte le lezioni pubblicate hanno superato il **Quality Gate**, integrano fonti istituzionali verificate e offrono protocolli operativi reali. Il sito è pronto per l'uso pubblico e scolastico.

**La piattaforma pratica per l'orientamento nei rischi digitali in Italia.**

Bussola è un sito educativo progettato per aiutare persone comuni, studenti, genitori ed educatori a gestire le emergenze digitali e costruire una presenza online sicura. Nata per trasformare la paura in competenza, Bussola offre risposte pratiche, checklist di protezione e protocolli di emergenza basati su fonti autorevoli.

[Visita il sito live: bussola.edu.it](https://bussola.edu.it)

---

## 🏛️ Visione Editoriale & Design
Abbiamo adottato un'estetica **Calm UI** e un tono di voce **pragmatico ed empatico**.
*   **Affidabilità**: Ogni lezione ha fonti reali linkate (Polizia Postale, Garante Privacy, Apple, Google, Meta).
*   **Praticità**: Zero tecnicismi inutili. Solo quello che devi sapere per agire subito.
*   **Sicurezza Emotiva**: Un ambiente pensato per supportare le vittime di abusi digitali senza colpevolizzazioni.

---

## 📚 Libreria Contenuti (Core v1)
Bussola dispone di una libreria strutturata di **16 moduli** con **52 lezioni verificate** che coprono:
1.  **Primo Soccorso**: Sextortion, furto account (WA, IG, FB, TikTok), smartphone rubato.
2.  **Account Security**: Password, 2FA, checkup privacy, eredità digitale.
3.  **Truffe & Phishing**: Smishing corrieri, truffe Vinted/Marketplace, phishing bancario.
4.  **Relazioni & Rischi**: Grooming, sexting sicuro, cyberstalking, doxxing, revenge porn.
5.  **Scuola & Famiglia**: Cyberbullismo, protocolli per docenti, patto digitale di famiglia.

### Quality Gate
Ogni lezione pubblicata deve includere:
- **Scenario**: Contesto reale del rischio.
- **Do Now**: Cosa fare immediatamente per limitare i danni.
- **Don't Do**: Errori comuni da evitare (es. non pagare riscatti).
- **Preserve Evidence**: Come salvare prove con valore legale.
- **Checklist**: Lista di controllo operativa.
- **Fonti Verificate**: Collegamenti a portali istituzionali o piattaforme ufficiali.

---

## 🛠️ Tech Stack & Architettura
*   **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
*   **UI Engine**: [React 19](https://react.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Static Export**: Ottimizzato per Cloudflare Pages (Static HTML).
*   **Privacy**: Nessun tracciamento, nessun database. Progressi salvati in LocalStorage.

---

## 🚀 Guida Rapida
```bash
# Installazione
npm install

# Sviluppo
npm run dev

# Validazione Contenuti (Controlla il Quality Gate di ogni lezione)
npm run validate:content

# Aggiornamento Statistiche (Sincronizza contatori sito e meta)
npm run update-stats

# Build per Produzione
npm run build
```

---

## 🆘 Centro SOS
Bussola include un **Centro SOS** situazionale per offrire aiuto immediato:
*   **Selector Situazionale**: Guida l'utente verso il protocollo giusto in base all'urgenza.
*   **Numeri Utili**: 112 (Emergenza), 114 (Emergenza Infanzia), 1522 (Violenza/Stalking).
*   **Protocolli di Difesa**: Step-by-step per ripristino account e segnalazioni legali.

---

## 📄 Licenza
© 2026 Bussola - Progetto Informativo Indipendente.
Rilasciato sotto licenza MIT.

*Ultimo aggiornamento: 13 Maggio 2026*
*Status: Core v1 — Production Ready* 🧭

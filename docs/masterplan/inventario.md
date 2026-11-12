# Inventario contenuti — Fase 1 del masterplan

Generato il 12 novembre 2026 da `src/data/modules/index.ts` e `src/data/sos-cases.ts`.
Stato: **proposta da validare**. Nessun contenuto è stato modificato o rimosso.

## Come leggere questo inventario

- **Mantieni**: pertinente alla missione (sicurezza digitale, prevenzione, aiuto).
- **Adatta**: contiene un tema utile da estrarre o riformulare (es. SPID, truffe).
- **Archivia**: utile ma fuori missione; fuori dal percorso principale, senza cancellare.
- **Ritira**: superato o non mantenibile. **Nessun contenuto è proposto per il ritiro**: questa scelta richiede la lettura del testo, non solo i metadati.
- **Rischio alto**: moduli sensibili (primo soccorso, sextortion, adescamento, stalking) o lezioni con livello di emergenza alto/SOS. Richiedono revisione specialistica prima di qualsiasi modifica.

Le decisioni sono basate su titolo, categoria e metadati. Il testo di ogni lezione non è stato riletto in questa fase.

## Numeri

- Moduli: **51**
- Lezioni: **320**
  - Mantieni: 81
  - Adatta: 79
  - Archivia: 160
  - Ritira: 0
- Moduli per esito: Mantieni 20, Adatta 6, Archivia 25
- Lezioni ad alto rischio: **30**
- Lezioni con revisione datata 2024: **6**
- Lezioni senza fonti: **0**
- Lezioni con fonti senza data di controllo: **0**
- Lezioni con tema di sicurezza dentro moduli archiviati (da estrarre): **36**

> Il conteggio "tema di sicurezza" usa una ricerca per parole chiave sul titolo e sul riassunto: può includere falsi positivi (es. "dati" in un contesto non di sicurezza). Ogni caso va verificato a mano.
>
> Nota: in precedenza era stato indicato un numero diverso di lezioni (261). Il conteggio corretto è quello qui sopra, ottenuto dai dati esportati.

## Casi SOS (17)

| ID | Titolo | Tipo | Area | Esito | Fonti | Modulo collegato | Revisione richiesta |
|---|---|---|---|---|---|---|---|
| pericolo-fisico | Pericolo fisico immediato | physical | Pericolo fisico | Mantieni | 1 | /moduli/modulo-01-primo-soccorso | Specialistica (violenza/minori) |
| violenza-domestica | Violenza domestica | physical | Violenza digitale/relazioni | Mantieni | 2 | /moduli/modulo-06-stalking-doxxing | Specialistica (violenza/minori) |
| minore-scomparso | Minore scomparso o in fuga | physical | Bambini online | Mantieni | 2 | /moduli/modulo-05-grooming-minori | Specialistica (violenza/minori) |
| grooming-minori | Grooming o adescamento di un minore | mixed | Bambini online | Mantieni | 3 | /moduli/modulo-05-grooming-minori | Specialistica (violenza/minori) |
| stalking | Stalking (online e di persona) | mixed | Violenza digitale/relazioni | Mantieni | 3 | /moduli/modulo-06-stalking-doxxing | Specialistica (violenza/minori) |
| cyberstalking | Cyberstalking e minacce ripetute | digital | Violenza digitale/relazioni | Mantieni | 3 | /moduli/modulo-06b-stalking-doxxing | Revisione editoriale + fonti |
| doxxing | Doxxing (dati personali diffusi) | digital | Violenza digitale/relazioni | Mantieni | 3 | /moduli/modulo-06b-stalking-doxxing | Revisione editoriale + fonti |
| sextortion-adulti | Sextortion e ricatto con immagini | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-04-sextortion-ricatti | Revisione editoriale + fonti |
| revenge-porn | Revenge porn / immagini intime non consensuali | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-04b-sextortion-ricatti | Revisione editoriale + fonti |
| instagram-rubato | Account Instagram / Facebook rubato | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-02-account-security | Revisione editoriale + fonti |
| whatsapp-rubato | WhatsApp o email presi | digital | Truffe/identità/account | Mantieni | 2 | /moduli/modulo-02b-account-security | Revisione editoriale + fonti |
| identita-digitale | Furto d’identità / abuso SPID o CIE | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-09-documenti-identita | Revisione editoriale + fonti |
| sim-swap | SIM swapping | digital | Truffe/identità/account | Mantieni | 2 | /moduli/modulo-15-sicurezza-avanzata | Revisione editoriale + fonti |
| otp-condiviso | Phishing bancario / OTP appena dato | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-03-truffe-phishing | Revisione editoriale + fonti |
| banca-compromessa | Conto o carta compromessa | digital | Truffe/identità/account | Mantieni | 2 | /moduli/modulo-14-soldi-banche-truffe | Revisione editoriale + fonti |
| truffa-appena-successa | Truffa online appena successa | digital | Truffe/identità/account | Mantieni | 3 | /moduli/modulo-03b-truffe-phishing | Revisione editoriale + fonti |
| molestie-lavoro | Molestie o persecuzione sul lavoro | mixed | Violenza digitale/relazioni | Mantieni | 3 | /moduli/modulo-12-lavoro-diritti | Specialistica (violenza/minori) |

Le schede SOS riportano una data di controllo fissa (`CHECKED = 2026-08-14`) definita nel codice: va sostituita con verifiche reali per scheda.

## Moduli

| ID modulo | Titolo | Categoria | Lezioni | Esito | Motivazione | Lezioni ad alto rischio |
|---|---|---|---|---|---|---|
| modulo-01-primo-soccorso | Primo Soccorso Digitale | emergenze | 2 | **Mantieni** | Primo soccorso digitale: cuore della missione | 2 |
| modulo-01b-primo-soccorso | Modulo 1b: Primo Soccorso (Casi Specifici) | emergenze | 3 | **Mantieni** | Casi specifici di primo soccorso digitale | 3 |
| modulo-02-account-security | Sicurezza Account e Password | sicurezza | 3 | **Mantieni** | Account, password, autenticazione | 0 |
| modulo-02b-account-security | Modulo 2b: Checkup Privacy & Sicurezza | sicurezza | 3 | **Mantieni** | Checkup privacy e sicurezza account | 0 |
| modulo-03-truffe-phishing | Truffe e Phishing | truffe | 4 | **Mantieni** | Phishing e truffe online | 0 |
| modulo-03b-truffe-phishing | Modulo 3b: Casi Specifici di Truffa | truffe | 3 | **Mantieni** | Casi specifici di truffa | 1 |
| modulo-04-sextortion-ricatti | Modulo 4: Sextortion e Ricatti Sessuali | emergenze | 4 | **Mantieni** | Sextortion: area Violenza digitale/ricatti (revisione urgente) | 4 |
| modulo-04b-sextortion-ricatti | Modulo 4b: Sextortion (Protocolli Avanzati) | emergenze | 2 | **Mantieni** | Sextortion: protocolli avanzati | 2 |
| modulo-05-grooming-minori | Modulo 5: Grooming e Protezione Minori | famiglia | 2 | **Mantieni** | Adescamento minori: area Bambini online (revisione urgente) | 2 |
| modulo-05b-grooming-minori | Modulo 5b: Grooming (Educazione e Gaming) | famiglia | 2 | **Mantieni** | Adescamento: educazione e gaming | 2 |
| modulo-06-stalking-doxxing | Modulo 6: Cyberstalking e Doxxing | privacy | 3 | **Mantieni** | Stalking e doxxing: violenza digitale | 3 |
| modulo-06b-stalking-doxxing | Modulo 6b: Cyberstalking (Tutele legali e Spyware) | privacy | 3 | **Mantieni** | Stalking: tutele e spyware | 3 |
| modulo-07-privacy-smartphone | Modulo 7: Privacy e Smartphone | privacy | 2 | **Mantieni** | Privacy dello smartphone | 0 |
| modulo-07b-privacy-smartphone | Modulo 7b: Privacy Smartphone (Avanzata) | privacy | 3 | **Mantieni** | Privacy smartphone avanzata | 2 |
| modulo-08-scuola-famiglia | Scuola e Famiglia Digitale | famiglia | 13 | **Mantieni** | Scuola e famiglia digitale: base per percorsi scuola | 0 |
| modulo-08b-scuola-famiglia | Modulo 8b: Scuola e Famiglia (Approfondimento) | famiglia | 2 | **Mantieni** | Scuola e famiglia: approfondimento | 0 |
| modulo-09-documenti-identita | Documenti e Identità | documenti | 6 | **Adatta** | Identità: adattare a SPID/CIE come protezione dell'identità | 0 |
| modulo-10-lavoro-disoccupazione | Lavoro e Disoccupazione | lavoro | 15 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-11-documenti-identita-avanzata | Documenti e Identità Avanzata | documenti | 14 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-12-lavoro-diritti | Lavoro e Diritti | lavoro | 8 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-13-casa-residenza | Casa e Residenza | casa | 14 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-14-soldi-banche-truffe | Soldi, Banche e Truffe | soldi | 9 | **Adatta** | Soldi e truffe: estrarre la parte antitruffa | 0 |
| modulo-15-sicurezza-avanzata | Sicurezza Digitale Avanzata | sicurezza | 19 | **Mantieni** | Sicurezza digitale avanzata (SIM swap, OTP) | 4 |
| modulo-16-famiglia-minori | Famiglia e Minori | famiglia | 6 | **Mantieni** | Famiglia e minori online | 0 |
| modulo-17-immigrazione | Modulo 17: Immigrazione e Soggiorno | immigrazione | 11 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-18-consumatori | Modulo 18: Diritti dei Consumatori | consumatori | 14 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-19-mobilita | Modulo 19: Mobilità e Veicoli | mobilita | 12 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-20-sanita-territoriale | Modulo 20: Sanità Territoriale | sanita | 13 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-21-anziani-caregiver | Modulo 21: Anziani e Caregiver | anziani | 11 | **Adatta** | Anziani: falsi operatori e truffe affettive (percorso anziani) | 0 |
| modulo-22-universita-giovani | Modulo 22: Università e Giovani | universita | 9 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-23-bonus-isee | Bonus, ISEE e Agevolazioni | bonus | 13 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-24-casa-digitale | Casa Digitale e Smart Home | casa-digitale | 4 | **Adatta** | Smart home: sicurezza dispositivi domestici | 0 |
| modulo-25-fisco-cittadini | Fisco e Cittadini | soldi | 10 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-26-poste-pagamenti | Poste, Pagamenti e Certificati | documenti | 10 | **Adatta** | Pagamenti: estrarre la parte su truffe di pagamento | 0 |
| modulo-27-pensioni-previdenza | Pensioni e previdenza | lavoro | 8 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-28-cartelle-riscossione | Cartelle e riscossione | soldi | 8 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-29-partita-iva-forfettario | Partita IVA e forfettario | soldi | 7 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-30-catasto-imu-successioni | Catasto, IMU e successioni | casa | 5 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-31-disabilita-legge-104 | Disabilità e legge 104 | disabilita | 6 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-32-famiglia-avanzata | Famiglia: congedi, DAT e separazione | famiglia | 6 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-33-concorsi-pa | Concorsi e pubblica amministrazione | lavoro | 4 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-34-aire-esteri | AIRE e italiani all’estero | documenti | 4 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-35-giustizia-cittadino | Giustizia del cittadino | giustizia | 4 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-36-animali-affezione | Animali d’affezione | famiglia | 4 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-37-impresa-camerale | Impresa individuale e visura camerale | soldi | 4 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| modulo-99-kit-checklist | Kit e Checklist Operative | documenti | 3 | **Adatta** | Checklist: da riscrivere come checklist di sicurezza | 1 |
| cambio-residenza | Cambio di Residenza | casa | 1 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| cie-richiesta | Carta d'Identità Elettronica (CIE) | documenti | 1 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| telefono-rubato | Emergenza: Telefono Rubato o Smarrito | emergenze | 1 | **Mantieni** | Telefono rubato o smarrito (SOS) | 1 |
| busta-paga | Capire la Busta Paga | soldi | 1 | **Archivia** | Fuori missione (procedura burocratica/fiscale); da conservare, non nel percorso principale | 0 |
| phishing-bancario | Difesa dal Phishing Bancario | truffe | 1 | **Mantieni** | Phishing bancario (duplica in parte modulo 03: valutare accorpamento) | 0 |

## Lezioni

| Modulo | ID lezione | Titolo | Categoria | Emergenza | Rischio | Revisione | Esito | Segnalazioni |
|---|---|---|---|---|---|---|---|---|
| modulo-01-primo-soccorso | account-hacked-10min | Account rubato: primi 10 minuti | emergenze | — | alto | 2026-05-14 | Mantieni | — |
| modulo-01-primo-soccorso | otp-shared-sos | Ho dato codici OTP a qualcuno | emergenze | — | alto | 2026-05-14 | Mantieni | — |
| modulo-01b-primo-soccorso | doxxing-sos | Doxxing: Rimuovere indirizzo e telefono online | emergenze | high | alto | 2026-11-08 | Mantieni | — |
| modulo-01b-primo-soccorso | sim-swap-sos | SIM Swapping: Se il telefono "muore" all'improvviso | emergenze | high | alto | 2026-11-08 | Mantieni | — |
| modulo-01b-primo-soccorso | email-hacked-sos | Email compromessa: Primi 30 minuti | emergenze | high | alto | 2026-11-08 | Mantieni | — |
| modulo-02-account-security | password-strategy | Come creare password sicure | sicurezza | — | basso | 2026-05-14 | Mantieni | — |
| modulo-02-account-security | 2fa-activation | Come attivare la 2FA | sicurezza | — | basso | 2026-05-14 | Mantieni | — |
| modulo-02-account-security | passkey-guide | Come usare le Passkey | sicurezza | — | basso | 2026-05-14 | Mantieni | — |
| modulo-02b-account-security | google-privacy-audit | Checkup Google: Pulizia totale dei dati | sicurezza | low | medio | 2026-11-08 | Mantieni | — |
| modulo-02b-account-security | data-breach-response | Data Breach: Se i tuoi dati sono stati rubati | sicurezza | medium | medio | 2026-11-08 | Mantieni | — |
| modulo-02b-account-security | digital-inheritance-setup | Eredità Digitale: Prepara il tuo lascito | sicurezza | low | medio | 2026-11-08 | Mantieni | — |
| modulo-03-truffe-phishing | phishing-basics | Come riconoscere il Phishing | truffe | — | basso | 2026-05-14 | Mantieni | — |
| modulo-03-truffe-phishing | phishing-pagopa | Come capire se un avviso pagoPA è vero | truffe | — | basso | 2026-05-14 | Mantieni | — |
| modulo-03-truffe-phishing | falsi-rilevatori-truffe-ia | Perché non fidarsi di finti "Rilevatori di truffe IA" | truffe | — | basso | 2026-10-21 | Mantieni | — |
| modulo-03-truffe-phishing | quishing-qr-code-truffe | Quishing: riconoscere finti QR code su parcometri e multe | truffe | — | basso | 2026-10-26 | Mantieni | — |
| modulo-03b-truffe-phishing | vinted-wallet-scam | Vinted: La truffa del "Finto Supporto" | truffe | high | alto | 2026-11-08 | Mantieni | — |
| modulo-03b-truffe-phishing | smishing-fake-courier | Finto Corriere: SMS e pacchi in giacenza | truffe | medium | medio | 2026-11-08 | Mantieni | — |
| modulo-03b-truffe-phishing | marketplace-buyer-protection | Truffa Marketplace: Lato Acquirente | truffe | medium | medio | 2026-11-08 | Mantieni | — |
| modulo-04-sextortion-ricatti | sextortion-what-is | Sextortion: Riconoscere il ricatto | emergenze | high | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-04-sextortion-ricatti | revenge-porn-legal | Revenge Porn: I tuoi diritti legali | emergenze | high | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-04-sextortion-ricatti | stopncii-technical | StopNCII: Bloccare la diffusione tecnica | emergenze | high | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-04-sextortion-ricatti | paying-blackmail-risks | Perché pagare un ricatto quasi sempre peggiora la situazione | emergenze | high | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-04b-sextortion-ricatti | catfishing-indicators | Catfishing: Riconoscere le "Esche" | emergenze | low | alto | 2026-11-08 | Mantieni | — |
| modulo-04b-sextortion-ricatti | preserving-digital-evidence | Come salvare prove con valore legale | emergenze | medium | alto | 2026-11-08 | Mantieni | — |
| modulo-05-grooming-minori | grooming-phases | Le fasi dell'adescamento online | famiglia | high | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-05-grooming-minori | gaming-grooming-safety | Pericolo Gaming: Più che un gioco | famiglia | medium | alto | 2024-05-13 | Mantieni | revisione 2024: obsoleta |
| modulo-05b-grooming-minori | grooming-indicators-kids | La regola del "Segreto Brutto" | famiglia | low | alto | 2026-11-08 | Mantieni | — |
| modulo-05b-grooming-minori | child-fear-silent-crisis | Se il minore ha paura e tace | famiglia | high | alto | 2026-11-08 | Mantieni | — |
| modulo-06-stalking-doxxing | cyberstalking-logic | Cyberstalking: L'assedio digitale | privacy | high | alto | 2026-05-14 | Mantieni | — |
| modulo-06-stalking-doxxing | stalking-safety-plan | Piano di sicurezza digitale personale | privacy | high | alto | 2026-05-14 | Mantieni | — |
| modulo-06-stalking-doxxing | ex-partner-shared-accounts | Ex partner e account condivisi | privacy | medium | alto | 2026-05-14 | Mantieni | — |
| modulo-06b-stalking-doxxing | cyberstalking-legal-steps | L'ammonimento del Questore | privacy | medium | alto | 2026-11-08 | Mantieni | — |
| modulo-06b-stalking-doxxing | unwanted-tracker-detection | AirTag e tracker sconosciuti | privacy | high | alto | 2026-11-08 | Mantieni | — |
| modulo-06b-stalking-doxxing | spyware-check-guide | Come capire se hai uno Spyware | privacy | high | alto | 2026-11-08 | Mantieni | — |
| modulo-07-privacy-smartphone | app-permissions-audit | Permessi App: Chi sta spiando? | privacy | low | medio | 2026-05-14 | Mantieni | — |
| modulo-07-privacy-smartphone | public-private-choice | Profilo pubblico o privato: Cosa cambia | privacy | low | medio | 2026-05-14 | Mantieni | — |
| modulo-07b-privacy-smartphone | app-permission-audit | Audit dei Permessi: Chi ti spia? | privacy | low | medio | 2026-11-08 | Mantieni | — |
| modulo-07b-privacy-smartphone | iphone-lost-protocol | iPhone rubato: Protocollo emergenza | privacy | high | alto | 2026-11-08 | Mantieni | — |
| modulo-07b-privacy-smartphone | android-lost-protocol | Android perso: Blocco e localizzazione | privacy | high | alto | 2026-11-08 | Mantieni | — |
| modulo-08-scuola-famiglia | digital-pact-family | Come creare un patto digitale di famiglia | famiglia | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | parental-control-setup | Come impostare il Parental Control | famiglia | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | iscrizione-scuola-online | Iscrizione scuola online | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | pagopa-scuola | PagoPA scuola | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | libri-cedole-scuola | Libri e cedole | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | mensa-trasporto-scolastico | Mensa e trasporto scolastico | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | cyberbullismo-cosa-fare | Cyberbullismo: cosa fare | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | sexting-minori-orientamento | Sexting tra minori | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | grooming-scuola | Grooming | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | privacy-foto-minori | Privacy foto minori | privacy | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | segnalazione-contenuti-online | Segnalazione contenuti online | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | bullismo-protocollo-scuola | Bullismo: protocollo scuola | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08-scuola-famiglia | dsa-bes-orientamento | DSA/BES orientamento base | scuola | — | basso | 2026-05-16 | Mantieni | — |
| modulo-08b-scuola-famiglia | sharenting-risks | Sharenting: I rischi dell'orgoglio | famiglia | low | medio | 2026-11-08 | Mantieni | — |
| modulo-08b-scuola-famiglia | family-digital-agreement | Patto digitale di famiglia | famiglia | low | medio | 2026-11-08 | Mantieni | — |
| modulo-09-documenti-identita | spid-request | Come richiedere lo SPID | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-09-documenti-identita | spid-recovery | Come recuperare lo SPID | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-09-documenti-identita | anpr-residenza | Come fare il cambio di residenza online | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-09-documenti-identita | cie-puk-recovery | Come recuperare PIN/PUK della CIE | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-09-documenti-identita | pagopa-payment | Come pagare un avviso pagoPA | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-09-documenti-identita | it-wallet-documenti-digitali | Come usare IT-Wallet su App IO | documenti | — | basso | 2026-08-27 | Adatta | — |
| modulo-10-lavoro-disoccupazione | naspi-domanda | Come fare domanda NASpI | lavoro | — | basso | 2026-08-14 | Archivia | — |
| modulo-10-lavoro-disoccupazione | naspi-stato-controllo | Come controllare lo stato della NASpI | lavoro | — | basso | 2026-05-14 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-10-lavoro-disoccupazione | naspi-com-variazioni | Come comunicare variazioni NASpI (NASpI-COM) | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-10-lavoro-disoccupazione | dimissioni-telematiche-guida | Come fare le dimissioni telematiche | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-10-lavoro-disoccupazione | cpi-iscrizione-guida | Come iscriversi al Centro per l’Impiego | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-10-lavoro-disoccupazione | did-procedura-online | Come fare DID (Dichiarazione Immediata Disponibilità) | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-10-lavoro-disoccupazione | patto-servizio-personalizzato | Patto di servizio | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | busta-paga-lettura | Busta paga: come leggerla | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | tfr-orientamento | TFR: orientamento base | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | contratti-lavoro-tipologie | Contratto determinato/indeterminato | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | malattia-certificato-telematico | Malattia e certificato telematico | lavoro | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-10-lavoro-disoccupazione | maternita-paternita-base | Maternità/paternità base | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | lavoro-nero-tutele | Lavoro nero: orientamento e tutele | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | ccnl-contratto-ricerca | Come trovare CCNL nel contratto | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-10-lavoro-disoccupazione | dis-coll-domanda | Come fare domanda DIS-COLL | lavoro | — | basso | 2026-08-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | passaporto-richiesta | Passaporto: richiesta e rinnovo | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | cambio-residenza-online | Cambio residenza online (ANPR) | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | certificati-anagrafici-online | Certificati anagrafici online | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | codice-fiscale-richiesta | Codice fiscale: richiesta e duplicato | documenti | — | basso | 2026-05-14 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | tessera-sanitaria-europea | Tessera sanitaria europea (TEAM) | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | cie-pin-puk-smarriti | CIE: PIN/PUK smarriti | documenti | — | basso | 2026-05-14 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | spid-recupero-credenziali | SPID: recupero credenziali | documenti | — | basso | 2026-05-14 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | pec-guida-pratica | PEC: quando serve davvero | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | firma-digitale-guida | Firma digitale: cos'è e quando usarla | documenti | — | basso | 2026-05-14 | Archivia | — |
| modulo-11-documenti-identita-avanzata | passaporto-minori | Passaporto per minori | documenti | — | basso | 2026-05-16 | Archivia | — |
| modulo-11-documenti-identita-avanzata | documento-smarrito-rubato | Documento smarrito o rubato | documenti | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | codice-fiscale-stranieri | Codice fiscale per stranieri | documenti | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | spid-scelta-provider | SPID: scelta del provider | documenti | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-11-documenti-identita-avanzata | it-wallet-documenti-digitali-app-io | IT-Wallet su App IO: patente e tessera sanitaria digitale | documenti | — | basso | 2026-10-26 | Archivia | — |
| modulo-12-lavoro-diritti | busta-paga-lettura-guida | Come leggere una busta paga base | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | tfr-controllo-guida | Come controllare il TFR | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | documenti-colloquio-preparazione | Come preparare documenti per un colloquio | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | scelta-caf-patronato-sindacato | Come capire se serve CAF, patronato o sindacato | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | contratto-lavoro-controllo-guida | Contratto di lavoro: cosa controllare | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | malattia-certificato-medico-guida | Malattia e certificato medico | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | stage-tirocinio-diritti-guida | Stage/tirocinio: diritti minimi | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-12-lavoro-diritti | lavoro-nero-orientamento-guida | Lavoro nero: orientamento e aiuto | lavoro | — | basso | 2026-05-14 | Archivia | — |
| modulo-13-casa-residenza | contratto-affitto-controllo | Come controllare un contratto d’affitto | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | registrazione-locazione | Come registrare un contratto di locazione | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | voltura-luce-gas | Come fare voltura luce/gas | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | subentro-utenze | Come fare subentro utenze | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | gestione-cauzione-non-restituita | Come gestire cauzione non restituita | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | condominio-spese | Condominio: spese ordinarie/straordinarie | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | orientamento-sfratto | Come capire cosa fare dopo uno sfratto (orientamento base) | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | bonus-affitto-comunali | Come cercare bonus affitto comunali | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | tari-cambio-casa | Come fare TARI dopo cambio casa | casa | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-13-casa-residenza | isee-documenti-necessari | ISEE: documenti necessari | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | bonus-sociali-energia | Bonus sociali energia/gas/acqua | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | residenza-senza-dimora | Residenza senza dimora | casa | — | basso | 2026-05-16 | Archivia | — |
| modulo-13-casa-residenza | imu-e-visura-dopo-trasloco | IMU e visura dopo un trasloco o un atto | casa | — | basso | 2026-08-14 | Archivia | — |
| modulo-13-casa-residenza | riscaldamento-zone-climatiche | Riscaldamento: regole di accensione, zone e controlli caldaia | casa | — | basso | 2026-11-08 | Archivia | — |
| modulo-14-soldi-banche-truffe | bloccare-carta-clonata | Come bloccare una carta clonata | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | disconoscere-operazione-bancaria | Come disconoscere un’operazione bancaria | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | reagire-bonifico-truffa | Come reagire a un bonifico truffa (Primi 10 min) | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | capire-chiamata-banca-falsa | Come capire se una chiamata della banca è falsa | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | contestare-pagamento-paypal | Come contestare un pagamento PayPal | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | reagire-truffa-marketplace | Come reagire a truffa marketplace (Vinted/eBay/Subito) | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | riconoscere-finto-corriere | Come riconoscere finto corriere | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | salvare-prove-truffa-online | Come salvare prove di una truffa online | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-14-soldi-banche-truffe | truffa-trading-online | Investimenti truffa (Trading online) | soldi | — | basso | 2026-05-14 | Adatta | — |
| modulo-15-sicurezza-avanzata | password-manager | Gestore di password (Password Manager) | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | 2fa-autenticazione-due-fattori | Autenticazione a due fattori (2FA) | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | passkey-guida | Passkey: guida pratica | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | email-compromessa | Email compromessa: cosa fare subito | sicurezza | high | alto | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | recupero-account-major | Recupero Account Google, Apple o Meta | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | smartphone-rubato | Smartphone rubato o perso: azioni urgenti | sicurezza | high | alto | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | sim-swap-protezione | SIM Swap: cos'è e come proteggersi | sicurezza | high | alto | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | spyware-stalkerware | Spyware e Stalkerware: difesa attiva | sicurezza | high | alto | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | doxxing-protezione | Doxxing: difendersi dalla diffusione dati | sicurezza | medium | medio | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | data-breach-controllo | Data Breach: i tuoi dati sono stati rubati? | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | backup-3-2-1 | Backup 3-2-1 spiegato semplice | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | privacy-smartphone-impostazioni | Privacy Smartphone: impostazioni essenziali | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | watermark-documenti | Watermark documenti: proteggere le copie | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | invio-sicuro-documenti | Inviare documenti in modo più sicuro | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | pulizia-sessioni-digitale | Pulizia sessioni Google/Apple/Meta | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | controllo-app-collegate | Controllo app collegate | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | verifica-mail-falsa | Verifica mail falsa | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | dns-sicuro-vpn | DNS sicuro / VPN: quando serve | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-15-sicurezza-avanzata | browser-privacy-settings | Browser privacy settings | sicurezza | — | basso | 2026-05-16 | Mantieni | — |
| modulo-16-famiglia-minori | cyberbullismo-24-ore | Cyberbullismo: prime 24 ore | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-16-famiglia-minori | ricatto-sessuale-minori | Parlare a un figlio vittima di ricatto | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-16-famiglia-minori | gaming-chat-rischi | Gaming e chat vocali: rischi reali | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-16-famiglia-minori | parental-control-realistico | Parental control realistico | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-16-famiglia-minori | sharenting-rischi | Sharenting e foto di minori online | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-16-famiglia-minori | segnalare-contenuti-dannosi | Segnalare contenuti dannosi | famiglia | — | basso | 2026-05-14 | Mantieni | — |
| modulo-17-immigrazione | permesso-soggiorno-base | Permesso di soggiorno: orientamento base | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | rinnovo-permesso-documenti | Rinnovo permesso: documenti comuni | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | kit-postale-guida | Kit postale permesso soggiorno | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | codice-fiscale-stranieri-immigrazione | Codice fiscale per stranieri | immigrazione | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-17-immigrazione | residenza-stranieri | Residenza per cittadini stranieri | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | tessera-sanitaria-ssn | Tessera sanitaria / iscrizione SSN | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | ricongiungimento-familiare | Ricongiungimento familiare orientamento | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | permesso-ue-lungo-periodo | Permesso UE lungo periodo | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | conversione-permesso | Conversione permesso orientamento | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | cittadinanza-base | Cittadinanza: orientamento base | immigrazione | — | basso | 2026-05-16 | Archivia | — |
| modulo-17-immigrazione | titoli-soggiorno-sito-interno | Titoli di soggiorno: dove verificarli | immigrazione | — | basso | 2026-08-14 | Archivia | — |
| modulo-18-consumatori | reso-online | Reso online | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | garanzia-legale | Garanzia legale 2 anni | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | pacco-smarrito | Pacco smarrito o danneggiato | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | prodotto-difettoso | Prodotto difettoso | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | chargeback-pagamento | Contestare pagamento carta / Chargeback | consumatori | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-18-consumatori | paypal-reclamo | PayPal reclamo | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | truffa-marketplace | Vinted/Subito/Marketplace: truffe | consumatori | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-18-consumatori | recesso-14-giorni | Recesso entro 14 giorni | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | reclamo-telefonico-agcom | Reclamo telefonia e Conciliaweb | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | bollette-contestate | Bollette contestate | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | abbonamenti-non-richiesti | Abbonamenti non richiesti | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | salvare-prove-acquisto | Come salvare prove di acquisto | consumatori | — | basso | 2026-05-16 | Archivia | — |
| modulo-18-consumatori | switching-fornitore-arera | Come cambiare fornitore di luce o gas | consumatori | — | basso | 2026-08-14 | Archivia | — |
| modulo-18-consumatori | reclamo-conciliazione-arera | Reclamo e conciliazione ARERA | consumatori | — | basso | 2026-08-14 | Archivia | — |
| modulo-19-mobilita | leggere-verbale-multa | Multa: come leggere il verbale | mobilita | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-19-mobilita | pagare-multa-online | Pagare multa online | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | multa-ricorso | Multe: pagare o fare ricorso | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | patente-rinnovo | Patente: rinnovo | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | patente-punti-verifica | Patente: punti e verifica | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | bollo-auto-guida | Bollo auto | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | cambio-residenza-patente | Cambio residenza su patente/libretto | mobilita | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-19-mobilita | pass-disabili-richiesta | Pass disabili | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | passaggio-proprieta-veicolo | Veicolo venduto: passaggio proprietà | mobilita | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-19-mobilita | assicurazione-rca-controlli | Assicurazione RCA: cosa controllare | mobilita | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-19-mobilita | ztl-notifiche-guida | ZTL e notifiche | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-19-mobilita | portale-automobilista-servizi | Portale dell’Automobilista | mobilita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | scelta-revoca-medico | Scelta e revoca medico | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | fascicolo-sanitario-elettronico | Fascicolo sanitario elettronico | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | ricetta-elettronica | Ricetta elettronica | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | esenzioni-ticket | Esenzioni ticket | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | prenotare-visite-cup | Prenotare visite CUP | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | guardia-medica | Guardia medica / continuità assistenziale | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | consultorio-servizi | Consultorio: cosa offre | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | cps-csm-orientamento | CPS/CSM: orientamento informativo | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | numero-116117 | Numero 116117: dove attivo | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | tessera-sanitaria-smarrita | Tessera sanitaria smarrita | sanita | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-20-sanita-territoriale | invalidita-civile-orientamento | Invalidità civile: orientamento sanitario | sanita | — | basso | 2026-05-16 | Archivia | — |
| modulo-20-sanita-territoriale | scelta-pediatra-ssn | Come scegliere o cambiare il pediatra | sanita | — | basso | 2026-08-14 | Archivia | — |
| modulo-20-sanita-territoriale | vaccinazione-autunno-fse | Vaccinazione autunno 2026: prenotazione antinfluenzale e Covid | sanita | — | basso | 2026-10-26 | Archivia | — |
| modulo-21-anziani-caregiver | spid-cie-anziani | SPID/CIE per genitore anziano | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | delega-digitale | Delega digitale | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | invalidita-civile-base | Invalidità civile: domanda base | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | accompagnamento-orientamento | Accompagnamento: orientamento | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | legge-104-orientamento | Legge 104: orientamento | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | amministratore-sostegno-orientamento | Amministratore di sostegno | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | truffe-anziani-protezione | Truffe agli anziani | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | farmaci-fascicolo-sanitario | Farmaci e fascicolo sanitario | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | organizzare-documenti-familiare | Come organizzare documenti di un familiare fragile | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | servizi-sociali-comunali-anziani | Numeri utili e servizi sociali comunali | anziani | — | basso | 2026-05-16 | Adatta | — |
| modulo-21-anziani-caregiver | cedolino-pensione-inps-anziani | Come leggere il cedolino pensione INPS | anziani | — | basso | 2026-08-14 | Adatta | — |
| modulo-22-universita-giovani | isee-universitario | ISEE universitario | universita | — | basso | 2026-05-14 | Archivia | — |
| modulo-22-universita-giovani | borse-studio-regionali | Borse di studio regionali | universita | — | basso | 2026-05-14 | Archivia | — |
| modulo-22-universita-giovani | alloggi-studenti-cerca | Alloggi studenti | universita | — | basso | 2026-05-14 | Archivia | — |
| modulo-22-universita-giovani | cv-primo-lavoro-giovani | CV primo lavoro | universita | — | basso | 2026-05-16 | Archivia | — |
| modulo-22-universita-giovani | tasse-universitarie-guida | Tasse universitarie | universita | — | basso | 2026-05-16 | Archivia | — |
| modulo-22-universita-giovani | rinuncia-sospensione-studi | Rinuncia/sospensione studi | universita | — | basso | 2026-05-16 | Archivia | — |
| modulo-22-universita-giovani | stage-tirocini-guida | Stage/tirocini | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-22-universita-giovani | garanzia-giovani-orientamento | Garanzia Giovani | lavoro | — | basso | 2026-05-16 | Archivia | — |
| modulo-22-universita-giovani | erasmus-documenti-base | Erasmus documenti base | universita | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | isee-cose-serve | ISEE: cos'è e quando serve | bonus | — | basso | 2026-08-14 | Archivia | — |
| modulo-23-bonus-isee | bonus-sociali-luce-gas | Bonus sociali luce, gas e acqua | bonus | — | basso | 2026-08-14 | Archivia | — |
| modulo-23-bonus-isee | assegno-unico | Assegno Unico Universale | bonus | — | basso | 2026-08-14 | Archivia | — |
| modulo-23-bonus-isee | bonus-nido | Bonus Asilo Nido | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | dsu-precompilata | DSU precompilata: come prepararla | bonus | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-23-bonus-isee | documenti-necessari-isee | Documenti necessari per ISEE | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | isee-universitario-guida | ISEE universitario | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | carta-acquisti-guida | Carta acquisti | bonus | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-23-bonus-isee | adi-sfl-orientamento | ADI e SFL: orientamento base | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | stato-domanda-inps-controllo | Come controllare lo stato di una domanda INPS | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | correzione-errori-isee | Come correggere errori ISEE | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | differenze-tipi-isee | Tipi di ISEE: quale ti serve? | bonus | — | basso | 2026-05-16 | Archivia | — |
| modulo-23-bonus-isee | isee-corrente-quando-servire | ISEE corrente: quando farlo | bonus | — | basso | 2026-08-14 | Archivia | — |
| modulo-24-casa-digitale | wifi-sicuro | Sicurezza Wi-Fi di casa | casa-digitale | — | basso | 2026-05-16 | Adatta | — |
| modulo-24-casa-digitale | dispositivi-iot-privacy | IoT e privacy: chi ti ascolta? | casa-digitale | — | basso | 2026-05-16 | Adatta | — |
| modulo-24-casa-digitale | sicurezza-domotica | Sicurezza domotica: proteggere gli accessi | casa-digitale | — | basso | 2026-05-16 | Adatta | — |
| modulo-24-casa-digitale | gestione-tecnologica-abitazione | Gestione tecnologica dell'abitazione | casa-digitale | — | basso | 2026-05-16 | Adatta | — |
| modulo-25-fisco-cittadini | 730-precompilato-base | 730 precompilato 2026: calendario e invio | soldi | — | basso | 2026-08-14 | Archivia | — |
| modulo-25-fisco-cittadini | cu-dove-trovarla | CU: dove trovarla | soldi | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-25-fisco-cittadini | cassetto-fiscale-cos-e | Cassetto fiscale: cos’è | soldi | — | basso | 2026-05-16 | Archivia | — |
| modulo-25-fisco-cittadini | rimborsi-agenzia-entrate | Rimborsi Agenzia Entrate | soldi | — | basso | 2026-05-16 | Archivia | — |
| modulo-25-fisco-cittadini | canone-tv-esonero | Canone TV: casi di esonero | soldi | — | basso | 2026-05-16 | Archivia | — |
| modulo-25-fisco-cittadini | codice-fiscale-fiscale-focus | Codice fiscale e tessera sanitaria | soldi | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-25-fisco-cittadini | appuntamento-agenzia-entrate | Come prenotare appuntamento Agenzia Entrate | soldi | — | basso | 2026-05-16 | Archivia | — |
| modulo-25-fisco-cittadini | servizi-fiscali-spid-cie | Come usare SPID/CIE per servizi fiscali | soldi | — | basso | 2026-05-16 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-25-fisco-cittadini | ravvedimento-operoso-orientamento | Ravvedimento operoso: orientamento | soldi | — | basso | 2026-08-14 | Archivia | — |
| modulo-25-fisco-cittadini | secondo-acconto-imposte-f24 | Secondo acconto imposte: scadenza 30 novembre e rate F24 | soldi | — | basso | 2026-11-08 | Archivia | — |
| modulo-26-poste-pagamenti | pagopa-sicuro | PagoPA: come pagare in sicurezza | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | app-io-guida | App IO: i servizi pubblici in tasca | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | pec-disdetta-reclamo | PEC: come fare disdette e reclami | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | raccomandata-ar-guida | Raccomandata A/R: guida pratica | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | posteid-spid-recupero | PosteID/SPID: recupero credenziali | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | bollettini-pagopa-differenze | Bollettini e avvisi PagoPA: differenze | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | f24-orientamento-base | F24: orientamento base | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | iban-verifica-bonifici | IBAN: verifica e bonifici sicuri | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | deleghe-semplici-guida | Deleghe semplici: come scriverle | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-26-poste-pagamenti | autocertificazioni-guida | Autocertificazioni: cosa sono e come usarle | documenti | — | basso | 2026-05-16 | Adatta | — |
| modulo-27-pensioni-previdenza | domanda-pensione-inps | Come fare domanda di pensione INPS | lavoro | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-27-pensioni-previdenza | pensione-vecchiaia-vs-anticipata | Pensione di vecchiaia e pensione anticipata | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | ape-sociale-orientamento-2026 | APE sociale 2026: verifica dei requisiti | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | estratto-contributivo-inps | Come consultare l’estratto contributivo INPS | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | ricostituzione-pensione-inps | Come chiedere la ricostituzione della pensione | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | riscatto-laurea-orientamento | Riscatto della laurea: orientamento INPS | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | cu-inps-pensionati-730 | CU INPS e 730 per i pensionati | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-27-pensioni-previdenza | fascicolo-previdenziale-inps | Fascicolo previdenziale del cittadino | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | consultare-cartelle-ader | Come consultare le cartelle AdeR | soldi | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-28-cartelle-riscossione | pagare-cartelle-ader | Come pagare una cartella AdeR | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | rateizzare-cartelle-ader | Come rateizzare una cartella | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | sgravio-autotutela-cartelle | Sgravio e autotutela se non riconosci il debito | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | cartella-non-riconosciuta | Cosa fare se non riconosci il debito | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | ader-area-riservata-deleghe | Area riservata AdeR, deleghe e app Equiclick | soldi | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-28-cartelle-riscossione | rottamazione-quinquies-orientamento | Rottamazione-quinquies: orientamento 2026 | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-28-cartelle-riscossione | rottamazione-quater-sesta-rata-tolleranza | Rottamazione-quater: sesta rata e tolleranza 5 giorni | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | aprire-partita-iva | Come aprire la partita IVA | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | regime-forfettario-orientamento | Regime forfetario: orientamento | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | f24-titolari-piva | F24 per titolari di partita IVA | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | chiusura-variazione-piva | Variazione e chiusura della partita IVA | soldi | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-29-partita-iva-forfettario | iscrizione-gestione-separata | Iscrizione alla Gestione separata INPS | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | comunicazione-unica-impresa | Comunicazione Unica d’impresa | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-29-partita-iva-forfettario | concordato-preventivo-biennale-cpb | Concordato Preventivo Biennale: regole e scadenza al 2 novembre | soldi | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-30-catasto-imu-successioni | visura-catastale-online | Come fare la visura catastale online | casa | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-30-catasto-imu-successioni | imu-orientamento | IMU: orientamento per il contribuente | casa | — | basso | 2026-08-27 | Archivia | — |
| modulo-30-catasto-imu-successioni | successione-telematica-ade | Dichiarazione di successione telematica | casa | — | basso | 2026-08-27 | Archivia | — |
| modulo-30-catasto-imu-successioni | voltura-catastale-web-2026 | Voltura catastale web (dal 12 gennaio 2026) | casa | — | basso | 2026-08-27 | Archivia | — |
| modulo-30-catasto-imu-successioni | dati-catastali-per-atti | Dati catastali per contratti, IMU e ISEE | casa | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-31-disabilita-legge-104 | invalidita-civile-domanda-inps | Come fare domanda di invalidità civile INPS | disabilita | — | basso | 2026-08-27 | Archivia | — |
| modulo-31-disabilita-legge-104 | legge-104-permessi-orientamento | Legge 104: permessi e tutele (orientamento) | disabilita | — | basso | 2026-08-27 | Archivia | — |
| modulo-31-disabilita-legge-104 | carta-europea-disabilita-2026 | Carta europea della disabilità: domanda INPS | disabilita | — | basso | 2026-08-27 | Archivia | — |
| modulo-31-disabilita-legge-104 | caregiver-deleghe-inps-disabilita | Deleghe INPS per caregiver | disabilita | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-31-disabilita-legge-104 | agevolazioni-disabilita-orientamento | Agevolazioni per la disabilità: dove verificarle | disabilita | — | basso | 2026-08-27 | Archivia | — |
| modulo-31-disabilita-legge-104 | stato-domanda-invalidita | Come controllare lo stato della domanda di invalidità | disabilita | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-32-famiglia-avanzata | congedo-parentale-inps | Come chiedere il congedo parentale INPS | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-32-famiglia-avanzata | congedo-paternita-obbligatorio | Congedo di paternità obbligatorio | famiglia | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-32-famiglia-avanzata | dat-testamento-biologico | DAT (testamento biologico): come farle | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-32-famiglia-avanzata | separazione-consensuale-orientamento | Separazione consensuale: orientamento | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-32-famiglia-avanzata | assegno-unico-e-congedi | Assegno unico e congedi: non confonderli | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-32-famiglia-avanzata | nuovo-bonus-mamme-2026 | Nuovo Bonus Mamme 2026: requisiti e domanda INPS | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-33-concorsi-pa | registrarsi-inpa | Come registrarsi su inPA | lavoro | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-33-concorsi-pa | domanda-concorso-inpa | Come fare domanda di concorso su inPA | lavoro | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-33-concorsi-pa | curriculum-format-inpa | Curriculum sul format inPA (non PDF) | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-33-concorsi-pa | leggere-bando-concorso | Come leggere un bando di concorso | lavoro | — | basso | 2026-08-27 | Archivia | — |
| modulo-34-aire-esteri | iscrizione-aire-fast-it | Come iscriversi all’AIRE (Fast-It) | documenti | — | basso | 2026-08-27 | Archivia | — |
| modulo-34-aire-esteri | spid-dall-estero | SPID dall’estero | documenti | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-34-aire-esteri | voto-estero-orientamento | Voto all’estero: orientamento | documenti | — | basso | 2026-08-27 | Archivia | — |
| modulo-34-aire-esteri | servizi-consolari-documenti-estero | Documenti e servizi consolari all’estero | documenti | — | basso | 2026-08-27 | Archivia | — |
| modulo-35-giustizia-cittadino | patrocinio-spese-stato | Patrocinio a spese dello Stato | giustizia | — | basso | 2026-08-27 | Archivia | — |
| modulo-35-giustizia-cittadino | mediazione-civile-orientamento | Mediazione civile: orientamento | giustizia | — | basso | 2026-08-27 | Archivia | — |
| modulo-35-giustizia-cittadino | giudice-di-pace-orientamento | Giudice di pace: orientamento | giustizia | — | basso | 2026-08-27 | Archivia | — |
| modulo-35-giustizia-cittadino | dove-trovare-uffici-giudiziari | Come trovare uffici e informazioni su giustizia.it | giustizia | — | basso | 2026-08-27 | Archivia | — |
| modulo-36-animali-affezione | anagrafe-animali-affezione | Anagrafe degli animali d’affezione | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-36-animali-affezione | microchip-e-passaporto-animale | Microchip e documenti dell’animale | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-36-animali-affezione | smarrimento-animale-anagrafe | Cosa fare se l’animale si smarrisce | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-36-animali-affezione | passaggio-proprieta-animale | Passaggio di proprietà dell’animale | famiglia | — | basso | 2026-08-27 | Archivia | — |
| modulo-37-impresa-camerale | visura-camerale-come-ottenerla | Come ottenere la visura camerale | soldi | — | basso | 2026-08-27 | Adatta | tema sicurezza dentro modulo archivio: estrarre |
| modulo-37-impresa-camerale | impresa-individuale-orientamento | Aprire un’impresa individuale: orientamento | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-37-impresa-camerale | leggere-visura-camerale | Come leggere una visura camerale | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-37-impresa-camerale | pec-impresa-e-camera | PEC dell’impresa e Registro imprese | soldi | — | basso | 2026-08-27 | Archivia | — |
| modulo-99-kit-checklist | kit-documenti-personali | Kit Documenti Personali | documenti | — | basso | 2026-05-14 | Adatta | — |
| modulo-99-kit-checklist | kit-sicurezza-account | Kit Sicurezza Account | sicurezza | — | basso | 2026-05-14 | Adatta | — |
| modulo-99-kit-checklist | kit-telefono-rubato | Kit Telefono Rubato | emergenze | high | alto | 2026-05-14 | Adatta | — |
| cambio-residenza | cambio-residenza-procedura | Come fare il cambio di residenza | casa | — | basso | 2026-05-16 | Archivia | — |
| cie-richiesta | cie-richiesta-rinnovo | Come richiedere o rinnovare la CIE | documenti | — | basso | 2026-05-16 | Archivia | — |
| telefono-rubato | telefono-rubato-primi-passi | Cosa fare nei primi 10 minuti | emergenze | sos | alto | 2026-08-14 | Mantieni | — |
| busta-paga | busta-paga-basi | Le voci fondamentali della busta paga | soldi | — | basso | 2026-05-16 | Archivia | — |
| phishing-bancario | phishing-bancario-riconoscere | Come distinguere un avviso vero da una truffa | truffe | — | basso | 2026-05-16 | Mantieni | — |

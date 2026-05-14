'use client'

import { useState, useMemo } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Book, ArrowRight, Search, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Term = {
    term: string
    def: string
    example: string
    action: string
    module: string
    category: 'burocrazia' | 'identita-digitale' | 'lavoro' | 'casa' | 'soldi' | 'sicurezza-digitale' | 'privacy' | 'scuola' | 'famiglia' | 'consumatori' | 'immigrazione' | 'sanita' | 'mobilita'
}

const TERMS: Term[] = [
    // Identità Digitale
    { term: 'SPID', def: 'Sistema Pubblico di Identità Digitale per accedere ai servizi della Pubblica Amministrazione.', example: 'Usare lo SPID per entrare nel portale INPS.', action: 'Scegli un provider e attiva il riconoscimento.', module: 'modulo-09-documenti-identita', category: 'identita-digitale' },
    { term: 'CIE', def: 'Carta di Identità Elettronica, valida come documento di viaggio e per l\'accesso ai servizi digitali.', example: 'Appoggiare la carta sul telefono per accedere all\'App IO.', action: 'Assicurati di avere il PIN di 8 cifre ricevuto con la carta.', module: 'modulo-09-documenti-identita', category: 'identita-digitale' },
    { term: 'CieID', def: 'L\'app ufficiale per utilizzare la Carta di Identità Elettronica per l\'accesso ai siti web.', example: 'Scansionare il QR code per accedere a un sito ministeriale.', action: 'Scarica l\'app e abilita il sensore NFC del telefono.', module: 'modulo-09-documenti-identita', category: 'identita-digitale' },
    { term: 'OTP (One Time Password)', def: 'Codice temporaneo inviato via SMS o app per confermare un\'operazione.', example: 'Il codice di 6 cifre che ricevi per autorizzare un pagamento.', action: 'Non condividerlo mai con nessuno, nemmeno con la tua banca.', module: '#', category: 'identita-digitale' },
    { term: 'Identità Digitale', def: 'L\'insieme di dati che identificano una persona o un ente nel mondo digitale.', example: 'Le tue credenziali SPID sono la tua identità digitale ufficiale.', action: 'Proteggila con password robuste e autenticazione forte.', module: '#', category: 'identita-digitale' },
    { term: 'Firma Digitale', def: 'L\'equivalente informatico della firma autografa su carta con lo stesso valore legale.', example: 'Firmare un contratto di lavoro inviato via email.', action: 'Può essere attivata tramite kit con chiavetta USB o firma remota.', module: '#', category: 'identita-digitale' },
    { term: 'Firma Remota', def: 'Firma digitale che non richiede un lettore fisico, ma si attiva tramite un codice OTP sul telefono.', example: 'Firmare un documento PDF direttamente online senza stampare.', action: 'Comoda per chi lavora spesso in mobilità.', module: '#', category: 'identita-digitale' },
    { term: 'QR Code Identità', def: 'Codice a barre bidimensionale usato per autenticazioni veloci o pagamenti.', example: 'Inquadrare il codice su un monitor per trasferire i dati della CIE.', action: 'Usa sempre l\'app ufficiale per scansionare codici sensibili.', module: '#', category: 'identita-digitale' },
    { term: 'Livello 2 SPID', def: 'Accesso che richiede nome utente, password e un codice OTP (autenticazione a due fattori).', example: 'La maggior parte dei servizi PA richiede il Livello 2.', action: 'È il livello standard più utilizzato e consigliato.', module: '#', category: 'identita-digitale' },
    { term: 'Livello 3 SPID', def: 'Il massimo livello di sicurezza che richiede anche un supporto fisico (smart card o token).', example: 'Necessario per operazioni di altissima sensibilità istituzionale.', action: 'Solitamente non richiesto per le operazioni comuni del cittadino.', module: '#', category: 'identita-digitale' },

    // Burocrazia
    { term: 'PagoPA', def: 'Sistema unico per i pagamenti elettronici verso la Pubblica Amministrazione.', example: 'Pagare una multa o la mensa scolastica tramite l\'app IO.', action: 'Controlla se sull\'avviso è presente il QR code PagoPA.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'IO (App)', def: 'L\'app dei servizi pubblici che raccoglie comunicazioni e pagamenti della PA in un unico punto.', example: 'Ricevere la notifica della scadenza della carta di identità.', action: 'Accedi con SPID o CIE per visualizzare i tuoi messaggi.', module: '#', category: 'burocrazia' },
    { term: 'PEC (Posta Elettronica Certificata)', def: 'Email con valore legale equivalente a una raccomandata con ricevuta di ritorno.', example: 'Inviare una disdetta formale a un fornitore di energia.', action: 'Aprila regolarmente: le comunicazioni ricevute hanno valore di notifica.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'Codice Fiscale', def: 'Codice alfanumerico di 16 caratteri che identifica univocamente ogni cittadino ai fini fiscali.', example: 'Fornirlo in farmacia per detrarre le spese mediche.', action: 'Puoi trovarlo sulla tua Tessera Sanitaria.', module: '#', category: 'burocrazia' },
    { term: 'ANPR', def: 'Anagrafe Nazionale della Popolazione Residente, banca dati unica per tutti i comuni italiani.', example: 'Scaricare un certificato di residenza gratis online.', action: 'Accedi al portale ANPR per certificati senza bollo.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'DSU (Dichiarazione Sostitutiva Unica)', def: 'Documento che contiene i dati anagrafici, reddituali e patrimoniali di un nucleo familiare.', example: 'Compilarla per richiedere l\'ISEE all\'INPS o al CAF.', action: 'Puoi richiederla in forma precompilata sul sito INPS.', module: '#', category: 'burocrazia' },
    { term: 'ISEE', def: 'Indicatore della Situazione Economica Equivalente, misura la ricchezza delle famiglie.', example: 'Necessario per ottenere sconti sulle tasse universitarie.', action: 'Rinnovalo ogni anno a inizio gennaio.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'ISEE Corrente', def: 'Versione dell\'ISEE che riflette variazioni recenti del reddito (es. perdita del lavoro).', example: 'Richiederlo se il reddito è calato drasticamente rispetto a due anni prima.', action: 'Ha validità di 6 mesi, salvo ulteriori variazioni.', module: '#', category: 'burocrazia' },
    { term: 'Patronato', def: 'Ente che offre assistenza gratuita per pratiche previdenziali e assistenziali (pensioni, bonus).', example: 'Andare al patronato per fare domanda di pensione.', action: 'Verifica gli orari di ricevimento e i documenti necessari.', module: '#', category: 'burocrazia' },
    { term: 'CAF (Centro Assistenza Fiscale)', def: 'Organizzazione che aiuta i cittadini nella compilazione di dichiarazioni fiscali.', example: 'Rivolgersi al CAF per la dichiarazione dei redditi 730.', action: 'Prenota con largo anticipo durante la stagione fiscale.', module: '#', category: 'burocrazia' },
    { term: 'Marca da Bollo Digitale', def: 'Pagamento telematico dell\'imposta di bollo per documenti pubblici online.', example: 'Pagare 16€ per un certificato richiesto telematicamente.', action: 'Può essere assolta tramite il servizio @e.bollo di PagoPA.', module: '#', category: 'burocrazia' },
    { term: '730 (Modello)', def: 'Modello per la dichiarazione dei redditi di lavoratori dipendenti e pensionati.', example: 'Dichiarare le spese veterinarie per avere un rimborso in busta paga.', action: 'Puoi usare il precompilato sul sito dell\'Agenzia delle Entrate.', module: '#', category: 'burocrazia' },
    { term: 'CU (Certificazione Unica)', def: 'Documento che attesta i redditi percepiti in un anno solare.', example: 'Scaricare la CU dal portale INPS se sei pensionato.', action: 'Serve obbligatoriamente per fare la dichiarazione dei redditi.', module: '#', category: 'burocrazia' },
    { term: 'SPID Delega', def: 'Servizio che permette di delegare l\'accesso ai servizi online a un familiare o un terzo di fiducia.', example: 'Delegare il figlio per controllare la propria pensione sul sito INPS.', action: 'Si attiva tramite le impostazioni del proprio provider SPID.', module: '#', category: 'burocrazia' },
    { term: 'Domicilio Digitale (INAD)', def: 'Indirizzo PEC registrato ufficialmente per ricevere tutte le comunicazioni della PA con valore legale.', example: 'Ricevere una multa o una notifica dell\'Agenzia delle Entrate via PEC invece che per posta.', action: 'Registra la tua PEC sull\'Indice Nazionale dei Domicili Digitali (INAD).', module: '#', category: 'burocrazia' },
    { term: 'SEND', def: 'Piattaforma Nazionale per le Notifiche Digitali che invia atti amministrativi via email o app IO.', example: 'Ricevere la notifica di un rimborso fiscale direttamente sullo smartphone.', action: 'Attiva le notifiche nell\'app IO per non perdere comunicazioni importanti.', module: '#', category: 'burocrazia' },
    { term: 'Firma Elettronica Avanzata (FEA)', def: 'Firma digitale realizzata con mezzi sui quali il firmatario conserva un controllo esclusivo (es. OTP o grafometrica).', example: 'Firmare la modulistica in banca su un tablet con la penna digitale.', action: 'Ha piena validità legale per la maggior parte dei contratti privati.', module: '#', category: 'burocrazia' },

    // Lavoro
    { term: 'NASpI', def: 'Indennità mensile di disoccupazione per lavoratori dipendenti che perdono il lavoro.', example: 'Ricevere il sostegno economico dopo il licenziamento.', action: 'Fai domanda online entro 68 giorni dalla fine del rapporto.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'DID', def: 'Dichiarazione di Immediata Disponibilità al lavoro.', example: 'Rilasciarla online sul portale ANPAL dopo essere rimasti disoccupati.', action: 'È necessaria per attivare lo stato di disoccupazione.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'CPI (Centro per l\'Impiego)', def: 'Ufficio pubblico che aiuta i disoccupati a trovare lavoro e offre formazione.', example: 'Recarsi al CPI per firmare il patto di servizio personalizzato.', action: 'Controlla l\'ufficio competente per il tuo domicilio.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'TFR', def: 'Trattamento di Fine Rapporto, ovvero la "liquidazione" spettante a fine contratto.', example: 'Ricevere la somma accantonata dopo essersi licenziati.', action: 'Puoi scegliere di lasciarlo in azienda o in un fondo pensione.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Busta Paga', def: 'Documento che dettaglia lo stipendio lordo, le tasse e lo stipendio netto ricevuto.', example: 'Controllare quante ore di straordinario sono state pagate.', action: 'Conserva i cedolini: servono per mutui o affitti.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Dimissioni Telematiche', def: 'L\'unico modo legale per lasciare volontariamente un posto di lavoro.', example: 'Inviare le dimissioni tramite il portale ClicLavoro del Ministero.', action: 'Serve SPID o CIE per accedere alla procedura.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Contributi Previdenziali', def: 'Somme versate all\'INPS per garantire la futura pensione e coprire la malattia.', example: 'Controllare l\'estratto conto contributivo sul sito INPS.', action: 'Verifica periodicamente che il datore di lavoro li versi regolarmente.', module: '#', category: 'lavoro' },
    { term: 'INPS', def: 'Istituto Nazionale Previdenza Sociale, gestisce pensioni e ammortizzatori sociali.', example: 'Consultare il portale INPS per vedere il pagamento della NASpI.', action: 'Usa l\'app INPS Mobile per consultazioni veloci.', module: '#', category: 'lavoro' },
    { term: 'Lavoro Agile (Smart Working)', def: 'Modalità di esecuzione del lavoro senza vincoli di orario o di luogo.', example: 'Lavorare da casa due giorni a settimana tramite computer.', action: 'Richiede un accordo scritto tra datore e lavoratore.', module: '#', category: 'lavoro' },
    { term: 'INAIL', def: 'Istituto che assicura i lavoratori contro gli infortuni sul lavoro e le malattie professionali.', example: 'Denunciare un infortunio avvenuto durante l\'orario lavorativo.', action: 'Comunica subito l\'infortunio al datore di lavoro.', module: '#', category: 'lavoro' },

    // Casa
    { term: 'Voltura', def: 'Cambio dell\'intestatario di una fornitura di luce o gas senza interruzione del servizio.', example: 'Entrare in una nuova casa e intestarsi le bollette già attive.', action: 'Tieni a portata di mano il codice POD o PDR.', module: '#', category: 'casa' },
    { term: 'Subentro', def: 'Riattivazione di un contatore di luce o gas che era stato chiuso dal precedente inquilino.', example: 'Chiamare il fornitore per "riaprire" il gas in una casa chiusa da tempo.', action: 'Potrebbe richiedere qualche giorno lavorativo per l\'attivazione.', module: '#', category: 'casa' },
    { term: 'Cauzione', def: 'Somma di denaro versata al proprietario come garanzia per eventuali danni alla casa.', example: 'Versare 3 mensilità anticipate all\'inizio dell\'affitto.', action: 'Deve essere restituita a fine contratto con gli interessi.', module: '#', category: 'casa' },
    { term: 'TARI', def: 'Tassa sui Rifiuti, destinata a finanziare i costi del servizio di raccolta e smaltimento.', example: 'Pagare il bollettino annuale inviato dal Comune per l\'immondizia.', action: 'Dichiara subito al Comune l\'occupazione di un immobile.', module: '#', category: 'casa' },
    { term: 'Contratto di Locazione', def: 'Accordo scritto per l\'affitto di una casa tra proprietario e inquilino.', example: 'Registrare un contratto "4+4" all\'Agenzia delle Entrate.', action: 'Esigi sempre la registrazione: è la tua tutela legale.', module: '#', category: 'casa' },
    { term: 'Cedolare Secca', def: 'Regime fiscale opzionale per i proprietari che blocca l\'aumento dell\'affitto per l\'inquilino.', example: 'Controllare nel contratto se l\'affitto non subirà aumenti ISTAT.', action: 'Verifica questa opzione per risparmiare sugli aumenti annuali.', module: '#', category: 'casa' },
    { term: 'IMU', def: 'Imposta Municipale Propria sugli immobili (non si paga sulla prima casa non di lusso).', example: 'Pagare l\'IMU per la seconda casa al mare.', action: 'Le scadenze sono solitamente a giugno e dicembre.', module: '#', category: 'casa' },
    { term: 'Visura Catastale', def: 'Documento che contiene i dati tecnici e fiscali di un immobile.', example: 'Richiedere la visura per conoscere la rendita catastale ai fini IMU.', action: 'Puoi scaricarla gratis online se sei il proprietario.', module: '#', category: 'casa' },
    { term: 'APE (Certificazione Energetica)', def: 'Documento che descrive quanto consuma una casa (da classe A a G).', example: 'Controllare la classe energetica prima di comprare o affittare casa.', action: 'È obbligatorio allegarla ai contratti di vendita o affitto.', module: '#', category: 'casa' },
    { term: 'Spese Condominiali', def: 'Quote pagate dagli inquilini per la gestione delle parti comuni (pulizia scale, ascensore).', example: 'Pagare la rata mensile decisa dall\'assemblea di condominio.', action: 'Chiedi sempre il rendiconto dettagliato all\'amministratore.', module: '#', category: 'casa' },

    // Soldi
    { term: 'Bonifico Istantaneo', def: 'Trasferimento di denaro tra conti correnti che avviene in pochi secondi, 24 ore su 24.', example: 'Inviare soldi a un amico e vederli accreditati immediatamente.', action: 'Attenzione: non può essere revocato una volta inviato.', module: '#', category: 'soldi' },
    { term: 'IBAN', def: 'Codice internazionale che identifica univocamente il tuo conto corrente.', example: 'Fornire l\'IBAN al datore di lavoro per l\'accredito dello stipendio.', action: 'In Italia inizia sempre con IT e ha 27 caratteri.', module: '#', category: 'soldi' },
    { term: 'Chargeback', def: 'Procedura di rimborso per acquisti contestati effettuati con carta di credito.', example: 'Chiedere il rimborso se un sito non ha mai spedito l\'oggetto pagato.', action: 'Attivala tramite la tua banca entro tempi prestabiliti.', module: 'modulo-03-truffe-phishing', category: 'soldi' },
    { term: 'Disconoscimento Operazione', def: 'Segnalazione formale alla banca di una transazione che non hai mai autorizzato.', example: 'Notare un addebito sconosciuto di 200€ sull\'estratto conto.', action: 'Blocca subito la carta e fai denuncia alle autorità.', module: 'modulo-01b-primo-soccorso', category: 'soldi' },
    { term: 'Marketplace Scam', def: 'Truffa che avviene su siti di compravendita tra privati (es. Facebook o Subito).', example: 'Pagare una PlayStation usata che non viene mai spedita.', action: 'Usa sempre sistemi di pagamento protetti e diffida di prezzi troppo bassi.', module: 'modulo-03-truffe-phishing', category: 'soldi' },
    { term: 'Contactless', def: 'Tecnologia per pagare avvicinando la carta o il telefono al POS senza inserirli.', example: 'Pagare il caffè appoggiando lo smartphone sul lettore.', action: 'Sopra i 50€ solitamente viene richiesto comunque il PIN.', module: '#', category: 'soldi' },
    { term: 'Fido Bancario', def: 'Somma che la banca ti mette a disposizione oltre il saldo del tuo conto.', example: 'Andare "in rosso" autorizzato di 500€ per una spesa imprevista.', action: 'Attenzione agli interessi elevati sullo scoperto di conto.', module: '#', category: 'soldi' },
    { term: 'Estratto Conto', def: 'Documento che riepiloga tutte le entrate e le uscite del conto in un periodo.', example: 'Scaricare il PDF mensile per controllare le spese della famiglia.', action: 'Controllalo almeno una volta al mese per verificare errori.', module: '#', category: 'soldi' },
    { term: 'Mutuo', def: 'Prestito a lungo termine concesso dalla banca, solitamente per l\'acquisto di casa.', example: 'Pagare la rata del mutuo trentennale ogni mese.', action: 'Confronta sempre il TAEG per capire il costo reale del prestito.', module: '#', category: 'soldi' },
    { term: 'Prepagata', def: 'Carta di pagamento non collegata a un conto, che va "caricata" prima dell\'uso.', example: 'Usare una Postepay per fare acquisti sicuri su internet.', action: 'Carica solo la somma che intendi spendere a breve.', module: '#', category: 'soldi' },

    // Sicurezza Digitale
    { term: '2FA', def: 'Autenticazione a due fattori: richiede due prove diverse della tua identità.', example: 'Inserire la password e poi il codice ricevuto via SMS.', action: 'Attivala su WhatsApp, Google, Facebook e banca.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Passkey', def: 'Nuovo sistema di accesso senza password che usa l\'impronta o il volto.', example: 'Accedere al tuo account Google usando solo lo sblocco del telefono.', action: 'È più sicura e facile da usare delle classiche password.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Password Manager', def: 'App che crea e conserva password sicure e diverse per ogni sito.', example: 'Usare Bitwarden o il portachiavi Apple per non dimenticare le chiavi.', action: 'Ti permette di ricordare una sola "Master Password".', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Backup Codes', def: 'Codici di emergenza da usare se perdi il telefono e non ricevi l\'SMS della 2FA.', example: 'Stampare i 10 codici di recupero forniti da Google.', action: 'Conservali in un posto sicuro, lontano dal computer.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Phishing', def: 'Truffa via email per rubare dati fingendosi un servizio affidabile.', example: 'Una mail che sembra della tua banca e ti chiede di "sbloccare il conto".', action: 'Non cliccare mai sui link nelle email sospette.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'Smishing', def: 'Tentativo di truffa tramite SMS (Phishing via SMS).', example: 'Un messaggio che dice: "Pacco bloccato, clicca qui per pagare 2 euro".', action: 'Ignora e blocca il numero del mittente.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'Vishing', def: 'Truffa telefonica dove l\'hacker finge di essere un operatore bancario.', example: 'Ricevere una chiamata che ti chiede il codice OTP per "fermare un furto".', action: 'Riaggancia subito: la banca non ti chiederà mai codici al telefono.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'SIM Swap', def: 'Truffa in cui il criminale "ruba" il tuo numero di telefono su una nuova SIM.', example: 'Il tuo telefono perde il segnale e qualcuno accede alla tua banca.', action: 'Se il telefono non prende più senza motivo, contatta subito l\'operatore.', module: 'modulo-01b-primo-soccorso', category: 'sicurezza-digitale' },
    { term: 'Malware', def: 'Software dannoso (virus) creato per infettare il computer o il telefono.', example: 'Scaricare un gioco gratis che in realtà ruba le tue foto.', action: 'Installa app solo dagli store ufficiali (Play Store o App Store).', module: 'modulo-07-privacy-smartphone', category: 'sicurezza-digitale' },
    { term: 'Spyware', def: 'Software nascosto che spia quello che scrivi o guardi sul telefono.', example: 'Un\'app invisibile che invia i tuoi messaggi a un ex partner.', action: 'Fai attenzione se la batteria cala troppo in fretta senza motivo.', module: 'modulo-05-stalkerware', category: 'sicurezza-digitale' },
    { term: 'Stalkerware', def: 'App usate per spiare segretamente un\'altra persona (partner o figli).', example: 'Qualcuno che sa sempre dove sei perché ha installato un tracker sul tuo telefono.', action: 'Controlla periodicamente la lista delle app installate.', module: 'modulo-05-stalkerware', category: 'sicurezza-digitale' },
    { term: 'Data Breach', def: 'Fuga di dati da un sito web a seguito di un attacco hacker.', example: 'Milioni di email e password rubate da un sito di shopping.', action: 'Controlla su "Have I Been Pwned" se i tuoi dati sono stati rubati.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Sextortion', def: 'Ricatto sessuale online: minaccia di diffondere immagini intime se non si paga o si fanno favori.', example: 'Qualcuno che finge di essere interessato a te e poi ti chiede soldi per non pubblicare un video privato.', action: 'Non pagare mai, blocca il ricattatore e segnala alla Polizia Postale.', module: 'modulo-04-violenza-online', category: 'sicurezza-digitale' },
    { term: 'Revenge Porn', def: 'Diffusione non consensuale di immagini o video intimi per vendetta o umiliazione.', example: 'Un ex partner che pubblica foto private su gruppi Telegram senza permesso.', action: 'Segnala subito ai social e al Garante Privacy (procedura d\'urgenza).', module: 'modulo-04-violenza-online', category: 'sicurezza-digitale' },
    { term: 'Grooming', def: 'Adescamento di minori online tramite manipolazione psicologica e finta amicizia.', example: 'Un adulto che si finge un coetaneo sui videogiochi per ottenere foto da un bambino.', action: 'Spiega ai minori di non accettare richieste da sconosciuti e di parlarne subito.', module: 'modulo-08-scuola-famiglia', category: 'sicurezza-digitale' },
    { term: 'Cyberbullismo', def: 'Attacchi, offese o umiliazioni ripetute verso una persona tramite strumenti digitali.', example: 'Insulti continui in un gruppo classe su WhatsApp verso un compagno.', action: 'Documenta (screenshot), non rispondere e segnala a genitori o docenti.', module: 'modulo-06-stalking-doxxing', category: 'sicurezza-digitale' },

    // Privacy
    { term: 'Doxxing', def: 'Pubblicazione online di dati privati di una persona con scopo vendicativo.', example: 'Qualcuno pubblica il tuo indirizzo di casa sui social dopo un litigio.', action: 'Segnala subito il post alla piattaforma social.', module: 'modulo-06-stalking-doxxing', category: 'privacy' },
    { term: 'GDPR', def: 'Legge europea che protegge la tua privacy e i tuoi dati personali.', example: 'Il diritto di chiedere a un sito di cancellare tutti i tuoi dati.', action: 'Leggi sempre quali dati acconsenti di condividere.', module: '#', category: 'privacy' },
    { term: 'Cookie', def: 'Piccoli file che i siti salvano sul tuo PC per ricordarsi di te.', example: 'Rimanere collegati a un sito senza reinserire la password ogni volta.', action: 'Puoi rifiutare i cookie "di profilazione" per non essere tracciato.', module: '#', category: 'privacy' },
    { term: 'Crittografia End-to-End', def: 'Sistema che rende i messaggi leggibili solo al mittente e al destinatario.', example: 'I messaggi di WhatsApp sono protetti da questa tecnologia.', action: 'Preferisci app che usano questa protezione per i dati sensibili.', module: '#', category: 'privacy' },
    { term: 'Diritto all\'Oblio', def: 'Il diritto di chiedere la rimozione di informazioni vecchie o dannose dai motori di ricerca.', example: 'Chiedere a Google di non mostrare più una vecchia notizia falsa su di te.', action: 'Puoi fare richiesta formale direttamente a Google o al Garante Privacy.', module: '#', category: 'privacy' },
    { term: 'Informativa Privacy', def: 'Documento che spiega come un\'azienda userà i tuoi dati.', example: 'Il testo lungo che appare quando crei un account su un nuovo sito.', action: 'Controlla almeno la sezione "finalità del trattamento".', module: '#', category: 'privacy' },
    { term: 'Profilazione', def: 'Analisi dei tuoi gusti e abitudini per inviarti pubblicità mirata.', example: 'Vedere la pubblicità di scarpe dopo averne cercate un paio online.', action: 'Puoi disattivarla nelle impostazioni privacy dei social.', module: '#', category: 'privacy' },
    { term: 'Metadati', def: 'Dati che descrivono altri dati (es. l\'ora e il luogo in cui è stata scattata una foto).', example: 'Inviare una foto che rivela esattamente dove abiti tramite la posizione GPS.', action: 'Disattiva la geolocalizzazione della fotocamera se vuoi più privacy.', module: '#', category: 'privacy' },
    { term: 'Consenso Marketing', def: 'Permesso dato a un\'azienda di inviarti email pubblicitarie o chiamate.', example: 'Spuntare la casella per ricevere la newsletter di un negozio.', action: 'Non è quasi mai obbligatorio per usare un servizio.', module: '#', category: 'privacy' },
    { term: 'Tracciamento Online', def: 'Sistemi che seguono la tua navigazione su diversi siti web.', example: 'Siti diversi che mostrano lo stesso banner pubblicitario.', action: 'Usa browser che bloccano i tracker (es. Brave o Firefox).', module: '#', category: 'privacy' },

    // Scuola
    { term: 'Registro Elettronico', def: 'Piattaforma online dove i docenti segnano voti, assenze e compiti.', example: 'Entrare con le credenziali per vedere il voto dell\'ultimo compito in classe.', action: 'Controllalo quotidianamente per restare aggiornato sulla didattica.', module: 'modulo-08-scuola-famiglia', category: 'scuola' },
    { term: 'PagoInRete', def: 'Il servizio del Ministero dell\'Istruzione per pagare tasse scolastiche e gite.', example: 'Pagare l\'assicurazione scolastica annuale del figlio.', action: 'Si accede solitamente con SPID o CIE.', module: 'modulo-08-scuola-famiglia', category: 'scuola' },
    { term: 'Borsa di Studio', def: 'Sostegno economico per studenti meritevoli o con basso reddito.', example: 'Ricevere un contributo per l\'acquisto dei libri universitari.', action: 'Verifica i bandi regionali ogni estate.', module: '#', category: 'scuola' },
    { term: 'PCTO (Ex Alternanza)', def: 'Percorsi formativi che gli studenti delle superiori fanno presso aziende o enti.', example: 'Fare uno stage di due settimane in una biblioteca comunale.', action: 'È un requisito per l\'ammissione all\'esame di maturità.', module: '#', category: 'scuola' },
    { term: 'Bonus Cultura (18app)', def: 'Bonus di 500€ per i neo-diciottenni da spendere in libri, concerti e cinema.', example: 'Comprare i libri per l\'università usando il voucher statale.', action: 'Richiedilo tramite il sito ufficiale appena compiuti 18 anni.', module: '#', category: 'scuola' },
    { term: 'DAD (Didattica a Distanza)', def: 'Lezioni svolte tramite computer e piattaforme video anziché in presenza.', example: 'Seguire la lezione di storia su Zoom o Google Meet.', action: 'Assicurati di avere una connessione stabile e un ambiente silenzioso.', module: 'modulo-08-scuola-famiglia', category: 'scuola' },
    { term: 'Consiglio d\'Istituto', def: 'Organo della scuola che decide su bilancio, calendario e regolamenti.', example: 'Votare per i rappresentanti dei genitori nel consiglio.', action: 'Partecipa alle elezioni per far sentire la tua voce nella scuola.', module: '#', category: 'scuola' },
    { term: 'Rappresentante di Classe', def: 'Genitore o studente eletto come tramite tra la classe e la scuola.', example: 'Riferire ai professori un problema comune a molti studenti.', action: 'È la figura di riferimento per comunicazioni di gruppo.', module: '#', category: 'scuola' },
    { term: 'Orientamento Scolastico', def: 'Attività per aiutare gli studenti a scegliere la scuola superiore o l\'università.', example: 'Partecipare agli "Open Day" organizzati dai licei.', action: 'Inizia a informarti almeno un anno prima del cambio ciclo.', module: '#', category: 'scuola' },
    { term: 'PTOF', def: 'Piano Triennale dell\'Offerta Formativa, il documento che spiega cosa offre la scuola.', example: 'Leggere il PTOF per sapere quali lingue straniere si studiano.', action: 'Consultalo sul sito della scuola prima di iscrivere tuo figlio.', module: '#', category: 'scuola' },

    // Famiglia
    { term: 'Amministratore di Sostegno', def: 'Persona nominata dal giudice per aiutare chi non è del tutto autonomo.', example: 'Un figlio che gestisce i conti del genitore anziano con demenza.', action: 'Si richiede tramite ricorso al Giudice Tutelare.', module: '#', category: 'famiglia' },
    { term: 'Invalidità Civile', def: 'Riconoscimento di una riduzione della capacità lavorativa per motivi di salute.', example: 'Ottenere la pensione di invalidità o l\'indennità di accompagnamento.', action: 'La procedura inizia dal medico di base e prosegue all\'INPS.', module: '#', category: 'famiglia' },
    { term: 'Legge 104', def: 'Legge che garantisce permessi e agevolazioni a chi ha una disabilità grave o ai suoi parenti.', example: 'Prendere 3 giorni di permesso al mese per assistere un genitore disabile.', action: 'Richiede una visita medica di accertamento da parte della commissione ASL.', module: '#', category: 'famiglia' },
    { term: 'Assegno Unico', def: 'Sostegno economico mensile per ogni figlio a carico, dal settimo mese di gravidanza ai 21 anni.', example: 'Ricevere 150€ al mese per ogni figlio minorenne sul conto corrente.', action: 'Fai domanda sul sito INPS o tramite CAF.', module: '#', category: 'famiglia' },
    { term: 'Congedo Parentale', def: 'Periodo di astensione dal lavoro per prendersi cura dei figli, parzialmente pagato.', example: 'Un padre che resta a casa 2 mesi per stare con il neonato.', action: 'Va richiesto al datore di lavoro e all\'INPS.', module: '#', category: 'famiglia' },
    { term: 'Bonus Nido', def: 'Contributo per pagare le rette dell\'asilo nido o l\'assistenza domiciliare.', example: 'Ricevere il rimborso della retta mensile del nido comunale.', action: 'Carica le fatture pagate sul portale web dell\'INPS.', module: '#', category: 'famiglia' },
    { term: 'Consultorio', def: 'Servizio sanitario gratuito per la salute della donna, della coppia e della famiglia.', example: 'Andare al consultorio per parlare con uno psicologo o un ginecologo.', action: 'L\'accesso è spesso diretto e senza impegnativa del medico.', module: '#', category: 'famiglia' },
    { term: 'Mediazione Familiare', def: 'Percorso per aiutare i genitori che si separano a trovare accordi sui figli.', example: 'Parlare con un mediatore per decidere i turni delle vacanze.', action: 'Molto utile per evitare lunghe e costose cause legali.', module: '#', category: 'famiglia' },
    { term: 'Affidamento Condiviso', def: 'Regola per cui, dopo la separazione, entrambi i genitori mantengono la responsabilità dei figli.', example: 'I genitori prendono insieme le decisioni sulla scuola e la salute del figlio.', action: 'È il modello standard applicato dai tribunali italiani.', module: '#', category: 'famiglia' },
    { term: 'Assegno di Mantenimento', def: 'Somma versata mensilmente al coniuge o per i figli dopo la separazione.', example: 'Versare 400€ al mese per le spese quotidiane dei figli che vivono con l\'altro genitore.', action: 'L\'importo può essere rivisto se cambiano le condizioni economiche.', module: '#', category: 'famiglia' },

    // Consumatori
    { term: 'Recesso (Diritto di)', def: 'Il diritto di annullare un acquisto online entro 14 giorni senza dare spiegazioni.', example: 'Restituire un vestito comprato su internet perché non piace.', action: 'Invia una comunicazione scritta al venditore entro il termine.', module: '#', category: 'consumatori' },
    { term: 'Garanzia Legale', def: 'Protezione di 2 anni su tutti i prodotti nuovi per difetti di conformità.', example: 'Portare a riparare gratis lo smartphone che ha smesso di funzionare dopo un anno.', action: 'Conserva sempre lo scontrino o la ricevuta d\'acquisto.', module: '#', category: 'consumatori' },
    { term: 'Reclamo', def: 'Segnalazione formale a un\'azienda per un disservizio o un errore.', example: 'Scrivere al fornitore di energia perché la bolletta è troppo alta.', action: 'Usa sempre canali tracciabili come PEC o raccomandata.', module: '#', category: 'consumatori' },
    { term: 'Conciliazione', def: 'Procedura gratuita per risolvere liti tra consumatori e aziende senza andare in tribunale.', example: 'Risolvere una lite con l\'operatore telefonico tramite il portale ConciliaWeb.', action: 'È obbligatoria prima di poter fare causa ad alcune aziende.', module: '#', category: 'consumatori' },
    { term: 'ARERA', def: 'Autorità che regola i settori dell\'energia elettrica, del gas e dell\'acqua.', example: 'Controllare sul sito ARERA i prezzi medi dell\'energia.', action: 'Rivolgiti allo Sportello del Consumatore ARERA per problemi con le bollette.', module: '#', category: 'consumatori' },
    { term: 'AGCOM', def: 'Autorità per le Garanzie nelle Comunicazioni (telefonia, internet, TV).', example: 'Segnalare all\'AGCOM un operatore che non ti permette di cambiare contratto.', action: 'Usa il portale ConciliaWeb per le tue istanze contro le telco.', module: '#', category: 'consumatori' },
    { term: 'Obsolescenza Programmata', def: 'Strategia industriale che limita appositamente la durata di un prodotto.', example: 'Un elettrodomestico che si rompe subito dopo la scadenza della garanzia.', action: 'Scegli marche che garantiscono la disponibilità di pezzi di ricambio.', module: '#', category: 'consumatori' },
    { term: 'Etichetta Energetica', def: 'Scala di efficienza degli elettrodomestici da A (migliore) a G (peggiore).', example: 'Comprare un frigorifero classe A per consumare meno corrente.', action: 'Considera il risparmio in bolletta, non solo il prezzo del prodotto.', module: '#', category: 'consumatori' },
    { term: 'Class Action', def: 'Azione legale collettiva intrapresa da molti consumatori contro la stessa azienda.', example: 'Migliaia di utenti che chiedono rimborsi per un difetto comune a un modello di auto.', action: 'Informati presso le associazioni dei consumatori per aderire.', module: '#', category: 'consumatori' },
    { term: 'Prezzo al Kilo/Litro', def: 'Il prezzo reale di un prodotto confrontato con una misura standard.', example: 'Controllare il cartellino al supermercato per vedere quale pacco di pasta conviene davvero.', action: 'Guarda sempre il prezzo scritto in piccolo al kg o al litro.', module: '#', category: 'consumatori' },

    // Immigrazione
    { term: 'Permesso di Soggiorno', def: 'Documento che permette a un cittadino straniero di risiedere regolarmente in Italia.', example: 'Rinnovare il permesso per motivi di lavoro subordinato.', action: 'Fai attenzione alla data di scadenza e avvia il rinnovo in tempo.', module: '#', category: 'immigrazione' },
    { term: 'Ricongiungimento Familiare', def: 'Procedura per portare in Italia i propri familiari che vivono all\'estero.', example: 'Richiedere il nulla osta per far venire la moglie e i figli in Italia.', action: 'Occorre dimostrare di avere un alloggio idoneo e un reddito minimo.', module: '#', category: 'immigrazione' },
    { term: 'Nulla Osta', def: 'Autorizzazione rilasciata dallo Sportello Unico per l\'Immigrazione.', example: 'Ottenere il nulla osta per l\'ingresso di un lavoratore straniero.', action: 'È un passaggio fondamentale per molte tipologie di visto.', module: '#', category: 'immigrazione' },
    { term: 'Cittadinanza', def: 'Lo status legale che rende una persona cittadino di uno Stato, con diritti e doveri.', example: 'Fare domanda di cittadinanza dopo 10 anni di residenza legale in Italia.', action: 'La domanda si presenta online sul portale del Ministero dell\'Interno.', module: '#', category: 'immigrazione' },
    { term: 'Visto d\'Ingresso', def: 'Autorizzazione stampata sul passaporto per entrare in Italia per un breve o lungo periodo.', example: 'Ottenere un visto turistico per visitare l\'Italia per 15 giorni.', action: 'Si richiede al consolato o ambasciata italiana nel paese d\'origine.', module: '#', category: 'immigrazione' },
    { term: 'Test di Lingua Italiana', def: 'Esame necessario per ottenere il permesso di soggiorno UE per soggiornanti di lungo periodo.', example: 'Sostenere il test di livello A2 di italiano.', action: 'Prenota il test tramite il portale del Ministero dell\'Interno.', module: '#', category: 'immigrazione' },
    { term: 'Accordo di Integrazione', def: 'Contratto tra lo Stato e il cittadino straniero che entra in Italia per la prima volta.', example: 'Impegnarsi a imparare l\'italiano e rispettare le leggi della Costituzione.', action: 'Il mancato rispetto degli impegni può portare alla perdita dei punti.', module: '#', category: 'immigrazione' },
    { term: 'Protezione Internazionale', def: 'Status concesso a chi fugge da guerre o persecuzioni (rifugiato o protezione sussidiaria).', example: 'Fare domanda d\'asilo appena arrivati in Italia.', action: 'Rivolgiti alla Questura o alla Polizia di Frontiera per presentare domanda.', module: '#', category: 'immigrazione' },
    { term: 'Dichiarazione di Ospitalità', def: 'Comunicazione obbligatoria per chi ospita un cittadino straniero nella propria casa.', example: 'Comunicare alla Polizia che un amico straniero dormirà da te per un mese.', action: 'Va presentata entro 48 ore dall\'inizio dell\'ospitalità.', module: '#', category: 'immigrazione' },
    { term: 'Tessera Sanitaria Stranieri', def: 'Documento che garantisce l\'assistenza medica ai cittadini stranieri regolari.', example: 'Andare dal medico di base usando la tessera sanitaria italiana.', action: 'Iscriviti al Servizio Sanitario Nazionale (SSN) presso l\'ASL.', module: '#', category: 'immigrazione' },
    { term: 'SPRAR/SAI', def: 'Sistema di accoglienza e integrazione per richiedenti asilo e rifugiati gestito dai Comuni.', example: 'Un rifugiato che segue un corso di formazione professionale tramite il progetto SAI.', action: 'Rivolgiti ai servizi sociali del Comune per informazioni sull\'accoglienza.', module: '#', category: 'immigrazione' },
    { term: 'Codice STP', def: 'Codice per "Straniero Temporaneamente Presente", garantisce l\'assistenza sanitaria ai cittadini extra-UE non regolari.', example: 'Accedere al pronto soccorso o a visite urgenti anche senza permesso di soggiorno.', action: 'Viene rilasciato dalle ASL e ha validità di sei mesi, rinnovabile.', module: '#', category: 'immigrazione' },
    { term: 'Permesso UE Lungo Periodo', def: 'Permesso di soggiorno a tempo indeterminato (ex Carta di Soggiorno) per chi risiede in Italia da almeno 5 anni.', example: 'Ottenere un permesso che non scade ogni due anni e permette di lavorare in UE.', action: 'Richiede il superamento di un test di lingua italiana e un reddito minimo.', module: '#', category: 'immigrazione' },
    { term: 'Kit Giallo', def: 'Busta contenente i moduli per la richiesta o il rinnovo del permesso di soggiorno da inviare tramite Poste Italiane.', example: 'Andare alle Poste a ritirare il kit per rinnovare il permesso per lavoro.', action: 'Compilalo con attenzione e non chiudere la busta prima della consegna.', module: '#', category: 'immigrazione' },
    { term: 'Coesione Familiare', def: 'Procedura per ottenere un permesso di soggiorno per un familiare già presente in Italia con visto turistico.', example: 'Regolarizzare la posizione del coniuge entrato con visto breve.', action: 'Si richiede direttamente in Questura senza passare dallo Sportello Unico.', module: '#', category: 'immigrazione' },

    // Sanità
    { term: 'TEAM', def: 'Tessera Europea di Assicurazione Malattia (il retro della Tessera Sanitaria).', example: 'Usarla per ricevere cure mediche urgenti durante una vacanza in Francia.', action: 'Portala sempre con te quando viaggi in Europa.', module: '#', category: 'sanita' },
    { term: 'Ticket', def: 'Quota pagata dal cittadino per contribuire al costo di visite o esami sanitari.', example: 'Pagare 36€ per una visita specialistica dermatologica.', action: 'Controlla se hai diritto all\'esenzione per reddito o patologia.', module: '#', category: 'sanita' },
    { term: 'CUP', def: 'Centro Unico di Prenotazione per fissare visite mediche ed esami.', example: 'Chiamare il numero verde del CUP per prenotare un\'ecografia.', action: 'Tieni a portata di mano l\'impegnativa del medico.', module: '#', category: 'sanita' },
    { term: 'FSE (Fascicolo Sanitario)', def: 'Raccolta online di tutta la tua storia medica (referti, ricette, vaccini).', example: 'Scaricare l\'esito degli esami del sangue senza tornare in ospedale.', action: 'Accedi tramite il sito della tua Regione con SPID o CIE.', module: '#', category: 'sanita' },
    { term: 'Ricetta Elettronica', def: 'La prescrizione medica digitale che sostituisce la vecchia ricetta rossa cartacea.', example: 'Ricevere il codice della ricetta via SMS e andare direttamente in farmacia.', action: 'Dalla farmacia basta fornire il codice e il codice fiscale.', module: '#', category: 'sanita' },
    { term: 'Medico di Medicina Generale', def: 'Il medico di famiglia, il primo punto di contatto per la salute.', example: 'Andare dal medico per farsi prescrivere una cura per l\'influenza.', action: 'Puoi cambiarlo in ogni momento recandoti all\'ASL o online.', module: '#', category: 'sanita' },
    { term: 'Guardia Medica (CA)', def: 'Servizio di assistenza medica che sostituisce il medico di famiglia la notte e nei festivi.', example: 'Chiamare la guardia medica la domenica mattina per una febbre alta.', action: 'Attivo dalle 20:00 alle 8:00 e nei giorni festivi.', module: '#', category: 'sanita' },
    { term: 'Intramoenia', def: 'Visite effettuate da medici ospedalieri privatamente all\'interno dell\'ospedale stesso.', example: 'Pagare per avere una visita più rapida con un medico specifico.', action: 'I costi sono più alti del ticket ma solitamente inferiori al privato puro.', module: '#', category: 'sanita' },
    { term: 'Codici Colore Pronto Soccorso', def: 'Sistema di priorità basato sulla gravità: Bianco, Verde, Giallo, Rosso.', example: 'Aspettare più a lungo con codice verde perché è arrivato un codice rosso.', action: 'Vai al pronto soccorso solo per vere emergenze.', module: '#', category: 'sanita' },
    { term: 'Impegnativa (Ricetta)', def: 'Documento con cui il medico prescrive visite o esami specialistici.', example: 'L\'impegnativa per una visita oculistica con priorità "D" (differibile).', action: 'Controlla la data di scadenza: solitamente vale un anno.', module: '#', category: 'sanita' },
    { term: 'Esenzione Ticket', def: 'Diritto a non pagare il ticket sanitario per motivi di reddito, età, patologia o invalidità.', example: 'Non pagare gli esami del sangue perché si appartiene a una fascia di reddito bassa (es. E01).', action: 'Verifica la tua esenzione sul portale sanitario regionale o dal medico.', module: '#', category: 'sanita' },
    { term: 'Ricetta Bianca', def: 'Prescrizione medica su carta semplice per farmaci non rimborsabili dal Servizio Sanitario Nazionale.', example: 'Il medico prescrive un integratore o un farmaco di fascia C.', action: 'Può essere anche elettronica (dematerializzata) con un codice NRBE.', module: '#', category: 'sanita' },
    { term: 'Consenso Informato', def: 'Autorizzazione firmata dal paziente dopo essere stato informato sui rischi e benefici di un trattamento.', example: 'Firmare il modulo prima di sottoporsi a un intervento chirurgico.', action: 'Leggi sempre tutto con attenzione e fai domande se hai dubbi.', module: '#', category: 'sanita' },
    { term: 'Libretto Sanitario', def: 'Documento che riporta i dati sanitari principali e la scelta del medico di base.', example: 'Esibire il libretto per iscrivere il figlio a scuola o per un cambio medico.', action: 'Oggi è quasi ovunque sostituito dal Fascicolo Sanitario Elettronico.', module: '#', category: 'sanita' },
    { term: 'Certificato di Malattia Telematico', def: 'Documento che il medico invia direttamente all\'INPS per giustificare l\'assenza dal lavoro.', example: 'Restare a casa con l\'influenza e comunicare al datore di lavoro il numero di protocollo.', action: 'Controlla che il medico abbia i tuoi dati corretti per l\'invio.', module: '#', category: 'sanita' },

    // Mobilità
    { term: 'Bollo Auto', def: 'Tassa automobilistica regionale sulla proprietà di un veicolo.', example: 'Pagare il bollo annuale per la propria utilitaria.', action: 'Si paga online sul sito ACI o tramite app IO.', module: '#', category: 'mobilita' },
    { term: 'ZTL', def: 'Zona a Traffico Limitato, aree dove possono entrare solo i veicoli autorizzati.', example: 'Prendere una multa perché si è entrati nel centro storico senza permesso.', action: 'Controlla sempre i cartelli luminosi agli ingressi (Varchi).', module: '#', category: 'mobilita' },
    { term: 'Patente a Punti', def: 'Sistema che prevede la decurtazione di punti in caso di infrazioni stradali.', example: 'Perdere 5 punti per aver usato il cellulare alla guida.', action: 'Controlla il tuo saldo punti sul "Portale dell\'Automobilista".', module: '#', category: 'mobilita' },
    { term: 'Passaggio di Proprietà', def: 'Atto legale con cui si trasferisce la proprietà di un veicolo da un venditore a un compratore.', example: 'Andare in un\'agenzia pratiche auto per vendere la propria moto usata.', action: 'Richiede la firma autenticata sul certificato di proprietà.', module: '#', category: 'mobilita' },
    { term: 'Revisione Periodica', def: 'Controllo tecnico obbligatorio per verificare la sicurezza e le emissioni del veicolo.', example: 'Portare l\'auto in officina autorizzata ogni 2 anni per la revisione.', action: 'La prima va fatta dopo 4 anni, poi ogni 2 anni.', module: '#', category: 'mobilita' },
    { term: 'RC Auto', def: 'Assicurazione obbligatoria per la Responsabilità Civile verso terzi.', example: 'L\'assicurazione che paga i danni se tamponi un\'altra auto.', action: 'Non guidare mai senza: le sanzioni sono pesantissime.', module: '#', category: 'mobilita' },
    { term: 'Bonus Trasporti', def: 'Contributo statale per l\'acquisto di abbonamenti ai mezzi pubblici.', example: 'Ottenere uno sconto di 60€ per l\'abbonamento annuale del treno.', action: 'Verifica la disponibilità dei fondi sul sito del Ministero.', module: '#', category: 'mobilita' },
    { term: 'Car Sharing', def: 'Servizio di noleggio auto per brevi periodi (anche pochi minuti) tramite app.', example: 'Sbloccare un\'auto parcheggiata in strada usando lo smartphone.', action: 'Molto utile per spostamenti veloci in grandi città senza possedere un\'auto.', module: '#', category: 'mobilita' },
    { term: 'Mobilità Sostenibile', def: 'Modi di spostarsi che riducono l\'impatto ambientale (bici, elettrico, mezzi pubblici).', example: 'Scegliere di andare al lavoro con il monopattino elettrico.', action: 'Molti comuni offrono incentivi per l\'acquisto di bici elettriche.', module: '#', category: 'mobilita' },
    { term: 'Portale dell\'Automobilista', def: 'Sito ufficiale del Ministero delle Infrastrutture e dei Trasporti per i cittadini.', example: 'Accedere per vedere la data di scadenza della propria patente.', action: 'Utile per scaricare l\'attestato del saldo punti patente.', module: '#', category: 'mobilita' },
    { term: 'Documento Unico (DU)', def: 'Il nuovo documento che sostituisce il certificato di proprietà e il libretto di circolazione del veicolo.', example: 'Ricevere il DU dopo aver acquistato un\'auto usata.', action: 'Contiene tutti i dati tecnici e giuridici del veicolo in un unico foglio.', module: '#', category: 'mobilita' },
    { term: 'Area B / Area C', def: 'Zone a traffico limitato della città di Milano con restrizioni per i veicoli più inquinanti.', example: 'Controllare se la propria auto diesel può entrare in centro a Milano.', action: 'Verifica la classe ambientale del tuo veicolo (Euro 4, 5, 6).', module: '#', category: 'mobilita' },
    { term: 'Neopatentato', def: 'Conducente che ha conseguito la patente da meno di tre anni, soggetto a limiti particolari.', example: 'Non poter guidare auto con potenza superiore a 70 kW nel primo anno.', action: 'Ricorda che per i neopatentati il tasso alcolemico deve essere zero.', module: '#', category: 'mobilita' },
    { term: 'Iscrizione al PRA', def: 'Registrazione obbligatoria dei veicoli presso il Pubblico Registro Automobilistico gestito dall\'ACI.', example: 'Registrare il veicolo entro 60 giorni dal passaggio di proprietà.', action: 'È necessaria per rendere pubblico l\'atto di compravendita.', module: '#', category: 'mobilita' },
    { term: 'Visura Targa', def: 'Ricerca che permette di conoscere i dati tecnici di un veicolo e l\'intestatario attuale partendo dalla targa.', example: 'Controllare se un\'auto usata che si vuole comprare ha fermi amministrativi.', action: 'Può essere richiesta online sul sito dell\'ACI pagando una piccola tariffa.', module: '#', category: 'mobilita' }
];

const CATEGORIES = [
    { id: 'all', label: 'Tutti' },
    { id: 'identita-digitale', label: 'Identità' },
    { id: 'burocrazia', label: 'Burocrazia' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa' },
    { id: 'soldi', label: 'Soldi' },
    { id: 'sicurezza-digitale', label: 'Sicurezza' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'scuola', label: 'Scuola' },
    { id: 'famiglia', label: 'Famiglia' },
    { id: 'consumatori', label: 'Consumatori' },
    { id: 'immigrazione', label: 'Immigrazione' },
    { id: 'sanita', label: 'Sanità' },
    { id: 'mobilita', label: 'Mobilità' }
]

export default function GlossaryPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filteredTerms = useMemo(() => {
        return TERMS.filter(t => {
            const matchesSearch = t.term.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                 t.def.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory
            return matchesSearch && matchesCategory
        }).sort((a, b) => a.term.localeCompare(b.term))
    }, [searchQuery, selectedCategory])

    return (
        <Container size="md" className="py-16 space-y-12">
            <header className="space-y-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                    <Book size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground tracking-tight">Glossario Civico</h1>
                <p className="text-xl text-secondary leading-relaxed max-w-2xl mx-auto">
                    Il gergo burocratico e tecnico spiegato in parole povere. Tutto quello che serve per non perdersi tra sigle e termini complessi.
                </p>
            </header>

            <div className="space-y-8">
                {/* Filters & Search */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">Cerca un termine</h3>
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                            <input 
                                type="text"
                                placeholder="Esempio: SPID, Phishing..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-surface border border-border rounded-xl h-12 pl-10 pr-4 text-sm font-medium focus:outline-none focus:border-primary transition-all shadow-sm"
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xs font-bold text-secondary uppercase tracking-widest">Categoria</h3>
                        <div className="flex flex-wrap gap-2">
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border",
                                        selectedCategory === cat.id
                                            ? "bg-foreground text-background border-foreground shadow-sm"
                                            : "bg-surface text-secondary border-border hover:border-foreground/30 hover:text-foreground"
                                    )}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6 pt-4">
                    {filteredTerms.length === 0 ? (
                        <div className="py-24 text-center bg-surface border border-dashed border-border rounded-[2rem]">
                            <p className="text-secondary mb-4">Nessun termine corrisponde alla tua ricerca.</p>
                            <button 
                                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                                className="text-primary font-bold text-sm uppercase flex items-center gap-2 mx-auto hover:underline"
                            >
                                <RotateCcw className="w-4 h-4" /> Reset filtri
                            </button>
                        </div>
                    ) : (
                        filteredTerms.map((item, i) => (
                            <Card key={i} className="p-8 border border-border bg-surface hover:border-primary/20 transition-all rounded-[2rem] space-y-6">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge variant="outline" className="text-[9px] uppercase font-bold tracking-[0.1em] border-primary/20 bg-primary/5 text-primary">
                                                {CATEGORIES.find(c => c.id === item.category)?.label || item.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground tracking-tight">{item.term}</h3>
                                        <p className="text-lg text-secondary leading-relaxed font-medium">{item.def}</p>
                                    </div>
                                    <div className="p-3 bg-background rounded-2xl border border-border text-secondary/40 hidden sm:block">
                                        <Book className="w-6 h-6" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div className="bg-background/50 p-4 rounded-xl space-y-1 border border-border/40">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Esempio pratico</span>
                                        <p className="text-sm text-secondary italic leading-relaxed">"{item.example}"</p>
                                    </div>
                                    <div className="bg-primary/[0.03] p-4 rounded-xl space-y-1 border border-primary/10">
                                        <span className="text-[9px] font-bold uppercase tracking-widest text-primary">Consiglio operativo</span>
                                        <p className="text-sm font-semibold text-foreground leading-relaxed">{item.action}</p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-border/60 flex justify-end">
                                    <Link 
                                        href={item.module.startsWith('/') ? item.module : `/moduli/${item.module}`}
                                        className="inline-flex items-center text-xs font-bold text-primary hover:underline group uppercase tracking-widest"
                                    >
                                        Vai alla guida <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </Card>
                        ))
                    )}
                </div>
            </div>
            
            <section className="bg-foreground text-white rounded-[2.5rem] p-8 md:p-12 mt-12 text-center space-y-6">
                <h3 className="text-2xl font-display font-semibold">Vuoi stampare il glossario?</h3>
                <p className="text-white/70 max-w-xl mx-auto">
                    Puoi stampare questa pagina per tenerla a portata di mano o consegnarla a chi ha difficoltà con il linguaggio digitale.
                </p>
                <button 
                    onClick={() => window.print()}
                    className="bg-white text-foreground font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all shadow-lg"
                >
                    Stampa ora
                </button>
            </section>
        </Container>
    )
}

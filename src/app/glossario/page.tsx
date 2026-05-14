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
    category: 'sicurezza' | 'burocrazia' | 'lavoro' | 'casa' | 'famiglia' | 'pagamenti'
}

const TERMS: Term[] = [
    // Sicurezza Digitale
    { term: '2FA (Two-Factor Authentication)', def: 'L\'autenticazione a due fattori aggiunge un secondo livello di sicurezza oltre alla password (es. un codice via SMS o app).', example: 'Quando accedi a Instagram, ti viene chiesto un codice inviato sul telefono.', action: 'Attivala su ogni account importante.', module: 'modulo-02-account-security', category: 'sicurezza' },
    { term: 'Backup Codes', def: 'Codici monouso da stampare e conservare per accedere all\'account se perdi il telefono o non ricevi l\'SMS.', example: 'Google e Meta forniscono una lista di 8-10 codici da salvare.', action: 'Salvali in un luogo sicuro (non sul telefono).', module: 'modulo-02-account-security', category: 'sicurezza' },
    { term: 'Phishing', def: 'Truffa via email o messaggi che cerca di rubare password o dati bancari fingendosi un servizio affidabile.', example: 'Una finta mail della banca che ti chiede di cliccare su un link per "sbloccare il conto".', action: 'Non cliccare mai. Verifica l\'indirizzo del mittente.', module: 'modulo-03-truffe-phishing', category: 'sicurezza' },
    { term: 'Smishing', def: 'Phishing effettuato tramite messaggi SMS invece di email.', example: 'Un SMS che dice "Il tuo pacco è bloccato, paga 2€ per sbloccarlo".', action: 'Ignora e blocca il numero. Non cliccare sul link.', module: 'modulo-03-truffe-phishing', category: 'sicurezza' },
    { term: 'Vishing', def: 'Truffa effettuata tramite chiamate vocali in cui il truffatore si finge un operatore bancario o di supporto tecnico.', example: 'Qualcuno ti chiama dicendo di essere della tua banca e ti chiede il codice OTP ricevuto via SMS.', action: 'Riaggancia e chiama tu il numero ufficiale della banca.', module: 'modulo-03-truffe-phishing', category: 'sicurezza' },
    { term: 'Passkey', def: 'Nuova tecnologia che sostituisce la password con l\'impronta digitale o il volto (biometria), molto più sicura.', example: 'Accedere a Google usando solo lo sblocco del telefono.', action: 'Inizia a usarle dove supportate.', module: 'modulo-02-account-security', category: 'sicurezza' },
    { term: 'Password Manager', def: 'App che crea e conserva password complesse e diverse per ogni sito, così devi ricordarne solo una.', example: 'Bitwarden, 1Password o il Portachiavi iCloud.', action: 'Usane uno. Non riutilizzare mai le password.', module: 'modulo-02-account-security', category: 'sicurezza' },
    { term: 'Malware', def: 'Software dannoso (virus, trojan, spyware) progettato per infettare il sistema o rubare dati.', example: 'Un file scaricato che rallenta il PC e ruba le tue credenziali.', action: 'Mantieni il sistema aggiornato e scarica solo da fonti ufficiali.', module: 'modulo-07-privacy-smartphone', category: 'sicurezza' },
    { term: 'SIM Swap', def: 'Attacco in cui un criminale riesce a trasferire il tuo numero di telefono su una sua SIM per ricevere i tuoi codici 2FA.', example: 'Il tuo telefono perde improvvisamente il segnale e non riesci più a chiamare.', action: 'Metti un PIN alla tua SIM fisica.', module: 'modulo-01b-primo-soccorso', category: 'sicurezza' },
    { term: 'Data Breach', def: 'Violazione di sicurezza in cui dati riservati vengono rubati da un database aziendale e messi online.', example: 'Hacker rubano milioni di password da un sito di shopping.', action: 'Controlla su Have I Been Pwned.', module: 'modulo-02-account-security', category: 'sicurezza' },
    { term: 'Doxxing', def: 'Pubblicazione online di dati privati (indirizzo, telefono) con l\'intento di intimidire o danneggiare una persona.', example: 'Qualcuno pubblica il tuo indirizzo di casa dopo una lite sui social.', action: 'Segnala il contenuto e rendi i profili privati.', module: 'modulo-06-stalking-doxxing', category: 'sicurezza' },
    
    // Burocrazia
    { term: 'SPID (Sistema Pubblico di Identità Digitale)', def: 'Le credenziali uniche per accedere ai servizi online della Pubblica Amministrazione.', example: 'Usare SPID per entrare nel sito dell\'INPS o dell\'Agenzia delle Entrate.', action: 'Mantieni aggiornati i tuoi dati di contatto nello SPID.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'CIE (Carta di Identità Elettronica)', def: 'Il documento di identità fisico che contiene un chip per l\'accesso ai servizi digitali.', example: 'Appoggiare la CIE sul retro dello smartphone per autenticarsi nell\'app IO.', action: 'Assicurati di avere il PIN e il PUK ricevuti con la carta.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'PEC (Posta Elettronica Certificata)', def: 'Email con valore legale equivalente a una raccomandata con ricevuta di ritorno.', example: 'Inviare una disdetta o una comunicazione formale a un\'azienda o al Comune.', action: 'Controlla periodicamente la tua PEC: le comunicazioni lì sono legali.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'ANPR (Anagrafe Nazionale Popolazione Residente)', def: 'Banca dati unica nazionale che permette di scaricare certificati anagrafici online gratuitamente.', example: 'Scaricare lo stato di famiglia dal portale ANPR senza andare in Comune.', action: 'Usa il portale ANPR per certificati gratuiti con bollo assolto.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'ISEE (Indicatore Situazione Economica Equivalente)', def: 'Parametro che serve a valutare la situazione economica delle famiglie per accedere a bonus e agevolazioni.', example: 'Presentare l\'ISEE per avere lo sconto sulle tasse universitarie o il bonus bollette.', action: 'Puoi fare l\'ISEE precompilato direttamente sul sito INPS.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'Marca da bollo digitale', def: 'Pagamento dell\'imposta di bollo tramite canali telematici per documenti digitali.', example: 'Pagare 16€ per un certificato online tramite PagoPA.', action: 'Puoi acquistarla spesso contestualmente alla richiesta online.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    
    // Lavoro
    { term: 'NASpI', def: 'Indennità mensile di disoccupazione per i lavoratori dipendenti che perdono involontariamente il lavoro.', example: 'Ricevere il sostegno economico dopo la fine di un contratto a termine.', action: 'Fai domanda entro 68 giorni dalla fine del rapporto.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Dimissioni Telematiche', def: 'Procedura obbligatoria online per lasciare il lavoro; le dimissioni cartacee non sono più valide.', example: 'Accedere al portale del Ministero del Lavoro per inviare le dimissioni.', action: 'Serve lo SPID o la CIE per completare la procedura.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'DID (Dichiarazione Immediata Disponibilità)', def: 'Atto con cui si dichiara di essere disoccupati e disponibili a lavorare o a percorsi di formazione.', example: 'Rilasciare la DID per poter richiedere la NASpI.', action: 'Si fa online sul portale ANPAL o tramite i Centri per l\'Impiego.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'TFR (Trattamento di Fine Rapporto)', def: 'Somma accantonata dal datore di lavoro e corrisposta al dipendente alla fine del rapporto.', example: 'Ricevere la "liquidazione" dopo essersi licenziati.', action: 'Puoi decidere di lasciarlo in azienda o versarlo in un fondo pensione.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Busta Paga (Cedolino)', def: 'Documento che riepiloga la retribuzione, le trattenute fiscali e i contributi versati in un mese.', example: 'Controllare quante ferie sono rimaste o lo stipendio netto ricevuto.', action: 'Conserva sempre tutti i cedolini in formato digitale o cartaceo.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    
    // Casa
    { term: 'Contratto di Locazione', def: 'Accordo tra proprietario e inquilino per l\'affitto di un immobile.', example: 'Firmare un contratto 4+4 per l\'abitazione principale.', action: 'Assicurati che venga registrato all\'Agenzia delle Entrate entro 30 giorni.', module: 'modulo-09-documenti-identita', category: 'casa' },
    { term: 'Cedolare Secca', def: 'Regime fiscale opzionale per l\'affitto che sostituisce IRPEF e imposte di registro con un\'aliquota fissa.', example: 'Il proprietario sceglie la cedolare al 21% per non pagare l\'imposta di bollo.', action: 'Controlla nel contratto se è applicata: in tal caso l\'affitto non può subire aumenti ISTAT.', module: 'modulo-09-documenti-identita', category: 'casa' },
    { term: 'Voltura', def: 'Contemporaneo passaggio del contratto di fornitura (luce/gas) da un cliente a un altro senza interruzione.', example: 'Cambiare l\'intestatario delle bollette quando si entra in una nuova casa.', action: 'Serve il codice POD (luce) o PDR (gas) della bolletta precedente.', module: 'modulo-09-documenti-identita', category: 'casa' },
    { term: 'Subentro', def: 'Riattivazione di un contatore di luce o gas che è stato precedentemente cessato.', example: 'Attivare il contatore in una casa rimasta vuota per mesi.', action: 'Può avere costi fissi di gestione variabili tra i fornitori.', module: 'modulo-09-documenti-identita', category: 'casa' },
    
    // Pagamenti
    { term: 'PagoPA', def: 'Sistema unico per i pagamenti elettronici verso la Pubblica Amministrazione.', example: 'Pagare la mensa scolastica o una multa tramite l\'app IO o il tabaccaio.', action: 'Puoi pagare inquadrando il QR code sull\'avviso di pagamento.', module: 'modulo-09-documenti-identita', category: 'pagamenti' },
    { term: 'Chargeback', def: 'Procedura di storno di un pagamento effettuato con carta di credito in caso di truffa o merce non ricevuta.', example: 'Chiedere alla banca il rimborso di un acquisto su un sito truffa.', action: 'Contatta subito la tua banca se l\'esercente non ti rimborsa.', module: 'modulo-03-truffe-phishing', category: 'pagamenti' },
    { term: 'IBAN', def: 'Codice alfanumerico che identifica in modo univoco il tuo conto corrente bancario.', example: 'Fornire l\'IBAN al datore di lavoro per ricevere lo stipendio.', action: 'L\'IBAN italiano inizia sempre con IT.', module: 'modulo-03-truffe-phishing', category: 'pagamenti' },
    { term: 'Contactless', def: 'Tecnologia che permette di pagare avvicinando la carta o lo smartphone al POS senza inserirli.', example: 'Pagare il caffè appoggiando il telefono sul lettore.', action: 'Sotto i 50€ spesso non serve il PIN, attiva le notifiche per ogni spesa.', module: 'modulo-03-truffe-phishing', category: 'pagamenti' },
    
    // Famiglia
    { term: 'Cyberbullismo', def: 'Attacchi, offese o umiliazioni ripetute verso una persona tramite strumenti digitali.', example: 'Insulti continui in un gruppo classe su WhatsApp verso un compagno.', action: 'Documenta, non rispondere e segnala a genitori o docenti.', module: 'modulo-06-stalking-doxxing', category: 'famiglia' },
    { term: 'Sharenting', def: 'La pratica dei genitori di condividere foto e video dei figli sui social network in modo eccessivo.', example: 'Pubblicare ogni giorno foto del figlio piccolo sul proprio profilo pubblico.', action: 'Evita di pubblicare foto dove il volto del minore è riconoscibile.', module: 'modulo-08-scuola-famiglia', category: 'famiglia' },
    { term: 'Parental Control', def: 'Software o impostazioni che permettono ai genitori di limitare l\'accesso a contenuti o app per i figli.', example: 'Usare Family Link o Tempo di Utilizzo per bloccare app a una certa ora.', action: 'Usalo come supporto, non come sostituto del dialogo.', module: 'modulo-08-scuola-famiglia', category: 'famiglia' }
];

const CATEGORIES = [
    { id: 'all', label: 'Tutti' },
    { id: 'sicurezza', label: 'Sicurezza' },
    { id: 'burocrazia', label: 'Burocrazia' },
    { id: 'lavoro', label: 'Lavoro' },
    { id: 'casa', label: 'Casa' },
    { id: 'pagamenti', label: 'Pagamenti' },
    { id: 'famiglia', label: 'Famiglia' }
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
                                                {item.category}
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

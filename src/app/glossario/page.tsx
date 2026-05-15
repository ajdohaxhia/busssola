'use client'

import { useState, useMemo } from 'react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Book, ArrowRight, Search, RotateCcw, Filter } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PageHeader } from '@/components/ui/PageHeader'
import { SearchBox } from '@/components/ui/SearchBox'
import { Button } from '@/components/ui/Button'
import * as Icons from 'lucide-react'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbStructuredData, absoluteUrl } from '@/lib/seo'

type Term = {
    term: string
    def: string
    example: string
    action: string
    module: string
    category: string
}

const TERMS: Term[] = [
    { term: '2FA (Two-Factor Authentication)', def: 'L\'autenticazione a due fattori aggiunge un secondo livello di sicurezza oltre alla password (es. un codice via SMS o app).', example: 'Quando accedi a Instagram, ti viene chiesto un codice inviato sul telefono.', action: 'Attivala su ogni account importante.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Backup Codes', def: 'Codici monouso da stampare e conservare per accedere all\'account se perdi il telefono o non ricevi l\'SMS.', example: 'Google e Meta forniscono una lista di 8-10 codici da salvare.', action: 'Salvali in un luogo sicuro (non sul telefono).', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Phishing', def: 'Truffa via email o messaggi che cerca di rubare password o dati bancari fingendosi un servizio affidabile.', example: 'Una finta mail della banca che ti chiede di cliccare su un link per "sbloccare il conto".', action: 'Non cliccare mai. Verifica l\'indirizzo del mittente.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'Smishing', def: 'Phishing effettuato tramite messaggi SMS invece di email.', example: 'Un SMS che dice "Il tuo pacco è bloccato, paga 2€ per sbloccarlo".', action: 'Ignora e blocca il numero. Non cliccare sul link.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'Vishing', def: 'Truffa effettuata tramite chiamate vocali in cui il truffatore si finge un operatore bancario o di supporto tecnico.', example: 'Qualcuno ti chiama dicendo di essere della tua banca e ti chiede il codice OTP ricevuto via SMS.', action: 'Riaggancia e chiama tu il numero ufficiale della banca.', module: 'modulo-03-truffe-phishing', category: 'sicurezza-digitale' },
    { term: 'Passkey', def: 'Nuova tecnologia che sostituisce la password con l\'impronta digitale o il volto (biometria), molto più sicura.', example: 'Accedere a Google usando solo lo sblocco del telefono.', action: 'Inizia a usarle dove supportate.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Password Manager', def: 'App che crea e conserva password complesse e diverse per ogni sito, così devi ricordarne solo una.', example: 'Bitwarden, 1Password o il Portachiavi iCloud.', action: 'Usane uno. Non riutilizzare mai le password.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Malware', def: 'Software dannoso (virus, trojan, spyware) progettato per infettare il sistema o rubare dati.', example: 'Un file scaricato che rallenta il PC e ruba le tue credenziali.', action: 'Mantieni il sistema aggiornato e scarica solo da fonti ufficiali.', module: 'modulo-07-privacy-smartphone', category: 'sicurezza-digitale' },
    { term: 'SIM Swap', def: 'Attacco in cui un criminale riesce a trasferire il tuo numero di telefono su una sua SIM per ricevere i tuoi codici 2FA.', example: 'Il tuo telefono perde improvvisamente il segnale e non riesci più a chiamare.', action: 'Metti un PIN alla tua SIM fisica.', module: 'modulo-01b-primo-soccorso', category: 'sicurezza-digitale' },
    { term: 'Data Breach', def: 'Violazione di sicurezza in cui dati riservati vengono rubati da un database aziendale e messi online.', example: 'Hacker rubano milioni di password da un sito di shopping.', action: 'Controlla su Have I Been Pwned.', module: 'modulo-02-account-security', category: 'sicurezza-digitale' },
    { term: 'Doxxing', def: 'Pubblicazione online di dati privati (indirizzo, telefono) con l\'intento di intimidire o danneggiare una persona.', example: 'Qualcuno pubblica il tuo indirizzo di casa dopo una lite sui social.', action: 'Segnala il contenuto e rendi i profili privati.', module: 'modulo-06-stalking-doxxing', category: 'sicurezza-digitale' },
    { term: 'SPID (Sistema Pubblico di Identità Digitale)', def: 'Le credenziali uniche per accedere ai servizi online della Pubblica Amministrazione.', example: 'Usare SPID per entrare nel sito dell\'INPS o dell\'Agenzia delle Entrate.', action: 'Mantieni aggiornati i tuoi dati di contatto nello SPID.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'CIE (Carta di Identità Elettronica)', def: 'Il documento di identità fisico che contiene un chip per l\'accesso ai servizi digitali.', example: 'Appoggiare la CIE sul retro dello smartphone per autenticarsi nell\'app IO.', action: 'Assicurati di avere il PIN e il PUK ricevuti con la carta.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'PEC (Posta Elettronica Certificata)', def: 'Email con valore legale equivalente a una raccomandata con ricevuta di ritorno.', example: 'Inviare una disdetta o una comunicazione formale a un\'azienda o al Comune.', action: 'Controlla periodicamente la tua PEC: le comunicazioni lì sono legali.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'ANPR (Anagrafe Nazionale Popolazione Residente)', def: 'Banca dati unica nazionale che permette di scaricare certificati anagrafici online gratuitamente.', example: 'Scaricare lo stato di famiglia dal portale ANPR senza andare in Comune.', action: 'Usa il portale ANPR per certificati gratuiti con bollo assolto.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'ISEE (Indicatore Situazione Economica Equivalente)', def: 'Parametro che serve a valutare la situazione economica delle famiglie per accedere a bonus e agevolazioni.', example: 'Presentare l\'ISEE per avere lo sconto sulle tasse universitarie o il bonus bollette.', action: 'Puoi fare l\'ISEE precompilato direttamente sul sito INPS.', module: 'modulo-09-documenti-identita', category: 'burocrazia' },
    { term: 'NASpI', def: 'Indennità mensile di disoccupazione per i lavoratori dipendenti che perdono involontariamente il lavoro.', example: 'Ricevere il sostegno economico dopo la fine di un contratto a termine.', action: 'Fai domanda entro 68 giorni dalla fine del rapporto.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Dimissioni Telematiche', def: 'Procedura obbligatoria online per lasciare il lavoro; le dimissioni cartacee non sono più valide.', example: 'Accedere al portale del Ministero del Lavoro per inviare le dimissioni.', action: 'Serve lo SPID o la CIE per completare la procedura.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'DID (Dichiarazione Immediata Disponibilità)', def: 'Atto con cui si dichiara di essere disoccupati e disponibili a lavorare o a percorsi di formazione.', example: 'Rilasciare la DID per poter richiedere la NASpI.', action: 'Si fa online sul portale ANPAL o tramite i Centri per l\'Impiego.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'TFR (Trattamento di Fine Rapporto)', def: 'Somma accantonata dal datore di lavoro e corrisposta al dipendente alla fine del rapporto.', example: 'Ricevere la "liquidazione" dopo essersi licenziati.', action: 'Puoi decidere di lasciarlo in azienda o versarlo in un fondo pensione.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Busta Paga (Cedolino)', def: 'Documento che riepiloga la retribuzione, le trattenute fiscali e i contributi versati in un mese.', example: 'Controllare quante ferie sono rimaste o lo stipendio netto ricevuto.', action: 'Conserva sempre tutti i cedolini in formato digitale o cartaceo.', module: 'modulo-10-lavoro-disoccupazione', category: 'lavoro' },
    { term: 'Cyberbullismo', def: 'Attacchi, offese o umiliazioni ripetute verso una persona tramite strumenti digitali.', example: 'Insulti continui in un gruppo classe su WhatsApp verso un compagno.', action: 'Documenta, non rispondere e segnala a genitori o docenti.', module: 'modulo-06-stalking-doxxing', category: 'famiglia' },
    { term: 'Sharenting', def: 'La pratica dei genitori di condividere foto e video dei figli sui social network in modo eccessivo.', example: 'Pubblicare ogni giorno foto del figlio piccolo sul proprio profilo pubblico.', action: 'Evita di pubblicare foto dove il volto del minore è riconoscibile.', module: 'modulo-08-scuola-famiglia', category: 'famiglia' },
    { term: 'Parental Control', def: 'Software o impostazioni che permettono ai genitori di limitare l\'accesso a contenuti o app per i figli.', example: 'Usare Family Link o Tempo di Utilizzo per bloccare app a una certa ora.', action: 'Usalo come supporto, non come sostituto del dialogo.', module: 'modulo-08-scuola-famiglia', category: 'famiglia' },
    { term: 'Firma Elettronica Avanzata (FEA)', def: 'Firma digitale realizzata con mezzi sui quali il firmatario conserva un controllo esclusivo (es. OTP o grafometrica).', example: 'Firmare la modulistica in banca su un tablet con la penna digitale.', action: 'Ha piena validità legale per la maggior parte dei contratti privati.', module: '#', category: 'burocrazia' },
    { term: 'Protocollo', def: 'Codice univoco assegnato a un documento o una pratica per attestarne la ricezione da parte della PA.', example: 'Salvare il numero di protocollo dopo aver inviato la domanda NASpI.', action: 'È la tua prova legale di invio: conservalo sempre.', module: '#', category: 'burocrazia' },
    { term: 'Ricevuta (Telematica)', def: 'Conferma digitale dell\'avvenuta operazione o pagamento.', example: 'La ricevuta PDF scaricata dopo un pagamento pagoPA.', action: 'Salvala subito in una cartella dedicata sul telefono o computer.', module: '#', category: 'burocrazia' },
    { term: 'Alias Email', def: 'Indirizzo email secondario che inoltra i messaggi alla tua casella principale senza rivelarla.', example: 'Usare un indirizzo temporaneo per iscriversi a un sito di shopping.', action: 'Utile per evitare lo spam e proteggere la tua email reale.', module: '#', category: 'privacy' },
    { term: 'Watermark Documenti', def: 'Testo sovrapposto a una foto di un documento per impedirne l\'uso fraudolento da parte di terzi.', example: 'Scrivere "Uso esclusivo per contratto affitto Rossi 2024" sopra la foto della carta d\'identità.', action: 'Aggiungilo sempre prima di inviare documenti via chat o email a sconosciuti.', module: '#', category: 'privacy' },
    { term: 'Screenshot Probatorio', def: 'Cattura dello schermo effettuata in modo da avere valore di prova (es. con data e ora visibili).', example: 'Fotografare una minaccia ricevuta in chat prima che venga cancellata.', action: 'Includi sempre l\'URL del sito o il profilo dell\'interlocutore.', module: '#', category: 'sicurezza-digitale' },
    { term: 'IMEI', def: 'Codice di 15 cifre che identifica univocamente il tuo telefono cellulare.', example: 'Fornire l\'IMEI alla Polizia per denunciare il furto dello smartphone.', action: 'Digitalo sul tastierino: *#06# e segnatelo in un posto sicuro.', module: '#', category: 'sicurezza-digitale' },
    { term: 'PIN SIM', def: 'Codice di 4 cifre che blocca l\'accesso alla scheda telefonica al riavvio.', example: 'Impostare un PIN per evitare che un ladro usi la tua SIM in un altro telefono.', action: 'Disattiva il PIN di default (solitamente 0000 o 1111) e mettine uno tuo.', module: '#', category: 'sicurezza-digitale' },
    { term: 'POD / PDR', def: 'Codici univoci che identificano rispettivamente il punto di prelievo della luce e del gas.', example: 'Fornire il POD al nuovo gestore per fare la voltura delle utenze.', action: 'Li trovi sempre nella prima o seconda pagina della bolletta.', module: '#', category: 'casa' },
];

const CATEGORIES = [
    { id: 'all', label: 'Tutti' },
    { id: 'burocrazia', label: 'Burocrazia' },
    { id: 'identita-digitale', label: 'Identità Digitale' },
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
        <Container size="lg" className="py-12 space-y-12">
            <JsonLd data={breadcrumbStructuredData([
                { name: 'Glossario', path: '/glossario' }
            ])} />
            <JsonLd data={{
                '@context': 'https://schema.org',
                '@type': 'DefinedTermSet',
                'name': 'Glossario Civico Busssola',
                'description': 'Termini burocratici e tecnici spiegati in modo semplice per i cittadini.',
                'hasDefinedTerm': filteredTerms.map(t => ({
                    '@type': 'DefinedTerm',
                    'name': t.term,
                    'description': t.def,
                    'url': absoluteUrl(`/glossario?query=${t.term}`)
                }))
            } as Record<string, unknown>} />

            <PageHeader 
                badge="Dizionario Civico"
                icon={Book}
                title="Glossario dei termini"
                description="Il gergo burocratico e tecnico spiegato in parole povere. Tutto quello che serve per non perdersi tra sigle e termini complessi."
            />

            {/* Filters Dashboard */}
            <div className="bg-surface border border-border rounded-[2.5rem] p-6 lg:p-8 shadow-sm space-y-8 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2 text-left">
                            <Search className="w-3 h-3" /> Cerca un termine
                        </label>
                        <SearchBox value={searchQuery} onChange={setSearchQuery} placeholder="Es: SPID, Phishing, ISEE..." />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary/60 flex items-center gap-2 text-left">
                            <Filter className="w-3 h-3" /> Categoria
                        </label>
                        <div className="flex flex-wrap gap-2 justify-start">
                            {CATEGORIES.slice(0, 10).map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={cn(
                                        "px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border",
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
            </div>

            <div className="space-y-6 pt-4">
                {filteredTerms.length === 0 ? (
                    <div className="py-32 flex flex-col items-center justify-center text-center bg-surface border border-dashed border-border rounded-[3rem]">
                        <div className="w-20 h-20 bg-surface-muted flex items-center justify-center rounded-3xl mb-6">
                            <Icons.SearchX className="w-10 h-10 text-secondary/30" />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">Nessun termine trovato</h3>
                        <p className="text-secondary max-w-sm mb-8 font-medium">Prova con un termine diverso o cambia categoria.</p>
                        <button 
                            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                            className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:underline"
                        >
                            <RotateCcw className="w-4 h-4" /> Reset
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTerms.map((item, i) => (
                            <Card key={i} className="p-8 border border-border bg-surface hover:shadow-xl hover:border-primary/20 transition-all rounded-[2.5rem] flex flex-col gap-6 group text-left">
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-2 text-left">
                                        <div className="flex items-center gap-2">
                                            <Badge variant="outline" className="text-[9px] uppercase font-black tracking-widest border-primary/20 bg-primary/5 text-primary">
                                                {CATEGORIES.find(c => c.id === item.category)?.label || item.category}
                                            </Badge>
                                        </div>
                                        <h3 className="text-2xl font-display font-black text-foreground group-hover:text-primary transition-colors">{item.term}</h3>
                                    </div>
                                    <div className="p-3 bg-surface-muted rounded-2xl border border-border text-secondary/40 group-hover:text-primary group-hover:bg-primary/5 transition-all shrink-0">
                                        <Book className="w-6 h-6" />
                                    </div>
                                </div>

                                <p className="text-lg text-secondary leading-relaxed font-medium text-left">
                                    {item.def}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-border/40">
                                    <div className="bg-surface-muted p-4 rounded-2xl space-y-1 border border-border/40 text-left">
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-secondary/40">Esempio pratico</span>
                                        <p className="text-sm text-secondary italic leading-relaxed font-medium">"{item.example}"</p>
                                    </div>
                                    <div className="bg-primary/[0.02] p-4 rounded-2xl space-y-1 border border-primary/10 text-left">
                                        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Consiglio</span>
                                        <p className="text-sm font-bold text-foreground leading-relaxed">{item.action}</p>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <Link 
                                        href={item.module.startsWith('/') ? item.module : `/moduli/${item.module}`}
                                        className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-primary hover:text-primary-hover group/link"
                                    >
                                        Vai alla guida <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
            
            <section className="bg-foreground text-background rounded-[3.5rem] p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-24 opacity-[0.05] pointer-events-none">
                    <Book size={400} />
                </div>
                <div className="relative z-10 space-y-6 text-center">
                    <h3 className="text-3xl md:text-5xl font-display font-bold">Vuoi stampare il glossario?</h3>
                    <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed font-medium">
                        Puoi stampare questa pagina per tenerla a portata di mano o consegnarla a chi ha difficoltà con il linguaggio digitale.
                    </p>
                    <Button 
                        onClick={() => window.print()}
                        className="bg-white text-foreground font-black uppercase tracking-widest h-16 px-10 rounded-2xl hover:bg-white/90 shadow-2xl transition-all"
                    >
                        Stampa ora
                    </Button>
                </div>
            </section>
        </Container>
    )
}

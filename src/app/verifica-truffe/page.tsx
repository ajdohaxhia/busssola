'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
    ShieldAlert, AlertTriangle, CheckCircle2, XCircle, Search,
    Bot, Globe, ShieldCheck, HelpCircle, PhoneCall,
    RefreshCw, FileText
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'

type TabType = 'analyzer' | 'deepfake' | 'domain' | 'vittima'

interface PresetExample {
    title: string
    category: string
    text: string
    threatLevel: 'critico' | 'alto' | 'medio'
    explanation: string
}

const PRESETS: PresetExample[] = [
    {
        title: 'Truffa WhatsApp ("La ballerina")',
        category: 'Furto Account / Social Engineering',
        text: 'Ciao! Puoi votare per mia figlia al concorso di danza? Clicca qui: http://concorso-ballo2026.top/vota e inserisci il codice di conferma a 6 cifre che ti arriva via SMS!',
        threatLevel: 'critico',
        explanation: 'Tentativo di furto account WhatsApp. Il codice a 6 cifre è il codice OTP di autenticazione: condividendolo, il truffatore dirotterà il tuo profilo WhatsApp sul suo dispositivo.'
    },
    {
        title: 'Falso SMS Bollo Auto ACI',
        category: 'Smishing / Furto Carte di Credito',
        text: 'ACI Notifiche: Il bollo auto della tua vettura risulta insoluto. Rischio sanzione amministrativa e fermo. Regolarizza subito su: https://acitalia.click/paga',
        threatLevel: 'critico',
        explanation: 'Falso allarme su dominio civetta (acitalia.click non è ACI). Mira a rubare il numero di carta di credito con scadenza e CVV.'
    },
    {
        title: 'Falsa Chiamata / Messaggio Figlio (Clonazione Vocale)',
        category: 'Voice Cloning / Urgenza Economica',
        text: 'Mamma, mi hanno rubato il telefono e la borsa! Ho rotto lo schermo, ora sono con questo numero temporaneo. Ho una spesa urgente da fare subito, puoi mandarmi 800€ con bonifico istantaneo?',
        threatLevel: 'alto',
        explanation: 'Classica truffa del familiare in difficoltà (spesso amplificata con audio vocali deepfake che imitano la voce reale). Non inviare denaro senza aver fatto una contro-chiamata sul vecchio numero.'
    },
    {
        title: 'Falso Sollecito Fattura PEC',
        category: 'Malware MintsLoader / Trojan',
        text: 'Gentile cliente, si trasmette in allegato sollecito pagamento fattura insoluta n. 2891. Scaricare archivio compresso Allegato_Fattura.zip ed effettuare il bonifico entro 48 ore.',
        threatLevel: 'critico',
        explanation: 'Vettore di malware MintsLoader. Le vere fatture elettroniche non viaggiano mai come file .ZIP via PEC, ma solo come file .xml o .xml.p7m certificati dal Sistema di Interscambio (SDI).'
    },
    {
        title: 'Notifica SPID / Sospensione Account',
        category: 'Phishing Identità Digitale',
        text: 'La tua identità SPID verrà sospesa entro 24 ore per mancato rinnovo del canone di sicurezza. Clicca su spid-aggiornamento.info e inserisci credenziali e documento.',
        threatLevel: 'critico',
        explanation: 'Lo SPID per i cittadini privati è gratuito e non richiede canoni di rinnovo via link. Il sito mira a sottrarre le credenziali di accesso ai portali della Pubblica Amministrazione.'
    }
]

// Database domini ufficiali italiani
const OFFICIAL_DOMAINS = [
    { domain: 'gov.it', org: 'Tutti i siti istituzionali della Repubblica Italiana', safe: true },
    { domain: 'inps.it', org: 'INPS - Istituto Nazionale Previdenza Sociale', safe: true },
    { domain: 'agenziaentrate.gov.it', org: 'Agenzia delle Entrate', safe: true },
    { domain: 'agenziaentrateriscossione.gov.it', org: 'Agenzia delle Entrate-Riscossione', safe: true },
    { domain: 'aci.it', org: 'Automobile Club d\'Italia', safe: true },
    { domain: 'poste.it', org: 'Poste Italiane', safe: true },
    { domain: 'postepay.poste.it', org: 'Postepay', safe: true },
    { domain: 'poliziadistato.it', org: 'Polizia di Stato', safe: true },
    { domain: 'commissariatodips.it', org: 'Polizia Postale - Commissariato di P.S. Online', safe: true },
    { domain: 'cert-agid.gov.it', org: 'CERT-AgID', safe: true },
    { domain: 'csirt.gov.it', org: 'ACN - CSIRT Italia', safe: true },
    { domain: 'garanteprivacy.it', org: 'Garante per la protezione dei dati personali', safe: true },
    { domain: 'spid.gov.it', org: 'AgID - Sistema Pubblico Identità Digitale', safe: true },
    { domain: 'cartaidentita.interno.gov.it', org: 'Ministero dell\'Interno - CIE', safe: true },
    { domain: 'anagrafenazionale.interno.it', org: 'ANPR - Anagrafe Nazionale', safe: true },
    { domain: 'pagopa.gov.it', org: 'pagoPA S.p.A.', safe: true },
    { domain: 'io.italia.it', org: 'App IO - I Servizi Pubblici in un\'app', safe: true },
]

export default function VerificaTruffePage() {
    const [activeTab, setActiveTab] = useState<TabType>('analyzer')

    // Message Analyzer State
    const [inputText, setInputText] = useState('')

    // Deepfake Checklist State
    const [dfAnswers, setDfAnswers] = useState<Record<string, boolean>>({
        voiceBreath: false,
        voiceQuestion: false,
        refuseVideo: false,
        urgentMoney: false,
        videoFlicker: false,
        videoBlink: false,
        distortedHands: false,
    })

    // Domain Checker State
    const [domainQuery, setDomainQuery] = useState('')

    // Heuristic Analysis on Message
    const analysisResults = useMemo(() => {
        if (!inputText.trim()) return null

        const lower = inputText.toLowerCase()
        const redFlags: { title: string; desc: string; severity: 'critico' | 'alto' | 'medio' }[] = []

        // Rule 1: OTP / SMS 6 cifre
        if (
            lower.includes('codice') &&
            (lower.includes('sms') || lower.includes('cifre') || lower.includes('conferma') || lower.includes('whatsapp') || lower.includes('otp'))
        ) {
            redFlags.push({
                title: 'Richiesta di codice OTP / SMS a 6 cifre',
                desc: 'Nessun servizio autentico o amico ti chiederà mai un codice ricevuto via SMS. Condividendolo autorizzi il furto del tuo profilo WhatsApp o bancario.',
                severity: 'critico'
            })
        }

        // Rule 2: Bonifici urgenti / Richiesta denaro
        if (
            (lower.includes('bonifico') || lower.includes('ricarica') || lower.includes('postepay') || lower.includes('soldi') || lower.includes('€') || lower.includes('euro')) &&
            (lower.includes('urgente') || lower.includes('subito') || lower.includes('mamma') || lower.includes('papà') || lower.includes('figli'))
        ) {
            redFlags.push({
                title: 'Pressione per invio urgente di denaro (Finto Familiare)',
                desc: 'Tipica tecnica di impersonificazione o clonazione vocale. Prima di inviare denaro, riaggancia e telefona direttamente sul numero abituale salvato in rubrica.',
                severity: 'critico'
            })
        }

        // Rule 3: Domini sospetti
        const domainMatch = inputText.match(/https?:\/\/([^\s/]+)/i)
        if (domainMatch) {
            const host = domainMatch[1].toLowerCase()
            const isOfficial = OFFICIAL_DOMAINS.some(d => host === d.domain || host.endsWith('.' + d.domain))
            if (!isOfficial) {
                if (host.includes('aci') || host.includes('inps') || host.includes('poste') || host.includes('spid') || host.includes('pagopa') || host.endsWith('.top') || host.endsWith('.info') || host.endsWith('.click') || host.endsWith('.xyz')) {
                    redFlags.push({
                        title: `Sito civetta non istituzionale: ${host}`,
                        desc: 'L\'indirizzo non appartiene al dominio ufficiale autorizzato (.gov.it o portale certificato). Si tratta con elevata probabilità di una pagina clone per catturare credenziali.',
                        severity: 'critico'
                    })
                } else {
                    redFlags.push({
                        title: `Link esterno sconosciuto: ${host}`,
                        desc: 'Il link rimanda a un dominio non censito tra i canali istituzionali. Non inserire credenziali o dati di carte bancarie.',
                        severity: 'alto'
                    })
                }
            }
        }

        // Rule 4: Minacce di fermo o sanzione
        if (lower.includes('fermo') || lower.includes('sanzione') || lower.includes('morosità') || lower.includes('bloccato') || lower.includes('pignoramento') || lower.includes('sospes')) {
            redFlags.push({
                title: 'Minaccia di sanzioni o blocco immediato (Ingegneria sociale)',
                desc: 'I truffatori usano l\'urgenza e la paura per spingere ad agire d\'impulso senza fare verifiche.',
                severity: 'alto'
            })
        }

        // Rule 5: Allegati ZIP o fatture insolite
        if (lower.includes('.zip') || lower.includes('.exe') || (lower.includes('fattura') && lower.includes('allegat'))) {
            redFlags.push({
                title: 'Presunto allegato contabile compresso (.ZIP o eseguibile)',
                desc: 'Vettore frequente di malware (come MintsLoader). Le vere fatture elettroniche transitano solo tramite il Sistema di Interscambio dell\'Agenzia delle Entrate.',
                severity: 'alto'
            })
        }

        // Rule 6: Falsi concorsi o voti
        if (lower.includes('vota') || lower.includes('concorso') || lower.includes('gara') || lower.includes('ballo') || lower.includes('disegno')) {
            redFlags.push({
                title: 'Esca del concorso online / contest infantile',
                desc: 'Esca emotiva usata nella "truffa della ballerina" per farti abbassare la guardia su WhatsApp.',
                severity: 'medio'
            })
        }

        let overallThreat: 'critico' | 'alto' | 'medio' | 'basso' = 'basso'
        if (redFlags.some(f => f.severity === 'critico')) overallThreat = 'critico'
        else if (redFlags.some(f => f.severity === 'alto')) overallThreat = 'alto'
        else if (redFlags.length > 0) overallThreat = 'medio'

        return {
            flags: redFlags,
            threatLevel: overallThreat,
        }
    }, [inputText])

    // Deepfake Score calculation
    const deepfakeScore = useMemo(() => {
        let count = 0
        if (dfAnswers.voiceBreath) count += 25
        if (dfAnswers.voiceQuestion) count += 30
        if (dfAnswers.refuseVideo) count += 25
        if (dfAnswers.urgentMoney) count += 20
        if (dfAnswers.videoFlicker) count += 20
        if (dfAnswers.videoBlink) count += 15
        if (dfAnswers.distortedHands) count += 20

        const probability = Math.min(100, count)
        return {
            probability,
            isSuspicious: probability >= 40
        }
    }, [dfAnswers])

    // Domain query matches
    const domainMatchResult = useMemo(() => {
        if (!domainQuery.trim()) return null
        const clean = domainQuery.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/.*$/, '')
        const exact = OFFICIAL_DOMAINS.find(d => clean === d.domain || clean.endsWith('.' + d.domain))
        
        const isImpostorPattern = (clean.includes('aci') && !clean.endsWith('aci.it')) ||
                                  (clean.includes('inps') && !clean.endsWith('inps.it')) ||
                                  (clean.includes('poste') && !clean.endsWith('poste.it')) ||
                                  (clean.includes('spid') && !clean.endsWith('spid.gov.it')) ||
                                  clean.endsWith('.info') || clean.endsWith('.click') || clean.endsWith('.top')

        return {
            clean,
            isOfficial: Boolean(exact),
            matchedOrg: exact?.org,
            isSuspicious: !exact && isImpostorPattern
        }
    }, [domainQuery])

    const handleApplyPreset = (p: PresetExample) => {
        setInputText(p.text)
    }

    return (
        <Container size="lg" className="py-8 min-h-screen space-y-10">
            <header className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider">
                    <Bot className="w-4 h-4" />
                    <span>Strumenti Civici & Sicurezza IA</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-foreground">
                    Verifica Truffe e Contenuti IA
                </h1>
                <p className="text-lg text-secondary leading-relaxed">
                    Analizza SMS, messaggi WhatsApp o email sospette, verifica se un dominio è legittimo e impara a riconoscere audio e video generati con intelligenza artificiale. Nessun dato inserito viene salvato o inviato a server esterni.
                </p>
            </header>

            {/* Tab navigation */}
            <div className="flex flex-wrap gap-2 border-b border-border pb-3">
                <button
                    type="button"
                    onClick={() => setActiveTab('analyzer')}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                        activeTab === 'analyzer'
                            ? 'bg-foreground text-background shadow-sm'
                            : 'bg-surface text-secondary hover:text-foreground hover:bg-surface/80'
                    }`}
                >
                    <Search className="w-4 h-4" />
                    Analizza Messaggio o SMS
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('deepfake')}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                        activeTab === 'deepfake'
                            ? 'bg-foreground text-background shadow-sm'
                            : 'bg-surface text-secondary hover:text-foreground hover:bg-surface/80'
                    }`}
                >
                    <Bot className="w-4 h-4" />
                    Rilevatore Deepfake & Audio IA
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('domain')}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                        activeTab === 'domain'
                            ? 'bg-foreground text-background shadow-sm'
                            : 'bg-surface text-secondary hover:text-foreground hover:bg-surface/80'
                    }`}
                >
                    <Globe className="w-4 h-4" />
                    Verifica Dominio Ufficiale
                </button>
                <button
                    type="button"
                    onClick={() => setActiveTab('vittima')}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                        activeTab === 'vittima'
                            ? 'bg-sos text-white shadow-sm'
                            : 'bg-surface text-secondary hover:text-foreground hover:bg-surface/80'
                    }`}
                >
                    <ShieldAlert className="w-4 h-4" />
                    Cosa fare se sei vittima
                </button>
            </div>

            {/* TAB 1: MESSAGE ANALYZER */}
            {activeTab === 'analyzer' && (
                <div className="space-y-8 animate-fadeIn">
                    <Card className="p-6 md:p-8 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-display font-semibold text-foreground">
                                Incolla il testo del messaggio sospetto
                            </h2>
                            <p className="text-sm text-secondary">
                                Incolla il contenuto di un SMS, messaggio WhatsApp, email o trascrizione di una chiamata per analizzare i pattern tipici delle frodi.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                rows={4}
                                placeholder="Esempio: Ciao, puoi votarmi al concorso? Clicca qui e mandami il codice a 6 cifre che ricevi..."
                                className="w-full p-4 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
                            />
                            {inputText && (
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={() => setInputText('')}
                                        className="text-xs text-muted hover:text-foreground transition-colors flex items-center gap-1"
                                    >
                                        <RefreshCw className="w-3 h-3" /> Pulisci testo
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Presets */}
                        <div className="space-y-3 pt-2">
                            <p className="text-xs font-bold uppercase tracking-wider text-muted">
                                Oppure prova una delle campagne reali attive nel 2026:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {PRESETS.map((p) => (
                                    <button
                                        key={p.title}
                                        type="button"
                                        onClick={() => handleApplyPreset(p)}
                                        className="px-3 py-1.5 rounded-xl border border-border/80 bg-surface text-xs font-medium text-secondary hover:text-foreground hover:border-primary transition-all text-left"
                                    >
                                        {p.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Analysis Output */}
                        {analysisResults && (
                            <div className="pt-6 border-t border-border space-y-6">
                                <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl border bg-surface">
                                    <div className="flex items-center gap-3">
                                        {analysisResults.threatLevel === 'critico' && (
                                            <div className="p-3 rounded-xl bg-red-500/15 text-red-600 dark:text-red-400">
                                                <XCircle className="w-6 h-6" />
                                            </div>
                                        )}
                                        {analysisResults.threatLevel === 'alto' && (
                                            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                                                <AlertTriangle className="w-6 h-6" />
                                            </div>
                                        )}
                                        {analysisResults.threatLevel === 'medio' && (
                                            <div className="p-3 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                                                <HelpCircle className="w-6 h-6" />
                                            </div>
                                        )}
                                        {analysisResults.threatLevel === 'basso' && (
                                            <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                                                <CheckCircle2 className="w-6 h-6" />
                                            </div>
                                        )}
                                        <div>
                                            <span className="text-xs font-mono uppercase tracking-wider text-muted">Valutazione del Rischio</span>
                                            <h3 className="text-xl font-bold text-foreground">
                                                {analysisResults.threatLevel === 'critico' && 'Rischio Critico: Tentativo di Frode Accertato'}
                                                {analysisResults.threatLevel === 'alto' && 'Rischio Elevato: Indicatori di Ingegneria Sociale'}
                                                {analysisResults.threatLevel === 'medio' && 'Rischio Medio: Possibile Esca o Spam'}
                                                {analysisResults.threatLevel === 'basso' && 'Nessun indicatore comune rilevato'}
                                            </h3>
                                        </div>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                        analysisResults.threatLevel === 'critico' ? 'bg-red-500 text-white' :
                                        analysisResults.threatLevel === 'alto' ? 'bg-amber-500 text-white' :
                                        analysisResults.threatLevel === 'medio' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300' :
                                        'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300'
                                    }`}>
                                        Livello: {analysisResults.threatLevel}
                                    </span>
                                </div>

                                {analysisResults.flags.length > 0 ? (
                                    <div className="space-y-3">
                                        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted">
                                            Segnali di Pericolo Rilevati ({analysisResults.flags.length})
                                        </h4>
                                        <div className="grid gap-3">
                                            {analysisResults.flags.map((flag, idx) => (
                                                <div key={idx} className="p-4 rounded-xl border border-border bg-background space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 rounded-full bg-red-500" />
                                                        <p className="font-semibold text-foreground text-sm">{flag.title}</p>
                                                    </div>
                                                    <p className="text-xs text-secondary leading-relaxed pl-4">{flag.desc}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-sm text-secondary bg-surface p-4 rounded-xl">
                                        Il messaggio non contiene indicatori macroscopici noti (come codici OTP o domini fake comuni), ma ricorda di non cedere mai password o dati di pagamento se non sei certo al 100% dell'identità del mittente.
                                    </p>
                                )}

                                {/* Action suggestions */}
                                <div className="p-5 rounded-2xl border border-primary/20 bg-primary/5 space-y-3">
                                    <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                        <ShieldCheck className="w-4 h-4 text-primary" /> Cosa fare subito:
                                    </h4>
                                    <ul className="text-xs text-secondary space-y-1.5 list-disc pl-5">
                                        <li><strong>Non cliccare su alcun link</strong> presente nel messaggio.</li>
                                        <li><strong>Non condividere alcun codice numerico</strong> arrivato via SMS, anche se richiesto da un contatto noto.</li>
                                        <li>Se ti chiedono denaro a nome di un parente o amico, <strong>riaggancia e richiama sul suo numero abituale</strong>.</li>
                                        <li>Segnala il messaggio fraudolento alla Polizia Postale tramite il portale ufficiale.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </Card>
                </div>
            )}

            {/* TAB 2: DEEPFAKE & AI AUDIO DETECTOR */}
            {activeTab === 'deepfake' && (
                <div className="space-y-8 animate-fadeIn">
                    <Card className="p-6 md:p-8 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-display font-semibold text-foreground">
                                Checklist Diagnostica: È un audio o video generato con IA?
                            </h2>
                            <p className="text-sm text-secondary leading-relaxed">
                                I truffatori utilizzano l'Intelligenza Artificiale per clonare voci di familiari (Voice Cloning) e creare video manipolati (Deepfake). Rispondi alle domande per valutare l'autenticità del contenuto.
                            </p>
                        </div>

                        {/* Audio Questions */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 pt-2 border-t border-border">
                                <PhoneCall className="w-5 h-5 text-primary" /> Segnali Audio & Telefonate Sospette
                            </h3>
                            <div className="grid gap-3">
                                {[
                                    { key: 'voiceBreath', label: 'La voce suona metallica, priva di respiri spontanei o con pause innaturali tra le parole?' },
                                    { key: 'voiceQuestion', label: 'Alla richiesta di un ricordo privato o di un dettaglio noto solo a voi due, l\'interlocutore ha eluso la risposta?' },
                                    { key: 'refuseVideo', label: 'L\'interlocutore rifiuta categoricamente di fare una videochiamata adducendo problemi di segnale o telecamera?' },
                                    { key: 'urgentMoney', label: 'C\'è una richiesta immediata di denaro (bonifico istantaneo, ricarica o contanti a un intermediario) per una finta emergenza?' },
                                ].map((q) => (
                                    <label
                                        key={q.key}
                                        className={`p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                                            dfAnswers[q.key]
                                                ? 'border-red-500/50 bg-red-500/10 text-foreground'
                                                : 'border-border bg-surface text-secondary hover:border-border/80'
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={dfAnswers[q.key]}
                                            onChange={(e) => setDfAnswers(prev => ({ ...prev, [q.key]: e.target.checked }))}
                                            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm font-medium leading-relaxed">{q.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Video Questions */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-foreground flex items-center gap-2 pt-4 border-t border-border">
                                <Bot className="w-5 h-5 text-primary" /> Segnali Video & Immagini Deepfake
                            </h3>
                            <div className="grid gap-3">
                                {[
                                    { key: 'videoFlicker', label: 'Noti sfarfallii, sfocature insolite o bordi irregolari attorno alla bocca, agli occhi o al colletto della camicia?' },
                                    { key: 'videoBlink', label: 'Il battito delle palpebre è assente, rigido o non coordinato con lo sguardo?' },
                                    { key: 'distortedHands', label: 'Le mani, i denti o gli sfondi presentano geometrie bizzarre, dita in eccesso o riflessi incoerenti negli occhi?' },
                                ].map((q) => (
                                    <label
                                        key={q.key}
                                        className={`p-4 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                                            dfAnswers[q.key]
                                                ? 'border-red-500/50 bg-red-500/10 text-foreground'
                                                : 'border-border bg-surface text-secondary hover:border-border/80'
                                        }`}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={dfAnswers[q.key]}
                                            onChange={(e) => setDfAnswers(prev => ({ ...prev, [q.key]: e.target.checked }))}
                                            className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
                                        />
                                        <span className="text-sm font-medium leading-relaxed">{q.label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Score Result */}
                        <div className="p-6 rounded-2xl border bg-surface space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono uppercase tracking-wider text-muted">Indice di probabilità manipolazione IA</span>
                                <span className={`text-sm font-bold ${deepfakeScore.isSuspicious ? 'text-red-500' : 'text-emerald-500'}`}>
                                    {deepfakeScore.probability}% di anomalie riscontrate
                                </span>
                            </div>
                            <div className="w-full bg-border/50 h-3 rounded-full overflow-hidden">
                                <div
                                    className={`h-full transition-all duration-500 ${
                                        deepfakeScore.probability >= 50 ? 'bg-red-500' :
                                        deepfakeScore.probability >= 25 ? 'bg-amber-500' : 'bg-emerald-500'
                                    }`}
                                    style={{ width: `${Math.max(5, deepfakeScore.probability)}%` }}
                                />
                            </div>

                            {deepfakeScore.isSuspicious ? (
                                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-secondary space-y-2">
                                    <p className="font-bold text-red-600 dark:text-red-400 text-sm">
                                        Attenzione: Elevata probabilità di clonazione vocale o manipolazione sintetica!
                                    </p>
                                    <p>
                                        I segnali selezionati corrispondono alle tecniche utilizzate dai cybercriminali per truffe con rapimento virtuale o finti incidenti.
                                    </p>
                                    <p className="font-semibold text-foreground">
                                        Regola d'oro: Non pagare mai. Stabilisci una parola d'ordine familiare e richiama la persona sul suo numero telefonico reale.
                                    </p>
                                </div>
                            ) : (
                                <p className="text-xs text-secondary">
                                    Seleziona i segnali riscontrati durante la conversazione o nel video per ottenere la valutazione di affidabilità.
                                </p>
                            )}
                        </div>

                        {/* Legal reference 2026 */}
                        <div className="p-5 rounded-2xl border border-border bg-surface text-xs text-secondary space-y-2">
                            <div className="flex items-center gap-2 text-foreground font-bold text-sm">
                                <FileText className="w-4 h-4 text-primary" /> Cosa prevede la legge (Novità 2026):
                            </div>
                            <p>
                                L'art. 26 della legge n. 132 ha introdotto l'<strong>art. 612-quater c.p.</strong>, che punisce il reato di <em>"Illecita diffusione di contenuti generati o manipolati con intelligenza artificiale"</em> con la reclusione da 1 a 5 anni quando produce un danno alla persona.
                            </p>
                            <p>
                                Puoi richiedere la cancellazione o il blocco tempestivo al Garante per la protezione dei dati personali o sporgere querela alla Polizia Postale.
                            </p>
                        </div>
                    </Card>
                </div>
            )}

            {/* TAB 3: DOMAIN CHECKER */}
            {activeTab === 'domain' && (
                <div className="space-y-8 animate-fadeIn">
                    <Card className="p-6 md:p-8 space-y-6">
                        <div className="space-y-2">
                            <h2 className="text-2xl font-display font-semibold text-foreground">
                                Verificatore di Domini: Ufficiale o Sito Clone?
                            </h2>
                            <p className="text-sm text-secondary leading-relaxed">
                                Molte truffe usano domini che imitano enti ufficiali (es. <code>acitalia.click</code> invece di <code>aci.it</code>, oppure <code>inps-portale.info</code>). Inserisci il link o il dominio per verificare se è censito nei canali istituzionali.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <div className="relative">
                                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <input
                                    type="text"
                                    value={domainQuery}
                                    onChange={(e) => setDomainQuery(e.target.value)}
                                    placeholder="Es: aci.it, acitalia.click, inps.it, poste.it, bit.ly/..."
                                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono"
                                />
                            </div>
                        </div>

                        {domainMatchResult && (
                            <div className="p-6 rounded-2xl border bg-surface space-y-4">
                                {domainMatchResult.isOfficial ? (
                                    <div className="flex items-start gap-4 text-emerald-600 dark:text-emerald-400">
                                        <CheckCircle2 className="w-8 h-8 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg text-foreground">
                                                Dominio Istituzionale Ufficiale Verificato
                                            </h3>
                                            <p className="text-sm text-secondary">
                                                L'indirizzo <code>{domainMatchResult.clean}</code> appartiene ufficialmente a:
                                            </p>
                                            <p className="text-base font-bold text-foreground">
                                                {domainMatchResult.matchedOrg}
                                            </p>
                                        </div>
                                    </div>
                                ) : domainMatchResult.isSuspicious ? (
                                    <div className="flex items-start gap-4 text-red-600 dark:text-red-400">
                                        <XCircle className="w-8 h-8 shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-lg text-foreground">
                                                Attenzione: Probabile Dominio Civetta / Truffa!
                                            </h3>
                                            <p className="text-sm text-secondary">
                                                L'indirizzo <code>{domainMatchResult.clean}</code> contiene parole riconducibili a enti pubblici o estensioni tipiche di campagne fraudolente (.info, .click, .top), ma <strong>non è il portale ufficiale</strong>.
                                            </p>
                                            <p className="text-xs font-semibold text-red-600 dark:text-red-400 pt-1">
                                                Non inserire dati di pagamento, password SPID o numeri di documenti su questa pagina.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex items-start gap-4 text-secondary">
                                        <HelpCircle className="w-8 h-8 shrink-0 text-muted mt-0.5" />
                                        <div className="space-y-1">
                                            <h3 className="font-bold text-base text-foreground">
                                                Dominio non presente nel registro istituzionale
                                            </h3>
                                            <p className="text-xs text-secondary leading-relaxed">
                                                L'indirizzo <code>{domainMatchResult.clean}</code> non corrisponde ai portali governativi o bancari certificati italiani. Verifica con attenzione chi gestisce il sito prima di proseguire.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* List of trusted public roots */}
                        <div className="space-y-3 pt-4 border-t border-border">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted">
                                Domini Ufficiali Verificati della Pubblica Amministrazione
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                                {OFFICIAL_DOMAINS.slice(0, 8).map((d) => (
                                    <div key={d.domain} className="p-3 rounded-xl border border-border/60 bg-background flex items-center justify-between">
                                        <span className="font-mono font-bold text-primary">{d.domain}</span>
                                        <span className="text-muted text-[11px] truncate max-w-[200px]">{d.org}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {/* TAB 4: COSA FARE SE SEI VITTIMA */}
            {activeTab === 'vittima' && (
                <div className="space-y-8 animate-fadeIn">
                    <Card className="p-6 md:p-8 space-y-6">
                        <div className="space-y-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-sos">Protocollo di Emergenza</span>
                            <h2 className="text-2xl font-display font-semibold text-foreground">
                                Sei caduto in una truffa o hai condiviso dati? Cosa fare nei primi 15 minuti
                            </h2>
                            <p className="text-sm text-secondary">
                                Non farti prendere dal panico: segui subito questi 4 passaggi operativi nell'ordine indicato per limitare i danni ed espellere i truffatori.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="p-5 rounded-2xl border-2 border-red-500/30 bg-red-500/5 space-y-2">
                                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-base">
                                    <span className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs">1</span>
                                    Se hai inserito dati di carte bancarie o conti
                                </div>
                                <p className="text-xs text-secondary leading-relaxed pl-8">
                                    Chiama subito il <strong>numero verde blocchi</strong> della tua banca o dell'emittente della carta (Postepay, Nexi, Intesa, UniCredit). Richiedi il blocco immediato della carta e contesta le eventuali transazioni non autorizzate per attivare la procedura di chargeback.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border-2 border-amber-500/30 bg-amber-500/5 space-y-2">
                                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-base">
                                    <span className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs">2</span>
                                    Se hanno rubato il tuo account WhatsApp
                                </div>
                                <p className="text-xs text-secondary leading-relaxed pl-8">
                                    Reinstalla subito WhatsApp sul tuo telefono, inserisci il tuo numero e richiedi il codice di verifica a 6 cifre via SMS. Non appena inserisci il codice sul tuo smartphone, <strong>il truffatore verrà disconnesso istantaneamente</strong> da qualsiasi altro dispositivo. Poi attiva la verifica in due passaggi con PIN segreto.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border-2 border-primary/30 bg-primary/5 space-y-2">
                                <div className="flex items-center gap-2 text-primary font-bold text-base">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">3</span>
                                    Conserva le prove digitali (Non cancellare nulla)
                                </div>
                                <p className="text-xs text-secondary leading-relaxed pl-8">
                                    Fai screenshot completi con orario e data, salva i numeri di telefono mittenti, conserva gli SMS e le ricevute dei bonifici con codice CRO/TRN. Serviranno come allegati probatori per la denuncia.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl border-2 border-border bg-surface space-y-2">
                                <div className="flex items-center gap-2 text-foreground font-bold text-base">
                                    <span className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs">4</span>
                                    Sporgi denuncia formale e segnalazione
                                </div>
                                <p className="text-xs text-secondary leading-relaxed pl-8">
                                    Inoltra la segnalazione sul portale ufficiale della <strong>Polizia Postale</strong> (<code>commissariatodips.it</code>). Se hai subito una perdita economica, formalizza la querela presso la Polizia di Stato o i Carabinieri portando copia degli screenshot e delle contabili bancarie.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
                            <Link href="/sos" className="inline-flex items-center gap-2 text-sm font-semibold text-sos hover:underline">
                                Apri tutti i protocolli SOS →
                            </Link>
                            <Link href="/modelli/segnalazione-truffa-polizia-postale" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                Scarica il Kit per la denuncia alla Polizia Postale →
                            </Link>
                            <Link href="/modelli/reclamo-garante-privacy-deepfake" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                                Scarica il Kit reclamo per Deepfake al Garante →
                            </Link>
                        </div>
                    </Card>
                </div>
            )}
        </Container>
    )
}

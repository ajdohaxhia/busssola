'use client'

import { useState } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { triggerConfetti } from '@/lib/confetti'
import { toast } from 'sonner'
import { Shield, AlertTriangle, CheckCircle2, XCircle, Info, Zap } from 'lucide-react'

interface Scenario {
    id: string
    title: string
    description: string
    options: {
        text: string
        isCorrect: boolean
        feedback: string
    }[]
}

interface ScenarioEngineProps {
    moduleId: string
}

const SCENARIOS_DATA: Record<string, { title: string, subtitle: string, icon: string, scenarios: Scenario[] }> = {
    'predatori-online': {
        title: 'Predator Hunter',
        subtitle: 'Identificazione e Difesa',
        icon: 'sos',
        scenarios: [
            {
                id: '1',
                title: 'Il "Ragazzo Popolare"',
                description: 'Un ragazzo di 17 anni (tu ne hai 14) ti scrive su Instagram facendoti mille complimenti e dicendo che i tuoi amici non ti capiscono. Ti chiede di spostarvi su Telegram.',
                options: [
                    { text: 'Rifiuto e rimango sull\'app pubblica', isCorrect: true, feedback: 'Ottimo. L\'allontanamento dalle app pubbliche è una tattica di isolamento tipica del grooming.' },
                    { text: 'Accetto, forse è solo timido', isCorrect: false, feedback: 'Attenzione: Telegram permette chat segrete che non lasciano tracce, ideale per i predatori.' }
                ]
            },
            {
                id: '2',
                title: 'La Videochiamata Negata',
                description: 'Dici al tuo nuovo amico online di fare una videochiamata. Lui dice che la sua camera è rotta perché gli è caduto il telefono ieri.',
                options: [
                    { text: 'Faccio una ricerca inversa della sua foto profilo', isCorrect: true, feedback: 'Esatto! Scuse sulla camera rotta sono il segnale numero 1 di un catfish.' },
                    { text: 'Gli credo e aspetto che lo ripari', isCorrect: false, feedback: 'Troppo rischioso. Potrebbe stare usando foto rubate a qualcun altro.' }
                ]
            },
            {
                id: '3',
                title: 'Minaccia di Ricatto',
                description: 'Un conoscente online ti dice che ha una tua foto compromettente (forse ritoccata) e la manderà alla tua scuola se non gli mandi un video.',
                options: [
                    { text: 'Blocco tutto e vado alla Polizia Postale', isCorrect: true, feedback: 'Corretto. Mai pagare o cedere al ricatto: non si fermano mai.' },
                    { text: 'Gli mando il video per farlo stare zitto', isCorrect: false, feedback: 'Pessima idea. Cedere al ricatto gli dà solo più potere su di te.' }
                ]
            }
        ]
    },
    'privacy-tecnica': {
        title: 'Privacy Architect',
        subtitle: 'Hardening & Tracking',
        icon: 'privacy',
        scenarios: [
            {
                id: '1',
                title: 'Analisi Fingerprint',
                description: 'Un sito web ti chiede l\'elenco dei font installati e la risoluzione dello schermo.',
                options: [
                    { text: 'Uso un browser come Brave o Firefox impostato per "spoofing"', isCorrect: true, feedback: 'Bravo. Queste informazioni creano un\'impronta unica per tracciarti senza cookie.' },
                    { text: 'Accetto, i font servono per vedere bene il sito', isCorrect: false, feedback: 'In realtà servono a creare un "fingerprint" univoco del tuo browser.' }
                ]
            },
            {
                id: '2',
                title: 'Configurazione DNS',
                description: 'Il tuo operatore internet vede ogni sito che visiti anche in HTTPS tramite le query DNS.',
                options: [
                    { text: 'Attivo il DNS over HTTPS (DoH) su NextDNS o Quad9', isCorrect: true, feedback: 'Esatto! Cifrare il DNS impedisce all\'ISP di spiare la tua cronologia.' },
                    { text: 'Uso la modalità incognito', isCorrect: false, feedback: 'La modalità incognito non nasconde il traffico al tuo fornitore internet.' }
                ]
            },
            {
                id: '3',
                title: 'Permessi Android/iOS',
                description: 'Un\'app di torcia elettrica ti chiede il permesso di accedere ai tuoi contatti e al microfono.',
                options: [
                    { text: 'Nego i permessi e disinstallo l\'app', isCorrect: true, feedback: 'Corretto. È un\'app malware o spyware mascherata.' },
                    { text: 'Accetto, forse serve per scattare foto col flash', isCorrect: false, feedback: 'I contatti non servono a una torcia. È un furto di dati palese.' }
                ]
            }
        ]
    },
    'phishing-malware': {
        title: 'Malware Analyst',
        subtitle: 'Detection & Shield',
        icon: 'zap',
        scenarios: [
            {
                id: '1',
                title: 'L\'Urgenza di Amazon',
                description: 'Ricevi una mail da "servizio-clienti@amozon-it.com" che dice: "Pacco bloccato, aggiorna i dati entro 2 ore".',
                options: [
                    { text: 'Controllo l\'URL: è "amozon" non "amazon"', isCorrect: true, feedback: 'Punto centrale! Spesso cambiano una sola lettera per ingannarti.' },
                    { text: 'Clicco subito per non perdere il pacco', isCorrect: false, feedback: 'L\'urgenza è la tecnica regina dei truffatori.' }
                ]
            },
            {
                id: '2',
                title: 'Allegato Fattura.exe',
                description: 'Un amico ti manda un file "Fattura_Elettronica.zip" su WhatsApp dicendo di controllarlo.',
                options: [
                    { text: 'Analizzo l\'hash del file su VirusTotal', isCorrect: true, feedback: 'Molto professionale. Mai aprire eseguibili da chat, anche se da amici (potrebbero essere stati hackerati).' },
                    { text: 'Lo apro subito, è un file di un amico', isCorrect: false, feedback: 'Un file .exe o un .zip contenente script è quasi sempre un virus.' }
                ]
            }
        ]
    },
    'cyberbullismo': {
        title: 'Cyber-Dossier',
        subtitle: 'Analisi Crimini Online',
        icon: 'sos',
        scenarios: [
            {
                id: '1',
                title: 'Il Gruppo Classe',
                description: 'Un compagno viene insultato pesantemente in una chat di gruppo. Molti ridono con le emoji.',
                options: [
                    { text: 'Intervengo pubblicamente per difenderlo', isCorrect: true, feedback: 'Ottimo! Essere un "Upstander" rompe il ciclo del bullismo.' },
                    { text: 'Ignoro per non attirare l\'attenzione su di me', isCorrect: false, feedback: 'L\'indifferenza alimenta il bullo. Anche una segnalazione anonima aiuta.' }
                ]
            },
            {
                id: '2',
                title: 'Doxxing in Arrivo',
                description: 'Qualcuno pubblica l\'indirizzo di casa di un tuo amico su un server Discord pubblico.',
                options: [
                    { text: 'Faccio screenshot subito e avviso l\'amico', isCorrect: true, feedback: 'Corretto. Documentare è il primo passo per la denuncia.' },
                    { text: 'Segnalo il post ma non dico nulla all\'amico', isCorrect: false, feedback: 'L\'amico deve sapere che la sua sicurezza fisica è a rischio.' }
                ]
            }
        ]
    },
    'social-addiction': {
        title: 'Focus Master',
        subtitle: 'Combattere i Dark Patterns',
        icon: 'brain',
        scenarios: [
            {
                id: '1',
                title: 'Infinite Scroll',
                description: 'Ti rendi conto che stai scorrendo TikTok da 40 minuti senza un vero motivo.',
                options: [
                    { text: 'Imposto un timer app di 30 minuti totali', isCorrect: true, feedback: 'Esatto. Riportare il controllo manuale rompe l\'algoritmo di dipendenza.' },
                    { text: 'Continuo, forse il prossimo video è meglio', isCorrect: false, feedback: 'Il cervello sta subendo un "rinforzo variabile", come alle slot machine.' }
                ]
            }
        ]
    },
    'gdpr-dati': {
        title: 'Data Auditor',
        subtitle: 'Controllo Permessi App',
        icon: 'privacy',
        scenarios: [
            {
                id: '1',
                title: 'Accesso ai Dati',
                description: 'Vuoi sapere tutto quello che Google sa di te negli ultimi 10 anni.',
                options: [
                    { text: 'Uso lo strumento "Takeout" (Art. 15 GDPR)', isCorrect: true, feedback: 'Proprio così. Il Diritto di Accesso ti permette di avere i tuoi dati.' },
                    { text: 'Chiedo a un amico esperto di hackerarli', isCorrect: false, feedback: 'Non serve. La legge ti dà il diritto di averli gratis.' }
                ]
            }
        ]
    },
    'ai-deepfake': {
        title: 'Deepfake Detector',
        subtitle: 'Smascherare la Sintesi',
        icon: 'zap',
        scenarios: [
            {
                id: '1',
                title: 'Video Politico Strano',
                description: 'Vedi un video di un politico che dice cose assurde. I suoi occhi sembrano non battere mai le ciglia.',
                options: [
                    { text: 'È probabilmente un Deepfake IA', isCorrect: true, feedback: 'Corretto. Il battito delle ciglia è uno dei punti deboli delle attuali IA.' },
                    { text: 'È solo stanco, lo condivido subito', isCorrect: false, feedback: 'Condividere senza verificare aiuta la disinformazione.' }
                ]
            }
        ]
    },
    'gaming-communities': {
        title: 'Secure Gamer',
        subtitle: 'Protezione Account & Community',
        icon: 'gamepad',
        scenarios: [
            {
                id: '1',
                title: 'Il Mercato Grigio',
                description: 'Un utente ti offre 100€ in skin per il tuo account, chiedendo di loggare su un sito di "price check".',
                options: [
                    { text: 'Rifiuto, è un attacco API Scam', isCorrect: true, feedback: 'Bravo! Quei siti rubano la tua chiave API di Steam per dirottare i tuoi scambi.' },
                    { text: 'Controllo il prezzo, sembra un affare', isCorrect: false, feedback: 'Attenzione: loggare su siti non ufficiali espone il tuo inventario al furto totale.' }
                ]
            }
        ]
    },
    'finanze-crypto': {
        title: 'Wealth Guard',
        subtitle: 'Crypto & Scams',
        icon: 'brain',
        scenarios: [
            {
                id: '1',
                title: 'La Seed Phrase',
                description: 'Un "supporto tecnico" di Metamask ti contatta privatamente chiedendoti le 12 parole di sicurezza.',
                options: [
                    { text: 'Non le do a nessuno, mai.', isCorrect: true, feedback: 'Regola d\'oro. Chi ha la seed phrase ha i tuoi soldi.' },
                    { text: 'Gliele do così sbloccano il conto', isCorrect: false, feedback: 'Errore fatale. Hai appena regalato i tuoi risparmi a un ladro.' }
                ]
            }
        ]
    },
    'diritti-digitali': {
        title: 'Digital Activist',
        subtitle: 'Difesa Diritti Online',
        icon: 'help',
        scenarios: [
            {
                id: '1',
                title: 'Rallentamento Strategico',
                description: 'Il tuo operatore internet rallenta i siti di informazione libera favorire i propri servizi.',
                options: [
                    { text: 'È una violazione della Net Neutrality', isCorrect: true, feedback: 'Appunto. Tutti i dati devono essere trattati allo stesso modo.' },
                    { text: 'Hanno ragione loro, sono i proprietari dei cavi', isCorrect: false, feedback: 'In Europa la legge protegge l\'equità del traffico dati contro i monopoli.' }
                ]
            }
        ]
    },
    'osint-investigazione': {
        title: 'Digital Detective',
        subtitle: 'Investigazione Open Source',
        icon: 'search',
        scenarios: [
            {
                id: '1',
                title: 'L\'Ombra Rivelatrice',
                description: 'Analizzi una foto di un sospetto. Noti che l\'ombra del palazzo punta a Nord-Est alle ore 10:00 del mattino.',
                options: [
                    { text: 'Uso SunCalc per triangolare la città', isCorrect: true, feedback: 'Tecnica OSINT avanzata! La posizione del sole non mente mai.' },
                    { text: 'È solo un\'ombra, non serve a nulla', isCorrect: false, feedback: 'In OSINT, anche un\'ombra può rivelare la geolocalizzazione esatta.' }
                ]
            },
            {
                id: '2',
                title: 'Username Sherlock',
                description: 'Vuoi vedere se un utente @hacker123 è attivo su altri social che non conosci.',
                options: [
                    { text: 'Uso il tool Sherlock per scansionare 300+ siti', isCorrect: true, feedback: 'Esatto. Molti criminali riutilizzano lo stesso username ovunque.' },
                    { text: 'Cerco a mano su Instagram e Facebook', isCorrect: false, feedback: 'Troppo lento e incompleto. Esistono script automatici per questo.' }
                ]
            }
        ]
    },
    'dark-web': {
        title: 'Dark Web Explorer',
        subtitle: 'Anonimato Tecnico',
        icon: 'incognito',
        scenarios: [
            {
                id: '1',
                title: 'Exit Node Sniffing',
                description: 'Navighi su Tor su un sito che non usa l\'HTTPS.',
                options: [
                    { text: 'Il proprietario dell\'Exit Node può vedere i miei dati', isCorrect: true, feedback: 'Vero. Tor cifra il tunnel, ma l\'uscita verso il web normale è visibile se non protetta da SSL.' },
                    { text: 'Sono protetto dalla crittografia a cipolla', isCorrect: false, feedback: 'La cipolla ti protegge fino all\'ultimo nodo, poi il traffico è in chiaro verso il web.' }
                ]
            }
        ]
    },
    'hardware-iot': {
        title: 'Hardware Guardian',
        subtitle: 'Sicurezza Fisica & IoT',
        icon: 'cpu',
        scenarios: [
            {
                id: '1',
                title: 'Rubber Ducky',
                description: 'Trovi una chiavetta USB "aziendale" parcheggiata davanti alla scuola.',
                options: [
                    { text: 'La lascio lì o la distruggo', isCorrect: true, feedback: 'Diritto al punto. Potrebbe essere un attacco BadUSB/Rubber Ducky.' },
                    { text: 'La inserisco nel PC per vedere di chi è', isCorrect: false, feedback: 'Appena inserita, inizierà a scrivere comandi per rubare le tue password.' }
                ]
            }
        ]
    },
    'algoritmi-psicologia': {
        title: 'Echo Chambers',
        subtitle: 'Uscire dalla Bolla',
        icon: 'zap',
        scenarios: [
            {
                id: '1',
                title: 'La Tana del Bianconiglio',
                description: 'YouTube continua a suggerirti video sempre più estremi su una teoria del complotto.',
                options: [
                    { text: 'Pulisco la cronologia e cerco fonti scientifiche', isCorrect: true, feedback: 'Ottimo. Riallenare l\'algoritmo è vitale per non radicalizzarsi.' },
                    { text: 'Lo guardo tutto per capire entrambi i lati', isCorrect: false, feedback: 'Guardarli alimenta l\'algoritmo che te ne darà di ancora più estremi.' }
                ]
            }
        ]
    },
    'eredita-digitale': {
        title: 'Digital Heir',
        subtitle: 'Organizzazione Postuma',
        icon: 'file',
        scenarios: [
            {
                id: '1',
                title: 'Contatto Erede',
                description: 'Vuoi che le tue foto su iCloud siano accessibili ai tuoi genitori se ti succedesse qualcosa di grave.',
                options: [
                    { text: 'Configuro il "Legacy Contact" nelle impostazioni ID Apple', isCorrect: true, feedback: 'Corretto. È il modo legale e sicuro per passare l\'eredità digitale.' },
                    { text: 'Do la mia password a mia madre ora', isCorrect: false, feedback: 'Poco sicuro. Le password cambiano e possono essere rubate.' }
                ]
            }
        ]
    },
    'crittografia-avanzata': {
        title: 'Enigma Solver',
        subtitle: 'Matematica della Privacy',
        icon: 'lock',
        scenarios: [
            {
                id: '1',
                title: 'Man-in-the-Middle',
                description: 'Ti connetti a un Wi-Fi pubblico e vedi un errore "Certificato non valido" visitando la tua banca.',
                options: [
                    { text: 'Mi disconnetto subito: qualcuno sta intercettando', isCorrect: true, feedback: 'Bravo. Qualcuno sta tentando di decifrare la tua sessione (SSL Stripping).' },
                    { text: 'Ignoro l\'avviso e procedo', isCorrect: false, feedback: 'Hai appena regalato le credenziali bancarie all\'hacker che gestisce il Wi-Fi.' }
                ]
            }
        ]
    },
    'guerra-digitale': {
        title: 'Cyber General',
        subtitle: 'Difesa Nazionale',
        icon: 'shield',
        scenarios: [
            {
                id: '1',
                title: 'Attacco alle Infrastrutture',
                description: 'L\'ospedale della città è sotto attacco Ransomware. I computer sono bloccati.',
                options: [
                    { text: 'Ripristino dai backup offline isolati', isCorrect: true, feedback: 'Esatto. In una guerra cyber, il backup è l\'unica salvezza.' },
                    { text: 'Paghiamo il riscatto per salvare i pazienti', isCorrect: false, feedback: 'Pagare finanzia altri attacchi e non garantisce il rilascio dei dati.' }
                ]
            }
        ]
    },
    'disinformazione': {
        title: 'Fact Checker',
        subtitle: 'Smaschera le Fake News',
        icon: 'search',
        scenarios: [
            {
                id: '1',
                title: 'Clickbait Estremo',
                description: 'Vedi un articolo con titolo: "SHOCK! Quello che i medici non dicono sulle banane".',
                options: [
                    { text: 'È sicuramente clickbait, cerco fonti affidabili', isCorrect: true, feedback: 'Giusto. Titoli emotivi e "Shock" sono segnali di bassa qualità.' },
                    { text: 'Clicco e condivido per avvisare tutti', isCorrect: false, feedback: 'Hai appena diffuso disinformazione basata sulla paura.' }
                ]
            }
        ]
    },
    'ecommerce-shopping': {
        title: 'Shop Detective',
        subtitle: 'Scam & Dropshipping',
        icon: 'shopping-cart',
        scenarios: [
            {
                id: '1',
                title: 'Sconto Impossibile',
                description: 'Trovi delle Nike Air Jordan a 29€ su un sito "nike-outlet-milano.xyz".',
                options: [
                    { text: 'Truffa al 100%, evito', isCorrect: true, feedback: 'Bravo. Prezzi troppo bassi e domini strani = scam.' },
                    { text: 'Ne compro due paia subito', isCorrect: false, feedback: 'Riceverai scarpe contraffatte o nulla, e avranno i dati della tua carta.' }
                ]
            }
        ]
    },
    'identita-digitale': {
        title: 'Reputation Builder',
        subtitle: 'Gestione Reputazione',
        icon: 'user',
        scenarios: [
            {
                id: '1',
                title: 'Foto della Festa',
                description: 'Un amico ti tagga in una foto dove sei visibilmente ubriaco alla festa.',
                options: [
                    { text: 'Chiedo di rimuoverla o rimuovo il tag', isCorrect: true, feedback: 'Saggio. I datori di lavoro controllano i social.' },
                    { text: 'La lascio, fa ridere', isCorrect: false, feedback: 'Tra 5 anni, a un colloquio, potrebbe non far ridere.' }
                ]
            }
        ]
    },
    'comunicazione-digitale': {
        title: 'Netiquette Pro',
        subtitle: 'Comunicazione Efficace',
        icon: 'message-circle',
        scenarios: [
            {
                id: '1',
                title: 'Email Furiosa',
                description: 'Un collega ti accusa ingiustamente in una email in CC a tutti.',
                options: [
                    { text: 'Rispondo con calma solo a lui o chiedo un chiarimento a voce', isCorrect: true, feedback: 'Professionale. "Reply All" con rabbia peggiora solo le cose.' },
                    { text: 'Faccio "Reply All" difendendomi aggressivamente', isCorrect: false, feedback: 'Hai appena creato uno spettacolo pubblico poco professionale.' }
                ]
            }
        ]
    },
    'emergenze-digitali': {
        title: 'Crisis Response',
        subtitle: 'Gestione Emergenze',
        icon: 'alert-triangle',
        scenarios: [
            {
                id: '1',
                title: 'Hackerato!',
                description: 'Non riesci più ad accedere al tuo Instagram e i tuoi amici ricevono messaggi strani da te.',
                options: [
                    { text: 'Panico totale e creo nuovo account', isCorrect: false, feedback: 'Aspetta! Prima prova le procedure di recupero.' },
                    { text: 'Seguo la procedura di "Account Hacked" e avviso gli amici via WhatsApp', isCorrect: true, feedback: 'Perfetto. Contenere il danno e recuperare l\'accesso è la priorità.' }
                ]
            }
        ]
    }
}

export function ScenarioEngine({ moduleId }: ScenarioEngineProps) {
    const data = SCENARIOS_DATA[moduleId]
    const [currentStep, setCurrentStep] = useState(0)
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [showFeedback, setShowFeedback] = useState(false)
    const [completed, setCompleted] = useState(false)
    const { addXP, completeGame } = useGameStore()

    if (!data) return <div>Scenario non trovato per il modulo {moduleId}</div>

    const currentScenario = data.scenarios[currentStep]

    const handleAnswer = (index: number) => {
        setSelectedOption(index)
        setShowFeedback(true)
        if (data.scenarios[currentStep].options[index].isCorrect) {
            addXP(100)
        }
    }

    const nextStep = () => {
        if (currentStep < data.scenarios.length - 1) {
            setCurrentStep(currentStep + 1)
            setSelectedOption(null)
            setShowFeedback(false)
        } else {
            setCompleted(true)
            completeGame(moduleId, `scenario-${moduleId}`, 500, 100)
            triggerConfetti()
            toast.success('Training Completato!', {
                description: '+500 XP guadagnati. Ottimo lavoro, Guardian.',
                duration: 5000,
            })
        }
    }

    if (completed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 glass rounded-3xl"
            >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Training Completato!</h2>
                <p className="text-blue-200 mb-8 text-lg">Hai analizzato tutti gli scenari critici. La tua consapevolezza digitale è aumentata.</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25"
                >
                    Torna al Dashboard
                </button>
            </motion.div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30">
                    <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">{data.title}</h2>
                    <p className="text-sm text-blue-300">{data.subtitle}</p>
                </div>
                <div className="ml-auto flex gap-1">
                    {data.scenarios.map((_, i) => (
                        <div
                            key={i}
                            className={`w-8 h-1.5 rounded-full transition-all ${i === currentStep ? 'bg-blue-500' :
                                i < currentStep ? 'bg-green-500/50' : 'bg-white/10'
                                }`}
                        />
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="glass p-8 rounded-3xl border border-white/10 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <Shield className="w-32 h-32" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 relative z-10">{currentScenario.title}</h3>
                    <p className="text-lg text-blue-100 mb-8 leading-relaxed relative z-10">{currentScenario.description}</p>

                    <div className="grid gap-4 relative z-10">
                        {currentScenario.options.map((option, index) => (
                            <button
                                key={index}
                                disabled={showFeedback}
                                onClick={() => handleAnswer(index)}
                                className={`w-full p-5 rounded-2xl border transition-all text-left text-lg ${selectedOption === index
                                    ? (option.isCorrect ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50')
                                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                    } ${showFeedback && !option.isCorrect && selectedOption !== index ? 'opacity-50' : ''}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedOption === index
                                        ? (option.isCorrect ? 'border-green-400' : 'border-red-400')
                                        : 'border-white/20'
                                        }`}>
                                        {selectedOption === index && (
                                            <div className={`w-3 h-3 rounded-full ${option.isCorrect ? 'bg-green-400' : 'bg-red-400'}`} />
                                        )}
                                    </div>
                                    <span>{option.text}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {showFeedback && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`mt-8 p-6 rounded-2xl flex gap-4 ${currentScenario.options[selectedOption!].isCorrect
                                    ? 'bg-green-500/10 border border-green-500/20'
                                    : 'bg-red-500/10 border border-red-500/20'
                                    }`}
                            >
                                {currentScenario.options[selectedOption!].isCorrect ? (
                                    <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                ) : (
                                    <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                                )}
                                <div>
                                    <p className={`font-bold mb-1 ${currentScenario.options[selectedOption!].isCorrect ? 'text-green-400' : 'text-red-400'
                                        }`}>
                                        {currentScenario.options[selectedOption!].isCorrect ? 'Corretto!' : 'Riprova'}
                                    </p>
                                    <p className="text-blue-100">{currentScenario.options[selectedOption!].feedback}</p>
                                    <button
                                        onClick={nextStep}
                                        className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all flex items-center gap-2"
                                    >
                                        Continua
                                        <Zap className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

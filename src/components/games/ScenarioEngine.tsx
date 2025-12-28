'use client'

import { useState } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
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
            },
            {
                id: '3',
                title: 'Revenge Porn',
                description: 'Un compagno ti fa vedere una foto intima di una ragazza della scuola che "gira su Telegram".',
                options: [
                    { text: 'Segnalo subito alla Polizia Postale', isCorrect: true, feedback: 'Bravo. La diffusione non consensuale è un reato penale grave.' },
                    { text: 'Chiedo il link per vederla anche io', isCorrect: false, feedback: 'Partecipare alla diffusione ti rende complice di un reato penale.' }
                ]
            },
            {
                id: '4',
                title: 'Account Fake',
                description: 'C\'è un profilo Instagram con il tuo nome che insulta tutti i professori.',
                options: [
                    { text: 'Segnalo come "Impersonificazione"', isCorrect: true, feedback: 'Esatto. È il modo più veloce per farlo chiudere.' },
                    { text: 'Insulto il fake per fargli capire chi comanda', isCorrect: false, feedback: 'Rispondere agli insulti peggiora solo la tua immagine pubblica.' }
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
                title: 'App Calcolatrice',
                description: 'Una nuova app calcolatrice chiede accesso alla tua posizione GPS e ai tuoi contatti.',
                options: [
                    { text: 'Nego i permessi - non servono alla funzione', isCorrect: true, feedback: 'Corretto. È un chiaro tentativo di data-mining.' },
                    { text: 'Accetto per far funzionare l\'app velocemente', isCorrect: false, feedback: 'Mai accettare permessi non necessari. I tuoi dati sono preziosi.' }
                ]
            },
            {
                id: '2',
                title: 'Diritto all\'Oblio',
                description: 'Vuoi che Facebook cancelli definitivamente tutti i tuoi post di quando avevi 10 anni.',
                options: [
                    { text: 'Esercito il Diritto all\'Oblio (GDPR)', isCorrect: true, feedback: 'Proprio così. Puoi chiedere la cancellazione totale dei tuoi dati.' },
                    { text: 'Cancello l\'account e spero basti', isCorrect: false, feedback: 'Cancellare l\'account non sempre rimuove i dati dai server di backup.' }
                ]
            },
            {
                id: '3',
                title: 'Data Breach',
                description: 'Ricevi un avviso: il sito dove compri le scarpe è stato hackerato. Le password sono rubate.',
                options: [
                    { text: 'Cambio password lì e ovunque fosse uguale', isCorrect: true, feedback: 'Ottimo. Previene il "Credential Stuffing" su altri siti.' },
                    { text: 'Non faccio nulla, tanto scadeva tra un mese', isCorrect: false, feedback: 'Un hacker può ora entrare nel tuo account e rubare i dati della carta.' }
                ]
            }
        ]
    },
    'ai-deepfake': {
        title: 'Deepfake Detective',
        subtitle: 'Verifica Realtà Sintetica',
        icon: 'ai',
        scenarios: [
            {
                id: '1',
                title: 'Video Politico Scioccante',
                description: 'Vedi un video di un leader mondiale che dice cose assurde. Noti che i bordi della bocca sono un po\' sfocati.',
                options: [
                    { text: 'Cerco la notizia su siti di fact-checking', isCorrect: true, feedback: 'Ottimo. Il fact-checking è l\'arma numero uno contro i deepfake.' },
                    { text: 'Lo condivido subito per avvisare i miei amici', isCorrect: false, feedback: 'Condividere senza verificare aiuta la diffusione di fake news pericolose.' }
                ]
            },
            {
                id: '2',
                title: 'Chiamata Vocale Urgente',
                description: 'Tua madre ti chiama chiedendo soldi subito. La voce sembra la sua ma è un po\' robotica.',
                options: [
                    { text: 'Faccio una domanda che solo lei sa', isCorrect: true, feedback: 'Geniale. Una domanda personale smaschera il voice cloning.' },
                    { text: 'Corro a fare il bonifico per aiutarla', isCorrect: false, feedback: 'I truffatori usano l\'urgenza proprio per impedirti di pensare.' }
                ]
            }
        ]
    },
    'finanze-crypto': {
        title: 'Scam Recognizer',
        subtitle: 'Analisi Promesse Finanziarie',
        icon: 'finance',
        scenarios: [
            {
                id: '1',
                title: 'Il Guru di TikTok',
                description: 'Un influencer dice che ha trovato un bug in un sito crypto: "Invia 50€, ricevi 5000€ garantiti".',
                options: [
                    { text: 'È chiaramente uno schema Ponzi/Scam', isCorrect: true, feedback: 'Corretto. I guadagni garantiti a tripla cifra non esistono.' },
                    { text: 'Provo con una piccola somma che posso perdere', isCorrect: false, feedback: 'Anche 1€ regalato a un truffatore è un errore. Non alimentare questi schemi.' }
                ]
            },
            {
                id: '2',
                title: 'Seed Phrase Smarrita',
                description: 'Il "supporto tecnico di MetaMask" ti contatta in DM per chiederti le tue 12 parole di sicurezza.',
                options: [
                    { text: 'Non rispondo - è un tentativo di furto wallet', isCorrect: true, feedback: 'Esatto! Nessun supporto chiede MAI la seed phrase.' },
                    { text: 'Le do per sbloccare il mio account', isCorrect: false, feedback: 'Dare la seed phrase significa regalare tutti i tuoi soldi all\'hacker.' }
                ]
            }
        ]
    },
    'scuola-online': {
        title: 'Classroom Guardian',
        subtitle: 'Protocollo Sicurezza DAD',
        icon: 'school',
        scenarios: [
            {
                id: '1',
                title: 'Link Lezione Pubblico',
                description: 'Un compagno condivide il link della lezione su un server Discord pubblico.',
                options: [
                    { text: 'Avviso subito l\'insegnante', isCorrect: true, feedback: 'Bravo. Questo previene il fenomeno del "Zoom-bombing".' },
                    { text: 'Entro per vedere lo "show"', isCorrect: false, feedback: 'Partecipare a disturbi di lezioni è un\'interruzione di pubblico servizio.' }
                ]
            }
        ]
    },
    'gaming-communities': {
        title: 'Secure Gamer',
        subtitle: 'Protezione Account & Skin',
        icon: 'game',
        scenarios: [
            {
                id: '1',
                title: 'Trade Sospetto',
                description: 'Un giocatore ti offre una skin rarissima se inserisci il tuo codice 2FA in un sito esterno.',
                options: [
                    { text: 'Rifiuto e blocco il giocatore', isCorrect: true, feedback: 'Esatto! Mai condividere codici 2FA. È un furto di account.' },
                    { text: 'Controllo il sito, sembra legit', isCorrect: false, feedback: 'I siti di phishing imitano quelli reali. Resta sui canali ufficiali.' }
                ]
            }
        ]
    },
    'sexting-legal': {
        title: 'Legal Advisor',
        subtitle: 'Gestione Rischi Immagini',
        icon: 'help',
        scenarios: [
            {
                id: '1',
                title: 'Richiesta di Foto',
                description: 'Qualcuno con cui parli da poco ti chiede una foto intima.',
                options: [
                    { text: 'Rifiuto fermamente', isCorrect: true, feedback: 'Saggia decisione. Una foto inviata è fuori controllo per sempre.' },
                    { text: 'La invio oscurando il viso', isCorrect: false, feedback: 'Anche senza viso, i metadati o segni particolari possono identificarti.' }
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
                description: 'Il tuo operatore internet rallenta i siti di informazione libera.',
                options: [
                    { text: 'È una violazione della Net Neutrality', isCorrect: true, feedback: 'Appunto. Tutti i dati devono essere trattati allo stesso modo.' },
                    { text: 'Hanno ragione loro, pago io', isCorrect: false, feedback: 'In Europa la legge protegge l\'equità del traffico dati.' }
                ]
            }
        ]
    },
    'salute-mentale': {
        title: 'Mindful Guardian',
        subtitle: 'Equilibrio Digitale',
        icon: 'brain',
        scenarios: [
            {
                id: '1',
                title: 'Notifiche Notturne',
                description: 'Sono le 2 di notte, il telefono vibra.',
                options: [
                    { text: 'Lo ignoro e dormo', isCorrect: true, feedback: 'Ottimo. Il sonno è sacro.' },
                    { text: 'Controllo subito', isCorrect: false, feedback: 'Le interruzioni notturne degradano la salute mentale.' }
                ]
            }
        ]
    }
}

export default function ScenarioEngine({ moduleId }: ScenarioEngineProps) {
    const config = SCENARIOS_DATA[moduleId] || {
        title: 'Simulator',
        subtitle: 'Scenario didattico',
        icon: 'zap',
        scenarios: [
            {
                id: 'default',
                title: 'Decisione Critica',
                description: 'Analizza la situazione e scegli l\'azione più sicura.',
                options: [
                    { text: 'Azione Protettiva', isCorrect: true, feedback: 'Ottima scelta di sicurezza.' },
                    { text: 'Azione a Rischio', isCorrect: false, feedback: 'Attenzione ai pericoli nascosti.' }
                ]
            }
        ]
    }

    const [currentIdx, setCurrentIdx] = useState(0)
    const [selectedOption, setSelectedOption] = useState<number | null>(null)
    const [score, setScore] = useState(0)
    const [completed, setCompleted] = useState(false)
    const addXP = useGameStore(state => state.addXP)

    const handleAnswer = (idx: number) => {
        if (selectedOption !== null) return
        setSelectedOption(idx)
        if (config.scenarios[currentIdx].options[idx].isCorrect) {
            setScore(s => s + 1)
        }
    }

    const nextScenario = () => {
        if (currentIdx === config.scenarios.length - 1) {
            addXP(score * 50 + 25)
            setCompleted(true)
        } else {
            setCurrentIdx(i => i + 1)
            setSelectedOption(null)
        }
    }

    if (completed) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 bg-blue-900/20 backdrop-blur-3xl rounded-[3rem] border border-cyan-400/20 shadow-glass"
            >
                <div className="w-24 h-24 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-8 shadow-blue-glow">
                    <Icon name="check" size={40} className="text-white" />
                </div>
                <h2 className="text-4xl font-black italic tracking-tighter mb-4 uppercase">Simulazione Finita!</h2>
                <p className="text-xl mb-10 text-blue-200/60 font-medium italic">Grado di consapevolezza: <span className="text-cyan-400 font-black">{Math.round((score / config.scenarios.length) * 100)}%</span></p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] mb-10">
                    <p className="text-cyan-400 font-black uppercase tracking-widest text-xs">+ {score * 50 + 25} XP GUADAGNATI</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-12 py-5 bg-white text-blue-900 font-black italic uppercase italic tracking-tighter rounded-2xl hover:scale-105 transition shadow-lg"
                >
                    Ottimo
                </button>
            </motion.div>
        )
    }

    const scenario = config.scenarios[currentIdx]

    return (
        <div className="max-w-2xl mx-auto space-y-10">
            <div className="flex justify-between items-end">
                <div className="space-y-1">
                    <div className="flex items-center gap-3">
                        <Icon name={config.icon || 'zap'} className="text-cyan-400" size={20} />
                        <span className="text-[10px] font-black text-blue-400/40 uppercase tracking-[0.3em]">{config.title}</span>
                    </div>
                    <h2 className="text-2xl font-black italic tracking-tighter uppercase italic">{config.subtitle}</h2>
                </div>
                <span className="text-[10px] font-black text-cyan-400/40 uppercase">Target {currentIdx + 1}/{config.scenarios.length}</span>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIdx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 bg-blue-900/40 backdrop-blur-2xl rounded-[3.5rem] border border-white/10 shadow-glass relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Icon name={config.icon} size={150} />
                    </div>

                    <div className="relative z-10 space-y-12">
                        <div className="space-y-4">
                            <span className="px-4 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-[10px] font-black text-cyan-400 uppercase tracking-widest italic">Scenario Reale</span>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tight italic leading-tight text-white">&quot;{scenario.description}&quot;</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {scenario.options.map((opt, i) => (
                                <button
                                    key={i}
                                    onClick={() => handleAnswer(i)}
                                    disabled={selectedOption !== null}
                                    className={`p-6 rounded-2xl font-black text-left transition-all duration-300 border-2 ${selectedOption === i
                                        ? (opt.isCorrect ? 'bg-cyan-400/20 border-cyan-400 text-white shadow-blue-glow' : 'bg-red-600/20 border-red-500 text-white shadow-red-600/20')
                                        : (selectedOption !== null ? 'opacity-50 grayscale border-white/5' : 'bg-white/5 border-white/5 hover:border-cyan-400/30 text-blue-100/60 hover:text-white')
                                        }`}
                                >
                                    <div className="flex justify-between items-center italic tracking-tighter uppercase text-sm">
                                        {opt.text}
                                        {selectedOption === i && (
                                            opt.isCorrect ? <CheckCircle2 size={24} className="text-cyan-400" /> : <XCircle size={24} className="text-red-500" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {selectedOption !== null && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-6 rounded-2xl border ${scenario.options[selectedOption].isCorrect ? 'bg-cyan-400/5 border-cyan-400/20' : 'bg-red-600/5 border-red-500/20'} space-y-4`}
                            >
                                <div className="flex items-start gap-4">
                                    <Info className={scenario.options[selectedOption].isCorrect ? 'text-cyan-400' : 'text-red-400'} size={20} />
                                    <p className="text-sm font-medium leading-relaxed italic text-blue-100/60">{scenario.options[selectedOption].feedback}</p>
                                </div>
                                <button
                                    onClick={nextScenario}
                                    className="w-full py-4 bg-white text-blue-900 font-black italic uppercase italic tracking-tighter rounded-xl hover:scale-[1.02] transition shadow-lg text-sm"
                                >
                                    Continua Analisi
                                </button>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

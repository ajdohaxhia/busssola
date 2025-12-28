'use client'

import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Bot, AlertTriangle, ShieldCheck } from 'lucide-react'

interface Message {
    id: string
    sender: 'predator' | 'user'
    text: string
}

interface Choice {
    id: string
    text: string
    isSafe: boolean
    feedback: string
}

interface Step {
    predatorText: string
    choices: Choice[]
}

export default function GroomingChatbot() {
    const [currentStep, setCurrentStep] = useState(0)
    const [messages, setMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [score, setScore] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)
    const addXP = useGameStore(state => state.addXP)

    const steps: Step[] = [
        {
            predatorText: "Ehi, ho visto i tuoi post su TikTok, sono fighissimi! Sembri molto più maturo/a della tua età. Quanti anni hai?",
            choices: [
                { id: '1', text: "Grazie! Ho 14 anni, tu?", isSafe: false, feedback: "Dare la tua età reale a uno sconosciuto è il primo passo che i groomer usano per 'testare' i tuoi confini." },
                { id: '2', text: "Chi sei? Non accetto messaggi da chi non conosco.", isSafe: true, feedback: "Ottimo! Mettere subito un muro è la difesa migliore." }
            ]
        },
        {
            predatorText: "Sono solo un fan! Mi chiamo Marco e ho 17 anni, sono di Roma. Comunque qui Instagram è noioso, hai Telegram o Discord? Lì possiamo parlare liberamente senza che i tuoi vedano tutto.",
            choices: [
                { id: '1', text: "Sì, aggiungimi su Discord: user#1234", isSafe: false, feedback: "Mai passare ad app private. I groomer vogliono isolarti dove non c'è controllo." },
                { id: '2', text: "Preferisco restare qui, non ti conosco ancora.", isSafe: true, feedback: "Resistere alla pressione di spostarsi su app private è fondamentale." }
            ]
        },
        {
            predatorText: "Vabbuò, scherzavo! Comunque sembri molto bella/o in quella foto. Mi mandi un selfie solo per me? Ma senza vestiti che coprono troppo, per vedere meglio.",
            choices: [
                { id: '1', text: "Cosa?! Sei un maniaco, ti segnalo subito!", isSafe: true, feedback: "Reazione perfetta. Se le richieste diventano esplicite, interrompi e segnala." },
                { id: '2', text: "Ehm, non so... se ti mando la foto poi mi dai quella skin di Fortnite?", isSafe: false, feedback: "Il 'rewarding' è una tecnica classica. Non scambiare mai la tua intimità per oggetti digitali." }
            ]
        }
    ]

    useEffect(() => {
        if (currentStep === 0 && messages.length === 0) {
            triggerPredator(steps[0].predatorText)
        }
    }, [])

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight)
    }, [messages, isTyping])

    const triggerPredator = (text: string) => {
        setIsTyping(true)
        setTimeout(() => {
            const newMsg: Message = { id: Date.now().toString(), sender: 'predator', text }
            setMessages(prev => [...prev, newMsg])
            setIsTyping(false)
        }, 1500)
    }

    const handleChoice = (choice: Choice) => {
        const userMsg: Message = { id: Date.now().toString(), sender: 'user', text: choice.text }
        setMessages(prev => [...prev, userMsg])

        if (choice.isSafe) setScore(prev => prev + 1)

        // Show feedback as a system message? No, just move forward for now
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1)
            triggerPredator(steps[currentStep + 1].predatorText)
        } else {
            setTimeout(() => {
                setCompleted(true)
                addXP(score * 50)
            }, 1000)
        }
    }

    if (completed) {
        return (
            <div className="text-center p-8 bg-dark-800 rounded-3xl border border-neon-violet/20">
                <ShieldCheck size={64} className="mx-auto text-neon-mint mb-4" />
                <h2 className="text-3xl font-bold mb-4">Chat Terminata</h2>
                <p className="text-lg text-gray-400 mb-6">Hai gestito la conversazione con sicurezza.</p>
                <div className="bg-neon-violet/10 p-4 rounded-xl mb-8">
                    <p className="text-neon-violet font-bold">XP Guadagnati: {score * 50}</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-neon-violet text-white font-bold rounded-lg hover:scale-105 transition"
                >
                    Torna ai Moduli
                </button>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-[600px] bg-dark-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="bg-dark-800 p-4 border-b border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 bg-neon-pink/20 rounded-full flex items-center justify-center text-neon-pink">
                    <User size={20} />
                </div>
                <div>
                    <div className="font-bold">Sconosciuto (Marco_17)</div>
                    <div className="text-xs text-neon-mint flex items-center gap-1">
                        <span className="w-2 h-2 bg-neon-mint rounded-full animate-pulse" /> Online
                    </div>
                </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('/grid.svg')] bg-repeat">
                {messages.map(m => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[80%] p-4 rounded-2xl ${m.sender === 'user'
                                ? 'bg-neon-violet text-white rounded-tr-none'
                                : 'bg-dark-800 text-gray-100 border border-white/5 rounded-tl-none'
                            }`}>
                            {m.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-dark-800 p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area (Choices) */}
            <div className="p-4 bg-dark-800 border-t border-white/10">
                <div className="grid grid-cols-1 gap-2">
                    <AnimatePresence mode="wait">
                        {!isTyping && steps[currentStep] && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-2"
                            >
                                {steps[currentStep].choices.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => handleChoice(c)}
                                        className="w-full text-left p-4 bg-dark-700 hover:bg-neon-violet/20 border border-white/5 rounded-xl text-sm transition-colors text-gray-200"
                                    >
                                        {c.text}
                                    </button>
                                ))}
                            </motion.div>
                        ) || (
                                <div className="h-[100px] flex items-center justify-center text-gray-500 italic text-sm">
                                    Aspettando la risposta...
                                </div>
                            )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

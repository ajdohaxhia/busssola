'use client'

import { useState, useEffect, useRef } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Bot, AlertTriangle, ShieldCheck } from 'lucide-react'
import { Icon } from '@/components/ui/Icon'

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

export default function GroomingChatbot({ onComplete }: { onComplete: (score: number) => void }) {
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

        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1)
            triggerPredator(steps[currentStep + 1].predatorText)
        } else {
            setTimeout(() => {
                const finalScore = score + (choice.isSafe ? 1 : 0)
                onComplete(finalScore * 50)
            }, 1000)
        }
    }

    // Completion UI handled by parent

    return (
        <div className="flex flex-col h-[650px] bg-dark-900/40 backdrop-blur-2xl rounded-[3rem] border border-white/10 overflow-hidden shadow-glass relative">
            {/* Chat Header */}
            <div className="bg-blue-900/40 p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-600/20 border border-red-500/30 rounded-full flex items-center justify-center text-red-400 shadow-lg shadow-red-600/10">
                        <User size={24} />
                    </div>
                    <div>
                        <div className="font-black italic text-white tracking-tight uppercase">Sconosciuto (Marco_17)</div>
                        <div className="text-[10px] text-cyan-400 font-black uppercase tracking-widest flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-blue-glow" /> Online
                        </div>
                    </div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl text-blue-400/20">
                    <Bot size={20} />
                </div>
            </div>

            {/* Messages Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
                {messages.map(m => (
                    <motion.div
                        key={m.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div className={`max-w-[75%] p-5 rounded-[1.8rem] font-medium leading-relaxed ${m.sender === 'user'
                            ? 'bg-accent-gradient text-white rounded-tr-none shadow-lg'
                            : 'bg-white/5 text-blue-100/70 border border-white/5 rounded-tl-none backdrop-blur-md'
                            }`}>
                            {m.text}
                        </div>
                    </motion.div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-blue-900/40 p-5 rounded-[1.8rem] rounded-tl-none border border-white/10 flex gap-1.5 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </div>

            {/* Input Area (Choices) */}
            <div className="p-6 bg-blue-900/60 border-t border-white/10 backdrop-blur-xl">
                <div className="grid grid-cols-1 gap-3">
                    <AnimatePresence mode="wait">
                        {!isTyping && steps[currentStep] ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                            >
                                {steps[currentStep].choices.map(c => (
                                    <button
                                        key={c.id}
                                        onClick={() => handleChoice(c)}
                                        className="w-full text-left p-5 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-blue-100/60 hover:bg-white/10 hover:text-white hover:border-cyan-400/30 transition-all duration-300 shadow-inner group flex items-center justify-between"
                                    >
                                        <span className="italic">{c.text}</span>
                                        <Icon name="chevron" size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </button>
                                ))}
                            </motion.div>
                        ) : (
                            <div className="h-[100px] flex items-center justify-center text-blue-400/20 italic text-sm font-black uppercase tracking-widest animate-pulse">
                                In attesa di dati...
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

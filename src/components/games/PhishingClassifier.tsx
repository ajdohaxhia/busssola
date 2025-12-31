'use client'

import { useState } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { ShieldCheck, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

interface PhishingQuestion {
    id: string
    text: string
    isPhishing: boolean
    explanation: string
}

export default function PhishingClassifier({ onComplete }: { onComplete: (score: number) => void }) {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [completed, setCompleted] = useState(false)
    const [showExplanation, setShowExplanation] = useState(false)
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState<boolean | null>(null)

    const addXP = useGameStore((state) => state.addXP)

    const questions: PhishingQuestion[] = [
        {
            id: '1',
            text: 'Email da "support@apple.com": "Urgente: Il tuo account è stato compromesso. Clicca qui per verificare: https://apple-security-verify.com"',
            isPhishing: true,
            explanation: 'URL sospetto (apple-security-verify.com NON è Apple), urgenza falsa, richiesta di click su link esterno. Phishing classico.',
        },
        {
            id: '2',
            text: 'SMS dalla tua banca (numero verificato in precedenza): "Nuovo acquisto confermato. Se non sei stato tu, contatta il numero sul resto della carta."',
            isPhishing: false,
            explanation: 'SMS legittimo dalla banca. Numero verificato, richiede azione consapevole (chiama banca), NON chiede di cliccare link.',
        },
        {
            id: '3',
            text: 'DM su Instagram: "Congratulazioni! Hai vinto un iPhone 15. Paga solo 2 euro di spedizione qui: bit.ly/win-new-phone"',
            isPhishing: true,
            explanation: 'I concorsi reali non ti contattano via DM chiedendo soldi, e usano link ufficiali, non accorciatori come bit.ly.',
        },
        {
            id: '4',
            text: 'Email da "Netflix <info@mailer.netflix.com>": "Il tuo abbonamento è scaduto. Aggiorna il metodo di pagamento nel tuo account Netflix."',
            isPhishing: false,
            explanation: 'Email con dominio corretto (@mailer.netflix.com) e ti invita ad andare sul TUO account (non link diretto a pagamento).',
        }
    ]

    const handleAnswer = (answer: boolean) => {
        const question = questions[currentQuestion]
        const correct = answer === question.isPhishing
        if (correct) {
            setScore(score + 1)
        }
        setLastAnswerCorrect(correct)
        setShowExplanation(true)
    }

    const nextQuestion = () => {
        setShowExplanation(false)
        if (currentQuestion === questions.length - 1) {
            const finalXP = score * 25
            onComplete(finalXP)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    // Completion UI handled by parent

    const question = questions[currentQuestion]

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <div className="flex justify-between items-end text-[10px] mb-3">
                    <span className="text-blue-400/40 uppercase font-black tracking-widest">Missione: Smaschera lo Scam</span>
                    <span className="text-cyan-400 font-black">DOMANDA {currentQuestion + 1}/{questions.length}</span>
                </div>
                <div className="w-full bg-blue-900/40 rounded-full h-1.5 overflow-hidden border border-white/5 shadow-inner">
                    <motion.div
                        className="bg-accent-gradient h-full shadow-blue-glow"
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="p-10 rounded-[3rem] bg-blue-900/20 backdrop-blur-2xl border border-white/10 shadow-glass relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                        <AlertTriangle size={120} />
                    </div>

                    <p className="text-2xl md:text-3xl font-black tracking-tight italic leading-tight mb-12 relative z-10 text-white">
                        "{question.text}"
                    </p>

                    {!showExplanation ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleAnswer(true)}
                                className="group relative px-6 py-5 bg-red-600 border border-red-500/50 rounded-2xl font-black text-white hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-red-600/20 uppercase italic tracking-tighter"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <AlertTriangle size={20} /> PHISHING
                                </span>
                            </button>
                            <button
                                onClick={() => handleAnswer(false)}
                                className="group relative px-6 py-5 bg-blue-600 border border-blue-500/50 rounded-2xl font-black text-white hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-600/20 uppercase italic tracking-tighter"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <ShieldCheck size={20} /> LEGITTIMO
                                </span>
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-8 rounded-[2rem] border overflow-hidden relative ${lastAnswerCorrect ? 'border-cyan-400/30' : 'border-red-400/30'}`}
                        >
                            <div className={`absolute inset-0 opacity-10 ${lastAnswerCorrect ? 'bg-cyan-400' : 'bg-red-400'}`} />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    {lastAnswerCorrect ? (
                                        <CheckCircle2 className="text-cyan-400" size={28} />
                                    ) : (
                                        <XCircle className="text-red-400" size={28} />
                                    )}
                                    <span className={`text-xl font-black italic tracking-tighter uppercase ${lastAnswerCorrect ? 'text-cyan-400' : 'text-red-400'}`}>
                                        {lastAnswerCorrect ? 'Analisi Corretta!' : 'Sistema Compromesso!'}
                                    </span>
                                </div>
                                <p className="text-blue-100/60 font-medium mb-8 leading-relaxed italic">
                                    {question.explanation}
                                </p>
                                <button
                                    onClick={nextQuestion}
                                    className="w-full py-4 bg-white text-blue-900 font-black italic uppercase italic tracking-tighter rounded-2xl hover:scale-[1.02] transition shadow-lg"
                                >
                                    Prossimo Target
                                </button>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

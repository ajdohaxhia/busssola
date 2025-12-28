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

export default function PhishingClassifier() {
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
            addXP(finalXP)
            setCompleted(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
    }

    if (completed) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center p-8 bg-dark-800 rounded-2xl border border-neon-yellow/20"
            >
                <ShieldCheck size={64} className="mx-auto text-neon-mint mb-4" />
                <h2 className="text-3xl font-bold mb-4">Addestramento Completato!</h2>
                <p className="text-xl mb-6">Punteggio: <span className="text-neon-yellow font-black">{score}/{questions.length}</span></p>
                <div className="bg-neon-yellow/10 p-4 rounded-xl mb-8">
                    <p className="text-neon-yellow font-bold">+ {score * 25} XP Guadagnati</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 bg-neon-yellow text-black font-bold rounded-lg hover:scale-105 transition shadow-neon"
                >
                    Riprova o Continua
                </button>
            </motion.div>
        )
    }

    const question = questions[currentQuestion]

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <div className="flex justify-between items-end text-sm mb-2">
                    <span className="text-gray-400 font-mono">Missione: Smaschera lo Scam</span>
                    <span className="text-neon-yellow font-bold">Domanda {currentQuestion + 1}/{questions.length}</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                        className="bg-neon-yellow h-full"
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
                    className="bg-dark-800 p-8 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <AlertTriangle size={80} />
                    </div>

                    <p className="text-xl md:text-2xl leading-relaxed mb-8 relative z-10 font-medium">
                        "{question.text}"
                    </p>

                    {!showExplanation ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => handleAnswer(true)}
                                className="group relative px-6 py-4 bg-neon-pink/10 border-2 border-neon-pink/30 rounded-xl font-bold text-neon-pink hover:bg-neon-pink hover:text-white transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 italic">
                                    <AlertTriangle size={20} /> PHISHING
                                </span>
                            </button>
                            <button
                                onClick={() => handleAnswer(false)}
                                className="group relative px-6 py-4 bg-neon-mint/10 border-2 border-neon-mint/30 rounded-xl font-bold text-neon-mint hover:bg-neon-mint hover:text-dark-900 transition-all overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 italic">
                                    <ShieldCheck size={20} /> LEGITTIMO
                                </span>
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-6 rounded-2xl ${lastAnswerCorrect ? 'bg-neon-mint/10 border border-neon-mint/30' : 'bg-neon-pink/10 border border-neon-pink/30'}`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                {lastAnswerCorrect ? (
                                    <CheckCircle2 className="text-neon-mint" />
                                ) : (
                                    <XCircle className="text-neon-pink" />
                                )}
                                <span className="font-bold text-lg">
                                    {lastAnswerCorrect ? 'Corretto!' : 'Ups! Sbagliato.'}
                                </span>
                            </div>
                            <p className="text-gray-300 mb-6 italic leading-relaxed">
                                {question.explanation}
                            </p>
                            <button
                                onClick={nextQuestion}
                                className="w-full py-3 bg-white text-dark-900 font-bold rounded-lg hover:bg-gray-200 transition"
                            >
                                Prossima Domanda
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

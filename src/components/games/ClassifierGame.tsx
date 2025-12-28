"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CheckCircle, XCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ClassifierItem {
    id: string;
    type: 'text' | 'image' | 'code';
    content: string; // The text content or image URL
    correct: 'safe' | 'unsafe';
    explanation: string;
}

interface ClassifierGameProps {
    items: ClassifierItem[];
    onComplete: (score: number) => void;
}

export function ClassifierGame({ items, onComplete }: ClassifierGameProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastChoiceCorrect, setLastChoiceCorrect] = useState(false);

    const currentItem = items[currentIndex];
    // If we're past the last item
    if (!currentItem) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-4">Analisi Completata</h2>
                <p className="text-xl mb-6">Punteggio: {score} / {items.length}</p>
                <Button onClick={() => onComplete(score * 10)} size="lg" variant="neon">Continua</Button>
            </div>
        );
    }

    const handleChoice = (choice: 'safe' | 'unsafe') => {
        const isCorrect = choice === currentItem.correct;
        if (isCorrect) setScore(s => s + 1);
        setLastChoiceCorrect(isCorrect);
        setShowFeedback(true);
    };

    const handleNext = () => {
        setShowFeedback(false);
        setCurrentIndex(i => i + 1);
    };

    return (
        <div className="max-w-xl mx-auto">
            <div className="mb-6 flex justify-between text-sm uppercase tracking-wider text-white/50">
                <span>Caso {currentIndex + 1} di {items.length}</span>
                <span>Score: {score}</span>
            </div>

            <AnimatePresence mode="wait">
                {!showFeedback ? (
                    <motion.div
                        key="question"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <Card className={`p-8 mb-8 flex items-center justify-center min-h-[200px] border-2 ${currentItem.type === 'code' ? 'font-mono text-sm bg-black' : ''}`}>
                            {currentItem.type === 'image' ? (
                                <div className="bg-white/10 h-40 w-full flex items-center justify-center rounded text-white/30">[IMG: {currentItem.content}]</div>
                            ) : (
                                <p className="text-lg md:text-xl text-center">{currentItem.content}</p>
                            )}
                        </Card>

                        <div className="grid grid-cols-2 gap-4">
                            <Button
                                onClick={() => handleChoice('unsafe')}
                                variant="destructive"
                                size="lg"
                                className="h-24 text-lg"
                            >
                                <AlertTriangle className="mr-2 h-6 w-6" /> PERICOLOSO
                            </Button>
                            <Button
                                onClick={() => handleChoice('safe')}
                                variant="neon"
                                size="lg"
                                className="h-24 text-lg bg-neon-mint text-dark-900 hover:bg-neon-mint/90"
                            >
                                <ShieldCheck className="mr-2 h-6 w-6" /> SICURO
                            </Button>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="feedback"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`p-6 rounded-xl border-2 ${lastChoiceCorrect ? 'border-neon-mint bg-neon-mint/10' : 'border-neon-pink bg-neon-pink/10'} text-center`}
                    >
                        <div className="flex justify-center mb-4">
                            {lastChoiceCorrect ? <CheckCircle className="h-16 w-16 text-neon-mint" /> : <XCircle className="h-16 w-16 text-neon-pink" />}
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{lastChoiceCorrect ? 'Corretto!' : 'Sbagliato'}</h3>
                        <p className="mb-6 text-white/80">{currentItem.explanation}</p>
                        <Button onClick={handleNext} variant="outline" className="w-full">Prossimo Caso</Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

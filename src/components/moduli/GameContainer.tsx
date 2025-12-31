'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, RotateCcw, Trophy } from 'lucide-react'
import { useGameStore } from '@/store/useGameStore'
import { ALL_MODULES } from '@/data/modules/index'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { cn } from '@/lib/utils'
import GroomingChatbot from '@/components/games/GroomingChatbot'
import { ScenarioEngine } from '@/components/games/ScenarioEngine'
import { PhishingClassifier } from '@/components/games/PhishingClassifier'
import { InspectorGame } from '@/components/games/InspectorGame'
import { MalwareAnalyzer } from '@/components/games/MalwareAnalyzer'
import { MoodTrackerGame } from '@/components/games/MoodTrackerGame'
import { ClassifierGame } from '@/components/games/ClassifierGame'

interface GameContainerProps {
    moduleId: string
    onComplete: () => void
    onBack?: () => void
}

export function GameContainer({ moduleId, onComplete, onBack }: GameContainerProps) {
    const [gameStage, setGameStage] = useState<'intro' | 'playing' | 'result'>('intro')
    const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null)

    // Find game config
    const moduleData = ALL_MODULES.find(m => m.id === moduleId)
    const gameConfig = moduleData?.games?.[0]

    if (!gameConfig) return <div>Gioco non trovato</div>

    const handleGameComplete = (score: number, passed: boolean) => {
        setResult({ score, passed })
        setGameStage('result')
        if (passed) {
            useGameStore.getState().completeGame(moduleId, gameConfig.id, score)
        }
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            >
                {/* Immersive Backdrop */}
                <div className="absolute inset-0 bg-[#030712]/95 backdrop-blur-xl" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                {/* Floating Blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse-slow" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />

                {/* Game Window */}
                <Card className="relative w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden border-white/10 shadow-2xl bg-[#0a0e27]/80">

                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-neon-cyan/10 flex items-center justify-center text-neon-cyan">
                                <span className="text-lg">🎮</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm tracking-wide">{gameConfig.title}</h3>
                                <p className="text-xs text-white/40 font-mono uppercase">{moduleData?.title}</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onBack}
                            className="hover:bg-white/10 rounded-full"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto relative scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">

                        {/* INTRO STAGE */}
                        {gameStage === 'intro' && (
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="w-32 h-32 rounded-3xl bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center shadow-lg shadow-neon-purple/20"
                                >
                                    <Play className="w-12 h-12 text-white fill-current" />
                                </motion.div>

                                <div className="space-y-4 max-w-lg">
                                    <h2 className="text-4xl font-display font-bold text-white">Pronto a iniziare?</h2>
                                    <p className="text-lg text-white/60 leading-relaxed">
                                        {gameConfig.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-neon-green">
                                        +100 XP Reward
                                    </div>
                                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-mono text-neon-cyan">
                                        ~10 Minuti
                                    </div>
                                </div>

                                <Button
                                    variant="cyan"
                                    size="lg"
                                    onClick={() => setGameStage('playing')}
                                    className="text-lg px-12"
                                >
                                    Avvia Simulazione
                                </Button>
                            </div>
                        )}

                        {/* PLAYING STAGE */}
                        {gameStage === 'playing' && (
                            <div className="h-full">
                                {gameConfig.type === 'chatbot' && <GroomingChatbot onComplete={(score) => handleGameComplete(score, score >= 60)} />}
                                {gameConfig.type === 'scenario' && <ScenarioEngine moduleId={moduleId} onComplete={(score) => handleGameComplete(score, true)} />}

                                {/* Mapping 'quiz' to ScenarioEngine as they are functionally similar (choice based) */}
                                {gameConfig.type === 'quiz' && <ScenarioEngine moduleId={moduleId} onComplete={(score) => handleGameComplete(score, true)} />}

                                {gameConfig.type === 'classifier' && <ClassifierGame items={[]} onComplete={(score) => handleGameComplete(score, true)} />} {/* TODO: Pass real items */}
                                {gameConfig.type === 'phishing' && <PhishingClassifier onComplete={(score) => handleGameComplete(score, score >= 60)} />}
                                {gameConfig.type === 'inspector' && <InspectorGame onComplete={(score) => handleGameComplete(score, true)} />}
                                {gameConfig.type === 'malware' && <MalwareAnalyzer onComplete={(score) => handleGameComplete(score, true)} />}
                                {gameConfig.type === 'mood' && <MoodTrackerGame onComplete={(score) => handleGameComplete(score, true)} />}

                                {/* Fallback for unknown types */}
                                {!['chatbot', 'scenario', 'quiz', 'classifier', 'phishing', 'inspector', 'malware', 'mood'].includes(gameConfig.type) && (
                                    <ScenarioEngine moduleId={moduleId} onComplete={(score) => handleGameComplete(score, true)} />
                                )}
                            </div>
                        )}

                        {/* RESULT STAGE */}
                        {gameStage === 'result' && result && (
                            <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-8">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className={cn(
                                        "w-24 h-24 rounded-full flex items-center justify-center text-4xl shadow-glow mb-4",
                                        result.passed ? "bg-neon-green text-dark-bg" : "bg-neon-danger text-white"
                                    )}
                                >
                                    {result.passed ? <Trophy className="w-10 h-10" /> : <RotateCcw className="w-10 h-10" />}
                                </motion.div>

                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold text-white">
                                        {result.passed ? 'Missione Compiuta!' : 'Riprova'}
                                    </h2>
                                    <p className="text-white/60 max-w-md mx-auto">
                                        {result.passed
                                            ? `Hai guadagnato ${result.score} XP e sbloccato nuove competenze.`
                                            : 'Non hai superato la simulazione. Rileggi i suggerimenti e riprova.'
                                        }
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <Button
                                        variant="outline"
                                        onClick={() => setGameStage('intro')}
                                    >
                                        Rigioca
                                    </Button>
                                    <Button
                                        variant={result.passed ? "cyan" : "default"}
                                        onClick={onComplete}
                                    >
                                        {result.passed ? 'Continua' : 'Esci'}
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
}

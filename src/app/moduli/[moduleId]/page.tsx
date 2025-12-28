'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { MODULES_DATA } from '@/data/modules'
import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import PhishingClassifier from '@/components/games/PhishingClassifier'
import GroomingChatbot from '@/components/games/GroomingChatbot'
import MalwareAnalyzer from '@/components/games/MalwareAnalyzer'
import MoodTrackerGame from '@/components/games/MoodTrackerGame'

export default function ModulePage() {
    const { moduleId } = useParams()
    const [activeTab, setActiveTab] = useState<'lessons' | 'game'>('lessons')
    const { completeLesson } = useGameStore()

    const module = MODULES_DATA.find(m => m.id === moduleId)

    if (!module) return <div>Modulo non trovato.</div>

    const renderGame = () => {
        switch (module.id) {
            case 'phishing-malware': return <PhishingClassifier />
            case 'predatori-online': return <GroomingChatbot />
            case 'privacy-tecnica': return <MalwareAnalyzer />
            case 'social-addiction': return <MoodTrackerGame />
            case 'salute-mentale': return <MoodTrackerGame /> // Reusing for now
            default: return <div className="text-center py-20 text-gray-500 border-2 border-dashed border-white/5 rounded-3xl">Il gioco per questo modulo sarà disponibile a breve nell'aggiornamento v2.1</div>
        }
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 pb-32">
            {/* Header */}
            <section className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="text-6xl bg-dark-800 p-6 rounded-3xl shadow-xl border border-white/5">{module.icon}</div>
                <div>
                    <div className="flex gap-2 items-center mb-2">
                        <span className="text-[10px] font-bold text-neon-yellow uppercase tracking-widest px-2 py-1 bg-neon-yellow/10 rounded">Modulo</span>
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{module.difficulty}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase">{module.title}</h1>
                </div>
            </section>

            {/* Tabs */}
            <div className="flex gap-2 p-1.5 bg-dark-800 rounded-2xl w-fit border border-white/5">
                <button
                    onClick={() => setActiveTab('lessons')}
                    className={`px-6 py-2 rounded-xl font-bold transition ${activeTab === 'lessons' ? 'bg-white text-dark-900' : 'text-gray-400 hover:text-white'}`}
                >
                    Lezioni
                </button>
                <button
                    onClick={() => setActiveTab('game')}
                    className={`px-6 py-2 rounded-xl font-bold transition ${activeTab === 'game' ? 'bg-neon-yellow text-dark-900 shadow-neon' : 'text-gray-400 hover:text-white'}`}
                >
                    Sfida Game
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'lessons' ? (
                    <motion.div
                        key="lessons"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="space-y-12"
                    >
                        {module.lessons.map((lesson, idx) => (
                            <div
                                key={lesson.id}
                                className="bg-dark-800 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl space-y-8"
                                onMouseEnter={() => completeLesson(module.id, lesson.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-neon-yellow/10 border border-neon-yellow/20 flex items-center justify-center font-black text-neon-yellow">{idx + 1}</div>
                                    <h2 className="text-2xl font-black italic">{lesson.title}</h2>
                                </div>

                                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed font-medium">
                                    {/* Real production content renders here */}
                                    <div dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br/>') }} />
                                </div>

                                <div className="bg-dark-900/50 p-6 rounded-3xl border border-white/5">
                                    <h3 className="text-sm font-black text-neon-yellow uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <Icon name="zap" size={16} /> Consigli Pratici
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {lesson.tips.map((tip, tIdx) => (
                                            <li key={tIdx} className="flex gap-3 text-sm text-gray-400 font-medium bg-dark-800 p-3 rounded-xl border border-white/5 hover:border-white/20 transition">
                                                <span className="text-neon-yellow">•</span> {tip}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="game"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        {renderGame()}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

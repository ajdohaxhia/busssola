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
import ScenarioEngine from '@/components/games/ScenarioEngine'

export default function ModulePage() {
    const { moduleId } = useParams()
    const [activeTab, setActiveTab] = useState<'lessons' | 'game'>('lessons')
    const { completeLesson } = useGameStore()

    const moduleData = MODULES_DATA.find(m => m.id === moduleId)

    if (!moduleData) return <div className="p-20 text-center text-blue-200/40 uppercase font-black italic tracking-tighter">Modulo non trovato.</div>

    const renderGame = () => {
        switch (moduleData.id) {
            case 'phishing-malware': return <PhishingClassifier />
            case 'predatori-online': return <GroomingChatbot />
            case 'privacy-tecnica': return <MalwareAnalyzer />
            case 'social-addiction': return <MoodTrackerGame />
            case 'salute-mentale': return <MoodTrackerGame />
            case 'cyberbullismo':
            case 'gdpr-dati':
            case 'scuola-online':
            case 'gaming-communities':
            case 'ai-deepfake':
            case 'finanze-crypto':
            case 'sexting-legal':
            case 'diritti-digitali':
                return <ScenarioEngine moduleId={moduleData.id} />
            default: return (
                <div className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-blue-900/10 rounded-[3rem] border-2 border-dashed border-white/5">
                    <Icon name="build" size={64} className="text-blue-500/20" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold text-blue-200/60 uppercase tracking-widest">Modulo in Sviluppo</h3>
                        <p className="text-sm text-blue-300/30 max-w-xs mx-auto font-medium">L'attività interattiva per questo modulo sarà disponibile nel prossimo aggiornamento del database.</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-12 space-y-12 pb-32">
            {/* Header */}
            <section className="flex flex-col md:flex-row gap-10 items-start md:items-center">
                <div className="text-7xl bg-blue-900/40 backdrop-blur-2xl p-8 rounded-[2.5rem] shadow-glass border border-white/10 relative group">
                    <div className="absolute inset-0 bg-cyan-400/5 rounded-[2.5rem] group-hover:bg-cyan-400/10 transition-colors" />
                    <span className="relative z-10 drop-shadow-blue">{moduleData.icon}</span>
                </div>
                <div className="space-y-3">
                    <div className="flex gap-3 items-center">
                        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20 shadow-blue-glow">Modulo Didattico</span>
                        <span className="text-[10px] font-bold text-blue-400/40 uppercase tracking-widest">{moduleData.difficulty}</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tighter italic uppercase italic leading-none">{moduleData.title}</h1>
                    <p className="text-blue-200/40 font-medium max-w-xl leading-relaxed">{moduleData.description}</p>
                </div>
            </section>

            {/* Navigation Tabs */}
            <div className="flex gap-2 p-2 bg-blue-900/30 backdrop-blur-xl rounded-[2rem] w-fit border border-white/10 shadow-glass">
                <button
                    onClick={() => setActiveTab('lessons')}
                    className={`px-8 py-3 rounded-[1.5rem] font-black transition-all duration-300 tracking-tighter uppercase italic text-sm ${activeTab === 'lessons' ? 'bg-white text-blue-900 shadow-lg' : 'text-blue-200/40 hover:text-white'}`}
                >
                    Lezioni
                </button>
                <button
                    onClick={() => setActiveTab('game')}
                    className={`px-8 py-3 rounded-[1.5rem] font-black transition-all duration-300 tracking-tighter uppercase italic text-sm ${activeTab === 'game' ? 'bg-accent-gradient text-white shadow-blue-glow' : 'text-blue-200/40 hover:text-white'}`}
                >
                    Sfida Game
                </button>
            </div>

            <AnimatePresence mode="wait">
                {activeTab === 'lessons' ? (
                    <motion.div
                        key="lessons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        className="grid grid-cols-1 gap-12"
                    >
                        {moduleData.lessons.map((lesson, idx) => (
                            <div
                                key={lesson.id}
                                className="group bg-blue-900/20 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 hover:border-cyan-400/20 shadow-glass transition-all duration-500 space-y-10"
                                onMouseEnter={() => completeLesson(moduleData.id, lesson.id)}
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-[1.5rem] bg-accent-gradient flex items-center justify-center font-black text-white text-xl shadow-blue-glow group-hover:scale-110 transition-transform">{idx + 1}</div>
                                    <h2 className="text-3xl font-black italic tracking-tight">{lesson.title}</h2>
                                </div>

                                <div className="prose prose-invert max-w-none text-blue-100/70 text-lg leading-relaxed font-medium">
                                    <div className="space-y-6" dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n\n/g, '<br/><br/>').replace(/\n/g, '<br/>') }} />
                                </div>

                                <div className="bg-deep-blue/40 p-8 rounded-[2rem] border border-white/5 shadow-inner">
                                    <h3 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                                        <Icon name="zap" size={14} /> Guide alla Sicurezza
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {lesson.tips.map((tip, tIdx) => (
                                            <li key={tIdx} className="flex gap-4 text-sm text-blue-100/40 font-medium bg-blue-900/20 p-4 rounded-2xl border border-white/5 hover:border-cyan-400/20 transition-all duration-300">
                                                <span className="text-cyan-400 flex-shrink-0">•</span>
                                                <span>{tip}</span>
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
                        className="pb-20"
                    >
                        <div className="bg-blue-900/20 backdrop-blur-2xl p-2 rounded-[3.5rem] border border-white/10 shadow-glass overflow-hidden">
                            <div className="bg-deep-blue/60 rounded-[3rem] p-1 shadow-inner">
                                {renderGame()}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

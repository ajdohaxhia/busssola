'use client'

import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { useState } from 'react'

export default function ProfilePage() {
    const { modules, userId, exportProgress, importProgress, resetProgress } = useGameStore()
    const [importText, setImportText] = useState('')
    const [showImport, setShowImport] = useState(false)

    // Calculate real progress
    const completedModulesCount = Object.values(modules).filter(m => m.completed).length
    const totalLessonsRead = Object.values(modules).reduce((acc, m) => acc + m.lessonsViewed.length, 0)

    const handleExport = () => {
        const data = exportProgress()
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `bussola-backup-${new Date().toISOString().split('T')[0]}.json`
        a.click()
    }

    const handleImport = () => {
        importProgress(importText)
        setShowImport(false)
        window.location.reload()
    }

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-12 space-y-12 pb-32">
            <h1 className="text-3xl md:text-5xl font-black italic tracking-tighter uppercase italic leading-none">Profilo <span className="blue-glow text-white">Utente</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Stats Card */}
                <div className="md:col-span-2 bg-blue-900/20 backdrop-blur-2xl p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-white/5 space-y-8 md:space-y-10 shadow-glass overflow-hidden">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 md:gap-8">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-accent-gradient rounded-2xl md:rounded-[2rem] flex items-center justify-center text-white shadow-blue-glow shrink-0">
                            <Icon name="profile" size={32} className="md:hidden" />
                            <Icon name="profile" size={48} className="hidden md:block" />
                        </div>
                        <div className="space-y-4 w-full min-w-0">
                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-4">
                                <div className="min-w-0 max-w-full">
                                    <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em] mb-1">ID Guardiano</div>
                                    <div className="text-sm md:text-lg font-mono text-white/60 truncate max-w-[180px] sm:max-w-xs">{userId}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-dark-900/40 p-8 rounded-[2rem] border border-white/5 shadow-inner group hover:border-cyan-400/20 transition-colors">
                            <span className="text-[10px] text-blue-400/40 block mb-2 uppercase font-black tracking-widest">Moduli Completati</span>
                            <span className="text-4xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">{completedModulesCount}</span>
                        </div>
                        <div className="bg-dark-900/40 p-8 rounded-[2rem] border border-white/5 shadow-inner group hover:border-purple-400/20 transition-colors">
                            <span className="text-[10px] text-blue-400/40 block mb-2 uppercase font-black tracking-widest">Lezioni Lette</span>
                            <span className="text-4xl font-black text-white italic tracking-tighter group-hover:text-purple-400 transition-colors">{totalLessonsRead}</span>
                        </div>
                    </div>
                </div>

                {/* Data Security Actions */}
                <div className="bg-blue-900/40 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-6 shadow-glass flex flex-col relative overflow-hidden group">
                    <div className="absolute inset-0 bg-cyan-400/5 group-hover:bg-cyan-400/10 transition-colors" />
                    <h3 className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Sovranità Dati</h3>
                    <p className="relative z-10 text-xs text-blue-200/40 font-medium leading-relaxed italic">I tuoi progressi sono memorizzati esclusivamente in locale. Crea un backup per non perderli.</p>

                    <button
                        onClick={handleExport}
                        className="relative z-10 w-full py-4 bg-white text-blue-900 font-black italic uppercase tracking-tighter rounded-2xl flex items-center justify-center gap-2 hover:scale-[1.02] transition shadow-lg"
                    >
                        <Icon name="history" size={18} /> Backup JSON
                    </button>

                    <button
                        onClick={() => setShowImport(true)}
                        className="relative z-10 w-full py-4 bg-blue-600/20 text-white font-black italic uppercase tracking-tighter border border-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-600/30 transition"
                    >
                        <Icon name="brain" size={18} /> Importa
                    </button>

                    <button
                        onClick={() => { if (confirm('⚠️ ATTENZIONE: Questo cancellerà DEFINITIVAMENTE tutti i tuoi progressi. Continuare?')) resetProgress() }}
                        className="relative z-10 w-full py-4 mt-auto text-red-500 font-black italic uppercase tracking-tighter border border-red-500/20 rounded-2xl hover:bg-red-500/10 transition"
                    >
                        <Icon name="logout" size={18} className="inline mr-2" /> Reset Totale
                    </button>
                </div>
            </div>

            {/* Import Modal */}
            <AnimatePresence>
                {showImport && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowImport(false)} className="absolute inset-0 bg-dark-900/90 backdrop-blur-xl" />
                        <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} className="relative bg-blue-900 border border-white/10 p-10 rounded-[3rem] w-full max-w-xl shadow-glass">
                            <h2 className="text-3xl font-black mb-6 italic tracking-tighter uppercase">RIPRISTINA <span className="text-cyan-400">PROGRESSI</span></h2>
                            <textarea
                                className="w-full h-56 bg-dark-900/60 border border-white/10 rounded-[2rem] p-6 font-mono text-xs text-blue-200/40 focus:border-cyan-400/40 outline-none mb-8 shadow-inner resize-none"
                                placeholder="Incolla qui il codice JSON del tuo backup..."
                                value={importText}
                                onChange={(e) => setImportText(e.target.value)}
                            />
                            <div className="flex gap-4">
                                <button onClick={handleImport} className="flex-1 py-4 bg-accent-gradient text-white font-black italic uppercase italic tracking-tighter rounded-2xl shadow-blue-glow">Verifica & Carica</button>
                                <button onClick={() => setShowImport(false)} className="flex-1 py-4 bg-white/5 text-white font-black italic uppercase tracking-tighter rounded-2xl hover:bg-white/10 transition">Annulla</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

'use client'

import { useGameStore } from '@/store/useGameStore'
import { motion } from 'framer-motion'
import { Icon } from '@/components/ui/Icon'
import { useState } from 'react'

export default function ProfilePage() {
    const { totalXP, tier, userId, achievements, exportProgress, importProgress, resetProgress } = useGameStore()
    const [importText, setImportText] = useState('')
    const [showImport, setShowImport] = useState(false)

    const handleExport = () => {
        const data = exportProgress()
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `bussola-progress-${new Date().toISOString().split('T')[0]}.json`
        a.click()
    }

    const handleImport = () => {
        importProgress(importText)
        setShowImport(false)
        window.location.reload()
    }

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 pb-32">
            <h1 className="text-4xl font-black italic tracking-tighter uppercase">Profilo <span className="text-neon-yellow">Utente</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Main Stats */}
                <div className="md:col-span-2 bg-dark-800 p-8 rounded-[2.5rem] border border-white/5 space-y-8 shadow-2xl">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-neon-yellow rounded-3xl flex items-center justify-center text-dark-900 shadow-neon">
                            <Icon name="profile" size={48} />
                        </div>
                        <div>
                            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">ID Sicuro</div>
                            <div className="text-sm font-mono text-white truncate max-w-[200px]">{userId}</div>
                            <div className="mt-2 inline-flex items-center gap-2 bg-neon-yellow/10 border border-neon-yellow/20 px-3 py-1 rounded-full">
                                <span className="text-[10px] font-black text-neon-yellow uppercase">{tier}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5">
                            <span className="text-xs text-gray-500 block mb-1 uppercase font-bold">Punti Esperienza</span>
                            <span className="text-3xl font-black text-white">{totalXP} <span className="text-neon-yellow text-sm">XP</span></span>
                        </div>
                        <div className="bg-dark-900/50 p-6 rounded-2xl border border-white/5">
                            <span className="text-xs text-gray-500 block mb-1 uppercase font-bold">Traguardi</span>
                            <span className="text-3xl font-black text-white">{achievements.length}</span>
                        </div>
                    </div>
                </div>

                {/* Data Management */}
                <div className="bg-dark-800 p-8 rounded-[2.5rem] border border-white/5 space-y-4 shadow-2xl flex flex-col">
                    <h3 className="text-sm font-black uppercase tracking-widest text-gray-500 mb-2">I Tuoi Dati</h3>
                    <p className="text-xs text-gray-400 mb-4 font-medium italic">Tutti i progressi sono salvati solo sul tuo browser. Usa le funzioni qui sotto per spostarli o cancellarli.</p>

                    <button
                        onClick={handleExport}
                        className="w-full py-3 bg-white text-dark-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition"
                    >
                        <Icon name="history" size={18} /> Esporta Backup
                    </button>

                    <button
                        onClick={() => setShowImport(true)}
                        className="w-full py-3 bg-dark-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-dark-600 transition"
                    >
                        <Icon name="zap" size={18} /> Importa Dati
                    </button>

                    <button
                        onClick={() => { if (confirm('Sei sicuro? Questo cancellerà TUTTI i tuoi progressi.')) resetProgress() }}
                        className="w-full py-3 mt-auto text-neon-pink font-bold border border-neon-pink/20 rounded-xl hover:bg-neon-pink/10 transition"
                    >
                        <Icon name="logout" size={18} className="inline mr-2" /> Reset Totale
                    </button>
                </div>
            </div>

            {/* Achievement Section */}
            <section className="bg-dark-800 p-8 rounded-[2.5rem] border border-white/5 shadow-2xl">
                <h2 className="text-xl font-black italic mb-6 flex items-center gap-3">
                    <Icon name="award" size={24} className="text-neon-yellow" /> I TUOI TROFEI
                </h2>

                {achievements.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {achievements.map(a => (
                            <div key={a} className="p-4 bg-dark-900/50 rounded-2xl border border-neon-yellow/20 flex flex-col items-center gap-2">
                                <Icon name="award" className="text-neon-yellow" />
                                <span className="text-[10px] font-black uppercase text-center">{a}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center text-gray-500 border-2 border-dashed border-white/5 rounded-3xl">
                        Completa i moduli per sbloccare traguardi leggendari.
                    </div>
                )}
            </section>

            {/* Import Modal */}
            <AnimatePresence>
                {showImport && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} onClick={() => setShowImport(false)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="relative bg-dark-800 p-8 rounded-3xl border border-white/5 w-full max-w-lg shadow-2xl">
                            <h2 className="text-2xl font-black mb-4 italic">IMPORTA PROGRESSO</h2>
                            <textarea
                                className="w-full h-48 bg-dark-900 border border-white/10 rounded-2xl p-4 font-mono text-xs text-gray-400 focus:border-neon-yellow outline-none mb-6"
                                placeholder="Incolla qui il codice JSON del tuo backup..."
                                value={importText}
                                onChange={(e) => setImportText(e.target.value)}
                            />
                            <div className="flex gap-4">
                                <button onClick={handleImport} className="flex-1 py-3 bg-neon-yellow text-dark-900 font-bold rounded-xl shadow-neon">Applica</button>
                                <button onClick={() => setShowImport(false)} className="flex-1 py-3 bg-dark-700 text-white font-bold rounded-xl">Annulla</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

'use client'

import { useGameStore } from '@/store/useGameStore'
import { motion, AnimatePresence } from 'framer-motion'
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
            <h1 className="text-5xl font-black italic tracking-tighter uppercase italic leading-none">Profilo <span className="blue-glow text-white">Utente</span></h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Stats Card */}
                <div className="md:col-span-2 bg-blue-900/20 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 space-y-10 shadow-glass">
                    <div className="flex items-center gap-8">
                        <div className="w-24 h-24 bg-accent-gradient rounded-[2rem] flex items-center justify-center text-white shadow-blue-glow">
                            <Icon name="profile" size={48} />
                        </div>
                        <div className="space-y-2">
                            <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.2em]">ID Guardiano</div>
                            <div className="text-lg font-mono text-white/60 truncate max-w-[250px]">{userId}</div>
                            <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 px-4 py-1.5 rounded-full">
                                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-widest leading-none">{tier}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-dark-900/40 p-8 rounded-[2rem] border border-white/5 shadow-inner">
                            <span className="text-[10px] text-blue-400/40 block mb-2 uppercase font-black tracking-widest">Esperienza Totale</span>
                            <span className="text-4xl font-black text-white italic tracking-tighter">{totalXP} <span className="text-cyan-400 text-sm">XP</span></span>
                        </div>
                        <div className="bg-dark-900/40 p-8 rounded-[2rem] border border-white/5 shadow-inner">
                            <span className="text-[10px] text-blue-400/40 block mb-2 uppercase font-black tracking-widest">Badge Ottenuti</span>
                            <span className="text-4xl font-black text-white italic tracking-tighter">{achievements.length}</span>
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

            {/* Legacy Achievements */}
            <section className="bg-blue-900/20 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 shadow-glass">
                <h2 className="text-2xl font-black italic mb-8 flex items-center gap-4 tracking-tighter uppercase whitespace-pre">
                    <Icon name="award" size={28} className="text-cyan-400 drop-shadow-blue" /> I TUOI <span className="text-cyan-400">TROFEI</span>
                </h2>

                {achievements.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {achievements.map(a => (
                            <div key={a} className="p-6 bg-dark-900/40 rounded-[2rem] border border-cyan-400/10 flex flex-col items-center gap-3 hover:border-cyan-400/40 transition-colors group">
                                <div className="w-12 h-12 rounded-full bg-cyan-400/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Icon name="award" className="text-cyan-400" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-center text-blue-200/60">{a}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center space-y-4 border-2 border-dashed border-white/5 rounded-[2.5rem]">
                        <Icon name="award" size={48} className="mx-auto text-blue-500/10" />
                        <p className="text-sm text-blue-400/20 font-black uppercase tracking-widest italic">Nessun trofeo sbloccato</p>
                    </div>
                )}
            </section>

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

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LifeBuoy, X, Phone, ShieldAlert, ExternalLink } from 'lucide-react'

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false)

    const hotlines = [
        { name: 'Emergenza Generale', number: '112', desc: 'Carabinieri / Polizia' },
        { name: 'Telefono Azzurro', number: '1.96.96', desc: 'Supporto minori 24/7' },
        { name: 'YouPol (App)', number: 'Polizia', desc: 'Segnalazione bullismo/droga' },
        { name: 'Anti-Violenza Donna', number: '1522', desc: 'Stalking e violenza' },
    ]

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.5)] group"
            >
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping opacity-20" />
                <LifeBuoy size={32} className="group-hover:rotate-45 transition-transform" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-dark-900/80 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-lg bg-blue-900/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-glass"
                        >
                            <div className="bg-red-600/80 p-8 text-white relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition"
                                >
                                    <X size={24} />
                                </button>
                                <div className="flex items-center gap-4 mb-2">
                                    <ShieldAlert size={40} className="animate-pulse" />
                                    <h2 className="text-3xl font-black tracking-tighter italic">PANIC MODE</h2>
                                </div>
                                <p className="opacity-90 font-medium">Non sei solo/a. Se sei in pericolo immediato o hai bisogno di aiuto urgente, usa uno di questi contatti.</p>
                            </div>

                            <div className="p-8 space-y-4">
                                {hotlines.map((h) => (
                                    <div key={h.number} className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-2xl group hover:border-red-500/50 transition-all duration-300">
                                        <div>
                                            <div className="font-bold text-white text-lg">{h.name}</div>
                                            <div className="text-xs text-blue-300/60 font-medium uppercase tracking-widest">{h.desc}</div>
                                        </div>
                                        <a
                                            href={`tel:${h.number.replace(/\./g, '')}`}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white rounded-xl font-black text-lg hover:scale-105 transition shadow-lg shadow-red-600/20"
                                        >
                                            <Phone size={18} /> {h.number}
                                        </a>
                                    </div>
                                ))}

                                <a
                                    href="https://www.commissariatodips.it/segnala-online/index.html"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-4 mt-4 border-2 border-dashed border-white/10 text-blue-300/40 rounded-2xl hover:border-red-500/50 hover:text-white transition-all"
                                >
                                    Segnala alla Polizia Postale <ExternalLink size={16} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

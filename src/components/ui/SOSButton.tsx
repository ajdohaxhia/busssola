'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LifeBuoy, X, Phone, ShieldAlert, ExternalLink, AlertTriangle } from 'lucide-react'

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false)

    const hotlines = [
        { name: 'Emergenza Generale', number: '112', desc: 'Carabinieri / Polizia' },
        { name: 'Telefono Azzurro', number: '1.96.96', desc: 'Supporto minori 24/7' },
        { name: 'App YouPol', number: 'Polizia', desc: 'Segnalazione bullismo e reati online' },
        { name: 'Anti-Violenza Donna', number: '1522', desc: 'Stalking e violenza' },
    ]

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sos rounded-full flex items-center justify-center text-white shadow-lg shadow-sos/20 group"
                aria-label="Apri centro emergenze SOS"
            >
                <LifeBuoy size={28} className="transition-transform group-hover:scale-110" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="relative w-full max-w-lg bg-surface border border-border rounded-2xl overflow-hidden shadow-xl"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="bg-sos-bg border-b border-sos-border p-6 text-foreground relative">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-black/5 rounded-full transition"
                                    aria-label="Chiudi finestra"
                                >
                                    <X size={20} className="text-muted" />
                                </button>
                                <div className="flex items-center gap-3 mb-2">
                                    <AlertTriangle size={28} className="text-sos" strokeWidth={2.5} />
                                    <h2 className="text-2xl font-display font-semibold text-foreground">Hai bisogno di aiuto?</h2>
                                </div>
                                <p className="text-sm text-secondary leading-relaxed">
                                    Non sei solo/a. Se ti trovi in pericolo o hai bisogno urgente di parlare con qualcuno, usa i numeri qui sotto.
                                </p>
                            </div>

                            <div className="p-6 space-y-3 bg-surface">
                                {hotlines.map((h) => (
                                    <div key={h.number} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-surface-muted border border-border rounded-xl gap-4 hover:border-border-hover transition-colors">
                                        <div>
                                            <div className="font-semibold text-foreground">{h.name}</div>
                                            <div className="text-sm text-muted">{h.desc}</div>
                                        </div>
                                        <a
                                            href={`tel:${h.number.replace(/\./g, '')}`}
                                            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-sos text-white rounded-lg font-semibold text-sm hover:bg-sos-hover transition-colors whitespace-nowrap"
                                        >
                                            <Phone size={16} /> Chiama {h.number}
                                        </a>
                                    </div>
                                ))}

                                <a
                                    href="https://www.commissariatodips.it/segnala-online/index.html"
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 w-full py-4 mt-4 text-sm font-medium text-primary hover:text-primary-hover border border-border rounded-xl hover:bg-surface-hover transition-colors"
                                >
                                    Fai una segnalazione alla Polizia Postale <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

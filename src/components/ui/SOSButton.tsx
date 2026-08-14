'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LifeBuoy, X, Phone, ExternalLink, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-sos text-sos-foreground rounded-full flex items-center justify-center ring-4 ring-background print:hidden"
                aria-label="Apri emergenza: chiama 112 se sei in pericolo"
            >
                <LifeBuoy size={28} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-foreground/50"
                        />

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="relative w-full max-w-lg bg-surface border border-border rounded-xl overflow-hidden"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="sos-dialog-title"
                        >
                            <div className="bg-sos text-sos-foreground p-6 relative">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-md"
                                    aria-label="Chiudi"
                                >
                                    <X size={20} />
                                </button>
                                <div className="flex items-center gap-3 mb-2">
                                    <AlertTriangle size={28} />
                                    <h2 id="sos-dialog-title" className="text-2xl font-display font-semibold">
                                        Sei in pericolo adesso?
                                    </h2>
                                </div>
                                <p className="text-sm text-white/90 leading-relaxed">
                                    Busssola non è un servizio di emergenza. Se c&apos;è violenza, un reato in corso o qualcuno è in pericolo, chiama il 112.
                                </p>
                                <a
                                    href="tel:112"
                                    className="mt-5 flex items-center justify-center gap-2 w-full py-4 rounded-lg bg-white text-sos font-semibold text-lg"
                                >
                                    <Phone size={20} /> Chiama 112
                                </a>
                            </div>

                            <div className="p-6 space-y-3 bg-surface">
                                <p className="text-xs font-semibold uppercase tracking-wide text-muted">Altri numeri, solo se non c&apos;è pericolo immediato</p>
                                <a href="tel:1522" className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-surface-muted">
                                    <span>
                                        <span className="block font-semibold text-foreground">1522</span>
                                        <span className="text-sm text-muted">Antiviolenza e stalking</span>
                                    </span>
                                    <Phone size={16} className="text-sos" />
                                </a>
                                <a href="tel:114" className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-surface-muted">
                                    <span>
                                        <span className="block font-semibold text-foreground">114</span>
                                        <span className="text-sm text-muted">Emergenza infanzia</span>
                                    </span>
                                    <Phone size={16} className="text-sos" />
                                </a>
                                <Link
                                    href="/sos"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 w-full py-4 text-sm font-medium text-accent border border-border rounded-lg hover:bg-surface-hover"
                                >
                                    Protocolli digitali e altre urgenze <ExternalLink size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

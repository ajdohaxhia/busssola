"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LifeBuoy, Phone, ShieldAlert, X, ExternalLink, Siren } from 'lucide-react';
import { Button } from './Button';

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Pulsing Alert Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-[9999] w-16 h-16 bg-neon-orange rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,100,0,0.4)] text-dark-900 border-4 border-white/20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <Siren size={32} />
                </motion.div>

                {/* Visual pulse rings */}
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-neon-orange"
                    animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
            </motion.button>

            {/* SOS Modal (Panic Mode) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-red-950/90 backdrop-blur-xl"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Content */}
                        <motion.div
                            className="relative w-full max-w-lg bg-red-600 rounded-3xl p-8 border-4 border-white overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="text-center space-y-4 text-white">
                                <Siren size={64} className="mx-auto animate-pulse" />
                                <h2 className="text-4xl font-black italic tracking-tighter">MODALITÀ SOS</h2>
                                <p className="text-xl font-bold leading-tight">
                                    Non sei solo. Queste chiamate sono gratuite e anonime.
                                    <br /> Se sei in pericolo immediato, chiama il 112 ora.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-1 gap-4">
                                <a
                                    href="tel:112"
                                    className="flex items-center justify-between p-6 bg-white text-dark-900 rounded-2xl font-black text-2xl hover:bg-zinc-100 transition-transform active:scale-95 shadow-lg group"
                                >
                                    <span className="flex items-center gap-4">
                                        <Phone className="text-red-600 animate-bounce" /> 112
                                    </span>
                                    <span className="text-sm uppercase tracking-widest text-red-600">Emergenza</span>
                                </a>

                                <div className="grid grid-cols-2 gap-4">
                                    <a
                                        href="tel:19696"
                                        className="flex flex-col items-center justify-center p-4 bg-red-700/50 border-2 border-white/30 rounded-2xl text-white hover:bg-red-700 transition-colors"
                                    >
                                        <div className="text-2xl font-bold">1.96.96</div>
                                        <div className="text-[10px] uppercase font-bold text-white/70">Telefono Azzurro</div>
                                    </a>
                                    <a
                                        href="tel:1522"
                                        className="flex flex-col items-center justify-center p-4 bg-red-700/50 border-2 border-white/30 rounded-2xl text-white hover:bg-red-700 transition-colors"
                                    >
                                        <div className="text-2xl font-bold">1522</div>
                                        <div className="text-[10px] uppercase font-bold text-white/70">Antiviolenza</div>
                                    </a>
                                </div>

                                <a
                                    href="https://www.commissariatodips.it/segnalazioni/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 p-4 bg-black/20 hover:bg-black/30 border border-white/20 rounded-xl text-white text-sm font-bold transition-colors"
                                >
                                    Segnala Reato Online (Polizia Postale) <ExternalLink size={16} />
                                </a>
                            </div>

                            <div className="mt-8 p-4 bg-black/20 rounded-xl text-center">
                                <p className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">
                                    La tua sicurezza è la nostra priorità. <br /> Non aver paura di chiedere aiuto.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

'use client'

import { useState, useEffect } from 'react'
import { useGameStore } from '@/store/useGameStore'
import { motion } from 'framer-motion'
import { Brain, Smartphone, Battery, Heart, ShieldCheck } from 'lucide-react'

export default function MoodTrackerGame() {
    const [screenTime, setScreenTime] = useState(0)
    const [mentalEnergy, setMentalEnergy] = useState(100)
    const [day, setDay] = useState(1)
    const [completed, setCompleted] = useState(false)
    const addXP = useGameStore(state => state.addXP)

    const handleAction = (type: 'screen' | 'rest') => {
        if (type === 'screen') {
            setScreenTime(prev => prev + 2)
            setMentalEnergy(prev => Math.max(0, prev - 25))
        } else {
            setScreenTime(prev => Math.max(0, prev - 1))
            setMentalEnergy(prev => Math.min(100, prev + 20))
        }

        if (day < 7) {
            setDay(prev => prev + 1)
        } else {
            setCompleted(true)
            addXP(mentalEnergy > 50 ? 100 : 50)
        }
    }

    if (completed) {
        return (
            <div className="text-center p-12 bg-blue-900/20 backdrop-blur-2xl rounded-[3rem] border border-white/10 shadow-glass">
                <div className="w-20 h-20 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-6 shadow-blue-glow">
                    <Brain size={40} className="text-white" />
                </div>
                <h2 className="text-4xl font-black italic tracking-tighter mb-4 text-white uppercase">Settimana Conclusa</h2>
                <p className="text-xl mb-8 text-blue-200/60 font-medium">
                    {mentalEnergy > 70
                        ? "Ottimo equilibrio! Sei un Mindful Warrior."
                        : "Attenzione: l'uso eccessivo ha ridotto la tua energia mentale."}
                </p>
                <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] mb-10">
                    <p className="text-cyan-400 font-black uppercase tracking-widest text-sm">+ {mentalEnergy > 50 ? 100 : 50} XP GUADAGNATI</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="px-10 py-4 bg-white text-blue-900 font-black italic uppercase tracking-tighter rounded-2xl hover:scale-105 transition shadow-lg"
                >
                    Ricomincia Sfida
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto space-y-12">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-black italic tracking-tighter flex items-center justify-center gap-3 uppercase">
                    <Battery className="text-cyan-400 drop-shadow-blue" /> DAY {day} <span className="text-blue-400/20">/ 7</span>
                </h2>
                <p className="text-[10px] text-blue-400/40 uppercase font-black tracking-[0.3em]">Cyber Wellbeing Simulator</p>
            </div>

            {/* Bars */}
            <div className="space-y-10">
                <div className="relative group">
                    <div className="flex justify-between items-end text-[10px] mb-3 uppercase font-black tracking-widest text-blue-400/60">
                        <span className="flex items-center gap-2 italic"><Smartphone size={14} className="text-blue-500" /> Screen Time</span>
                        <span className="font-mono text-white group-hover:text-red-400 transition-colors">{screenTime}h / 8h</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-3 p-0.5 border border-white/5 shadow-inner">
                        <motion.div
                            className="bg-red-500 h-full rounded-full shadow-lg shadow-red-500/20"
                            animate={{ width: `${(screenTime / 8) * 100}%` }}
                        />
                    </div>
                </div>

                <div className="relative group">
                    <div className="flex justify-between items-end text-[10px] mb-3 uppercase font-black tracking-widest text-blue-400/60">
                        <span className="flex items-center gap-2 italic"><Heart size={14} className="text-pink-500" /> Mental Capacity</span>
                        <span className="font-mono text-white group-hover:text-cyan-400 transition-colors">{mentalEnergy}%</span>
                    </div>
                    <div className="w-full bg-blue-900/40 rounded-full h-3 p-0.5 border border-white/5 shadow-inner">
                        <motion.div
                            className="h-full rounded-full shadow-lg shadow-cyan-500/20"
                            animate={{ width: `${mentalEnergy}%`, backgroundColor: mentalEnergy < 30 ? '#ef4444' : '#22d3ee' }}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 relative">
                <div className="absolute inset-x-0 -top-10 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

                <button
                    onClick={() => handleAction('screen')}
                    disabled={screenTime >= 8}
                    className="p-8 bg-blue-900/20 hover:bg-red-500/10 border border-white/5 rounded-3xl transition-all duration-300 disabled:opacity-10 group shadow-glass hover:border-red-500/30"
                >
                    <Smartphone size={40} className="mx-auto mb-4 text-blue-400 group-hover:text-red-400 transition-colors" />
                    <span className="font-black block text-sm uppercase italic tracking-tighter text-white">Consuma</span>
                    <span className="text-[8px] text-blue-400/20 font-bold uppercase tracking-widest mt-2 block">+2h Flow, -25% ENG</span>
                </button>

                <button
                    onClick={() => handleAction('rest')}
                    className="p-8 bg-blue-900/20 hover:bg-blue-400/10 border border-white/5 rounded-3xl transition-all duration-300 group shadow-glass hover:border-blue-400/30"
                >
                    <Brain size={40} className="mx-auto mb-4 text-blue-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="font-black block text-sm uppercase italic tracking-tighter text-white">Ripristina</span>
                    <span className="text-[8px] text-blue-400/20 font-bold uppercase tracking-widest mt-2 block">-1h Flow, +20% ENG</span>
                </button>
            </div>

            <p className="text-center text-[10px] text-blue-400/20 font-medium italic leading-relaxed px-8">
                Gestisci la tua connessione. Se la capacità mentale arriva a zero, il burnout digitale bloccherà il tuo percorso.
            </p>
        </div>
    )
}

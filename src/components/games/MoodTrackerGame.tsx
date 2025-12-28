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
            <div className="text-center p-8 bg-dark-800 rounded-3xl border border-neon-mint/20">
                <Brain size={64} className="mx-auto text-neon-mint mb-4" />
                <h2 className="text-3xl font-bold mb-4">Settimana Conclusa</h2>
                <p className="text-lg text-gray-400 mb-8">
                    {mentalEnergy > 70
                        ? "Ottimo equilibrio! Sei un Mindful Warrior."
                        : "Attenzione: l'uso eccessivo ha ridotto la tua energia mentale."}
                </p>
                <div className="bg-neon-mint/10 p-4 rounded-xl mb-8">
                    <p className="text-neon-mint font-bold">XP Guadagnati: {mentalEnergy > 50 ? 100 : 50}</p>
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className="w-full py-4 bg-neon-mint text-dark-900 font-bold rounded-xl"
                >
                    Ricomincia Sfida
                </button>
            </div>
        )
    }

    return (
        <div className="max-w-md mx-auto space-y-8">
            <div className="text-center">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2 italic">
                    <Battery className="text-neon-mint" /> GIORNO {day} / 7
                </h2>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">Bilancia la tua vita digitale</p>
            </div>

            {/* Bars */}
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="flex items-center gap-2"><Smartphone size={16} /> Screen Time</span>
                        <span className="font-mono">{screenTime}h / 8h</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-4">
                        <motion.div
                            className="bg-neon-pink h-full rounded-full"
                            animate={{ width: `${(screenTime / 8) * 100}%` }}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="flex items-center gap-2"><Heart size={16} /> Energia Mentale</span>
                        <span className="font-mono">{mentalEnergy}%</span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-4">
                        <motion.div
                            className="bg-neon-mint h-full rounded-full"
                            animate={{ width: `${mentalEnergy}%` }}
                            style={{ backgroundColor: mentalEnergy < 30 ? '#ff0066' : '#00ff88' }}
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button
                    onClick={() => handleAction('screen')}
                    disabled={screenTime >= 8}
                    className="p-6 bg-dark-800 hover:bg-neon-pink/20 border border-white/5 rounded-2xl transition disabled:opacity-20"
                >
                    <Smartphone size={32} className="mx-auto mb-2 text-neon-pink" />
                    <span className="font-bold block">Social/Game</span>
                    <span className="text-[10px] text-gray-500">+2h Schermo, -25% Enegia</span>
                </button>
                <button
                    onClick={() => handleAction('rest')}
                    className="p-6 bg-dark-800 hover:bg-neon-mint/20 border border-white/5 rounded-2xl transition"
                >
                    <Brain size={32} className="mx-auto mb-2 text-neon-mint" />
                    <span className="font-bold block">Digital Detox</span>
                    <span className="text-[10px] text-gray-500">-1h Schermo, +20% Energia</span>
                </button>
            </div>

            <p className="text-center text-xs text-gray-500 italic">
                Scegli come passare il tempo oggi. Se l'energia arriva a 0, il burn-out è assicurato.
            </p>
        </div>
    )
}

"use client";

import { useGameStore } from "@/store/useGameStore";
import { motion } from "framer-motion";

const MOCK_LEADERBOARD = [
    { rank: 1, user: "Anon_Zer0", xp: 12500, tier: "Grandmaster" },
    { rank: 2, user: "CyberNi1nja", xp: 9800, tier: "Master" },
    { rank: 3, user: "WhiteHat_IT", xp: 8400, tier: "Diamond" },
    { rank: 4, user: "PixelSafe", xp: 7200, tier: "Platinum" },
    { rank: 5, user: "NetGuardian", xp: 6900, tier: "Platinum" },
    { rank: 6, user: "SecureMe", xp: 5400, tier: "Gold" },
    { rank: 7, user: "GhostProtocol", xp: 4800, tier: "Gold" },
    { rank: 8, user: "Firewall_X", xp: 4200, tier: "Silver" },
    { rank: 9, user: "DataDefender", xp: 3500, tier: "Silver" },
    { rank: 10, user: "NoPhish4Me", xp: 2100, tier: "Bronze" },
];

export default function LeaderboardPage() {
    const { totalXP, tier, modules } = useGameStore();
    const modulesCompleted = Object.values(modules).filter(m => m.completed).length;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-yellow to-neon-orange">
                    CLASSIFICA GLOBALE
                </h1>
                <p className="text-xl text-white/60">
                    I migliori Cyber Defenders della rete.
                </p>
            </div>

            {/* Current User Stats Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-zinc-900/80 border border-neon-mint/30 p-6 rounded-xl flex items-center justify-between shadow-[0_0_30px_rgba(0,255,159,0.1)] relative overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-neon-mint" />
                <div>
                    <h3 className="text-xl font-bold text-white">IL TUO RANK</h3>
                    <p className="text-neon-mint font-mono uppercase">{tier}</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-bold text-white">{totalXP} XP</div>
                    <div className="text-sm text-white/50">{modulesCompleted} Moduli Completati</div>
                </div>
            </motion.div>

            {/* Leaderboard Table */}
            <div className="bg-black/50 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="grid grid-cols-12 bg-white/5 p-4 text-sm font-bold text-white/50 uppercase tracking-wider">
                    <div className="col-span-2 text-center">Rank</div>
                    <div className="col-span-6">Utente</div>
                    <div className="col-span-4 text-right">XP Totali</div>
                </div>
                <div className="divide-y divide-white/5">
                    {MOCK_LEADERBOARD.map((player) => (
                        <motion.div
                            key={player.rank}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: player.rank * 0.05 }}
                            className="grid grid-cols-12 p-4 items-center hover:bg-white/5 transition-colors"
                        >
                            <div className="col-span-2 flex justify-center">
                                {player.rank === 1 && <span className="text-2xl">👑</span>}
                                {player.rank === 2 && <span className="text-2xl">🥈</span>}
                                {player.rank === 3 && <span className="text-2xl">🥉</span>}
                                {player.rank > 3 && <span className="font-mono text-white/50">#{player.rank}</span>}
                            </div>
                            <div className="col-span-6 font-medium">
                                <span className={player.rank <= 3 ? "text-neon-yellow" : "text-white"}>
                                    {player.user}
                                </span>
                                <span className="ml-2 text-xs text-white/30 border border-white/10 px-1 rounded">
                                    {player.tier}
                                </span>
                            </div>
                            <div className="col-span-4 text-right font-mono text-white/80">
                                {player.xp.toLocaleString()}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="text-center text-sm text-white/30 pt-8">
                La classifica si aggiorna ogni 24 ore. Continua a completare moduli per scalare la vetta.
            </div>
        </div>
    );
}


"use client";

import { useGameStore } from "@/store/useGameStore";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TIERS } from "@/lib/constants";
import { Shield, Share2, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ProfiloPage() {
    const { totalXP, tier, modules, resetProgress } = useGameStore();
    const currentTier = TIERS[tier];

    const completedModules = Object.values(modules).filter(m => m.completed).length;
    const progressToNext = Math.min(100, (completedModules / 12) * 100);

    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold">Il Tuo Profilo</h1>

            {/* Hero Card */}
            <div className="grid md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 relative overflow-hidden bg-gradient-to-br from-dark-800 to-dark-900 border-neon-yellow/20">
                    <div className="absolute top-0 right-0 p-32 bg-neon-yellow/5 blurred-circle rounded-full blur-3xl" />
                    <CardContent className="p-8 flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="h-32 w-32 rounded-full border-4 border-neon-yellow flex items-center justify-center text-neon-yellow shadow-[0_0_30px_rgba(204,255,0,0.3)] bg-black/40"
                        >
                            <Shield className="h-16 w-16" />
                        </motion.div>
                        <div className="space-y-4 text-center md:text-left">
                            <div>
                                <p className="text-white/50 text-sm uppercase tracking-wider font-mono">STATUS ATTUALE</p>
                                <h2 className={`text-4xl font-bold ${currentTier.color}`}>{currentTier.label}</h2>
                            </div>
                            <div className="flex gap-4 justify-center md:justify-start">
                                <Badge variant="outline" className="px-3 py-1 bg-white/5 text-lg">
                                    <span className="text-neon-yellow font-bold mr-2">{totalXP}</span> XP
                                </Badge>
                                <Badge variant="secondary" className="px-3 py-1 text-lg">
                                    {completedModules}/12 Moduli
                                </Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Azioni</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button variant="outline" className="w-full justify-start" disabled>
                            <Share2 className="mr-2 h-4 w-4" /> Condividi Progressi
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled>
                            <Download className="mr-2 h-4 w-4" /> Esporta JSON
                        </Button>
                        <Button variant="destructive" className="w-full justify-start mt-8" onClick={() => {
                            if (confirm("Sei sicuro? Questo cancellerà tutti i progressi.")) {
                                resetProgress();
                                window.location.reload();
                            }
                        }}>
                            Reset Totale
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Progress */}
            <Card>
                <CardHeader>
                    <CardTitle>La Tua Evoluzione</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="relative pt-6 pb-2">
                            <div className="flex mb-2 items-center justify-between font-mono text-xs text-white/50 uppercase">
                                <span>Ingenuo</span>
                                <span>Consapevole</span>
                                <span>Informato</span>
                                <span>Esperto</span>
                                <span>Guardian</span>
                            </div>
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progressToNext}%` }}
                                    transition={{ duration: 1, ease: 'circOut' }}
                                    className="h-full bg-gradient-to-r from-neon-yellow to-neon-mint"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            {/* Placeholder for achievements */}
                            <div className="aspect-square rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-50">
                                <span className="text-xs text-center p-2">Completa più moduli per sbloccare badge</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

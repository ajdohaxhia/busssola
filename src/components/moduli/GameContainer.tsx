"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowLeft, Play, RefreshCcw } from "lucide-react";
import { useState } from "react";
import { ChatGame } from "@/components/games/ChatGame";
import { ClassifierGame } from "@/components/games/ClassifierGame";
import { InspectorGame } from "@/components/games/InspectorGame";
import { MODULE_GAMES } from "@/data/modules";

interface GameContainerProps {
    moduleId: string;
    onComplete: () => void;
    onBack: () => void;
}

export function GameContainer({ moduleId, onComplete, onBack }: GameContainerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [gameFinished, setGameFinished] = useState(false);

    const gameConfig = MODULE_GAMES[moduleId];

    if (!gameConfig) {
        return (
            <div className="text-center py-20 bg-dark-800/50 rounded-xl">
                <h2 className="text-2xl font-bold mb-4">Training Pratico non disponibile</h2>
                <p className="text-white/60 mb-6">Questo modulo non ha ancora una simulazione attiva.</p>
                <Button onClick={onComplete}>Completa Modulo Comunque</Button>
            </div>
        )
    }

    const handleGameComplete = (score: number) => {
        setGameFinished(true);
        // Here we could persist the specific game score
        setTimeout(onComplete, 1500);
    };

    if (isPlaying) {
        return (
            <div className="h-full animate-in fade-in duration-500">
                <div className="mb-4 flex justify-between items-center">
                    <Button variant="ghost" onClick={() => setIsPlaying(false)} size="sm">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Esci
                    </Button>
                    <span className="text-xs uppercase tracking-widest text-white/40">Simulazione Attiva</span>
                </div>

                <Card className="min-h-[500px] p-4 md:p-8 border-neon-yellow/10 bg-black/40 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 p-32 bg-neon-yellow/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                    {gameConfig.type === 'chat' && (
                        <ChatGame scenario={gameConfig.data} onComplete={handleGameComplete} />
                    )}
                    {gameConfig.type === 'classifier' && (
                        <ClassifierGame items={gameConfig.data} onComplete={handleGameComplete} />
                    )}
                    {gameConfig.type === 'inspector' && (
                        <InspectorGame items={gameConfig.data} onComplete={handleGameComplete} />
                    )}
                </Card>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-8 py-12">
            <div className="relative">
                <div className="absolute inset-0 bg-neon-yellow/20 blur-xl rounded-full" />
                <div className="relative p-8 rounded-full bg-dark-800 border-2 border-neon-yellow/30 text-neon-yellow">
                    <Play className="h-12 w-12 ml-1" fill="currentColor" />
                </div>
            </div>

            <div className="space-y-4 max-w-lg mx-auto">
                <h2 className="text-4xl font-bold tracking-tight">Fase Pratica</h2>
                <p className="text-lg text-white/60">
                    Hai completato la teoria. Ora dimostra di saper applicare ciò che hai imparato in uno scenario realistico.
                </p>
                <div className="bg-white/5 p-4 rounded-lg text-sm text-left border border-white/10">
                    <p className="font-bold text-neon-yellow mb-1">OBIETTIVO:</p>
                    <p>{gameConfig.objective || "Completa la simulazione per guadagnare XP."}</p>
                </div>
            </div>

            <div className="flex gap-4">
                <Button variant="outline" onClick={onBack}>Rivedi Lezioni</Button>
                <Button size="lg" variant="neon" onClick={() => setIsPlaying(true)} className="px-8">
                    AVVIA SIMULAZIONE
                </Button>
            </div>
        </div>
    );
}

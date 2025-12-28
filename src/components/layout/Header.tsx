"use client";

import { useGameStore } from "@/store/useGameStore";
import { Badge } from "../ui/Badge";
import { TIERS } from "@/lib/constants";

export function Header() {
    const { totalXP, tier } = useGameStore();
    const currentTier = TIERS[tier];

    return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/10 bg-dark-900/80 px-6 backdrop-blur-md">
            <div className="flex-1" /> {/* Spacer */}

            <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                    <span className="text-xs text-white/50 font-mono">LIVELLO</span>
                    <span className={cn("text-sm font-bold", currentTier.color)}>{currentTier.label}</span>
                </div>

                <Badge variant="outline" className="px-3 py-1 bg-white/5 border-white/10">
                    <span className="text-neon-yellow font-mono font-bold mr-1">{totalXP}</span> XP
                </Badge>
            </div>
        </header>
    );
}

// Helper to avoid hydration mismatch we might need a client wrapper or useEffect, 
// but for now simple store access. Since we use persist, it might flash 0.
// A more robust solution involves a useMounted hook.
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function HeaderSafe() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/10 bg-dark-900/80 px-6 backdrop-blur-md">
            <div className="flex-1" />
            <div className="h-8 w-24 bg-white/5 rounded animate-pulse" />
        </header>
    );

    return <Header />;
}

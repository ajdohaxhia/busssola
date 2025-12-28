'use client'

import { useParams, useRouter } from 'next/navigation'
import { ScenarioEngine } from '@/components/games/ScenarioEngine'
import { getModuleById } from '@/data/modules/index'
import { ChevronLeft, Target, Trophy, Flame } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'

export default function GamePage() {
    const { id } = useParams()
    const router = useRouter()
    const module = getModuleById(id as string)

    // In a real app, we would fetch live game stats here
    // For now we mock the "Lives" or "Score" header state
    const currentScore = 0
    const lives = 3

    if (!module) return <Container className="py-20 text-center">Modulo non trovato</Container>

    return (
        <div className="min-h-screen bg-dark-bg pb-20">
            {/* Unified Game Header */}
            <header className="fixed top-0 left-0 right-0 bg-dark-bg/90 backdrop-blur-md border-b border-white/5 z-50 h-20">
                <Container size="full" className="h-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => router.back()}
                            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-white/60" />
                        </button>
                        <div className="hidden sm:block">
                            <h1 className="text-sm font-bold text-white/40 uppercase tracking-widest">Training</h1>
                            <p className="font-bold text-white">{module.title}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                            <Trophy className="w-4 h-4 text-neon-purple" />
                            <span className="font-mono font-bold text-neon-purple">{currentScore} PTS</span>
                        </div>

                        {/* Lives or Streak Indicator */}
                        <div className="hidden sm:flex items-center gap-2 text-neon-orange">
                            <Flame className="w-5 h-5 fill-current" />
                            <span className="font-bold">x3</span>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Game Canvas */}
            <Container className="pt-32 max-w-3xl">
                <ScenarioEngine moduleId={id as string} />
            </Container>
        </div>
    )
}

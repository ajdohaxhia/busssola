'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ALL_MODULES } from '@/data/modules/index'
import { Gamepad2, Play, Zap, Clock, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { GameContainer } from '@/components/moduli/GameContainer'
import { Icon } from '@/components/ui/Icon'

// Extract all games from all modules with their parent module info
function getAllGames() {
    const games: Array<{
        id: string
        title: string
        description: string
        type: string
        moduleId: string
        moduleTitle: string
        moduleIcon: string
        moduleColor: string
        xpReward: number
        duration: number
    }> = []

    ALL_MODULES.forEach((module) => {
        if (module.games && module.games.length > 0) {
            module.games.forEach((game: { id: string; title: string; description: string; type: string }) => {
                games.push({
                    id: game.id,
                    title: game.title,
                    description: game.description,
                    type: game.type,
                    moduleId: module.id,
                    moduleTitle: module.title,
                    moduleIcon: module.icon || '🎮',
                    moduleColor: module.themeColor || 'accent-cyan',
                    xpReward: 100, // Base XP for completing a game
                    duration: 10, // Estimated minutes
                })
            })
        }
    })

    return games
}

// Get unique categories from modules
function getCategories(games: ReturnType<typeof getAllGames>) {
    const categories = new Set<string>()
    games.forEach(g => categories.add(g.moduleTitle))
    return ['Tutti', ...Array.from(categories)]
}

export default function GiocaPage() {
    const [selectedGameModuleId, setSelectedGameModuleId] = useState<string | null>(null)
    const [filter, setFilter] = useState('Tutti')

    const allGames = useMemo(() => getAllGames(), [])
    const categories = useMemo(() => getCategories(allGames), [allGames])

    const filteredGames = useMemo(() => {
        if (filter === 'Tutti') return allGames
        return allGames.filter(g => g.moduleTitle === filter)
    }, [allGames, filter])

    // If a game is selected, show the game container
    if (selectedGameModuleId) {
        return (
            <Container size="lg" className="py-8">
                <GameContainer
                    moduleId={selectedGameModuleId}
                    onComplete={() => setSelectedGameModuleId(null)}
                    onBack={() => setSelectedGameModuleId(null)}
                />
            </Container>
        )
    }

    return (
        <Container size="full" className="py-8 space-y-8">
            {/* Header */}
            <div className="text-center space-y-4 px-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20">
                    <Gamepad2 className="w-5 h-5 text-neon-purple" />
                    <span className="text-sm font-bold text-neon-purple uppercase tracking-widest">
                        Training Zone
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                    Gioca e <span className="text-neon-cyan">Impara</span>
                </h1>
                <p className="text-white/60 max-w-xl mx-auto">
                    {allGames.length} simulazioni interattive per mettere alla prova le tue competenze di sicurezza digitale.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 px-4 pb-4 overflow-x-auto">
                {categories.slice(0, 8).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={cn(
                            "px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-200",
                            filter === cat
                                ? "bg-neon-cyan text-dark-bg shadow-[0_0_15px_rgba(0,245,255,0.3)]"
                                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
                        )}
                    >
                        {cat}
                    </button>
                ))}
                {categories.length > 8 && (
                    <button
                        className="px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap bg-white/5 text-white/40 border border-white/10"
                    >
                        +{categories.length - 8} altri
                    </button>
                )}
            </div>

            {/* Games Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                {filteredGames.map((game, idx) => (
                    <motion.div
                        key={game.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className={cn(
                            "glass-card rounded-[1.5rem] overflow-hidden group cursor-pointer",
                            "hover:border-neon-cyan/30 transition-all duration-300",
                            idx === 0 && "md:col-span-2 md:row-span-2"
                        )}
                        onClick={() => setSelectedGameModuleId(game.moduleId)}
                    >
                        {/* Game Icon Header */}
                        <div className={cn(
                            "h-32 flex items-center justify-center",
                            "bg-gradient-to-br from-neon-cyan/10 via-neon-purple/5 to-transparent",
                            idx === 0 && "md:h-48"
                        )}>
                            <div className={cn(
                                "group-hover:scale-110 transition-transform duration-300",
                                "text-neon-cyan"
                            )}>
                                <Icon name={game.moduleIcon} className={cn("w-16 h-16", idx === 0 && "md:w-24 md:h-24")} />
                            </div>
                        </div>

                        {/* Game Info */}
                        <div className="p-6 space-y-4">
                            {/* Module Badge */}
                            <div className="inline-flex items-center gap-2 px-2 py-1 rounded-lg bg-white/5 border border-white/10">
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider">
                                    {game.moduleTitle}
                                </span>
                            </div>

                            <h3 className={cn(
                                "text-lg font-bold text-white group-hover:text-neon-cyan transition-colors",
                                idx === 0 && "md:text-2xl"
                            )}>
                                {game.title}
                            </h3>

                            <p className="text-sm text-white/50 line-clamp-2">
                                {game.description}
                            </p>

                            {/* Stats Row */}
                            <div className="flex items-center gap-4 text-xs text-white/40">
                                <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>~{game.duration} min</span>
                                </div>
                                <div className="flex items-center gap-1 text-neon-yellow">
                                    <Zap className="w-3 h-3" />
                                    <span>+{game.xpReward} XP</span>
                                </div>
                            </div>

                            {/* Play Button */}
                            <button className={cn(
                                "w-full py-3 px-4 rounded-xl font-bold text-sm",
                                "bg-gradient-to-r from-neon-cyan to-neon-purple text-white",
                                "shadow-[0_0_20px_rgba(0,245,255,0.2)]",
                                "hover:shadow-[0_0_30px_rgba(0,245,255,0.4)]",
                                "active:scale-95 transition-all duration-200",
                                "flex items-center justify-center gap-2"
                            )}>
                                <Play className="w-4 h-4 fill-current" />
                                GIOCA ORA
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Empty State */}
            {filteredGames.length === 0 && (
                <div className="text-center py-20">
                    <Gamepad2 className="w-16 h-16 mx-auto text-white/20 mb-4" />
                    <h3 className="text-xl font-bold text-white/60 mb-2">
                        Nessun gioco trovato
                    </h3>
                    <p className="text-white/40">
                        Prova a selezionare un altro filtro.
                    </p>
                </div>
            )}
        </Container>
    )
}

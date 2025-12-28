'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-dark-900">
            {/* Primary Gradient Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-blue-800/20 blur-[120px]"
            />

            {/* Secondary Gradient Orb */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -80, 0],
                    y: [0, 100, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[0%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-400/10 blur-[120px]"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-repeat pointer-events-none" />
        </div>
    )
}

'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-50 overflow-hidden bg-[#030712]">
            {/* Mesh Orbs Group */}
            <div className="absolute inset-0 filter blur-[100px] opacity-40">
                {/* Cyan Orb */}
                <motion.div
                    animate={{
                        x: [0, 400, 0],
                        y: [0, 200, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-neon-cyan/30 rounded-full"
                />

                {/* Purple Orb */}
                <motion.div
                    animate={{
                        x: [0, -300, 0],
                        y: [0, 400, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] bg-neon-purple/20 rounded-full"
                />

                {/* Pink Orb */}
                <motion.div
                    animate={{
                        x: [0, 200, 0],
                        y: [0, -300, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-neon-pink/20 rounded-full"
                />
            </div>

            {/* Static Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.svg')] mix-blend-overlay pointer-events-none" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712] opacity-80" />
        </div>
    )
}

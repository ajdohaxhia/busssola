'use client'

import { useMemo } from 'react'
import { motion, Variants } from 'framer-motion'
import { ChevronRight, Lock, Eye, Shield, Zap, Compass } from 'lucide-react'
import Link from 'next/link'
import { useGameStore } from '@/store/useGameStore'
import { cn } from '@/lib/utils'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ALL_MODULES } from '@/data/modules/index'
import { Hero } from '@/components/ui/Hero'

export default function Dashboard() {
  const { modules } = useGameStore()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  }

  return (
    <Container size="full" className="py-12 space-y-24">

      {/* ==================== HERO SECTION ==================== */}
      <Hero />

      {/* ==================== BENTO GRID PATHS SECTION ==================== */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-neon-cyan pl-8 py-2">
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
              PIANO DI <span className="text-gradient-purple">ADDESTRAMENTO</span>
            </h2>
            <p className="text-white/40 text-xl font-medium tracking-tight">Scegli la tua prossima missione di sicurezza digitale</p>
          </div>
          <Button variant="link" className="text-lg">Tutti i moduli <ChevronRight className="ml-1 w-5 h-5" /></Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "PREDATORI",
              desc: "Anti-grooming System",
              icon: Eye,
              color: "text-neon-pink",
              bg: "bg-neon-pink/10",
              glow: "pink" as const,
              href: "/moduli/predatori-online",
              span: "col-span-1"
            },
            {
              title: "PRIVACY PURE",
              desc: "Deep Defense Layer",
              icon: Lock,
              color: "text-neon-cyan",
              bg: "bg-neon-cyan/10",
              glow: "cyan" as const,
              href: "/moduli/privacy-tecnica",
              span: "col-span-1"
            },
            {
              title: "SOCIAL LAB",
              desc: "Mind Control Defense",
              icon: Shield,
              color: "text-neon-purple",
              bg: "bg-neon-purple/10",
              glow: "purple" as const,
              href: "/moduli/phishing-social-engineering",
              span: "col-span-1 md:col-span-2"
            },
            {
              title: "AI DETECTOR",
              desc: "Post-Truth Engine",
              icon: Zap,
              color: "text-neon-green",
              bg: "bg-neon-green/10",
              glow: "cyan" as const,
              href: "/moduli/ai-deepfake",
              span: "col-span-1"
            },
            {
              title: "ARENA GAMING",
              desc: "Squad Security",
              icon: Compass,
              color: "text-neon-purple",
              bg: "bg-neon-purple/10",
              glow: "purple" as const,
              href: "/moduli/gaming-communities",
              span: "col-span-1"
            },
            {
              title: "CRYPTO VAULT",
              desc: "Wealth Protection",
              icon: Shield,
              color: "text-neon-yellow",
              bg: "bg-neon-yellow/10",
              glow: "purple" as const,
              href: "/moduli/finanze-crypto",
              span: "col-span-1"
            },
            {
              title: "DATA SOVEREIGNTY",
              desc: "Digital Rights Admin",
              icon: Lock,
              color: "text-neon-cyan",
              bg: "bg-neon-cyan/10",
              glow: "cyan" as const,
              href: "/moduli/gdpr-data-breach",
              span: "col-span-1"
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className={item.span}>
              <Link href={item.href} className="block h-full group">
                <Card
                  className="h-full p-10 flex flex-col gap-8 transition-all duration-500 border-white/5 bg-white/[0.02]"
                  hoverEffect
                  glowColor={item.glow}
                >
                  <div className={cn(
                    "w-20 h-20 rounded-3xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl",
                    item.bg,
                    item.color
                  )}>
                    <item.icon className="w-10 h-10" strokeWidth={2.5} />
                  </div>

                  <div className="flex-1 space-y-2">
                    <h4 className="font-black text-2xl text-white tracking-tighter group-hover:text-neon-cyan transition-colors">{item.title}</h4>
                    <p className="text-sm font-bold text-white/30 uppercase tracking-[0.2em]">{item.desc}</p>
                  </div>

                  <div className="flex items-center justify-end pt-4 border-t border-white/5">
                    <ChevronRight className="w-6 h-6 text-white/20 group-hover:text-neon-cyan group-hover:translate-x-2 transition-all" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Container>
  )
}

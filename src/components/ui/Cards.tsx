'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from './Card'

interface IntentionCardProps {
    title: string
    description: string
    icon: LucideIcon
    href: string
    color?: string
}

export function IntentionCard({ title, description, icon: Icon, href, color }: IntentionCardProps) {
    return (
        <Link href={href} className="group">
            <Card className={cn(
                "p-6 h-full border border-border bg-surface transition-colors hover:border-foreground rounded-xl flex flex-col gap-4",
                color && `hover:bg-${color}/5`
            )}>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-foreground text-background">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-display font-semibold tracking-tight text-foreground">
                        {title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>
                <div className="pt-2 flex items-center text-xs font-semibold text-accent uppercase tracking-widest mt-auto">
                    Inizia <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Card>
        </Link>
    )
}

interface SituationCardProps {
    title: string
    href: string
}

export function SituationCard({ title, href }: SituationCardProps) {
    return (
        <Link href={href} className="group">
            <div className="flex items-center justify-between p-5 rounded-xl border border-border bg-surface hover:border-foreground transition-colors">
                <span className="font-semibold text-foreground">{title}</span>
                <ArrowRight className="w-4 h-4 text-secondary group-hover:text-foreground transition-transform group-hover:translate-x-1" />
            </div>
        </Link>
    )
}

'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
    badge?: string
    title: string
    description?: string
    icon?: LucideIcon
    className?: string
    centered?: boolean
}

export function PageHeader({ badge, title, description, icon: Icon, className, centered = false }: PageHeaderProps) {
    return (
        <header className={cn(
            "space-y-6 pb-12",
            centered ? "text-center max-w-3xl mx-auto" : "max-w-4xl text-left",
            className
        )}>
            {badge && (
                <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20",
                    centered && "mx-auto"
                )}>
                    {Icon && <Icon className="w-3 h-3" />} {badge}
                </div>
            )}
            <h1 className="text-4xl md:text-7xl font-display font-black tracking-tight text-foreground leading-[1.05]">
                {title}
            </h1>
            {description && (
                <p className="text-xl md:text-2xl text-secondary leading-relaxed font-medium">
                    {description}
                </p>
            )}
        </header>
    )
}

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
            "space-y-8 pb-16",
            centered ? "text-center max-w-3xl mx-auto" : "max-w-4xl text-left",
            className
        )}>
            {badge && (
                <div className={cn(
                    "inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-accent-bg text-accent border border-accent-border text-[11px] font-semibold uppercase tracking-widest",
                    centered && "mx-auto"
                )}>
                    {Icon && <Icon className="w-3 h-3" />} {badge}
                </div>
            )}
            <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tight text-foreground leading-[1.05]">
                {title}
            </h1>
            {description && (
                <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-[42rem]">
                    {description}
                </p>
            )}
        </header>
    )
}

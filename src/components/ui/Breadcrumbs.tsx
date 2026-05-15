'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[]
    className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className={cn("flex items-center text-xs font-bold uppercase tracking-widest text-secondary/60", className)}>
            <ol className="flex items-center gap-2 list-none p-0 m-0">
                <li>
                    <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
                        <Home className="w-3 h-3" />
                        <span className="sr-only">Home</span>
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        <ChevronRight className="w-3 h-3 text-secondary/30" />
                        {index === items.length - 1 ? (
                            <span className="text-foreground truncate max-w-[200px] sm:max-w-md" aria-current="page">
                                {item.label}
                            </span>
                        ) : (
                            <Link href={item.href} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

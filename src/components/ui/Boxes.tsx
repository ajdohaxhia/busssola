'use client'

import React from 'react'
import { Info, AlertTriangle, Zap, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BoxProps {
    title: string
    children: React.ReactNode
    className?: string
}

export function InfoBox({ title, children, className }: BoxProps) {
    return (
        <div className={cn("p-6 bg-info-bg border border-info/20 rounded-3xl flex gap-4 shadow-sm", className)}>
            <div className="w-10 h-10 bg-info/10 rounded-xl flex items-center justify-center shrink-0 text-info">
                <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
                <h4 className="font-bold text-info text-sm uppercase tracking-widest">{title}</h4>
                <div className="text-secondary leading-relaxed font-medium">{children}</div>
            </div>
        </div>
    )
}

export function WarningBox({ title, children, className }: BoxProps) {
    return (
        <div className={cn("p-6 bg-warning-bg border border-warning/20 rounded-3xl flex gap-4 shadow-sm", className)}>
            <div className="w-10 h-10 bg-warning/10 rounded-xl flex items-center justify-center shrink-0 text-warning">
                <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
                <h4 className="font-bold text-warning text-sm uppercase tracking-widest">{title}</h4>
                <div className="text-secondary leading-relaxed font-medium">{children}</div>
            </div>
        </div>
    )
}

export function DontDoBox({ title, children, className }: BoxProps) {
    return (
        <div className={cn("p-6 bg-danger-bg border border-danger/20 rounded-3xl flex gap-4 shadow-sm", className)}>
            <div className="w-10 h-10 bg-danger/10 rounded-xl flex items-center justify-center shrink-0 text-danger">
                <Zap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
                <h4 className="font-bold text-danger text-sm uppercase tracking-widest">{title}</h4>
                <div className="text-secondary leading-relaxed font-medium">{children}</div>
            </div>
        </div>
    )
}

export function SuccessBox({ title, children, className }: BoxProps) {
    return (
        <div className={cn("p-6 bg-success-bg border border-success/20 rounded-3xl flex gap-4 shadow-sm", className)}>
            <div className="w-10 h-10 bg-success/10 rounded-xl flex items-center justify-center shrink-0 text-success">
                <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1">
                <h4 className="font-bold text-success text-sm uppercase tracking-widest">{title}</h4>
                <div className="text-secondary leading-relaxed font-medium">{children}</div>
            </div>
        </div>
    )
}

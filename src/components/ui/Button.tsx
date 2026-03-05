"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const buttonVariants = cva(
    "relative inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-xl text-sm font-bold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-white text-dark-bg hover:bg-white/90 shadow-[0_10px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)]",
                neon: "bg-neon-yellow text-dark-bg shadow-[0_0_20px_rgba(255,234,0,0.3)] hover:shadow-[0_0_40px_rgba(255,234,0,0.5)]",
                cyan: "bg-neon-cyan text-dark-bg shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_40px_rgba(0,245,255,0.5)] border border-neon-cyan/50",
                purple: "bg-neon-purple text-white shadow-[0_10px_25px_rgba(124,58,237,0.4)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.6)] border border-neon-purple/50",
                glass: "glass-premium hover:bg-white/15 hover:border-white/30",
                outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white shadow-sm",
                ghost: "hover:bg-white/5 text-white/70 hover:text-white",
                link: "text-neon-cyan underline-offset-4 hover:underline",
                destructive: "bg-neon-danger/10 text-neon-danger border border-neon-danger/20 hover:bg-neon-danger/20"
            },
            size: {
                default: "h-12 px-8 py-3",
                sm: "h-9 rounded-lg px-4 text-xs",
                lg: "h-16 rounded-2xl px-12 text-lg",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        if (asChild) {
            return (
                <Slot
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref}
                    {...props}
                />
            )
        }

        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref as any}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                {...props as any}
            >
                <span className="relative z-10">{props.children as React.ReactNode}</span>

                {/* Shine Effect */}
                {variant !== 'ghost' && variant !== 'link' && (
                    <motion.div
                        className="absolute inset-0 z-0 pointer-events-none"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)"
                        }}
                    />
                )}
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

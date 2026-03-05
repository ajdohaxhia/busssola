"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion"

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean
    glowColor?: 'cyan' | 'purple' | 'pink' | 'none'
    tilt?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, glowColor = 'none', tilt = true, onMouseMove, ...props }, ref) => {
        const x = useMotionValue(0)
        const y = useMotionValue(0)

        const mouseX = useSpring(x, { stiffness: 500, damping: 50 })
        const mouseY = useSpring(y, { stiffness: 500, damping: 50 })

        const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
        const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])

        function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
            const rect = event.currentTarget.getBoundingClientRect()
            const width = rect.width
            const height = rect.height
            const mouseXPos = event.clientX - rect.left
            const mouseYPos = event.clientY - rect.top
            const xPct = mouseXPos / width - 0.5
            const yPct = mouseYPos / height - 0.5
            x.set(xPct)
            y.set(yPct)
            onMouseMove?.(event)
        }

        function handleMouseLeave() {
            x.set(0)
            y.set(0)
        }

        return (
            <motion.div
                ref={ref}
                style={tilt ? {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                } : undefined}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={cn(
                    "glass-card rounded-[2rem]",
                    glowColor === 'cyan' && 'hover:glow-cyan',
                    glowColor === 'purple' && 'hover:glow-purple',
                    glowColor === 'pink' && 'hover:glow-pink',
                    className
                )}
                {...props}
            >
                {/* 3D Content Layer */}
                <div style={tilt ? { transform: "translateZ(50px)", transformStyle: "preserve-3d" } : undefined}>
                    {props.children as React.ReactNode}
                </div>

                {/* Mouse Tracking Glow Overlay */}
                {hoverEffect && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%)`
                        }}
                    />
                )}
            </motion.div>
        )
    }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-3 p-8 pb-4", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-display font-bold leading-tight tracking-tight text-white",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-base text-white/50 font-medium leading-relaxed", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-8 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

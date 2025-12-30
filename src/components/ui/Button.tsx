import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-white text-dark-bg hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.2)]",
                neon: "bg-neon-yellow text-dark-bg hover:bg-neon-yellow/90 shadow-[0_0_20px_rgba(255,234,0,0.4)] hover:shadow-[0_0_30px_rgba(255,234,0,0.6)]",
                cyan: "bg-neon-cyan text-dark-bg hover:bg-neon-cyan/90 shadow-[0_0_20px_rgba(0,245,255,0.4)] hover:shadow-[0_0_30px_rgba(0,245,255,0.6)] border border-neon-cyan/50",
                purple: "bg-neon-purple text-white hover:bg-neon-purple/90 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] border border-neon-purple/50",
                glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/20 shadow-glass",
                outline: "border border-white/20 bg-transparent hover:bg-white/5 text-white shadow-[0_0_10px_rgba(255,255,255,0.05)]",
                ghost: "hover:bg-white/5 text-white/70 hover:text-white",
                link: "text-neon-cyan underline-offset-4 hover:underline",
                destructive: "bg-neon-danger/10 text-neon-danger border border-neon-danger/20 hover:bg-neon-danger/20"
            },
            size: {
                default: "h-11 px-6 py-2",
                sm: "h-9 rounded-lg px-4 text-xs",
                lg: "h-14 rounded-2xl px-10 text-base",
                icon: "h-11 w-11",
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

        // Using framer-motion for micro-interactions
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                {...props as any}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

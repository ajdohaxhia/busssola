import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-yellow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-white text-dark-900 hover:bg-white/90",
                neon: "bg-neon-yellow text-dark-900 hover:bg-neon-yellow/90",
                cyan: "bg-neon-cyan text-dark-900 hover:bg-neon-cyan/90 shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:shadow-[0_0_30px_rgba(0,245,255,0.5)]",
                destructive: "bg-neon-pink text-white hover:bg-neon-pink/90",
                outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
                ghost: "hover:bg-white/10 text-white",
                link: "text-white underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
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
            );
        }

        // Framer motion button
        return (
            <motion.button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                whileTap={{ scale: 0.95 }}
                {...props as any}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };

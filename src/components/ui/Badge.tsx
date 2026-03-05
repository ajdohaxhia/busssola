import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none focus:ring-2 focus:ring-ring",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-white/10 backdrop-blur-md text-white border-white/10 hover:bg-white/20",
                secondary:
                    "border-transparent bg-white/5 text-white/70 hover:text-white",
                destructive:
                    "border-transparent bg-neon-pink/10 text-neon-pink border-neon-pink/20 hover:bg-neon-pink/20",
                outline: "border-white/20 text-white/80 hover:bg-white/5",
                neon: "border-transparent bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };

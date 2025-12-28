import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number; // 0-100
    color?: string; // e.g. "bg-neon-mint"
}

export function ProgressBar({ value, color = "bg-neon-yellow", className, ...props }: ProgressBarProps) {
    return (
        <div
            className={cn(
                "h-2 w-full overflow-hidden rounded-full bg-white/10",
                className
            )}
            {...props}
        >
            <div
                className={cn("h-full transition-all duration-500 ease-in-out", color)}
                style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
            />
        </div>
    );
}

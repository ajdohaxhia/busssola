import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
    children,
    className,
    size = "lg", // Default ~1280px (typical laptop)
    ...props
}: ContainerProps) {
    const maxWidths = {
        sm: "max-w-screen-sm", // 640px
        md: "max-w-screen-md", // 768px
        lg: "max-w-7xl",       // 1280px
        xl: "max-w-[1400px]",  // Ultra wide
        full: "max-w-full"
    };

    return (
        <div
            className={cn(
                "mx-auto w-full px-4 sm:px-6 md:px-8", // Base horizontal padding
                maxWidths[size],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

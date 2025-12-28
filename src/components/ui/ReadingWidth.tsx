import { cn } from "@/lib/utils";

interface ReadingWidthProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: "div" | "article" | "section";
}

export function ReadingWidth({
    children,
    className,
    as: Component = "div",
    ...props
}: ReadingWidthProps) {
    return (
        <Component
            className={cn(
                "w-full max-w-[680px] md:max-w-[720px] mx-auto", // Optimal reading line length
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}

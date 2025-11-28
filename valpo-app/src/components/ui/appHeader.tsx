import { cn } from "@/lib/utils";
import { Icon } from "./icon";

interface AppHeaderProps {
    title: string;
    showBack?: boolean;
    onBack?: () => void;
    rightAction?: React.ReactNode;
    className?: string;
    variant?: "default" | "compact" | "primary" | "secondary";
}

export function AppHeader({
    title,
    showBack = false,
    onBack,
    rightAction,
    className,
    variant = "default",

}: AppHeaderProps) {
    const variants = {
        default: "border-b border-border bg-card/80 backdrop-blur-sm text-foreground",
        trasparent: "bg-trasparent text-white",
        compact: "border-b border-border bg-card/90 backdrop-blur-sm text-foreground h-12",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",

    }
    return (
        <header className={cn("sticky top-0 z-10 flex h-14 items-center px-4", variants[variant], className)}>
            {showBack ? (
                <button onClick={onBack}
                    className={cn("flex size-10 shrink-0 items-center justify-center rounded-full transition-colors",
                        variant === "default" ? "hover:bg-muted" : "hover:bg-white/10"
                    )}>
                    <Icon name="arrow_back" />
                </button>
            ) : (
                <div className="w-10" />
            )}
            <h1 className="flex-1 text-center text-lg font-bold truncate">{title}</h1>
            {rightAction || <div className="w-10" />}
        </header>

    )
}
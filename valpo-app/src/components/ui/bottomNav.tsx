import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./icon";

interface NavItem {
    icon: string;
    label: string;
    href: string;
}
interface BottomNavProps {
    items: NavItem[]
    className?: string
}

export function BottomNav({ items, className }: BottomNavProps) {
    const pathname = usePathname()
    return (
        <nav
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-sm safe-area-pb",
                className,
            )}
        >
            <div className="mx-auto grid h-16 max-w-lg px-2" style={{ gridTemplateColumns: `repeat(${items.length}, 1fr)` }}>
                {items.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "inline-flex flex-col items-center justify-center gap-1 text-center transition-colors",
                                isActive ? "font-bold text-primary" : "text-muted-foreground hover:text-foreground",
                            )}
                        >
                            <Icon name={item.icon} filled={isActive} size="md" />
                            <span className="text-xs">{item.label}</span>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )

}
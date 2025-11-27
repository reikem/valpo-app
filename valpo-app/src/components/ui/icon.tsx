import { cn } from "@/lib/utils";

interface IconProps{
    name: string;
    className?: string;
    filled?: boolean;
    size?:"xs"|"sm"|"md"|"lg"|"xl"|"2xl";
}
const sizeClasses={
    xs: "text-sm",
    sm: "text-base",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
    "2xl": "text-5xl",

}


export function Icon({ name, className, filled = false, size = "md" }: IconProps) {
    return (
      <span
        className={cn("material-symbols-outlined", sizeClasses[size], className)}
        style={{
          fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0",
        }}
      >
        {name}
      </span>
    )
  }
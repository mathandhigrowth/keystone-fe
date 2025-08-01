import { cn } from "@/lib/utils"

export default function ServiceCard({ title, icon: Icon, description, highlighted = false }) {
    const cardClasses = cn(
        "p-8 rounded-xl shadow-lg flex flex-col items-start justify-center",
        highlighted
            ? "bg-[var(--color-primary)] text-[var(--color-surface)] transform scale-[1.15] shadow-2xl z-10 transition-all duration-300 ease-in-out" 
            : "bg-[var(--color-surface)] text-[var(--color-dark)]",
    )

    const iconColorClass = highlighted ? "text-[var(--color-surface)]" : "text-[var(--color-dark)]"
    const linkColorClass = highlighted ? "text-[var(--color-surface)]" : "text-[var(--color-secondary)]"

    return (
        <div className={cardClasses}>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <Icon className={cn("mb-6", iconColorClass)} size={64} strokeWidth={1.5} />
            <p className="text-base leading-relaxed  mb-6">{description}</p>
            <a href="#" className={cn("text-sm font-semibold uppercase", linkColorClass)}>
                {"VIEW DETAILS »"}
            </a>
        </div>
    )
}

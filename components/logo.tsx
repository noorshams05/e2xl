export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <span className="flex items-center gap-2">
        <span className="relative flex h-8 w-8 items-center justify-center rounded-md gradient-border bg-secondary">
          <span className="text-[11px] font-bold tracking-tight text-primary">E2</span>
        </span>
        <span className="text-lg font-semibold tracking-tight text-foreground">
          E2XL
          <span className="ml-1 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Telehealth
          </span>
        </span>
      </span>
    </span>
  )
}

"use client"

import { useMemo, useState } from "react"
import { categories, protocols, type Protocol, type CategoryId } from "@/lib/protocols"
import { ProtocolCard } from "@/components/protocol-card"
import { Reveal } from "@/components/reveal"

export function ProtocolsSection({
  onRequest,
}: {
  onRequest: (protocol: Protocol) => void
}) {
  const [active, setActive] = useState<CategoryId | "all">("all")

  const filtered = useMemo(
    () =>
      active === "all"
        ? protocols
        : protocols.filter((p) => p.category === active),
    [active],
  )

  return (
    <section id="protocols" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          Select Peptide Protocols
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Pharmaceutical-grade compounds, physician selected.
        </h2>
        <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
          Every protocol ships with a Certificate of Analysis verifying ≥99%
          purity. Filter by therapeutic goal to explore your options.
        </p>
      </Reveal>

      {/* Category filters */}
      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = active === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((protocol, i) => (
          <Reveal key={protocol.id} delay={(i % 3) * 90}>
            <ProtocolCard protocol={protocol} onRequest={onRequest} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

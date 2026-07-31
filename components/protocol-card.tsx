"use client"

import Image from "next/image"
import { BadgeCheck, ArrowUpRight } from "lucide-react"
import type { Protocol } from "@/lib/protocols"

export function ProtocolCard({
  protocol,
  onRequest,
}: {
  protocol: Protocol
  onRequest: (protocol: Protocol) => void
}) {
  return (
    <article className="gradient-border glass group relative flex flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1.5">
      {/* Vial image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(400px circle at 50% 40%, rgba(0,240,255,0.14), transparent 60%)",
          }}
        />
        <Image
          src={protocol.image || "/placeholder.svg"}
          alt={`${protocol.name} peptide vial — ${protocol.fullName}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
        />
        {/* COA purity badge */}
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-background/70 px-3 py-1 text-xs font-semibold text-emerald backdrop-blur-md">
          <BadgeCheck className="h-3.5 w-3.5" />
          COA {protocol.purity}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
          {protocol.categoryLabel}
        </span>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">
          {protocol.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{protocol.tagline}</p>

        <div className="mt-4 rounded-lg bg-secondary/50 px-3 py-2 text-xs text-secondary-foreground">
          <span className="text-muted-foreground">Typical dosage · </span>
          {protocol.dosage}
        </div>

        <ul className="mt-4 space-y-2">
          {protocol.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
              {b}
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => onRequest(protocol)}
          className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/40 px-5 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-accent hover:text-primary"
        >
          Request Consultation
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </button>
      </div>
    </article>
  )
}

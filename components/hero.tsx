"use client"

import { ArrowRight, ShieldCheck, Truck, Stethoscope } from "lucide-react"

const nodes = [
  { top: "18%", left: "12%", size: 10, delay: 0, dur: 9 },
  { top: "30%", left: "82%", size: 7, delay: 1.2, dur: 11 },
  { top: "62%", left: "22%", size: 6, delay: 0.6, dur: 8 },
  { top: "72%", left: "70%", size: 12, delay: 1.8, dur: 12 },
  { top: "44%", left: "48%", size: 5, delay: 0.9, dur: 10 },
  { top: "22%", left: "60%", size: 8, delay: 2.1, dur: 13 },
  { top: "82%", left: "40%", size: 6, delay: 1.5, dur: 9 },
  { top: "52%", left: "88%", size: 9, delay: 0.3, dur: 11 },
]

const stats = [
  { icon: Stethoscope, label: "100% Board-Certified Physicians" },
  { icon: ShieldCheck, label: "HIPAA Compliant" },
  { icon: Truck, label: "Next-Day Direct Delivery" },
]

export function Hero({
  onIntake,
  onExplore,
}: {
  onIntake: () => void
  onExplore: () => void
}) {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Ambient mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 20% 30%, rgba(0,240,255,0.10), transparent 55%), radial-gradient(700px circle at 80% 70%, rgba(79,157,255,0.08), transparent 55%)",
        }}
      />
      {/* Floating molecular nodes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {nodes.map((n, i) => (
          <span
            key={i}
            className="e2xl-node absolute rounded-full bg-primary/60"
            style={{
              top: n.top,
              left: n.left,
              width: n.size,
              height: n.size,
              boxShadow: "0 0 20px rgba(0,240,255,0.6)",
              animation: `e2xl-float ${n.dur}s ease-in-out ${n.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Physician-Backed Precision Medicine
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Precision Longevity &amp;{" "}
            <span className="text-primary text-glow">Physician-Guided</span>{" "}
            Peptide Therapy.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Clinically supervised protocols, ≥99% purity compounds, and
            discreet next-day delivery — engineered for the pursuit of optimal
            human performance.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onIntake}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
            >
              Begin Online Intake
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-secondary"
            >
              Explore Protocols
            </button>
          </div>
        </div>

        {/* Live stats bar */}
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass flex items-center gap-3 px-6 py-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent">
                <Icon className="h-4 w-4 text-primary" />
              </span>
              <span className="text-sm font-medium text-secondary-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

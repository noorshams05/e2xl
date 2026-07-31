import { Building2, ShieldCheck, HeartPulse } from "lucide-react"
import { Reveal } from "@/components/reveal"

const pillars = [
  {
    icon: Building2,
    title: "US-Licensed Pharmacies",
    body: "All compounds are dispensed exclusively through accredited, US-licensed compounding pharmacies.",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA Compliance",
    body: "Your health data is protected end-to-end with encrypted, HIPAA-compliant infrastructure.",
  },
  {
    icon: HeartPulse,
    title: "Continuous Medical Oversight",
    body: "Board-certified physicians monitor your protocol with on-demand support and adjustments.",
  },
]

export function TrustSection() {
  return (
    <section
      id="compliance"
      className="relative overflow-hidden border-y border-border py-24 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(700px circle at 50% 0%, rgba(0,240,255,0.06), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Clinical Trust &amp; Compliance
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center text-3xl font-semibold tracking-tight md:text-5xl">
            Built on medical integrity, not hype.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="glass h-full rounded-2xl border border-border p-8 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                  <p.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

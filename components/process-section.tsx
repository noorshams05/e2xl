import { ClipboardList, Video, PackageCheck } from "lucide-react"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Digital Medical Assessment",
    body: "Complete a secure 2-minute online intake covering your history, goals, and eligibility.",
  },
  {
    n: "02",
    icon: Video,
    title: "Physician Consultation & Review",
    body: "A board-certified physician reviews your profile and issues a personalized prescription plan.",
  },
  {
    n: "03",
    icon: PackageCheck,
    title: "Direct Pharmacy Delivery",
    body: "US-licensed pharmacies ship your protocol next-day, with on-demand medical support throughout.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          The Process
        </p>
        <h2 className="mt-3 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
          Three steps to physician-guided therapy.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.n} delay={i * 120}>
            <div className="gradient-border glass group h-full rounded-2xl p-8 transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  <step.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-4xl font-semibold text-secondary">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { X, BadgeCheck, CreditCard, Bitcoin, Apple, ChevronRight } from "lucide-react"
import type { Protocol } from "@/lib/protocols"

type Gateway = "card" | "apple" | "crypto"

export function ConsultationDrawer({
  open,
  protocol,
  onClose,
}: {
  open: boolean
  protocol: Protocol | null
  onClose: () => void
}) {
  const [gateway, setGateway] = useState<Gateway>("card")

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-[90] bg-background/70 backdrop-blur-sm transition-opacity duration-500 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Consultation request"
        className={`fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col border-l border-border glass transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <h2 className="text-base font-semibold tracking-tight">
            {protocol ? "Request Consultation" : "Begin Online Intake"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/60 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {protocol && (
            <div className="gradient-border flex items-center gap-4 rounded-2xl bg-secondary/40 p-4">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-background">
                <Image
                  src={protocol.image || "/placeholder.svg"}
                  alt={protocol.name}
                  fill
                  sizes="64px"
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="text-sm font-semibold">{protocol.name}</p>
                <p className="text-xs text-muted-foreground">{protocol.fullName}</p>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-emerald">
                  <BadgeCheck className="h-3.5 w-3.5" /> COA {protocol.purity}
                </span>
              </div>
            </div>
          )}

          {/* Intake fields */}
          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full name" placeholder="Jordan Ellis" />
            <Field label="Email" type="email" placeholder="you@email.com" />
            <Field label="Date of birth" type="date" />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                Primary health goal
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe your goals for this protocol…"
                className="w-full resize-none rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
              />
            </div>
          </form>

          {/* Checkout gateways */}
          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Payment Method
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2">
              <GatewayTab active={gateway === "card"} onClick={() => setGateway("card")} icon={CreditCard} label="Card" />
              <GatewayTab active={gateway === "apple"} onClick={() => setGateway("apple")} icon={Apple} label="Apple Pay" />
              <GatewayTab active={gateway === "crypto"} onClick={() => setGateway("crypto")} icon={Bitcoin} label="Crypto" />
            </div>

            <div className="mt-4">
              {gateway === "card" && (
                <div className="space-y-3">
                  <Field label="Card number" placeholder="4242 4242 4242 4242" />
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Expiry" placeholder="MM / YY" />
                    <Field label="CVC" placeholder="123" />
                  </div>
                </div>
              )}
              {gateway === "apple" && (
                <div className="rounded-xl border border-border bg-secondary/40 p-6 text-center text-sm text-muted-foreground">
                  You&apos;ll confirm securely with Apple Pay after review.
                </div>
              )}
              {gateway === "crypto" && (
                // ForumPay embed slot — mount the widget here.
                <div
                  id="forumpay-widget-slot"
                  className="flex min-h-32 items-center justify-center rounded-xl border border-dashed border-primary/30 bg-secondary/30 p-6 text-center text-sm text-muted-foreground"
                >
                  ForumPay crypto widget loads here
                  <span className="sr-only">forumpay-widget-slot</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border px-6 py-5">
          <button
            type="button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
          >
            Submit for Physician Review
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            No charge until a physician approves your protocol.
          </p>
        </div>
      </aside>
    </>
  )
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
      />
    </div>
  )
}

function GatewayTab({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean
  onClick: () => void
  icon: typeof CreditCard
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-medium transition-all duration-300 ${
        active
          ? "border-primary/50 bg-accent text-primary"
          : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  )
}

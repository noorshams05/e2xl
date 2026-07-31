"use client"

import { useState } from "react"
import { ShieldCheck, Lock } from "lucide-react"
import { Logo } from "@/components/logo"

export function AgeGateway({ onVerified }: { onVerified: () => void }) {
  const [consent, setConsent] = useState(false)

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gateway-title"
        className="gradient-border glass relative w-full max-w-md rounded-3xl p-8 shadow-2xl"
      >
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="mt-6 flex justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </span>
        </div>

        <h2
          id="gateway-title"
          className="mt-4 text-balance text-center text-xl font-semibold tracking-tight"
        >
          Medical Access Verification
        </h2>
        <p className="mt-2 text-pretty text-center text-sm leading-relaxed text-muted-foreground">
          To view physician-guided peptide protocols you must confirm you are 21
          years or older and consent to our telehealth terms.
        </p>

        <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-xl bg-secondary/60 p-4 text-left">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--primary)]"
          />
          <span className="text-xs leading-relaxed text-secondary-foreground">
            I confirm I am 21+ and I consent to a medical assessment and the
            platform&apos;s HIPAA-compliant privacy practices.
          </span>
        </label>

        <button
          type="button"
          disabled={!consent}
          onClick={onVerified}
          className="mt-5 w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Enter Platform
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3" /> Secure · HIPAA Compliant · Board-Certified
        </p>
      </div>
    </div>
  )
}

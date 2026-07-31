"use client"

import { useCallback, useState } from "react"
import type { Protocol } from "@/lib/protocols"
import { AgeGateway } from "@/components/age-gateway"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ProcessSection } from "@/components/process-section"
import { ProtocolsSection } from "@/components/protocols-section"
import { TrustSection } from "@/components/trust-section"
import { ConsultationDrawer } from "@/components/consultation-drawer"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  const [verified, setVerified] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selected, setSelected] = useState<Protocol | null>(null)

  const openIntake = useCallback(() => {
    setSelected(null)
    setDrawerOpen(true)
  }, [])

  const openConsultation = useCallback((protocol: Protocol) => {
    setSelected(protocol)
    setDrawerOpen(true)
  }, [])

  const scrollToProtocols = useCallback(() => {
    document.getElementById("protocols")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <main className="relative min-h-screen bg-background">
      {!verified && <AgeGateway onVerified={() => setVerified(true)} />}

      <SiteHeader onIntake={openIntake} />
      <Hero onIntake={openIntake} onExplore={scrollToProtocols} />
      <ProcessSection />
      <ProtocolsSection onRequest={openConsultation} />
      <TrustSection />
      <SiteFooter />

      <ConsultationDrawer
        open={drawerOpen}
        protocol={selected}
        onClose={() => setDrawerOpen(false)}
      />
    </main>
  )
}

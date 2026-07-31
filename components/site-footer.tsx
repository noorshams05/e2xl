import { ShieldCheck, Lock } from "lucide-react"
import { Logo } from "@/components/logo"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              E2XL Telehealth connects patients with board-certified physicians
              for personalized, medically supervised peptide therapy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald" /> HIPAA Compliant
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-muted-foreground">
                <Lock className="h-3.5 w-3.5 text-emerald" /> SSL Secured
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Platform</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#protocols" className="transition-colors hover:text-foreground">Protocols</a></li>
              <li><a href="#process" className="transition-colors hover:text-foreground">How It Works</a></li>
              <li><a href="#compliance" className="transition-colors hover:text-foreground">Compliance</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Patient Portal</a></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Legal</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Telehealth Consent</a></li>
              <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-muted-foreground">
            <strong className="text-secondary-foreground">Medical Disclaimer:</strong>{" "}
            The information provided on this platform is for general educational
            purposes only and is not intended as medical advice. Peptide
            therapies are prescribed at the sole discretion of a licensed
            physician following an individual medical evaluation. Statements
            regarding compounds have not been evaluated by the FDA and are not
            intended to diagnose, treat, cure, or prevent any disease. Results
            vary. You must be 21 or older to use this service.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} E2XL Telehealth · e2xl.org. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

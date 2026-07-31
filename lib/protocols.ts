export type CategoryId =
  | "recovery"
  | "longevity"
  | "metabolic"
  | "performance"

export interface Category {
  id: CategoryId | "all"
  label: string
}

export const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "recovery", label: "Recovery & Tissue" },
  { id: "longevity", label: "Longevity & Cellular" },
  { id: "metabolic", label: "Metabolic" },
  { id: "performance", label: "Performance" },
]

export interface Protocol {
  id: string
  name: string
  fullName: string
  category: CategoryId
  categoryLabel: string
  /**
   * Card image. Accepts a direct PNG upload placed in `public/protocols`
   * or any relative path from the project's assets folder.
   * Replace the file at this path to swap in your own vial render.
   */
  image: string
  purity: string
  dosage: string
  tagline: string
  benefits: string[]
  overview: string
}

const categoryLabels: Record<CategoryId, string> = {
  recovery: "Recovery & Tissue",
  longevity: "Longevity & Cellular",
  metabolic: "Metabolic",
  performance: "Performance",
}

function make(
  p: Omit<Protocol, "categoryLabel">,
): Protocol {
  return { ...p, categoryLabel: categoryLabels[p.category] }
}

export const protocols: Protocol[] = [
  make({
    id: "bpc-157",
    name: "BPC-157",
    fullName: "Body Protection Compound-157",
    category: "recovery",
    image: "/protocols/bpc-157.png",
    purity: "99.4%",
    dosage: "250–500 mcg / day",
    tagline: "Accelerated tissue repair & gut integrity.",
    benefits: [
      "Supports tendon, ligament & muscle recovery",
      "Promotes gut lining & GI health",
      "Reduces localized inflammation",
    ],
    overview:
      "A stable gastric pentadecapeptide studied for its role in angiogenesis and connective-tissue repair, BPC-157 is a cornerstone of physician-guided recovery protocols.",
  }),
  make({
    id: "tb-500",
    name: "TB-500",
    fullName: "Thymosin Beta-4 Fragment",
    category: "recovery",
    image: "/protocols/tb-500.png",
    purity: "99.2%",
    dosage: "2–5 mg / week",
    tagline: "Systemic recovery & flexibility support.",
    benefits: [
      "Enhances actin regulation & cell migration",
      "Supports full-body tissue recovery",
      "Improves range of motion & flexibility",
    ],
    overview:
      "TB-500 is a synthetic fragment of Thymosin Beta-4 evaluated for promoting cellular repair and reducing recovery downtime across soft tissue.",
  }),
  make({
    id: "ta-1",
    name: "TA-1",
    fullName: "Thymosin Alpha-1",
    category: "longevity",
    image: "/protocols/ta-1.png",
    purity: "99.5%",
    dosage: "1.6 mg 2× / week",
    tagline: "Immune modulation & cellular resilience.",
    benefits: [
      "Modulates & balances immune response",
      "Supports T-cell function",
      "Studied for long-term vitality",
    ],
    overview:
      "Thymosin Alpha-1 is an immune-modulating peptide used clinically to support balanced immune surveillance and cellular resilience.",
  }),
  make({
    id: "cjc-1295",
    name: "CJC-1295",
    fullName: "CJC-1295 (with/without DAC)",
    category: "performance",
    image: "/protocols/cjc-1295.png",
    purity: "99.3%",
    dosage: "1–2 mg / week",
    tagline: "Sustained growth-hormone optimization.",
    benefits: [
      "Elevates GH & IGF-1 output",
      "Improves lean body composition",
      "Best paired with Ipamorelin",
    ],
    overview:
      "A long-acting GHRH analog, CJC-1295 amplifies natural growth-hormone pulses for performance, body composition, and recovery.",
  }),
  make({
    id: "ipamorelin",
    name: "Ipamorelin",
    fullName: "Ipamorelin (GHRP)",
    category: "performance",
    image: "/protocols/ipamorelin.png",
    purity: "99.4%",
    dosage: "200–300 mcg 1–3× / day",
    tagline: "Selective, clean GH secretagogue.",
    benefits: [
      "Stimulates GH without cortisol spikes",
      "Supports recovery & sleep quality",
      "Highly selective & well tolerated",
    ],
    overview:
      "Ipamorelin is a selective growth-hormone secretagogue prized for its clean pulse profile without significant impact on cortisol or prolactin.",
  }),
  make({
    id: "aod-9604",
    name: "AOD-9604",
    fullName: "Anti-Obesity Drug-9604",
    category: "metabolic",
    image: "/protocols/aod-9604.png",
    purity: "99.1%",
    dosage: "300 mcg / day",
    tagline: "Targeted metabolic & fat-loss support.",
    benefits: [
      "Stimulates lipolysis (fat breakdown)",
      "Non-GH metabolic pathway",
      "Supports body-recomposition goals",
    ],
    overview:
      "A modified fragment of the GH molecule, AOD-9604 targets fat metabolism without affecting blood sugar or IGF-1.",
  }),
  make({
    id: "semax",
    name: "Semax",
    fullName: "Semax (ACTH Fragment)",
    category: "longevity",
    image: "/protocols/semax.png",
    purity: "99.3%",
    dosage: "300–600 mcg / day",
    tagline: "Cognitive clarity & neuroprotection.",
    benefits: [
      "Supports focus, memory & clarity",
      "Elevates BDNF expression",
      "Neuroprotective under stress",
    ],
    overview:
      "Semax is a neuropeptide studied for enhancing cognitive performance, neuroplasticity, and resilience to mental fatigue.",
  }),
  make({
    id: "selank",
    name: "Selank",
    fullName: "Selank (Tuftsin Analog)",
    category: "longevity",
    image: "/protocols/selank.png",
    purity: "99.2%",
    dosage: "250–500 mcg / day",
    tagline: "Calm focus & anxiolytic balance.",
    benefits: [
      "Promotes calm without sedation",
      "Supports mood & stress resilience",
      "May sharpen focus & recall",
    ],
    overview:
      "Selank is an anxiolytic peptide that supports a balanced stress response and steady cognitive focus.",
  }),
  make({
    id: "kpv",
    name: "KPV",
    fullName: "KPV (α-MSH Tripeptide)",
    category: "recovery",
    image: "/protocols/kpv.png",
    purity: "99.4%",
    dosage: "200–500 mcg / day",
    tagline: "Anti-inflammatory & gut-healing support.",
    benefits: [
      "Potent anti-inflammatory activity",
      "Supports gut & skin health",
      "Well-tolerated tripeptide",
    ],
    overview:
      "KPV is the C-terminal tripeptide of α-MSH, studied for its anti-inflammatory and mucosal-healing properties.",
  }),
  make({
    id: "mots-c",
    name: "MOTS-c",
    fullName: "Mitochondrial ORF of the 12S rRNA-c",
    category: "metabolic",
    image: "/protocols/mots-c.png",
    purity: "99.3%",
    dosage: "5–10 mg / week",
    tagline: "Mitochondrial metabolic activation.",
    benefits: [
      "Enhances insulin sensitivity",
      "Boosts metabolic efficiency",
      "Supports exercise capacity",
    ],
    overview:
      "MOTS-c is a mitochondrial-derived peptide that acts as a metabolic regulator, improving energy homeostasis and exercise performance.",
  }),
  make({
    id: "ghk-cu",
    name: "GHK-Cu",
    fullName: "Copper Peptide GHK-Cu",
    category: "longevity",
    image: "/protocols/ghk-cu.png",
    purity: "99.5%",
    dosage: "1–2 mg / day",
    tagline: "Skin regeneration & collagen synthesis.",
    benefits: [
      "Stimulates collagen & elastin",
      "Supports wound healing & skin tone",
      "Antioxidant & anti-aging activity",
    ],
    overview:
      "GHK-Cu is a naturally occurring copper peptide renowned for tissue remodeling, collagen synthesis, and regenerative skin support.",
  }),
  make({
    id: "epithalon",
    name: "Epithalon",
    fullName: "Epithalon (Epitalon)",
    category: "longevity",
    image: "/protocols/epithalon.png",
    purity: "99.4%",
    dosage: "5–10 mg / day (cycled)",
    tagline: "Telomere & longevity optimization.",
    benefits: [
      "Activates telomerase expression",
      "Supports circadian & sleep rhythm",
      "Studied for cellular longevity",
    ],
    overview:
      "Epithalon is a tetrapeptide investigated for its influence on telomerase activity and healthy cellular aging.",
  }),
  make({
    id: "dsip",
    name: "DSIP",
    fullName: "Delta Sleep-Inducing Peptide",
    category: "longevity",
    image: "/protocols/dsip.png",
    purity: "99.2%",
    dosage: "100–300 mcg / night",
    tagline: "Deep restorative sleep architecture.",
    benefits: [
      "Supports deep sleep phases",
      "May reduce stress hormones",
      "Promotes overnight recovery",
    ],
    overview:
      "DSIP is a neuromodulatory peptide studied for its role in regulating sleep architecture and stress resilience.",
  }),
  make({
    id: "hexarelin",
    name: "Hexarelin",
    fullName: "Hexarelin (GHRP-6 Analog)",
    category: "performance",
    image: "/protocols/hexarelin.png",
    purity: "99.3%",
    dosage: "100 mcg 1–2× / day",
    tagline: "Potent GH release & strength support.",
    benefits: [
      "Strong growth-hormone stimulation",
      "Supports strength & lean mass",
      "May offer cardioprotective effects",
    ],
    overview:
      "Hexarelin is one of the most potent GH-releasing peptides, used in performance protocols for strength and recovery.",
  }),
]

import { LaundryServicesPage } from "./LaundryServicesPage";

const carpetCleaningProfile = {
  eyebrow: "EXCELCARE CARPET CLEANING",
  heroTitle: "Professional Carpet Cleaning Services Near You",
  heroDescription:
    "Deep, hygienic carpet and rug cleaning that removes dust, allergens and stubborn stains from your home.",
  heroImage: "Carpet_Cleaning/Untitled-design-59-760x760.webp",
  trustTitle: (
    <>
      Professional Carpet Cleaning Services Near You – Spotless, Safe &
      Reliable{" "}
      <span className="animated-underline laundry-trust-section__highlight">
        ExcelCare
      </span>
    </>
  ),
  trustDescription:
    "ExcelCare uses powerful extraction and fabric-safe cleaning methods to refresh carpets, rugs and mats while protecting their fibres and colour.",
  trustImage: "Carpet_Cleaning/dry-cleaning-process-1.webp",
  trustClassName: "laundry-trust-section--carpet-cleaning",
  typesTitle: "Types of Carpets We Clean",
  typesClassName: "laundry-types-section--carpet-cleaning",
  ctaTitle: "Professional Carpet Cleaning at Your Doorstep",
  types: [
    {
      title: "Wool Carpet",
      description:
        "Soft, warm, and timeless. We gently deep-clean wool carpets using safe solutions that protect texture, softness, and color brilliance.",
      image: "Carpet_Cleaning/Untitled-design-69-760x760.webp",
    },
    {
      title: "Persian Carpet",
      description:
        "Elegant craftsmanship needs expert hands. Our delicate process revives the beauty, colors, and softness of your Persian rugs.",
      image: "Carpet_Cleaning/Untitled-design-71.webp",
    },
    {
      title: "Silk Carpet",
      description:
        "Fine silk deserves careful attention. We use a low-moisture method that removes dust and stains while preserving natural sheen.",
      image: "Carpet_Cleaning/unnamed-1-1.webp",
    },
    {
      title: "Nylon Carpet",
      description:
        "Durable and modern. Ideal for offices and homes, cleaned with precision to eliminate dirt, allergens, and restore brightness.",
      image: "Carpet_Cleaning/Untitled-design-67.webp",
    },
    {
      title: "Shaggy Carpet",
      description:
        "Fluffy and stylish. We deep vacuum and sanitize shaggy carpets to restore softness, volume, and a freshly groomed feel.",
      image: "Carpet_Cleaning/Untitled-design-72.webp",
    },
    {
      title: "Turkish / Acrylic Carpet",
      description:
        "Rich patterns, lasting beauty. Cleaned with gentle care that protects fiber strength, color depth, and intricate handwoven details.",
      image: "Carpet_Cleaning/Untitled-design-73.webp",
    },
  ],
  whyTitle: "ExcelCare – Your Carpets Deserve the Best Professional Cleaning Care",
  expertTitle: "OUR EXPERT CARPET CLEANING SERVICES",
  expertClassName: "expert-laundry-section--carpet-cleaning",
  experts: [
    {
      title: "Deep Steam Carpet Cleaning",
      description:
        "High-pressure hot water extraction removes deep-seated dust, stains, and bacteria from carpet fibers. Perfect for homes and offices that need hygienic, allergen-free cleaning.",
      image: "Carpet_Cleaning/carpet-clean-post-2.webp",
      more: "Deep Steam Carpet Cleaning Process",
      details:
        "Our deep steam cleaning process uses high-temperature steam and eco-friendly solutions to break down tough stains and extract deep-rooted dirt. It's highly effective in killing bacteria, dust mites, and allergens, leaving your carpet fresh and sanitized. Ideal for heavily soiled carpets and high-traffic areas in your home or office.",
    },
    {
      title: "Dry Carpet Cleaning",
      description:
        "A low-moisture cleaning method that uses specialized compounds to lift dirt. Quick drying time and extremely safe for delicate fabrics like silk and Persian rugs.",
      image: "Carpet_Cleaning/carpet-form-post-2.webp",
      more: "Expert Dry Carpet Cleaning",
      details:
        "For delicate and expensive rugs, our dry cleaning method is the perfect solution. We use a low-moisture technique with specialized bio-degradable compounds that act like micro-sponges to absorb dirt and grime. Benefits of Dry Cleaning: Prevents shrinkage and color bleeding; zero drying time required; perfectly safe for Wool, Silk, and Persian carpets; and gently restores texture and shine.",
    },
    {
      title: "Carpet Stain & Odor Removal",
      description:
        "Targeted treatment for stubborn stains (coffee, wine, pet stains) and specialized deodorizers to eliminate trapped odors, bringing your carpet back to life.",
      image:
        "Carpet_Cleaning/WhatsApp-Image-2025-11-05-at-14.20.56-e1762334665263-768x645.webp",
      more: "Advanced Stain & Odor Treatment",
      details:
        "Spills and pet accidents can ruin the look and smell of your carpets. Our expert stain removal process targets the chemical composition of the stain, breaking it down without damaging the fibers. We also use industrial-grade, pet-safe deodorizers to neutralize foul odors at the source (not just mask them). Whether it’s food spills, mud, or pet urine, we restore your carpet's original beauty and freshness.",
    },
  ],
};

export function CarpetCleaningPage() {
  return <LaundryServicesPage profile={carpetCleaningProfile} />;
}

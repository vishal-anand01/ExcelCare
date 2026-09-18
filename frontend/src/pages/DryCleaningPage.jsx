import { LaundryServicesPage } from "./LaundryServicesPage";

const dryCleaningProfile = {
  eyebrow: "EXCELCARE DRY CLEANING",
  heroTitle:
    "Premium Dry Cleaning Services Near You — Expert Care by ExcelCare",
  heroDescription:
    "Specialist care for delicate, designer, formal and occasion wear, with convenient doorstep pickup and delivery.",
  heroImage: "Dry-Cleaners/Untitled-design-15-760x760 (1).webp",
  trustTitle: "Professional Dry Cleaning Services Trusted by Thousands",
  trustDescription:
    "From suits and sarees to silk, wool and designer garments, ExcelCare uses fabric-safe methods and expert finishing to preserve colour, shape and texture.",
  trustImage: "Dry-Cleaners/dry-cleaning-process-1.webp",
  typesTitle: "Types of Dry Clean Service We offer",
  types: [
    [
      "Men's wear",
      "Effortlessly elevate your style with our expert dry cleaning services for men's wear. From formal suits to casual outfits, we ensure you always look sharp, fresh, and polished.",
      "Dry-Cleaners/Bottom_Wear_e1e53f89-b5df-4b6a-9147-47ef94091c5e.webp",
    ],
    [
      "Women's wear",
      "Radiate confidence in every outfit with our professional dry cleaning services. From elegant dresses to stylish blouses, we'll refresh your wardrobe, leaving you feeling fabulous and flawless.",
      "Dry-Cleaners/Screenshot-2023-07-26-131432.webp",
    ],
    [
      "Kids Wear",
      "Keep your little ones looking their best with our expert kids' wear cleaning services. From vibrant outfits to delicate fabrics, we ensure their clothes are fresh, clean, and ready for every adventure.",
      "Dry-Cleaners/istockphoto-477001758-612x612-1.webp",
    ],
    [
      "Leather/Suede/Furs",
      "Premium care for your leather, suede, and furs. Our expert dry cleaning ensures their beauty, softness, and longevity are perfectly preserved.",
      "Dry-Cleaners/Men-B3-Flight-Fur-Coat-1.webp",
    ],
    [
      "Wedding Gowns",
      "Preserve your cherished memories with our meticulous wedding gown cleaning services, ensuring your treasured dress remains flawless for years to come.",
      "Dry-Cleaners/515bVnH72vL._AC_SX522_.webp",
    ],
    [
      "Bag Cleaning",
      "Refresh your bags with our professional cleaning service. From designer handbags to backpacks, we remove stains and dirt, restoring their beauty and functionality.",
      "Dry-Cleaners/top-10-bag-cleaning-services-in-singapore-1024x683-1.webp",
    ],
  ].map(([title, description, image]) => ({ title, description, image })),
  expertTitle: "OUR EXPERT DRY CLEANING SERVICES",
  experts: [
    [
      "Premium Garment Dry Cleaning",
      "Hohenstein-certified process to restore the shine and beauty of your fabrics. Perfect dry cleaning for silk sarees and designer outfits.",
      "Dry-Cleaners/Untitled-design-16.webp",
    ],
    [
      "SHOES, BAG CLEANING AND REPAIR",
      "Professional cleaning, laundry, and repair services for your shoes and bags. Customized care for every material, ensuring a flawless finish that restores their brand-new appearance.",
      "Dry-Cleaners/Untitled-design-17.webp",
    ],
    [
      "WOOLENS DRY CLEANING",
      "At Laundrywala, we use advanced Woolmark-approved Lagoon dry cleaning technology to care for your woolen clothes.",
      "Dry-Cleaners/Untitled-design-8.webp",
    ],
  ].map(([title, description, image]) => ({
    title,
    description,
    image,
    more: `More about ${title}`,
    details: description,
  })),
  ctaTitle: "India's Trusted Dry Cleaning Service at Your Doorstep",
};

export function DryCleaningPage() {
  return <LaundryServicesPage profile={dryCleaningProfile} />;
}

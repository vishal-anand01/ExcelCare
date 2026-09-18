import { LaundryServicesPage } from "./LaundryServicesPage";

const shoeCleaningProfile = {
  eyebrow: "EXCELCARE SHOE CLEANING",
  heroTitle: "Professional Shoe Cleaning Services Near You",
  heroDescription:
    "Restore the freshness, colour and finish of your favourite footwear with expert cleaning and doorstep service.",
  heroImage: "Shoe_Cleaning/Untitled-design-26.webp",
  trustTitle: (
    <>
      Top-Quality Shoe Cleaning Services Near You by <strong>ExcelCare</strong>
    </>
  ),
  trustDescription:
    "Our specialists clean, deodorise and restore sneakers, leather shoes and everyday footwear using material-safe products and proven techniques.",
  trustImage: "Shoe_Cleaning/shoe-cleaning-process-1024x773-1.webp",
  typesTitle: "All types of Shoes Cleaning Services",
  ctaTitle: "Fresh, Clean Footwear Delivered to Your Doorstep",
  types: [
    {
      title: "Sports shoes",
      description:
        "Restore your sports shoes with professional care, making them ready for your next adventure.",
      image:
        "Shoe_Cleaning/nike-sports-shoes-1591905115-5476153-1.webp",
    },
    {
      title: "Suede & Leather shoes",
      description:
        "Premium care for suede and leather shoes, restoring them to their original elegance.",
      image: "Shoe_Cleaning/shopping-1-300x300.webp",
    },
    {
      title: "High heels & sandals",
      description:
        "Step up your style with expertly cleaned and polished high heels and sandals.",
      image: "Shoe_Cleaning/9574da5571a63184ea93cb344d0fe71f-1-320x320.webp",
    },
  ],
  expertTitle: "OUR EXPERT SHOE CLEANING SERVICES",
  expertClassName: "expert-laundry-section--shoe-cleaning",
  experts: [
    {
      title: "SHOE CLEANING",
      description:
        "We provide top-notch shoe cleaning services by meticulously cleaning every part of your shoes, including the laces, soles, and straps, ensuring they look and feel like new.",
      image: "Shoe_Cleaning/laundry-copy.jpg-720x400.webp",
      more: "More High-End Dry Cleaning Service",
      details:
        "Searching for the finest dry cleaners to restore the elegance of your haute couture? Laundrywala is here for you! Our expert team specializes in handling your most cherished lehengas, sherwanis, bridal wear, and designer outfits. Each garment receives personalized care in our state-of-the-art dry cleaning facilities, ensuring premium results every time. With years of experience, we provide exceptional care for delicate and luxurious silk sarees, including Banarasi, Kanjivaram, Baluchari, Mysore, and more. Whether it's a Manish Malhotra lehenga or a Sabyasachi saree, we understand the intricate designs and fabric structures of these couture masterpieces, delivering unmatched care and perfection. That's why Laundrywala is trusted by thousands for premium dry cleaning services!",
    },
    {
      title: "SHOE REPAIR & RESTORATION",
      description:
        "We provide top-notch shoe repair services to restore your shoes, ensuring they look great and feel comfortable once again.",
      image: "Shoe_Cleaning/repair-copy.jpg-720x400.webp",
      more: "More Shoes, Bag Cleaning And Repair",
      details:
        "At Laundrywala, we specialize in rejuvenating and restoring your premium shoes and bags, including luxury brands like Louis Vuitton, Gucci, Prada, and Coach. Our expert services are tailored to bring your footwear and bags back to life, ensuring they look and feel as good as new. Why Choose Laundrywala? Expert Shoe Care: We clean and repair sports shoes, canvas, leather, suede, nubuck, sneakers, boots, and sandals. Our whitening service ensures your footwear shines like new. Professional Bag Care: From canvas and jute to leather and suede, we treat all types of bags with meticulous care and precision. Our 5-Step Shoe and Bag Cleaning Process: fabric-based chemical selection, organic cleansing, spotless detailing of laces, straps, insoles and linings, conditioning with Mink and Lanolin oils, and sanitization with German deodorizers. Repair & Restoration Services include sole pasting and replacement, inner sole and lining replacement, damaged collar and heel repair, recoloring, and strap, lace, and zip replacement. Trust Laundrywala for exceptional shoe and bag care services – because your accessories deserve nothing but the best!",
    },
    {
      title: "SHOE PROTECTION & NOURISHMENT",
      description:
        "We provide premium shoe protection and nourishment services to shield your shoes from dust, dirt, water, and stains, keeping them looking their best.",
      image: "Shoe_Cleaning/protection-copy-720x400.webp",
      more: "More Woolens Dry Cleaning",
      details:
        "Looking for the best dry cleaning services for your woolens? Laundrywala is here to help! Using the world's most advanced Woolmark-approved Lagoon system, we offer eco-friendly and effective care for woolen garments such as sweaters, coats, furs, shawls, pashminas, blankets, and jackets. Your woolens are returned stain-free and in pristine condition, maintaining their original texture, softness, and shape. Our advanced processes ensure zero shrinkage, making us a trusted choice for premium woolen care. For delicate and luxurious woolens like furs and pashminas, we use eco-friendly, pH-neutral cleaning agents imported from Germany. These form a protective layer around the wool fibers, preserving their natural shine and luster with every clean. Trust Laundrywala for expert care of your woolens—where innovation meets excellence!",
    },
  ],
};

export function ShoeCleaningPage() {
  return <LaundryServicesPage profile={shoeCleaningProfile} />;
}

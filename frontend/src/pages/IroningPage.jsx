import { LaundryServicesPage } from "./LaundryServicesPage";

const ironingProfile = {
  eyebrow: "EXCELCARE IRONING",
  heroTitle: "Professional Ironing & Steam Press Services Near You",
  heroDescription:
    "Crisp, wrinkle-free clothes with expert steam pressing and convenient doorstep pickup and delivery.",
  heroImage: "Ironing Services/Untitled-design-22.webp",
  trustTitle: "Expert Steam Ironing Services for Every Fabric",
  trustDescription:
    "ExcelCare gives every garment a sharp, polished finish with the correct temperature, expert handling and reliable doorstep service.",
  trustImage: "Ironing Services/3-1.webp",
  hideTypes: true,
  typesTitle: "Ironing & Steam Press Services We offer",
  ctaTitle: "Professional Steam Ironing Delivered to Your Doorstep",
  types: ["Everyday Ironing", "Steam Press", "Premium Garments"].map(
    (title) => ({
      title,
      description:
        "Professional wrinkle-free finishing with careful fabric handling.",
      image:
        "components/laundrywala-premium-ironing-and-steam-press-service.png",
    }),
  ),
  expertTitle: "OUR EXPERT IRONING SERVICES",
  experts: [
    {
      title: "IRON SILK SAREE",
      description:
        "Every woman cherishes at least one silk saree, a timeless piece passed down from her mother or a beloved figure she holds dear.",
      image: "Ironing Services/Untitled-design-23.webp",
      more: "More Iron Silk Saree",
      details:
        "Cotton Sarees: Always wash new cotton sarees before wearing them. This helps the fabric shrink initially, making it easier to iron later. For best results, iron the saree while it's slightly damp. Avoid letting it dry completely to prevent wrinkles. Start by folding the saree in half and then again lengthwise—it speeds up the process and ensures even ironing. Chiffon Sarees: Dry ironing works best for chiffon sarees. Use a low to medium heat setting to avoid damaging the delicate fabric. Silk Sarees: Be extra gentle with silk. Always use very low heat or place a cotton cloth over the saree while ironing to protect it. A steam iron is the safest option as it reduces the chances of any harm and maintains the silk's natural sheen. General Tip: Avoid moving the iron back and forth on silk sarees as it can stretch or distort the fabric. Instead, glide gently in one direction for a smooth finish. With these tips, you can ensure your sarees look crisp, elegant, and ready to wear, preserving their beauty for years to come.",
    },
    {
      title: "Can A Suit Be Ironed?",
      description:
        "Suits are crafted from fabrics designed to withstand ironing, making the process hassle-free. Proper ironing ensures your suit looks sharp, polished, and perfectly tailored—just the way it's meant to!",
      image: "Ironing Services/Untitled-design-24.webp",
      more: "More Can A Suit Be Ironed?",
      details:
        "If you want to look your best at the office, a wedding, or any special occasion, ironing your suit before wearing it is essential. A properly ironed suit ensures you always look sharp and well-dressed. While a good suit is incomplete without a jacket, there's no need to send it to the dry cleaner every time—it can be easily ironed at home. With the right temperature settings and proper technique, ironing a jacket is straightforward. Pressing each piece correctly not only enhances its appearance but also helps extend its lifespan. With a little care, you can keep your suit and jacket looking flawless for years to come.",
    },
    {
      title: "Heat Setting Fabric Paint",
      description:
        "Permanent fabric paint needs to be heat set to ensure it stays intact. Once heat set, you can use the fabric without worrying about the paint peeling or fading.",
      image: "Ironing Services/Untitled-design-25.webp",
      more: "More Heat Setting Fabric Paint",
      details:
        "To permanently set fabric paint, a hot iron is your best tool. The fabric you choose will influence the final look of your project, so handle it with care. Place a pressing cloth over the painted area and iron it for 2–5 minutes, focusing on the front of the design. Ensure you avoid using the steam function or introducing moisture, as dry heat works best for setting fabric paint. Alternatively, you can iron the back of the fabric or turn it inside out for added safety. Use the highest heat setting appropriate for the material, and keep the iron moving for about five minutes to prevent scorching. Following these steps will ensure your painted design is securely set and long-lasting.",
    },
  ],
};

export function IroningPage() {
  return <LaundryServicesPage profile={ironingProfile} />;
}

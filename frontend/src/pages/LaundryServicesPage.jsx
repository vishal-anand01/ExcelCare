import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";
import "../assets/style/LaundryServicesPage.css";

const serviceOptions = [
  "Laundry",
  "Dry Cleaning",
  "Shoe Cleaning",
  "Curtain Cleaning",
  "Carpet Cleaning",
  "Ironing",
];

const homeServices = [
  [
    "Laundry",
    "Fresh, clean and folded laundry for more time in your day.",
    "components/laundrywala-premium-laundry-services-towel-basket.png",
    "/laundry-services",
  ],
  [
    "Dry Cleaning",
    "Expert care for delicate garments and special occasions.",
    "components/laundrywala-premium-suit-dry-cleaning-service.png",
    "/dry-cleaning",
  ],
  [
    "Ironing",
    "Wrinkle-free finishing that keeps you looking sharp.",
    "components/laundrywala-premium-ironing-and-steam-press-service.png",
    "/ironing",
  ],
];

const faqs = [
  [
    "What services does ExcelCare offer?",
    "ExcelCare provides wash and fold laundry, dry cleaning for delicate garments, ironing and steam press services, shoe cleaning, and convenient doorstep pickup and delivery.",
  ],
  [
    "How do pickup and delivery work?",
    "Choose a convenient pickup time through our website or by contacting us. Our team collects your garments from your doorstep, processes them with the right care, and delivers them back fresh and neatly packed.",
  ],
  [
    "Do I need to sort my clothes before sending them?",
    "No. Our team sorts garments by fabric type, colour, care label, and cleaning requirement. If an item needs special attention, you can simply mention it when scheduling your pickup.",
  ],
  [
    "How long does a laundry order take?",
    "Standard delivery is generally completed within 48–72 hours. Delivery times can vary by service and location, and our team will confirm the expected return time when your order is collected.",
  ],
  [
    "Do you offer express delivery?",
    "Yes. Express delivery is available for selected serviceable locations and eligible items. It is designed for urgent laundry needs and is usually delivered within 24 hours for a minimal additional charge.",
  ],
  [
    "How are delicate and dry-clean-only garments handled?",
    "Delicate garments are inspected before cleaning and handled according to their fabric and care instructions. Our dry-cleaning process uses suitable cleaning methods to protect colour, texture, shape, and finishing.",
  ],
  [
    "What hygiene and quality checks do you follow?",
    "Every order goes through sorting, stain treatment when needed, professional cleaning, finishing, a final quality check, and secure packaging before it is sent for delivery.",
  ],
];

const laundryServiceTypes = [
  {
    title: "Wash & Fold",
    description:
      "Get freshly cleaned, neatly folded clothes ready to wear. Our premium wash & fold service ensures gentle care and long-lasting fabric quality.",
    image: "laundry-services/istockphoto-1224409503-612x612-1.webp",
  },
  {
    title: "Wash & Iron",
    description:
      "Enjoy crisp, wrinkle-free garments with professional steam ironing. ExcelCare ensures your clothes look brand new with expert finishing.",
    image:
      "laundry-services/iron-like-a-professional-2146174-02-34aff2a094774440b701da973825cda2-1024x683.webp",
  },
  {
    title: "Woolen Laundry",
    description:
      "Keep your woolens soft, fresh, and lint-free with our specialized wool care technology and eco-friendly detergents.",
    image: "laundry-services/woolen-laundry.webp",
  },
];

const expertLaundryServices = [
  {
    title: "Curtain & Carpet Cleaning",
    description:
      "Premium dry-cleaning for silk, cotton, velvet, and chenille fabrics. Keep your interiors spotless and allergen-free with ExcelCare's expert care.",
    more: "More Curtain And Carpets Laundry",
    details:
      "Curtains and soft furnishings often hide dust, allergens, and pollutants that can impact your indoor air quality. ExcelCare's expert team uses advanced dry-cleaning technology and eco-friendly solutions to remove deep-seated dirt, stains, and odors from silk, cotton, velvet, and chenille fabrics. We inspect each item for damage, treat stubborn stains, and restore softness and color vibrancy. Our process not only extends fabric life but also ensures a healthier, fresher home environment. Whether you need seasonal cleaning or regular maintenance, trust ExcelCare for professional curtain and carpet care that leaves your interiors spotless and allergen-free.",
    image: "laundry-services/Untitled-design-6.webp",
  },
  {
    title: "Baby Clothes & Toy Cleaning",
    description:
      "Safe, hygienic wash for babywear and soft toys using dermatologically tested detergents perfect for delicate fabrics and sensitive skin.",
    more: "More Your Baby's Clothes & Toys",
    details:
      "Our baby clothes and toy cleaning service is designed for maximum safety and hygiene. We use hypoallergenic, dermatologically tested detergents that are gentle on delicate fabrics and sensitive skin. Each item is carefully sorted, washed, and sanitized to remove bacteria, allergens, and stains. Soft toys are treated with special care to preserve their texture and color, while babywear is finished to ensure softness and comfort. ExcelCare's process guarantees your child's garments and toys are not only clean but also safe for everyday use. Parents can rely on us for thorough sanitization, freshness, and peace of mind.",
    image: "laundry-services/Untitled-design-7.webp",
  },
  {
    title: "Winter Wear Laundry",
    description:
      "Professional cleaning for sweaters, coats, jeans, and pyjamas gentle on fibers, tough on dirt, and designed for freshness that lasts.",
    more: "More Sweaters, Jeans, and Pyjamas",
    details:
      "Winter wear requires specialized cleaning to maintain warmth, softness, and durability. ExcelCare's expert team handles sweaters, coats, jeans, and pyjamas with care, using fabric-specific detergents and gentle wash cycles. We remove tough dirt, stains, and odors while preserving the fibers and preventing shrinkage or pilling. Each item is inspected for damage, treated for stains, and finished to restore its original look and feel. Our process ensures your winter garments stay fresh, comfortable, and ready for the season. Trust ExcelCare for professional winter wear laundry that keeps your wardrobe in top condition year-round.",
    image: "laundry-services/Untitled-design-8.webp",
  },
];

const createExpertServices = (image, services) =>
  services.map(([title, description], index) => ({
    title,
    description,
    more: `More about ${title}`,
    details: `${description} Our trained specialists inspect every item and use the right process to deliver fresh, reliable results with convenient doorstep service.`,
    image: Array.isArray(image) ? image[index] : image,
  }));

export const servicePageProfiles = {
  laundry: {
    eyebrow: "EXCELCARE LAUNDRY",
    heroTitle:
      "Premium Laundry Services Near You — Fast & Affordable by ExcelCare",
    heroDescription:
      "Trusted care for every garment — expert cleaning, careful folding, and convenient doorstep delivery.",
    heroImage: "laundry-services/Untitled-design-1.webp",
    trustTitle:
      "Professional Laundry & Dry Cleaning Services Near You Trusted by Thousands",
    trustDescription:
      "ExcelCare offers India's most reliable laundry and dry-cleaning services designed for every fabric type. Using German-grade washing machines, expert care, and non-toxic detergents, we ensure your clothes stay spotless, fresh, and long-lasting.",
    trustImage: "laundry-services/Untitled-design-2.webp",
    typesTitle: "Types of Laundry Services We offer",
    types: laundryServiceTypes,
    expertTitle: "OUR EXPERT LAUNDRY SERVICES",
    experts: expertLaundryServices,
    ctaTitle:
      "Laundrywala – India's Best Laundry & Dry Cleaning Service at Your Doorstep",
  },
  dryCleaning: {
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
      {
        title: "Men's wear",
        description:
          "Effortlessly elevate your style with our expert dry cleaning services for men's wear. From formal suits to casual outfits, we ensure you always look sharp, fresh, and polished.",
        image: "Dry-Cleaners/Bottom_Wear_e1e53f89-b5df-4b6a-9147-47ef94091c5e.webp",
      },
      {
        title: "Women's wear",
        description:
          "Radiate confidence in every outfit with our professional dry cleaning services. From elegant dresses to stylish blouses, we'll refresh your wardrobe, leaving you feeling fabulous and flawless.",
        image: "Dry-Cleaners/Screenshot-2023-07-26-131432.webp",
      },
      {
        title: "Kids Wear",
        description:
          "Keep your little ones looking their best with our expert kids' wear cleaning services. From vibrant outfits to delicate fabrics, we ensure their clothes are fresh, clean, and ready for every adventure.",
        image: "Dry-Cleaners/istockphoto-477001758-612x612-1.webp",
      },
      {
        title: "Leather/Suede/Furs",
        description:
          "Premium care for your leather, suede, and furs. Our expert dry cleaning ensures their beauty, softness, and longevity are perfectly preserved.",
        image: "Dry-Cleaners/Men-B3-Flight-Fur-Coat-1.webp",
      },
      {
        title: "Wedding Gowns",
        description:
          "Preserve your cherished memories with our meticulous wedding gown cleaning services, ensuring your treasured dress remains flawless for years to come.",
        image: "Dry-Cleaners/515bVnH72vL._AC_SX522_.webp",
      },
      {
        title: "Bag Cleaning",
        description:
          "Refresh your bags with our professional cleaning service. From designer handbags to backpacks, we remove stains and dirt, restoring their beauty and functionality.",
        image:
          "Dry-Cleaners/top-10-bag-cleaning-services-in-singapore-1024x683-1.webp",
      },
    ],
    expertTitle: "OUR EXPERT DRY CLEANING SERVICES",
    experts: createExpertServices(
      [
        "Dry-Cleaners/Untitled-design-16.webp",
        "Dry-Cleaners/Untitled-design-17.webp",
        "Dry-Cleaners/Untitled-design-8.webp",
      ],
      [
        [
          "Premium Garment Dry Cleaning",
          "Hohenstein-certified process to restore the shine and beauty of your fabrics. Perfect dry cleaning for silk sarees and designer outfits.",
        ],
        [
          "SHOES, BAG CLEANING AND REPAIR",
          "Professional cleaning, laundry, and repair services for your shoes and bags. Customized care for every material, ensuring a flawless finish that restores their brand-new appearance.",
        ],
        [
          "WOOLENS DRY CLEANING",
          "At Laundrywala, we use advanced Woolmark-approved Lagoon dry cleaning technology to care for your woolen clothes. This ensures they retain their original shape, size, and softness after every clean.",
        ],
      ],
    ),
    ctaTitle: "India's Trusted Dry Cleaning Service at Your Doorstep",
  },
  ironing: {
    eyebrow: "EXCELCARE IRONING",
    heroTitle: "Professional Ironing & Steam Press Services Near You",
    heroDescription:
      "Crisp, wrinkle-free clothes with expert steam pressing and convenient doorstep pickup and delivery.",
    heroImage:
      "components/laundrywala-premium-ironing-and-steam-press-service.png",
    trustTitle: "Expert Steam Ironing Services for Every Fabric",
    trustDescription:
      "ExcelCare gives every garment a sharp, polished finish with the correct temperature, expert handling and reliable doorstep service.",
    trustImage: "laundry-services/Untitled-design-2.webp",
    typesTitle: "Ironing & Steam Press Services We offer",
    types: [
      {
        title: "Everyday Ironing",
        description: "Neat, wrinkle-free finishing for your everyday wear.",
        image:
          "components/laundrywala-premium-ironing-and-steam-press-service.png",
      },
      {
        title: "Steam Press",
        description:
          "Professional steam pressing for a crisp, long-lasting finish.",
        image:
          "components/laundrywala-premium-ironing-and-steam-press-service.png",
      },
      {
        title: "Premium Garments",
        description: "Careful ironing for delicate and occasion wear.",
        image:
          "components/laundrywala-premium-ironing-and-steam-press-service.png",
      },
    ],
    expertTitle: "OUR EXPERT IRONING SERVICES",
    experts: createExpertServices(
      "components/laundrywala-premium-ironing-and-steam-press-service.png",
      [
        [
          "Steam Press",
          "Crisp professional finishing for all everyday garments.",
        ],
        [
          "Delicate Garment Ironing",
          "Correct temperature and careful handling for delicate fabrics.",
        ],
        [
          "Formal Wear Pressing",
          "Sharp, ready-to-wear finishing for suits and occasion wear.",
        ],
      ],
    ),
    ctaTitle: "Professional Steam Ironing Delivered to Your Doorstep",
  },
  shoeCleaning: {
    eyebrow: "EXCELCARE SHOE CLEANING",
    heroTitle: "Professional Shoe Cleaning Services Near You",
    heroDescription:
      "Restore the freshness, colour and finish of your favourite footwear with expert cleaning and doorstep service.",
    heroImage:
      "components/laundrywala-premium-shoe-cleaning-polishing-service.png",
    trustTitle: "Expert Shoe Cleaning and Restoration Services",
    trustDescription:
      "Our specialists clean, deodorise and restore sneakers, leather shoes and everyday footwear using material-safe products and proven techniques.",
    trustImage: "laundry-services/Untitled-design-2.webp",
    typesTitle: "Shoe Cleaning Services We offer",
    types: [
      {
        title: "Sneaker Cleaning",
        description: "Deep cleaning that brings your sneakers back to life.",
        image:
          "components/laundrywala-premium-shoe-cleaning-polishing-service.png",
      },
      {
        title: "Leather Shoe Care",
        description: "Safe cleaning and conditioning for leather footwear.",
        image:
          "components/laundrywala-premium-shoe-cleaning-polishing-service.png",
      },
      {
        title: "Sports Shoe Cleaning",
        description: "Fresh, hygienic care for active and sports footwear.",
        image:
          "components/laundrywala-premium-shoe-cleaning-polishing-service.png",
      },
    ],
    expertTitle: "OUR EXPERT SHOE CLEANING SERVICES",
    experts: createExpertServices(
      "components/laundrywala-premium-shoe-cleaning-polishing-service.png",
      [
        [
          "Sneaker Restoration",
          "Deep cleaning that refreshes your favourite sneakers.",
        ],
        [
          "Leather Shoe Care",
          "Material-safe cleaning, conditioning and polishing.",
        ],
        [
          "Sports Shoe Cleaning",
          "Hygienic cleaning and odour removal for active footwear.",
        ],
      ],
    ),
    ctaTitle: "Fresh, Clean Footwear Delivered to Your Doorstep",
  },
  carpetCleaning: {
    eyebrow: "EXCELCARE CARPET CLEANING",
    heroTitle: "Professional Carpet Cleaning Services Near You",
    heroDescription:
      "Deep, hygienic carpet and rug cleaning that removes dust, allergens and stubborn stains from your home.",
    heroImage: "components/carpet-cleaning.jpeg",
    trustTitle: "Deep Carpet Cleaning for a Healthier Home",
    trustDescription:
      "ExcelCare uses powerful extraction and fabric-safe cleaning methods to refresh carpets, rugs and mats while protecting their fibres and colour.",
    trustImage: "laundry-services/Untitled-design-2.webp",
    typesTitle: "Carpet Cleaning Services We offer",
    types: [
      {
        title: "Carpet Deep Cleaning",
        description: "Deep extraction cleaning for dust, allergens and stains.",
        image: "components/carpet-cleaning.jpeg",
      },
      {
        title: "Rug Cleaning",
        description: "Gentle, effective cleaning for all kinds of rugs.",
        image: "components/carpet-cleaning.jpeg",
      },
      {
        title: "Stain & Odour Removal",
        description:
          "Targeted treatment for tough stains and lingering odours.",
        image: "components/carpet-cleaning.jpeg",
      },
    ],
    expertTitle: "OUR EXPERT CARPET CLEANING SERVICES",
    experts: createExpertServices("components/carpet-cleaning.jpeg", [
      [
        "Carpet Deep Cleaning",
        "Powerful extraction cleaning for dust and stains.",
      ],
      ["Rug Cleaning", "Gentle care for rugs of different fabrics and sizes."],
      [
        "Odour Removal",
        "Targeted treatment to leave carpets fresh and hygienic.",
      ],
    ]),
    ctaTitle: "Professional Carpet Cleaning at Your Doorstep",
  },
  curtainCleaning: {
    eyebrow: "EXCELCARE CURTAIN CLEANING",
    heroTitle: "Professional Curtain Cleaning Services Near You",
    heroDescription:
      "Restore clean, fresh and beautiful curtains with expert fabric care and convenient doorstep service.",
    heroImage: "components/laundrywala-premium-curtain-cleaning-service.png",
    trustTitle: "Expert Curtain Cleaning for a Fresher Home",
    trustDescription:
      "From delicate drapes to everyday curtains, our fabric specialists remove dust, allergens and stains while preserving the fall and finish of every panel.",
    trustImage: "laundry-services/Untitled-design-2.webp",
    typesTitle: "Curtain Cleaning Services We offer",
    types: [
      {
        title: "Steam Curtain Cleaning",
        description: "Professional steam cleaning for clean, fresh curtains.",
        image: "components/laundrywala-premium-curtain-cleaning-service.png",
      },
      {
        title: "Dry Cleaning",
        description: "Fabric-safe dry cleaning for delicate drapes and blinds.",
        image: "components/laundrywala-premium-curtain-cleaning-service.png",
      },
      {
        title: "Allergen Removal",
        description: "Deep dust and allergen removal for a healthier home.",
        image: "components/laundrywala-premium-curtain-cleaning-service.png",
      },
    ],
    expertTitle: "OUR EXPERT CURTAIN CLEANING SERVICES",
    experts: createExpertServices(
      "components/laundrywala-premium-curtain-cleaning-service.png",
      [
        [
          "Curtain Steam Cleaning",
          "Refresh everyday curtains with professional steam care.",
        ],
        [
          "Delicate Drapery Care",
          "Fabric-safe cleaning for premium drapes and blinds.",
        ],
        [
          "Dust & Allergen Removal",
          "Deep cleaning for a cleaner, fresher home environment.",
        ],
      ],
    ),
    ctaTitle: "Fresh, Clean Curtains Delivered to Your Doorstep",
  },
};

const doorstepSteps = [
  {
    title: "Effortless Scheduling",
    description: "Book Your Laundry Pickup in Just a Few Clicks.",
    image: "Home/Effortless_Scheduling.png",
  },
  {
    title: "Doorstep Pickup",
    description: "Seamless Pickup at Your Convenience.",
    image: "Home/Doorstep_Pickup.png",
  },
  {
    title: "Professional Cleaning",
    description: "Eco-Friendly Cleaning for Every Fabric.",
    image: "Home/Professional_Cleaning.png",
  },
  {
    title: "On-Time Delivery",
    description: "Fresh, Clean Clothes Delivered Right to Your Doorstep.",
    image: "Home/On_Time_Delivery.png",
  },
];

const testimonials = [
  [
    "Vikas Dubey",
    "I trusted ExcelCare with my delicate gowns and formal outfits. They returned looking brand-new, with every detail handled professionally.",
    "https://i.pravatar.cc/100?img=12",
    5,
  ],
  [
    "Rahul Sharma",
    "I absolutely loved how spotless, fresh and neatly packed my blankets and curtains came back. The service made home care feel premium.",
    "https://i.pravatar.cc/100?img=13",
    4,
  ],
  [
    "Ravi Singh",
    "My sneakers and leather shoes came back beautifully cleaned, fresh, well-shaped and neatly packed. Truly thoughtful footwear care.",
    "https://i.pravatar.cc/100?img=14",
    5,
  ],
  [
    "Nandini Kapoor",
    "Pickup was seamless and my clothes were returned exactly when promised. The fabric care and finishing were excellent.",
    "https://i.pravatar.cc/100?img=32",
    5,
  ],
];

function TestimonialsSection() {
  const railRef = useRef(null);
  const draggingRef = useRef(false);
  const resumeTimerRef = useRef(null);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;
    let frame;
    const move = () => {
      if (!draggingRef.current) {
        rail.scrollLeft += 1.1;
        if (rail.scrollLeft >= rail.scrollWidth / 3) rail.scrollLeft = 0;
      }
      frame = window.requestAnimationFrame(move);
    };
    frame = window.requestAnimationFrame(move);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const beginDrag = (event) => {
    const rail = railRef.current;
    draggingRef.current = true;
    rail.dataset.dragStart = event.clientX;
    rail.dataset.scrollStart = rail.scrollLeft;
    rail.setPointerCapture(event.pointerId);
  };
  const drag = (event) => {
    const rail = railRef.current;
    if (!draggingRef.current) return;
    rail.scrollLeft =
      Number(rail.dataset.scrollStart) -
      (event.clientX - Number(rail.dataset.dragStart));
  };
  const endDrag = () => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      draggingRef.current = false;
    }, 1800);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Our clients praise us for <span>great service</span>
        </h2>
      </div>
      <div
        className="testimonials__rail"
        ref={railRef}
        onPointerDown={beginDrag}
        onPointerMove={drag}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="testimonials__track">
          {[...testimonials, ...testimonials, ...testimonials].map(
            ([name, review, image, stars], index) => (
              <article className="testimonial-card" key={`${name}-${index}`}>
                <header className="testimonial-card__header">
                  <div>
                    <h3>{name}</h3>
                    <span>Our Customer</span>
                  </div>
                  <img src={image} alt="" />
                </header>
                <p>{review}</p>
                <div
                  className="testimonial-card__stars"
                  aria-label={`${stars} out of 5 stars`}
                >
                  {"★".repeat(stars)}
                  <i>{"★".repeat(5 - stars)}</i>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
      <div className="testimonials__cta">
        <Link to="/contact-us">Schedule Pickup</Link>
      </div>
    </section>
  );
}

function HomeServicesSection() {
  const servicesTrackRef = useRef(null);
  const servicesPausedRef = useRef(false);

  useEffect(() => {
    const track = servicesTrackRef.current;
    if (!track) return undefined;

    let currentSlide = 0;
    let resetTimer;
    const slide = () => {
      if (servicesPausedRef.current) return;

      const card = track.querySelector(".services__card");
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const slideWidth = card.getBoundingClientRect().width + gap;
      currentSlide += 1;
      track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

      if (currentSlide === homeServices.length) {
        resetTimer = window.setTimeout(() => {
          track.style.transition = "none";
          currentSlide = 0;
          track.style.transform = "translateX(0)";
          window.requestAnimationFrame(() => {
            track.style.transition = "";
          });
        }, 600);
      }
    };

    const interval = window.setInterval(slide, 3000);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(resetTimer);
    };
  }, []);

  return (
    <section className="services">
      <div className="services__container">
        <div className="services__header">
          <div className="services__header-left">
            <h2 className="services__title">
              Our <span className="animated-underline">Services</span>
            </h2>
          </div>
          <div className="services__header-right">
            <p className="services__subtitle">
              Discover professional cleaning services tailored for your
              wardrobe.
            </p>
          </div>
        </div>
        <div className="services__carousel-wrapper">
          <div
            className="services__carousel"
            onMouseEnter={() => (servicesPausedRef.current = true)}
            onMouseLeave={() => (servicesPausedRef.current = false)}
            onFocus={() => (servicesPausedRef.current = true)}
            onBlur={() => (servicesPausedRef.current = false)}
          >
            <div className="services__carousel-track" ref={servicesTrackRef}>
              {[...homeServices, ...homeServices].map(
                ([title, description, image, path], index) => (
                  <article className="services__card" key={`${title}-${index}`}>
                    <Link className="services__card-link" to={path}>
                      <div
                        className="services__card-inner"
                        style={{ backgroundImage: `url(${imageUrl(image)})` }}
                      >
                        <div className="services__card-overlay" />
                        <div className="services__card-content">
                          <h3 className="services__card-title">{title}</h3>
                          <div className="services__card-description-wrapper">
                            <p className="services__card-description">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
        <div className="services__footer">
          <p className="services__footer-text">
            Trusted by thousands of happy customers — choose ExcelCare for
            exceptional care.
          </p>
        </div>
      </div>
    </section>
  );
}

function HeroTitle({ title }) {
  const marker = "ExcelCare";
  const markerIndex = title.indexOf(marker);

  if (markerIndex === -1) {
    return (
      <>
        {title}{" "}
        <span className="animated-underline laundry-hero__highlight">
          ExcelCare
        </span>
      </>
    );
  }

  return (
    <>
      {title.slice(0, markerIndex)}
      <span className="animated-underline laundry-hero__highlight">
        {marker}
      </span>
      {title.slice(markerIndex + marker.length)}
    </>
  );
}

export function LaundryServicesPage({ service = "laundry", profile: pageProfile }) {
  const profile = pageProfile ?? servicePageProfiles[service] ?? servicePageProfiles.laundry;
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const submitPickup = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <main className="laundry-page">
        <section className="laundry-hero">
          <div
            className="laundry-hero__dots laundry-hero__dots--left"
            aria-hidden="true"
          />
          <div
            className="laundry-hero__dots laundry-hero__dots--right"
            aria-hidden="true"
          />
          <div className="laundry-hero__inner">
            <div className="laundry-hero__copy">
              <p className="laundry-hero__eyebrow">{profile.eyebrow}</p>
              <h1>
                <HeroTitle title={profile.heroTitle} />
              </h1>
              <p className="laundry-hero__description">
                {profile.heroDescription}
              </p>
              <div className="laundry-hero__actions">
                <a className="laundry-hero__primary" href="#request-pickup">
                  Schedule Your Pickup <span aria-hidden="true">→</span>
                </a>
                <Link className="laundry-hero__secondary" to="/contact-us">
                  See Our Pricing
                </Link>
              </div>
            </div>
            <div className="laundry-hero__visual" aria-hidden="true">
              <div className="laundry-hero__visual-circle" />
              <img src={imageUrl(profile.heroImage)} alt="" />
              <div className="laundry-hero__delivery-note">
                Pickup &amp;
                <br />
                delivery
              </div>
            </div>
          </div>
        </section>

        <section className="pickup-section" id="request-pickup">
          <div className="pickup-section__inner">
            <form className="pickup-form" onSubmit={submitPickup}>
              <h2>Request Pickup</h2>
              <div className="pickup-form__fields">
                <input required aria-label="Name" placeholder="Name" />
                <input
                  required
                  aria-label="Phone number"
                  type="tel"
                  placeholder="Phone Number"
                />
                <input
                  required
                  aria-label="City or address"
                  placeholder="City / Address"
                />
                <input
                  required
                  aria-label="Pincode"
                  inputMode="numeric"
                  placeholder="Pincode"
                />
              </div>
              <div className="pickup-form__footer">
                <div
                  className="pickup-form__services"
                  aria-label="Select services"
                >
                  {serviceOptions.map((service) => (
                    <label key={service}>
                      <input type="checkbox" name="services" value={service} />{" "}
                      <span>{service}</span>
                    </label>
                  ))}
                </div>
                <button type="submit">Submit</button>
              </div>
              {submitted && (
                <p className="pickup-form__success" role="status">
                  Thank you. Our team will contact you shortly to confirm your
                  pickup.
                </p>
              )}
            </form>
            <aside className="pickup-offer">
              <div className="pickup-offer__icon">%</div>
              <div>
                <h2>Special Offer</h2>
                <p>
                  Book your first pickup and enjoy up to 20% off on eligible
                  services.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          className={`laundry-trust-section ${profile.trustClassName ?? ""}`}
        >
          <div className="laundry-trust-section__inner">
            <div className="laundry-trust-section__copy">
              <h2>{profile.trustTitle}</h2>
              <p>{profile.trustDescription}</p>
              <ul>
                <li>
                  <strong>Eco-Friendly Cleaning:</strong> We use non-toxic,
                  biodegradable detergents to protect both your clothes and the
                  planet.
                </li>
                <li>
                  <strong>Exceptional Stain Removal:</strong> Tough stains like
                  turmeric, mehendi, and oil are no match for our expert
                  cleaning techniques, ensuring up to 99% stain removal.
                </li>
                <li>
                  <strong>Brighter Whites:</strong> Our advanced cleaning
                  technology brightens whites by up to 3 shades, leaving your
                  clothes looking crisp and new.
                </li>
                <li>
                  <strong>Gentle Fabric Care:</strong> We ensure zero shrinkage
                  and maintain the texture, shine, and softness of every fabric.
                </li>
              </ul>
              <p>
                At ExcelCare, we combine professionalism and care to deliver
                laundry services that meet the highest standards. Experience the
                joy of spotless, fresh clothes with a trusted name in laundry
                care!
              </p>
              <a
                className="laundry-trust-section__button"
                href="#request-pickup"
              >
                Schedule Pickup
              </a>
            </div>
            <div className="laundry-trust-section__visual">
              <img
                src={imageUrl(profile.trustImage)}
                alt="Laundry cleaning process"
              />
            </div>
          </div>
        </section>

        {!profile.hideTypes && (
          <section
            className={`laundry-types-section ${profile.typesClassName ?? ""}`}
          >
            <div className="laundry-types-section__inner">
              <h2>{profile.typesTitle}</h2>
              <div className="laundry-types-section__grid">
                {profile.types.map((service) => (
                  <article className="laundry-type-card" key={service.title}>
                    <img src={imageUrl(service.image)} alt={service.title} />
                    <div className="laundry-type-card__body">
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="why-choose-us">
          <div className="why-choose-us__container">
            <div className="why-choose-us__content-wrapper">
              <div className="why-choose-us__left">
                <h2 className="why-choose-us__title">
                  {profile.whyTitle ?? "ExcelCare - Your Clothes, Our Care."}
                </h2>
                <p className="why-choose-us__description">
                  We go beyond cleaning clothes. Every pickup, wash and delivery
                  is designed around convenience and dependable fabric care.
                </p>
                <p className="why-choose-us__subtitle">
                  Trusted by <strong>thousands</strong> of happy customers,
                  we&apos;re ready to serve you too.
                </p>
                <h3 className="why-choose-us__cta-heading">
                  Schedule Your Laundry Pickup Today!
                </h3>
                <div className="why-choose-us__button-wrapper">
                  <Link className="why-choose-us__button" to="/contact-us">
                    Schedule Pickup
                  </Link>
                </div>
              </div>
              <div className="why-choose-us__right">
                <div className="why-choose-us__features-grid">
                  {[
                    [
                      "Eco-Friendly Cleaning",
                      "Gentle on clothes, kind to the planet.",
                    ],
                    [
                      "Certified Fabric Care",
                      "Special care for delicate fabrics.",
                    ],
                    ["Expert Specialists", "Experience you can trust."],
                    ["Sustainable Solutions", "Clean clothes, cleaner future."],
                  ].map(([title, text]) => (
                    <article className="why-choose-us__feature" key={title}>
                      <div className="why-choose-us__feature-image-wrapper">
                        *
                      </div>
                      <div className="why-choose-us__feature-content">
                        <h3 className="why-choose-us__feature-title">
                          {title}
                        </h3>
                        <p className="why-choose-us__feature-description">
                          {text}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className={`expert-laundry-section ${profile.expertClassName ?? ""}`}
        >
          <div className="expert-laundry-section__inner">
            <h2>{profile.expertTitle}</h2>
            <div className="expert-laundry-section__grid">
              {profile.experts.map((service) => (
                <article className="expert-laundry-card" key={service.title}>
                  <img src={imageUrl(service.image)} alt={service.title} />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <details className="expert-laundry-card__details">
                    <summary className="expert-laundry-card__more">
                      <span aria-hidden="true">▶</span>
                      {service.more}
                    </summary>
                    <p className="expert-laundry-card__expanded">
                      {service.details}
                    </p>
                  </details>
                </article>
              ))}
            </div>
            <a
              className="expert-laundry-section__button"
              href="#request-pickup"
            >
              Schedule Pickup
            </a>
          </div>
        </section>

        <section className="doorstep-laundry-section">
          <div className="doorstep-laundry-section__inner">
            <h2>
              Doorstep Laundry Pickup and Delivery - Easy, Fast &amp; Reliable!{" "}
              <span className="animated-underline doorstep-laundry-section__highlight">
                Life Easier!
              </span>
            </h2>
            <p className="doorstep-laundry-section__intro">
              ExcelCare makes laundry day effortless! Schedule a pickup online
              and our team will collect, clean, and deliver your clothes right
              to your doorstep. From daily wear to premium fabrics, we ensure
              expert stain removal, gentle care, and on-time delivery every
              time.
            </p>
            <div className="doorstep-laundry-section__grid">
              {doorstepSteps.map((step) => (
                <article className="doorstep-laundry-card" key={step.title}>
                  <img src={imageUrl(step.image)} alt="" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
            <a
              className="doorstep-laundry-section__button"
              href="#request-pickup"
            >
              Schedule Pickup
            </a>
          </div>
        </section>

        <section className="delivery-options">
          <div className="delivery-options__container">
            <div className="delivery-options__header">
              <h2 className="delivery-options__title">
                Professional Laundry Services Near You: Free Pickup and{" "}
                <span className="animated-underline">Doorstep Delivery</span>
              </h2>
              <p className="delivery-options__description">
                At ExcelCare, we make laundry hassle-free with complimentary
                home pickup and doorstep delivery. Select a time that suits your
                routine, and we'll take care of the rest.
              </p>
            </div>
            <div className="delivery-options__content-wrapper">
              <div className="delivery-options__cards">
                <article className="delivery-options__card">
                  <div className="delivery-options__card-icon">
                    <img src={imageUrl("Home/Standard_Delivery.webp")} alt="" />
                  </div>
                  <div className="delivery-options__card-content">
                    <h3 className="delivery-options__card-title">
                      Standard Delivery
                    </h3>
                    <p className="delivery-options__card-description">
                      Hassle-free regular delivery (48–72 hrs). Perfect for your
                      everyday laundry needs with no extra charges.
                    </p>
                  </div>
                </article>
                <article className="delivery-options__card">
                  <div className="delivery-options__card-icon">
                    <img src={imageUrl("Home/Express_Delivery.webp")} alt="" />
                  </div>
                  <div className="delivery-options__card-content">
                    <h3 className="delivery-options__card-title">
                      Express Delivery
                    </h3>
                    <p className="delivery-options__card-description">
                      Priority care when laundry can’t wait.
                    </p>
                  </div>
                </article>
              </div>
              <div className="delivery-options__rider">
                <img
                  className="delivery-options__rider-image"
                  src={imageUrl("Home/Doorstep_Delivery.png")}
                  alt="Delivery rider"
                />
              </div>
            </div>
            <div className="delivery-options__cta">
              <Link className="delivery-options__button" to="/contact-us">
                Schedule Pickup
              </Link>
            </div>
          </div>
        </section>

        <section className="laundry-services-cta">
          <div className="laundry-services-cta__inner">
            <h2>{profile.ctaTitle}</h2>
            <p>
              Save time and enjoy fresh, hygienically cleaned clothes delivered
              straight to you. Trusted by thousands across India for quality,
              speed, and convenience.
            </p>
            <a className="laundry-services-cta__button" href="#request-pickup">
              Schedule Pickup
            </a>
          </div>
        </section>

        <TestimonialsSection />

        <HomeServicesSection />

        <section className="app-download">
          <div className="app-download__container">
            <div className="app-download__content">
              <h2 className="app-download__title">
                Get Your Clothes Cleaned, With Just a{" "}
                <span className="app-download__title-highlight">
                  Tap of Finger
                </span>
              </h2>
              <div className="app-download__buttons">
                <Link
                  className="app-download__store-button"
                  to="/contact-us"
                  aria-label="Get it on Google Play"
                >
                  <img
                    src={imageUrl("components/Google_Play-1024x302-1-1.png")}
                    alt="Get it on Google Play"
                  />
                </Link>
                <Link
                  className="app-download__store-button"
                  to="/contact-us"
                  aria-label="Download on the App Store"
                >
                  <img
                    src={imageUrl("components/Apple_Play-1.png")}
                    alt="Download on the App Store"
                  />
                </Link>
              </div>
              <p className="app-download__availability">
                Available on Play Store and iOS App Store
              </p>
              <div className="app-download__qr">
                <img
                  src={imageUrl("components/scaner-png-final-only.png")}
                  alt="Scan to order now"
                />
                <b>Scan to Order Now</b>
              </div>
            </div>
            <div className="app-download__image-container">
              <img
                className="app-download__phone-image"
                src={imageUrl(
                  "components/laundrywala-mobile-app-online-laundry-service.png",
                )}
                alt="ExcelCare app"
              />
            </div>
          </div>
        </section>

        <section className="faq-grid">
          <div className="faq-grid__container">
            <h2>
              Frequently Asked Questions –{" "}
              <span className="faq-grid__highlight">ExcelCare</span>
            </h2>
            <p className="faq-grid__intro">
              Everything you need to know about our laundry, dry cleaning, and
              doorstep services.
            </p>
            {faqs.map(([question, answer], index) => (
              <article
                className={`faq-item ${activeFaq === index ? "is-open" : ""}`}
                key={question}
              >
                <button
                  className="faq-item__question"
                  type="button"
                  aria-expanded={activeFaq === index}
                  onClick={() => setActiveFaq(index)}
                >
                  {question}
                  <span className="faq-item__chevron" aria-hidden="true" />
                </button>
                <div className="faq-item__answer">
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="callback-cta">
          <div className="callback-cta__container">
            <h2>
              Request a Call{" "}
              <span className="callback-cta__highlight">Back?</span>
            </h2>
            <Link className="callback-cta__button" to="/contact-us">
              Book Now <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";
import "../assets/style/ServicesPage.css";

const services = [
  "Laundry",
  "Dry Cleaning",
  "Shoe Cleaning",
  "Ironing",
  "Carpet Cleaning",
  "Curtain Cleaning",
];
const serviceCards = [
  [
    "Laundry",
    "Everyday wash & fold service for all your clothes.",
    "service/Laundry Icon.png",
    "/laundry-services",
  ],
  [
    "Dry Cleaning",
    "Gentle cleaning for formal, delicate & designer wear.",
    "service/Drycleaning  Icon.png",
    "/dry-cleaning",
  ],
  [
    "Shoe Cleaning",
    "Deep cleaning & restoration for all types of footwear.",
    "service/Shoe Cleaning   Icon.png",
    "/shoe-cleaning",
  ],
  [
    "Ironing",
    "Steam ironing for crisp, wrinkle-free & perfect finish.",
    "service/Steam Iron Icon.png",
    "/ironing",
  ],
  [
    "Carpet Cleaning",
    "Deep cleaning for carpets, rugs & mats.",
    "service/Carpet  Cleaning  Icon.png",
    "/carpet-cleaning",
  ],
  [
    "Curtain Cleaning",
    "Professional cleaning for curtains, blinds & drapes.",
    "service/Curtain Icon.png",
    "/curtain-cleaning",
  ],
];
const serviceDetailImages = [
  "service/laundrywala-premium-laundry-services-towel-basket.webp",
  "service/laundrywala-premium-suit-dry-cleaning-service.webp",
  "service/laundrywala-premium-shoe-cleaning-polishing-service.webp",
  "service/laundrywala-premium-ironing-and-steam-press-service.webp",
  "service/carpet-cleaning.webp",
  "service/aethric-light-blocking-velvet-curtain-500x500-1.webp",
];
const serviceDetails = [
  ["We provide professional laundry services with advanced washing machines, premium quality detergents and expert care to ensure your everyday clothes are fresh, hygienic and neatly folded.", ["Wash & Fold | Steam Wash | Stain Removal", "Premium detergents & fabric conditioners", "Hygienic packaging & on-time delivery", "Perfect care for all fabric types"]],
  ["We provide premium dry cleaning services for your delicate fabrics. Every garment is inspected and treated individually to ensure its color, fabric, and design remain perfect.", ["Safe solvent cleaning for delicate wear", "Special care for silk, wool, and designer wear", "Expert stain removal and hand finishing", "Hygienic, premium packaging on hangers"]],
  ["Restore your favorite sneakers, leather shoes, or sports footwear. Our experts clean, disinfect, and scrub soles to bring back that fresh-out-of-the-box look.", ["Deep cleaning of soles and uppers", "Specialized brushes and cleaners for leather/suede", "Odour removal and anti-fungal treatment", "Sneakers, sports, and formal shoe restoration"]],
  ["Get perfectly pressed, wrinkle-free clothes with our industrial steam press service. We ensure correct temperatures for each fabric type for a crisp, professional finish.", ["Industrial steam press for crisp crease", "No fabric scorching or shine marks", "Saves time with convenient doorstep pickup", "Hanger delivery options available"]],
  ["Deep clean your home carpets and rugs to remove dust, allergens, and deep-seated stains. We use safe detergents and powerful extraction machines.", ["Deep extraction cleaning of dust and stains", "Odour removal and sanitization", "Fabric-safe cleaning for woollen and synthetic rugs", "Improves indoor air quality"]],
  ["Keep your home dust-free with our complete curtain cleaning service. We unhang, clean, steam-press, and return your curtains looking and smelling fresh.", ["Steam and dry cleaning for all drapery fabrics", "Dust mite and allergen extraction", "Wrinkle-free pressing and finishing", "Convenient pickup and delivery"]],
];
const benefits = [
  [
    "shield",
    "100% Hygienic Cleaning Process",
    "Sanitised wash cycles, eco-friendly detergents, and strict separation of customer laundry batches. We never mix your clothes with others to ensure absolute hygiene.",
  ],
  [
    "clock",
    "Advanced Italian Tech",
    "State-of-the-art Italian machinery, softeners, and specialized fabric stain extraction formulations.",
  ],
  [
    "home",
    "Expert Fabric Specialists",
    "Trained specialists inspecting, spot-treating, and individually packaging each premium attire.",
  ],
  [
    "pricing",
    "Transparent Pricing",
    "Competitive pricing packages with zero hidden fees. Premium laundry care made affordable.",
  ],
  [
    "clock",
    "Express 24–48 Hr Return",
    "Convenient doorstep pickup and return delivery matching your weekly schedule demands.",
  ],
];
const trustPoints = [
  ["pickup", "Doorstep Pickup"],
  ["location", "Pan India Service"],
  ["shield", "Hygienic Cleaning"],
  ["clock", "On-time Delivery"],
];
const processSteps = [
  [
    "Schedule Pickup",
    "Book a doorstep collection through our website form, WhatsApp or a quick phone call. Choose a convenient time slot that fits your schedule.",
    "service/Laundry Icon.png",
    "INSTANT BOOKING",
  ],
  [
    "We Collect",
    "Our doorstep rider arrives at your preferred time slot and handles safe fabric bags. Your garments are securely logged and handled with absolute care.",
    "Home/Doorstep_Pickup.png",
    "DOORSTEP CARE",
  ],
  [
    "We Clean",
    "Garments undergo individual sorting, stain pre-treatment, washing with premium eco-friendly detergents, and expert pressing in our high-tech workshop.",
    "service/Drycleaning  Icon.png",
    "EXPERT WASH",
  ],
  [
    "Quality Check",
    "Our fabric supervisors inspect each piece for stain residuals before folded packaging. Any remaining stains are re-treated immediately.",
    "service/Steam Iron Icon.png",
    "DOUBLE INSPECTION",
  ],
  [
    "We Deliver",
    "Fresh, neatly ironed, folded or hanger-packed outfits arrive right back at your door. You receive laundry that smells fresh and looks store-new.",
    "Home/On_Time_Delivery.png",
    "FRESH DELIVERY",
  ],
];
const faqs = [
  ["What services does ExcelCare offer?", "ExcelCare offers professional laundry, dry cleaning, ironing and steam press, shoe cleaning, carpet cleaning, and curtain cleaning services. Each item is treated according to its fabric type and care requirements."],
  ["Do you provide doorstep pickup and delivery?", "Yes. We provide convenient doorstep pickup and delivery. Simply share your preferred collection time through our contact form or by phone, and our team will confirm your booking."],
  ["How long does the cleaning process take?", "Most standard orders are completed within 48–72 hours. The exact turnaround time depends on the service, item type, and location, and will be confirmed at the time of pickup."],
  ["Are delicate and designer garments safe with ExcelCare?", "Absolutely. Delicate garments such as silk, wool, suits, sarees, and designer wear are individually inspected and handled using fabric-safe cleaning methods to protect their colour, shape, and finish."],
  ["Can you remove stubborn stains?", "Our specialists assess the fabric and stain type before applying the appropriate pre-treatment. While results may vary depending on the age and nature of the stain, we always use the safest and most effective method available."],
  ["How can I find out the price of a service?", "Pricing depends on the item, fabric, service type, and quantity. Contact us for a transparent estimate; the final price is shared before your order is confirmed."],
  ["Is your cleaning process hygienic?", "Yes. Garments are carefully sorted and processed in clean batches, then quality checked and hygienically packed before delivery. We follow a detailed process to ensure consistent care and cleanliness."],
  ["How can I contact ExcelCare?", "You can submit an enquiry through the Contact Us page or call us at +91 8650865586. Our team will be happy to assist with service details, pricing, and pickup arrangements."],
];

function Icon({ type }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (type === "pickup")
    return (
      <svg {...props}>
        <path d="M3 5h11v11H3zM14 9h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  if (type === "location")
    return (
      <svg {...props}>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1116 0z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  if (type === "shield")
    return (
      <svg {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  if (type === "home")
    return (
      <svg {...props}>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
        <path d="M9 21v-7h6v7" />
      </svg>
    );
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function ServicesPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [showMoreContent, setShowMoreContent] = useState(false);
  const [activeOffer, setActiveOffer] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const offersTrackRef = useRef(null);
  const [indiaCounts, setIndiaCounts] = useState([0, 0, 0]);
  const indiaRef = useRef(null);
  const processRef = useRef(null);

  useEffect(() => {
    const section = processRef.current;
    if (!section) return undefined;
    const update = () => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const scrollProgress = Math.min(
        1,
        Math.max(
          0,
          (window.scrollY - sectionTop) /
            Math.max(section.offsetHeight - window.innerHeight, 1),
        ),
      );
      const nextStep = Math.round(scrollProgress * (processSteps.length - 1));
      section.style.setProperty(
        "--how-progress",
        nextStep / (processSteps.length - 1),
      );
      setActiveStep(nextStep);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const track = offersTrackRef.current;
    const card = track?.querySelector("img");
    if (!track || !card) return undefined;
    const move = () => {
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      track.style.transform = `translateX(-${activeOffer * (card.getBoundingClientRect().width + gap)}px)`;
    };
    move();
    window.addEventListener("resize", move);
    return () => window.removeEventListener("resize", move);
  }, [activeOffer]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveOffer((current) => (current + 1) % 5);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const card = indiaRef.current;
    if (!card) return undefined;
    let frame;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const animate = (now) => {
        const progress = Math.min(1, (now - start) / 1500);
        const eased = 1 - (1 - progress) ** 3;
        setIndiaCounts([Math.round(48 * eased), Math.round(100 * eased), Math.round(1 * eased)]);
        if (progress < 1) frame = requestAnimationFrame(animate);
      };
      cancelAnimationFrame(frame);
      setIndiaCounts([0, 0, 0]);
      frame = requestAnimationFrame(animate);
    }, { threshold: 0.35 });
    observer.observe(card);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);

  return (
    <Layout>
      <main className="services-page">
        <section className="services-hero">
          <div className="services-hero__glow services-hero__glow--1" />
          <div className="services-hero__glow services-hero__glow--2" />
          <div className="services-hero__glow services-hero__glow--3" />
          <div className="services-hero__container">
            <div className="services-hero__bubble services-hero__bubble--left-1" />
            <div className="services-hero__bubble services-hero__bubble--left-2" />
            <div className="services-hero__left">
              <span className="services-hero__badge">
                🏆 India&apos;s Most Trusted Laundry &amp; Dry Cleaning Chain
              </span>
              <h1 className="services-hero__title">
                Expert Laundry &amp;
                <br />
                <span>Dry Cleaning Services</span>
                <br />
                Across India
              </h1>
              <p className="services-hero__sub">
                Premium care for your clothes, shoes, carpets and curtains with
                hygienic cleaning, expert craftsmanship and doorstep
                convenience.
              </p>
              <div className="services-hero__chips">
                {services.map((service) => (
                  <span className="services-hero__chip" key={service}>
                    <i />
                    {service}
                  </span>
                ))}
              </div>
              <div className="services-hero__ctas">
                <Link className="services-hero__btn-primary" to="/contact-us">
                  Schedule a Pickup <span>→</span>
                </Link>
                <a
                  className="services-hero__btn-secondary"
                  href="tel:8650865586"
                >
                  <Icon type="phone" />
                  Call Us: 8650865586
                </a>
              </div>
              <div className="services-hero__trust">
                {trustPoints.map(([icon, label]) => (
                  <span className="services-hero__trust-item" key={label}>
                    <Icon type={icon} />
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="services-hero__right">
              <div className="services-hero__image-wrapper">
                <div className="services-hero__circle-bg" />
                <div className="services-hero__circle-ring services-hero__circle-ring--1" />
                <div className="services-hero__circle-ring services-hero__circle-ring--2" />
                <div className="services-hero__bubble services-hero__bubble--1" />
                <div className="services-hero__bubble services-hero__bubble--2" />
                <div className="services-hero__bubble services-hero__bubble--3" />
                <div className="services-hero__bubble services-hero__bubble--4" />
                <img
                  className="services-hero__cutout"
                  src={imageUrl("service/service-hero.png")}
                  alt="ExcelCare laundry service"
                />
                <span className="services-hero__float services-hero__float--1">
                  <Icon type="home" />
                  100+ Stores
                </span>
                <span className="services-hero__float services-hero__float--2">
                  <Icon type="clock" />
                  On-time Delivery
                </span>
                <span className="services-hero__float services-hero__float--3">
                  <Icon type="shield" />
                  Hygienic Cleaning
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="svc-overview">
          <div className="svc-overview__container">
            <header className="svc-overview__header">
              <p>— OUR SERVICES —</p>
              <h2>Complete Care for You &amp; Your Belongings</h2>
              <span>
                From everyday laundry to delicate fabrics - we clean it all with
                perfection.
              </span>
            </header>
            <div className="svc-overview__grid">
              {serviceCards.map(([title, description, icon, path]) => (
                <article className="svc-card" key={title}>
                  <img src={imageUrl(icon)} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to={path}>
                    Explore <span>→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="why-services">
          <div className="why-services__container">
            <header className="why-services__header">
              <span>THE DIFFERENCE</span>
              <h2>Why Choose ExcelCare?</h2>
              <p>
                Premium standards, advanced machines, and expert care that
                traditional dry cleaners can&apos;t match.
              </p>
            </header>
            <div className="why-services__grid">
              {benefits.map(([icon, title, description], index) => (
                <article
                  className={`why-services__card why-services__card--${index + 1}`}
                  key={title}
                >
                  <div className="why-services__icon">
                    <Icon type={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {index === 0 && (
                    <ul>
                      <li>No batch mixing (1 customer per load)</li>
                      <li>Sanitised &amp; disinfected wash cycles</li>
                      <li>Eco-friendly European detergents</li>
                    </ul>
                  )}
                </article>
              ))}
              <article className="why-services__card why-services__card--trust">
                <div className="why-services__icon">
                  <span>♡</span>
                </div>
                <div>
                  <h3>Loved &amp; Trusted Nationwide</h3>
                  <p>
                    Serving 4L+ customers across India with physical outlets,
                    offering consistent fabric care quality and five-star
                    customer support.
                  </p>
                </div>
                <aside>
                  <b>400,000+</b>
                  <span>HAPPY CUSTOMERS</span>
                  <em>★★★★★</em>
                </aside>
              </article>
            </div>
          </div>
        </section>
        <section className="how-it-works" ref={processRef}>
          <div className="how-it-works__container">
            <div className="how-it-works__header">
              <h2 className="how-it-works__title">How It Works</h2>
              <p className="how-it-works__description">
                Simple, professional garment care from pickup to delivery.
              </p>
            </div>
            <div className="how-it-works__steps">
              <span className="how-it-works__progress-dot" aria-hidden="true" />
              {processSteps.map(([title], index) => (
                <article
                  className={`how-it-works__step ${activeStep === index ? "is-active" : ""}`}
                  key={title}
                >
                  <span className="how-it-works__step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="how-it-works__step-title">{title}</h3>
                </article>
              ))}
            </div>
            <div className="how-it-works__showcase">
              {processSteps.map(([title, description, image, label], index) => (
                <article
                  className={`showcase-card ${activeStep === index ? "is-active" : ""}`}
                  key={title}
                >
                  <span className="showcase-card__label">
                    {label || "EXPERT CARE"}
                  </span>
                  <div className="showcase-card__icon">
                    {index === 2 ? (
                      <svg
                        className="showcase-card__flask"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M9 3h6M10 3v6l-6 7a2 2 0 0 0 1.5 3.3h13A2 2 0 0 0 20 16l-6-7V3" />
                        <path d="M7 15h10" />
                      </svg>
                    ) : index === 3 ? (
                      <span className="showcase-card__check">✓</span>
                    ) : index === 4 ? (
                      <span className="showcase-card__simple-check">✓</span>
                    ) : (
                      <img src={imageUrl(image)} alt="" />
                    )}
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="showcase-card__footer">
                    <span>
                      Step {index + 1} of {processSteps.length}
                    </span>
                    <div className="showcase-card__progress" aria-hidden="true">
                      {processSteps.map((_, dashIndex) => (
                        <i
                          className={dashIndex <= index ? "is-filled" : ""}
                          key={dashIndex}
                        />
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="service-detail-showcase">
          <div className="service-detail-showcase__heading">
            <h2>Our Services in Detail</h2>
            <span>SERVICES</span>
          </div>
          <div className="service-detail-showcase__layout">
            <nav
              className="service-detail-showcase__tabs"
              aria-label="Services"
            >
              {serviceCards.map(([title], index) => (
                <button
                  className={activeService === index ? "is-active" : ""}
                  key={title}
                  onClick={() => setActiveService(index)}
                  type="button"
                >
                  {title}
                  {index === 0 || index === 3 ? " Service" : ""}
                </button>
              ))}
            </nav>
            <article className="service-detail-showcase__card">
              <div className="service-detail-showcase__copy">
                <h3>
                  {serviceCards[activeService][0]}
                  {activeService === 0 || activeService === 3 ? " Service" : ""}
                </h3>
                <p>
                  {serviceDetails[activeService][0]}
                </p>
                <ul>
                  {serviceDetails[activeService][1].map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link to="/contact-us">Schedule a Pickup</Link>
              </div>
              <div className="service-detail-showcase__image">
                <img
                  src={imageUrl(serviceDetailImages[activeService])}
                  alt={serviceCards[activeService][0]}
                />
              </div>
            </article>
          </div>
          <div className="service-detail-showcase__bottom">
            <article className="service-detail-showcase__india" ref={indiaRef}>
              <div>
                <h3>Pan India Presence</h3>
                <p>
                  We are operating in 48+ cities with 100+ stores. Your trusted
                  laundry partner, always near you.
                </p>
                <strong>
                  {indiaCounts[0]}+ <small>Cities</small>
                </strong>
                <strong>
                  {indiaCounts[1]}+ <small>Stores</small>
                </strong>
                <strong>
                  {indiaCounts[2]}L+ <small>Happy Customers</small>
                </strong>
              </div>
              <img
                src={imageUrl("service/service map.webp")}
                alt="Pan India service map"
              />
            </article>
            <article className="service-detail-showcase__nearest">
              <div>
                <h3>
                  Find the Nearest
                  <br />
                  Laundrywala Store
                </h3>
                <p>We are closer than you think!</p>
                <ul>
                  <li>
                    <b>Visit Our Website:</b> Use our store locator to find the
                    nearest outlet.
                  </li>
                  <li>
                    <b>Google Search:</b> Search “laundry service near me”.
                  </li>
                  <li>
                    <b>Call Us Directly:</b> 8650865586
                  </li>
                </ul>
              </div>
              <img src={imageUrl("service/service9.png")} alt="Laundry store" />
            </article>
          </div>
        </section>
        <section className="detail section">
          <div>
            <p className="eyebrow">The ExcelCare promise</p>
            <h2>Quality care, made convenient</h2>
            <p>
              We use thoughtful processes and trained specialists to give each
              item the precise care it deserves.
            </p>
          </div>
          <ul>
            <li>✓ Doorstep pickup and delivery</li>
            <li>✓ Professional fabric specialists</li>
            <li>✓ Transparent, quality-checked care</li>
          </ul>
        </section>
        <section className={`services-about ${showMoreContent ? "is-expanded" : ""}`}>
          <div className="services-about__container">
            <h2>Professional Laundry and Dry Cleaning Services in India</h2>
            <p>ExcelCare is transforming laundry and dry-cleaning services in India with premium, reliable, and affordable care. Using advanced technology and eco-friendly detergents, we ensure spotless cleaning, gentle washing, and on-time delivery for every garment — from daily wear to designer outfits. With doorstep pickup and delivery, your clothes get professional care without hassle.</p>
            <p>Operating in 48+ cities with 100+ stores, ExcelCare aims to make world-class laundry services accessible across India. For easy scheduling, call <strong>+91 8650865586</strong> or visit <a href="/" rel="noreferrer">ExcelCare</a> to experience hygienic, expert laundry at your doorstep.</p>
            {showMoreContent && <div className="services-about__extra">
              <h3>ExcelCare Professional Laundry Process Infographic | Step-by-Step Fabric Care</h3>
              <h3>Dry Cleaning</h3><p>Trust ExcelCare for premium dry-cleaning services in India that combine hygiene, care, and eco-friendly innovation. Our professional dry-cleaning experts use advanced machines and fabric-safe solvents to remove stains, odors, and dirt — keeping your clothes fresh, soft, and long-lasting.</p>
              <h3>Shoe Cleaning</h3><p>Bring your footwear back to life with ExcelCare’s professional shoe cleaning services in India. We use advanced cleaning technology, soft brushes, and eco-safe detergents to remove dirt, stains, and odor from every pair including sports shoes, leather shoes, sneakers, and formal footwear.</p>
              <h3>Ironing Service</h3><p>Get wrinkle-free perfection with ExcelCare’s professional ironing and steam-press services in India. Our expert team uses modern steam ironing machines to give your clothes a crisp, polished finish while protecting fabric quality.</p>
            </div>}
            <button type="button" onClick={() => setShowMoreContent((value) => !value)}>{showMoreContent ? "Show Less ▲" : "Know More ▼"}</button>
          </div>
        </section>
        <section className="offers-slider">
          <h2>Latest Offers at ExcelCare <span className="animated-underline"><span className="offers-slider__typing-text">Near You</span></span></h2>
          <div className="offers-slider__viewport">
            <div className="offers-slider__track" ref={offersTrackRef}>
              {[...Array(10)].map((_, index) => (
                <img key={index} src={imageUrl(`service/slider${(index % 5) + 1}.png`)} alt="ExcelCare latest offer" />
              ))}
            </div>
          </div>
          <div className="offers-slider__dots" aria-label="Offer slides">
            {[0, 1, 2].map((dot) => <button className={activeOffer % 3 === dot ? "is-active" : ""} key={dot} onClick={() => setActiveOffer(dot)} aria-label={`Show offer ${dot + 1}`} type="button" />)}
          </div>
          <Link to="/contact-us">Check Our Price</Link>
        </section>
        <section className="services-faq" aria-labelledby="services-faq-title">
          <div className="services-faq__container">
            <header className="services-faq__header">
              <span className="services-faq__badge">GOT QUESTIONS?</span>
              <h2 id="services-faq-title">Frequently Asked Questions</h2>
              <p>Everything you need to know about ExcelCare&apos;s professional cleaning services.</p>
            </header>
            <div className="services-faq__grid">
              {faqs.map(([question, answer], index) => {
                const isOpen = activeFaq === index;
                return (
                  <article className={`services-faq__item ${isOpen ? "is-open" : ""}`} key={question}>
                    <button type="button" aria-expanded={isOpen} aria-controls={`faq-answer-${index}`} onClick={() => setActiveFaq(isOpen ? null : index)}>
                      <span>{question}</span><b aria-hidden="true">{isOpen ? "−" : "+"}</b>
                    </button>
                    <div className="services-faq__answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                      <p>{answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

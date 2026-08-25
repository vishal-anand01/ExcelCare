import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";
const services = [
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
const steps = [
  [
    "Effortless Scheduling",
    "Book your laundry pickup in just a few clicks.",
    "shared/ChatGPT-Image-Sep-15-2025-04_22_21-PM-removebg-preview.png",
  ],
  [
    "Doorstep Pickup",
    "Seamless pickup at your convenience.",
    "shared/ChatGPT-Image-Sep-15-2025-04_35_50-PM-removebg-preview.png",
  ],
  [
    "Professional Cleaning",
    "Eco-friendly cleaning for every fabric.",
    "shared/ChatGPT-Image-Sep-15-2025-04_44_24-PM-removebg-preview.png",
  ],
  [
    "On-Time Delivery",
    "Fresh clothes delivered to your doorstep.",
    "shared/ChatGPT-Image-Sep-15-2025-04_48_47-PM-removebg-preview.png",
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
const testimonials = [
  ["Vikas Dubey", "I trusted ExcelCare with my delicate gowns and formal outfits. They returned looking brand-new, with every detail handled professionally.", "https://i.pravatar.cc/100?img=12", 5],
  ["Rahul Sharma", "I absolutely loved how spotless, fresh and neatly packed my blankets and curtains came back. The service made home care feel premium.", "https://i.pravatar.cc/100?img=13", 4],
  ["Ravi Singh", "My sneakers and leather shoes came back beautifully cleaned, fresh, well-shaped and neatly packed. Truly thoughtful footwear care.", "https://i.pravatar.cc/100?img=14", 5],
  ["Nandini Kapoor", "Pickup was seamless and my clothes were returned exactly when promised. The fabric care and finishing were excellent.", "https://i.pravatar.cc/100?img=32", 5],
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
    rail.scrollLeft = Number(rail.dataset.scrollStart) - (event.clientX - Number(rail.dataset.dragStart));
  };
  const endDrag = () => {
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => { draggingRef.current = false; }, 1800);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">Our clients praise us for <span>great service</span></h2>
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
          {[...testimonials, ...testimonials, ...testimonials].map(([name, review, image, stars], index) => (
            <article className="testimonial-card" key={`${name}-${index}`}>
              <header className="testimonial-card__header">
                <div><h3>{name}</h3><span>Our Customer</span></div>
                <img src={image} alt="" />
              </header>
              <p>{review}</p>
              <div className="testimonial-card__stars" aria-label={`${stars} out of 5 stars`}>{"★".repeat(stars)}<i>{"★".repeat(5 - stars)}</i></div>
            </article>
          ))}
        </div>
      </div>
      <div className="testimonials__cta"><Link to="/contact-us">Schedule Pickup</Link></div>
    </section>
  );
}
const careProcess = [
  [
    "Sorting & Inspection",
    "Checking garments' care labels and sorting each item by fabric type.",
    "sort",
  ],
  [
    "Spot Treatment",
    "Specialized stain removal solutions for different fabrics.",
    "spot",
  ],
  [
    "Dry Cleaning",
    "Fabric-safe cleaning for a deep clean without damage.",
    "clean",
  ],
  [
    "Finishing",
    "Careful pressing and finishing for a polished look.",
    "finish",
  ],
  [
    "Quality Check",
    "Every item is inspected before the packaging stage.",
    "check",
  ],
  ["Packaging", "Freshly packed and prepared for doorstep delivery.", "pack"],
];

function ProcessIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (type === "sort")
    return (
      <svg {...common}>
        <path d="M12 2v20M2 12h20M12 12l-5-5M12 12l5 5" />
      </svg>
    );
  if (type === "spot")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    );
  if (type === "clean")
    return (
      <svg {...common}>
        <path d="M4 4h16v16H4zM12 12a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    );
  if (type === "finish")
    return (
      <svg {...common}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  if (type === "check")
    return (
      <svg {...common}>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M21 8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  );
}
export function HomePage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const careProcessRef = useRef(null);

  useEffect(() => {
    const section = careProcessRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        section.classList.remove("is-visible");
        return;
      }
      section.classList.remove("is-visible");
      window.requestAnimationFrame(() => section.classList.add("is-visible"));
    }, { threshold: 0.3 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <main className="homepage">
        {" "}
        <section className="hero">
          <div className="hero__container">
            <div className="hero__content">
              <div className="hero__heading-wrapper">
                <h1 className="hero__title">
                  <span className="hero__title-text">
                    ExcelCare – Premium Laundry & Dry Cleaning Services
                  </span>{" "}
                  <span className="animated-underline hero__title-highlight">
                    Near You
                  </span>
                </h1>
              </div>
              <div className="hero__subtitle-wrapper">
                <p className="hero__subtitle">
                  Trusted care for every garment — pickup, clean & deliver.
                </p>
              </div>
              <div className="hero__cta-group">
                <Link className="hero__btn hero__btn--primary" to="/contact-us">
                  <span className="hero__btn-text">Schedule Your Pickup</span>
                  <span className="hero__btn-icon">→</span>
                </Link>
                <Link className="hero__btn hero__btn--secondary" to="/services">
                  See Our Services
                </Link>
              </div>
              <div className="hero__features">
                {[
                  [
                    "Customer Support",
                    "shared/laundrywala-discount-offer-icon.png",
                  ],
                  [
                    "Super Fast Delivery",
                    "shared/laundrywala-express-laundry-delivery-icon.png",
                  ],
                  ["Fresh & Eco-Friendly", "shared/eco-friendly-icon.png"],
                ].map(([title, img]) => (
                  <div className="hero__feature" key={title}>
                    <div className="hero__feature-icon">
                      <img src={imageUrl(img)} alt="" />
                    </div>
                    <h3 className="hero__feature-title">{title}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero__image-wrapper">
              <img
                className="hero__image"
                src={imageUrl(
                  "shared/laundrywala-doorstep-laundry-delivery-service.png",
                )}
                alt="ExcelCare doorstep delivery"
              />
            </div>
          </div>
        </section>{" "}
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
              <div className="services__carousel">
                <div className="services__carousel-track">
                  {services.map(([title, description, image, path]) => (
                    <article className="services__card" key={title}>
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
                  ))}
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
        </section>{" "}
        <section className="why-choose-us">
          <div className="why-choose-us__container">
            <div className="why-choose-us__content-wrapper">
              <div className="why-choose-us__left">
                <h2 className="why-choose-us__title">
                  ExcelCare – Your Clothes, Our Care.
                </h2>
                <p className="why-choose-us__description">
                  We go beyond cleaning clothes. Every pickup, wash and delivery
                  is designed around convenience and dependable fabric care.
                </p>
                <p className="why-choose-us__subtitle">
                  Trusted by <strong>thousands</strong> of happy customers,
                  we’re ready to serve you too.
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
                        ✦
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
        </section>{" "}
        <section className="how-it-works">
          <div className="how-it-works__container">
            <div className="how-it-works__header">
              <h2 className="how-it-works__title">
                We Collect, Clean, and Deliver – ExcelCare Makes{" "}
                <span className="animated-underline">Life Easier!</span>
              </h2>
              <p className="how-it-works__description">
                Professional laundry and dry cleaning service designed to make
                life easier, from careful handling to on-time doorstep delivery.
              </p>
            </div>
            <div className="how-it-works__steps">
              {steps.map(([title, text, img]) => (
                <article className="how-it-works__step" key={title}>
                  <div className="how-it-works__step-image-wrapper">
                    <img
                      className="how-it-works__step-image"
                      src={imageUrl(img)}
                      alt=""
                    />
                  </div>
                  <div className="how-it-works__step-content">
                    <h3 className="how-it-works__step-title">{title}</h3>
                    <p className="how-it-works__step-description">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="how-it-works__cta">
              <Link className="how-it-works__button" to="/contact-us">
                Schedule Pickup
              </Link>
            </div>
          </div>
        </section>{" "}
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
        </section>{" "}
        <section className="care-process" ref={careProcessRef}>
          <div className="care-process__container">
            <div className="care-process__intro">
              <h2>
                ExcelCare – India&apos;s Most Trusted Laundry and Dry Cleaning
                Chain
              </h2>
              <p>
                ExcelCare is transforming fabric care with reliable, premium
                laundry services. Combining advanced technology with expert
                care, we make sure every garment receives the attention it
                deserves.
              </p>
              <p>
                From everyday laundry to professional dry cleaning and shoe
                cleaning, we bring quality, convenience and fresh clothes right
                to your doorstep.
              </p>
              <p>
                Schedule your laundry, ironing or steam iron service in just a
                few clicks. Our specialists handle every order with care from
                pickup through delivery.
              </p>
              <Link className="care-process__button" to="/contact-us">
                Schedule Pickup
              </Link>
            </div>
            <div
              className="care-process__diagram"
              aria-label="Our garment care process"
            >
              <svg
                className="care-process__route"
                viewBox="0 0 600 600"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path pathLength="1" d="M72 160H505A80 80 0 0 1 505 360H92A80 80 0 0 0 92 560H540" />
                <circle cx="540" cy="560" r="7" fill="#f8b51a" />
              </svg>
              <div className="care-process__steps">
                {careProcess.map(([title, description, icon]) => (
                  <article className="care-process__step" key={title}>
                    <h3>{title}</h3>
                    <div className="care-process__icon">
                      <ProcessIcon type={icon} />
                    </div>
                    <p>{description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="stats">
          <div className="stats__container">
            <h2 className="stats__title">
              Trusted by thousands of people across the{" "}
              <span className="stats__title-highlight">nation.</span>
            </h2>
            <div className="stats__grid">
              {[
                ["4.0", "L", "Satisfied Customers"],
                ["30", "+", "Cities"],
                ["72", "+", "Stores"],
                ["7.0", "L", "Garments Washed"],
              ].map(([number, suffix, label]) => (
                <div className="stats__item" key={label}>
                  <b className="stats__number" data-counter={number} data-suffix={suffix}>
                    {number}{suffix}
                  </b>
                  <span className="stats__label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>{" "}
        <TestimonialsSection />
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
                <Link className="app-download__store-button" to="/contact-us" aria-label="Get it on Google Play">
                  <img src={imageUrl("components/Google_Play-1024x302-1-1.png")} alt="Get it on Google Play" />
                </Link>
                <Link className="app-download__store-button" to="/contact-us" aria-label="Download on the App Store">
                  <img src={imageUrl("components/Apple_Play-1.png")} alt="Download on the App Store" />
                </Link>
              </div>
              <p className="app-download__availability">Available on Play Store and iOS App Store</p>
              <div className="app-download__qr">
                <img src={imageUrl("components/scaner-png-final-only.png")} alt="Scan to order now" />
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
        </section>{" "}
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
            {faqs.map(([question, answer], i) => (
              <article
                className={`faq-item ${activeFaq === i ? "is-open" : ""}`}
                key={question}
              >
                <button
                  className="faq-item__question"
                  type="button"
                  aria-expanded={activeFaq === i}
                  onClick={() => setActiveFaq(i)}
                >
                  {question}
                  <span className="faq-item__chevron" aria-hidden="true" />
                </button>
                <div className="faq-item__answer">
                  <p>
                  {answer}
                  </p>
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

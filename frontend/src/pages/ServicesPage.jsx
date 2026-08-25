import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";

const services = [
  "Laundry",
  "Dry Cleaning",
  "Shoe Cleaning",
  "Ironing",
  "Carpet Cleaning",
  "Curtain Cleaning",
];
const serviceCards = [
  ["Laundry", "Everyday wash & fold service for all your clothes.", "service/Laundry Icon.png", "/laundry-services"],
  ["Dry Cleaning", "Gentle cleaning for formal, delicate & designer wear.", "service/Drycleaning  Icon.png", "/dry-cleaning"],
  ["Shoe Cleaning", "Deep cleaning & restoration for all types of footwear.", "service/Shoe Cleaning   Icon.png", "/shoe-cleaning"],
  ["Ironing", "Steam ironing for crisp, wrinkle-free & perfect finish.", "service/Steam Iron Icon.png", "/ironing"],
  ["Carpet Cleaning", "Deep cleaning for carpets, rugs & mats.", "service/Carpet  Cleaning  Icon.png", "/carpet-cleaning"],
  ["Curtain Cleaning", "Professional cleaning for curtains, blinds & drapes.", "service/Curtain Icon.png", "/curtain-cleaning"],
];
const benefits = [
  ["shield", "100% Hygienic Cleaning Process", "Sanitised wash cycles, eco-friendly detergents, and strict separation of customer laundry batches. We never mix your clothes with others to ensure absolute hygiene."],
  ["clock", "Advanced Italian Tech", "State-of-the-art Italian machinery, softeners, and specialized fabric stain extraction formulations."],
  ["home", "Expert Fabric Specialists", "Trained specialists inspecting, spot-treating, and individually packaging each premium attire."],
  ["pricing", "Transparent Pricing", "Competitive pricing packages with zero hidden fees. Premium laundry care made affordable."],
  ["clock", "Express 24–48 Hr Return", "Convenient doorstep pickup and return delivery matching your weekly schedule demands."],
];
const trustPoints = [
  ["pickup", "Doorstep Pickup"],
  ["location", "Pan India Service"],
  ["shield", "Hygienic Cleaning"],
  ["clock", "On-time Delivery"],
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
              <span>From everyday laundry to delicate fabrics - we clean it all with perfection.</span>
            </header>
            <div className="svc-overview__grid">
              {serviceCards.map(([title, description, icon, path]) => (
                <article className="svc-card" key={title}>
                  <img src={imageUrl(icon)} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link to={path}>Explore <span>→</span></Link>
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
              <p>Premium standards, advanced machines, and expert care that traditional dry cleaners can&apos;t match.</p>
            </header>
            <div className="why-services__grid">
              {benefits.map(([icon, title, description], index) => (
                <article className={`why-services__card why-services__card--${index + 1}`} key={title}>
                  <div className="why-services__icon"><Icon type={icon} /></div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  {index === 0 && <ul><li>No batch mixing (1 customer per load)</li><li>Sanitised &amp; disinfected wash cycles</li><li>Eco-friendly European detergents</li></ul>}
                </article>
              ))}
              <article className="why-services__card why-services__card--trust">
                <div className="why-services__icon"><span>♡</span></div>
                <div><h3>Loved &amp; Trusted Nationwide</h3><p>Serving 4L+ customers across India with physical outlets, offering consistent fabric care quality and five-star customer support.</p></div>
                <aside><b>400,000+</b><span>HAPPY CUSTOMERS</span><em>★★★★★</em></aside>
              </article>
            </div>
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
      </main>
    </Layout>
  );
}

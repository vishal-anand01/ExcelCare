import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";

export function AboutUsPage() {
  return (
    <Layout>
      <main className="about-page">
        <section className="about-page__hero">
          <div className="about-page__hero-container">
            <div className="about-page__hero-copy">
              <h1>
                About{" "}
                <span className="animated-underline about-page__highlight">
                  ExcelCare
                </span>
              </h1>
              <p>
                <strong>ExcelCare</strong> is India&apos;s leading tech-driven
                laundry and dry-clean brand, redefining modern garment care with
                doorstep pickup, eco-friendly cleaning and smart tracking.
              </p>
              <p>
                We combine modern machines, fabric-care experts and reliable
                delivery for spotless results every time.
              </p>
              <Link className="about-page__button" to="/contact-us">
                Schedule a Pickup
              </Link>
            </div>
            <div className="about-page__hero-visual">
              <img
                src={imageUrl("about-us/about-hero.png")}
                alt="ExcelCare store front"
              />
            </div>
          </div>
        </section>
        <section className="about-page__story">
          <div className="about-page__story-row">
            <div className="about-page__story-copy">
              <h2>Who We Are</h2>
              <p>
                At <strong>ExcelCare</strong>, we believe laundry should be
                smart, simple, and sustainable. We&apos;ve built a tech-enabled
                laundry ecosystem, blending AI automation, modern machinery, and
                fabric science to make laundry more reliable, affordable, and
                hygienic for homes and businesses alike.
              </p>
              <p>
                Every process is designed for efficiency and perfection — from
                eco-friendly detergents to temperature-controlled drying and
                steam-press technology. This commitment has made ExcelCare a
                trusted name across India.
              </p>
              <p>
                Thinking of entering the laundry industry? Join our franchise
                program — a low-investment, high-ROI business model with
                complete setup, marketing support, and training assistance.
              </p>
            </div>
            <img
              src={imageUrl(
                "about-us/WhatsApp-Image-2025-10-03-at-12.47.39-1024x768.webp",
              )}
              alt="ExcelCare laundry store"
            />
          </div>
          <div className="about-page__story-row about-page__story-row--reverse">
            <img
              src={imageUrl("about-us/Untitleddesign6-769x1024.webp")}
              alt="ExcelCare laundry team"
            />
            <div className="about-page__story-copy">
              <h2>Why Choose Us</h2>
              <p>
                Choosing <strong>ExcelCare</strong> means trusting India&apos;s
                most reliable and fastest-growing laundry and dry-clean
                franchise brand. We deliver premium laundry services through
                doorstep pickup and delivery, ensuring every garment is
                hygienic, spotless, and fresh.
              </p>
              <p>
                As a tech-enabled laundry service brand,{" "}
                <strong>ExcelCare</strong> integrates AI-based management
                systems, real-time order tracking, and automated quality checks
                for unmatched precision. Our trained professionals deliver
                fabric-safe, odor-free, long-lasting results using sustainable
                cleaning technology.
              </p>
            </div>
          </div>
        </section>
        <section className="about-page__process">
          <p className="about-page__process-eyebrow">
            SEAMLESS | SMART | SPOTLESS LAUNDRY SERVICE
          </p>
          <h2>
            Our Process – How ExcelCare Delivers
            <br />
            India&apos;s Best Laundry &amp; Dry-Clean Experience
          </h2>
          <p className="about-page__process-intro">
            At <strong>ExcelCare</strong>, we bring India&apos;s most advanced
            laundry and dry-clean service right to your doorstep. Our
            tech-enabled laundry management system ensures hygienic washing,
            eco-friendly cleaning, and on-time delivery with premium detergents,
            AI-tracked orders, and trained fabric experts.
          </p>
          <div className="about-page__process-cards">
            {[
              [
                "shared/doorstep-pickup-icon.png",
                "Doorstep Pickup",
                "Book through our app, website or WhatsApp; our team collects your clothes safely and on schedule.",
              ],
              [
                "shared/sorting-washing-icon.png",
                "Sorting & Washing",
                "Clothes are carefully sorted by colour and fabric, then cleaned with eco-friendly detergents and modern machines.",
              ],
              [
                "shared/drying-quality-check-icon.png",
                "Drying & Quality Check",
                "Temperature-controlled dryers and multi-stage inspections ensure wrinkle-free and odour-free results.",
              ],
              [
                "shared/steam-ironing-icon.png",
                "Steam Ironing",
                "Professional steam-press gives garments a crisp, ready-to-wear finish with zero fabric damage.",
              ],
              [
                "shared/doorstep-delivery-icon.png",
                "Doorstep Delivery",
                "On-time delivery with live tracking via our AI dashboard — freshness guaranteed.",
              ],
            ].map(([icon, title, text]) => (
              <article className="about-page__process-card" key={title}>
                <img src={imageUrl(icon)} alt="" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="about-page__values-section">
          <div className="about-page__values">
            {[
              [
                "shared/mission-focus-icon.png",
                "Our Focus",
                "To lead India&apos;s transformation towards tech-driven, sustainable, and convenient laundry solutions — empowering customers and entrepreneurs alike.",
              ],
              [
                "shared/mission-focus-icon.png",
                "Our Mission",
                "To make hygienic, eco-friendly, and affordable laundry and dry-clean services accessible to all, while delivering premium quality, on-time service, and complete satisfaction.",
              ],
              [
                "shared/vision-ahead-icon.png",
                "Our Vision Ahead",
                "To be India&apos;s most admired and trusted laundry brand, enabling aspiring entrepreneurs to build profitable, tech-enabled laundry franchises.",
              ],
            ].map(([icon, title, text]) => (
              <article key={title}>
                <img src={imageUrl(icon)} alt="" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}

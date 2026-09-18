import { useState } from "react";
import { Layout } from "../components/Layout";
import "../assets/style/ContactUsPage.css";

const contactDetails = [
  ["Call us", "+91 00000 00000", "tel:+910000000000", "☎"],
  ["Email us", "hello@excelcare.in", "mailto:hello@excelcare.in", "✉"],
  ["Service hours", "Mon–Sun, 8:00 AM–8:00 PM", null, "◷"],
  ["Service address", "Doorstep pickup & delivery across India", null, "⌖"],
];

export function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const submitForm = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <Layout>
      <main className="contact-page">
        <section className="contact-page__hero">
          <div className="contact-page__hero-inner">
            <p className="contact-page__eyebrow">GET TO KNOW US</p>
            <h1>
              Have a concern or{" "}
              <span
                className="animated-underline contact-page__highlight"
                data-underline-pause="4800"
              >
                suggestion?
              </span>
            </h1>
            <p>
              Contact ExcelCare and our team will help you with pickup,
              delivery, service queries, or feedback promptly.
            </p>
          </div>
        </section>
        <section className="contact-page__content">
          <div className="contact-page__intro">
            <p className="contact-page__eyebrow">CONTACT EXCELCARE</p>
            <h2>A little help can make your day feel lighter.</h2>
            <p>
              From a quick question to a planned pickup, our care team makes
              every conversation easy, clear and personal.
            </p>
            <div className="contact-page__details">
              {contactDetails.map(([label, value, href, icon]) => (
                <div
                  className={`contact-page__detail${label === "Service address" ? " contact-page__detail--address" : ""}`}
                  key={label}
                >
                  <span aria-hidden="true">{icon}</span>
                  <div>
                    <small>{label}</small>
                    {href ? <a href={href}>{value}</a> : <b>{value}</b>}
                  </div>
                  <i aria-hidden="true">→</i>
                </div>
              ))}
            </div>
          </div>
          <form className="contact-form" onSubmit={submitForm}>
            <div className="contact-form__badge">
              <span aria-hidden="true">✦</span> QUICK RESPONSE
            </div>
            <h2>Send us a message</h2>
            <p>
              Tell us what you need. Our care team will be with you shortly.
            </p>
            <div className="contact-form__grid">
              <label>
                Name
                <input required name="name" placeholder="Your name" />
              </label>
              <label>
                Phone number
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                />
              </label>
            </div>
            <label>
              Email address
              <input
                required
                name="email"
                type="email"
                placeholder="you@example.com"
              />
            </label>
            <label>
              How can we help?
              <textarea
                required
                name="message"
                rows="5"
                placeholder="Tell us about your request"
              />
            </label>
            <button type="submit">
              Send Message <span aria-hidden="true">→</span>
            </button>
            <small className="contact-form__note">
              Your details stay private and are only used to help with your
              request.
            </small>
            {submitted && (
              <p className="contact-form__success" role="status">
                Thank you. Our team will be in touch shortly.
              </p>
            )}
          </form>
        </section>
        <section className="contact-page__location">
          <div className="contact-page__location-inner">
            <div className="contact-page__map">
              <div className="contact-page__map-top">
                <span>OUR SERVICE AREA</span>
                <b>
                  <i aria-hidden="true">⌖</i> We come to you
                </b>
              </div>
              <iframe
                title="ExcelCare service location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.6607210656257!2d78.04612248680681!3d30.33216693986705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092944acfabaad%3A0x916a2f2997f2c21d!2sSACHIWALYA%2C%20Rajpur%20Road!5e0!3m2!1sen!2sin!4v1788949650233!5m2!1sen!2sin"
                loading="lazy"
              />
              <div className="contact-page__map-caption">
                <span aria-hidden="true">⌖</span>
                <div>
                  <b>Doorstep care, right where you are</b>
                  <small>
                    Share your location and we&apos;ll confirm availability in
                    minutes.
                  </small>
                </div>
                <em>Open daily</em>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

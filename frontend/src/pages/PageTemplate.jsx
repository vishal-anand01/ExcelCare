import { Link } from "react-router-dom";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";

const points = ["Doorstep pickup and delivery", "Professional fabric specialists", "Transparent, quality-checked care"];

export function PageTemplate({ title, description, image, label = "ExcelCare", contact, franchise }) {
  const [submitted, setSubmitted] = useState(false);
  const submit = (event) => { event.preventDefault(); setSubmitted(true); };
  return <Layout><main className="page">
    <section className="page-hero"><div><p className="eyebrow">{label}</p><h1>{title}</h1><p>{description}</p><Link className="button" to="/contact-us">Schedule a pickup</Link></div><img src={imageUrl(image)} alt="" /></section>
    <section className="detail section"><div><p className="eyebrow">The ExcelCare promise</p><h2>Quality care, made convenient</h2><p>We use thoughtful processes and trained specialists to give each item the precise care it deserves.</p></div><ul>{points.map((point) => <li key={point}>✓ {point}</li>)}</ul></section>
    {franchise && <section className="franchise-section franchise-section--muted"><div className="franchise-content"><div className="section-heading"><h2 className="title">Start your ExcelCare franchise</h2><p>Join a trusted, modern garment-care business built for growth.</p></div><div className="franchise-form"><h2>Request franchise information</h2>{submitted && <p className="form-message success">Thanks! Our franchise team will contact you shortly.</p>}<form onSubmit={submit}><div className="form-grid"><input required placeholder="Your name" /><input required type="tel" placeholder="Phone number" /></div><div className="form-grid"><input required type="email" placeholder="Email address" /><input placeholder="City" /></div><button type="submit">Submit enquiry</button></form></div></div></section>}
    {contact && <section className="contact-panel"><h2>Let's make laundry effortless.</h2><p>Call us, email us or submit your pickup request. We'll get back to you shortly.</p><a className="button" href="tel:+910000000000">Call ExcelCare</a></section>}
  </main></Layout>;
}

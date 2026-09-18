import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";
import "../assets/style/FaqPage.css";

const questions = [
  ["What is a laundry problem?", "A laundry problem occurs when clothes are not cleaned properly, get damaged during washing, or develop unpleasant odours. Common issues include colour bleeding, shrinkage and stubborn stains. At ExcelCare, we use professional equipment and fabric-aware care to return your garments fresh, clean and in excellent condition."],
  ["Which laundry and dry-cleaning services do you offer?", "We offer wash & fold, wash & iron, dry cleaning, steam ironing, shoe cleaning, curtain cleaning and carpet cleaning."],
  ["How long does an order take?", "Most regular laundry orders are returned within 24–48 hours. Delicate or specialist items may need a little longer, and we will confirm this at pickup."],
  ["Can I schedule a pickup for a specific time?", "Yes. Select the pickup slot that works for your routine and our team will coordinate with you before arriving."],
  ["How are garments priced?", "Pricing depends on the service, garment type, fabric and care required. We share a clear estimate before your order is processed."],
  ["What if I have a special care instruction?", "Please tell our pickup team or add your note while booking. Our fabric-care specialists will handle your garment accordingly."],
  ["Do you clean delicate fabrics and designer wear?", "Yes. Delicate fabrics, occasion wear and designer garments are assessed individually and cleaned using fabric-appropriate methods."],
  ["Can I add more items after placing a booking?", "Yes. You can hand over additional items at pickup and our team will update your order after checking them."],
  ["Do you remove tough stains?", "We use professional stain-treatment processes and will always take the safest possible approach for the fabric. Results can vary by stain type and age."],
  ["Will I receive updates about my order?", "Yes. We keep you informed about pickup, processing and delivery so you always know where your order stands."],
  ["What payment methods do you accept?", "Payment options are shared during booking or order confirmation. Please contact our team if you need help with a payment."],
  ["Can I cancel or reschedule my pickup?", "Yes. Let us know as early as possible and we will help you select another convenient pickup slot."],
  ["Do you offer recurring laundry pickups?", "Yes. Regular customers can arrange repeat pickup schedules to make weekly laundry simpler."],
  ["How should I pack my garments for pickup?", "Place garments in a clean bag and keep any special-care items separate. Our pickup executive will take care of the rest."],
  ["Do you clean shoes, curtains and carpets?", "Yes. ExcelCare offers specialist cleaning for shoes, curtains and carpets in addition to laundry and dry cleaning."],
  ["What happens if an item needs extra care?", "We will inspect the item and contact you if it requires specialist handling, additional time or a revised estimate."],
  ["Is pickup and delivery available on weekends?", "Our service hours include weekends. Availability of time slots may differ by location, so please confirm while booking."],
  ["How can I contact support about an existing order?", "Call or email our care team with your booking details and we will help you with an update as quickly as possible."],
  ["Do you provide franchise opportunities?", "Yes. If you are interested in an ExcelCare franchise, please contact us and our team will share the relevant details."],
  ["Which areas do you serve?", "We provide doorstep service in selected locations. Share your address with our team and we will confirm availability for your area."],
];

export function FaqPage() {
  const [openQuestion, setOpenQuestion] = useState(0);
  return <Layout><main className="faq-page">
    <section className="faq-page__hero"><div className="faq-page__hero-inner"><span className="faq-page__badge"><i /> FAQS</span><h1>Frequently Asked <strong>Questions</strong></h1><p>Find answers to all your queries regarding ExcelCare services and franchise opportunities.</p></div></section>
    <section className="faq-page__questions"><header><h2>Know More About ExcelCare – Best Laundry &amp; Dry Clean Chain In India <span>Franchise Chain</span></h2><p>Click on any question below to see the answer.</p></header><div className="faq-page__list">{questions.map(([question, answer], index) => { const isOpen = index === openQuestion; return <article className={isOpen ? "is-open" : ""} key={question}><button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? -1 : index)}><span>{question}</span><i aria-hidden="true">⌄</i></button><div className="faq-page__answer" hidden={!isOpen}><p>{answer}</p></div></article>; })}</div></section>
    <section className="app-download"><div className="app-download__container"><div className="app-download__content"><h2 className="app-download__title">Get Your Clothes Cleaned, With Just a <span className="app-download__title-highlight">Tap of Finger</span></h2><div className="app-download__buttons"><Link className="app-download__store-button" to="/contact-us" aria-label="Get it on Google Play"><img src={imageUrl("components/Google_Play-1024x302-1-1.png")} alt="Get it on Google Play" /></Link><Link className="app-download__store-button" to="/contact-us" aria-label="Download on the App Store"><img src={imageUrl("components/Apple_Play-1.png")} alt="Download on the App Store" /></Link></div><p className="app-download__availability">Available on Play Store and iOS App Store</p><div className="app-download__qr"><img src={imageUrl("components/scaner-png-final-only.png")} alt="Scan to order now" /><b>Scan to Order Now</b></div></div><div className="app-download__image-container"><img className="app-download__phone-image" src={imageUrl("components/laundrywala-mobile-app-online-laundry-service.png")} alt="ExcelCare app" /></div></div></section>
    <section className="callback-cta"><div className="callback-cta__container"><h2>Request a Call <span className="callback-cta__highlight">Back?</span></h2><Link className="callback-cta__button" to="/contact-us">Book Now <span aria-hidden="true">→</span></Link></div></section>
  </main></Layout>;
}

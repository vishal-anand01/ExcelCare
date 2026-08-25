import { Link } from "react-router-dom";
import logo from "../assets/images/ExcelCare_Logo2.png";

export function Footer() {
  return (
    <>
      <section className="request">
        <div>
          <b>Ready for a fresher routine?</b>
          <span>Book a convenient doorstep pickup with ExcelCare.</span>
        </div>
        <Link className="nav-button" to="/contact-us">
          Book Now →
        </Link>
      </section>
      <footer className="site-footer">
        <div className="footer-brand">
          <Link to="/" aria-label="ExcelCare home">
            <img className="footer-logo" src={logo} alt="ExcelCare" />
          </Link>
          <p>
            Premium fabric care with convenient doorstep pickup and delivery.
          </p>
          <div className="footer-socials" aria-label="Follow ExcelCare">
            <a href="#facebook" aria-label="Facebook">f</a>
            <a href="#linkedin" aria-label="LinkedIn">in</a>
            <a href="#instagram" aria-label="Instagram">◎</a>
            <a href="#twitter" aria-label="Twitter">𝕏</a>
            <a href="#youtube" aria-label="YouTube">▶</a>
          </div>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/laundry-services">Laundry Service</Link>
          <Link to="/dry-cleaning">Dry Cleaning</Link>
          <Link to="/shoe-cleaning">Shoe Cleaning</Link>
          <Link to="/ironing">Ironing</Link>
          <Link to="/carpet-cleaning">Carpet Cleaning</Link>
          <Link to="/curtain-cleaning">Curtain Cleaning</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link to="/about-us">About us</Link>
          <Link to="/store-locator">Stores</Link>
          <Link to="/best-laundry-franchise-in-india">Franchise</Link>
          <Link to="/contact-us">Contact us</Link>
          <Link to="/blog">Career & Blog</Link>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">FAQs</Link>
        </div>
        <div>
          <h4>Contact us</h4>
          <a href="mailto:hello@excelcare.in">✉ hello@excelcare.in</a>
          <a href="tel:+910000000000">☎ +91 00000 00000</a>
          <span>⌂ Registered Office: India</span>
          <span>⌂ Corporate Office: India</span>
        </div>
      </footer>
      <div className="copyright">
        <div className="copyright__links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms &amp; Conditions</Link>
        </div>
        © {new Date().getFullYear()} ExcelCare. All rights reserved.
      </div>
    </>
  );
}

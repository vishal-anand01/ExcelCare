import { Link } from "react-router-dom";
import logo from "../assets/images/ExcelCare_Logo2.png";

const bubbles = [
  [36.7959, 77.6018, 12.6854, 0.309578, 0.213429],
  [13.914, 98.4955, 14.7845, 7.91849, 0.208621],
  [36.8955, 18.0095, 13.8538, 7.66862, 0.230069],
  [33.3252, 17.9349, 13.9635, 10.1027, 0.342731],
  [15.5109, 90.5822, 11.0629, 9.58725, 0.37195],
  [29.1249, 30.0552, 20.9409, 10.224, 0.526972],
  [27.7432, 47.87, 14.9344, 7.00965, 0.593028],
  [26.5032, 34.3587, 21.6179, 1.50498, 0.458773],
  [25.4265, 42.3317, 11.2702, 3.80802, 0.527268],
  [13.4447, 91.0619, 16.4849, 3.7502, 0.596741],
  [22.3942, 60.2352, 12.989, 4.54689, 0.529296],
  [27.589, 92.3311, 20.1722, 2.15468, 0.291494],
  [12.7741, 40.7352, 11.1291, 8.25969, 0.335426],
  [11.7, 73.064, 14.7768, 9.93734, 0.395036],
  [20.2921, 72.1261, 20.1368, 2.9755, 0.335028],
  [23.9541, 92.4744, 18.5084, 9.75486, 0.267483],
  [37.3226, 86.4689, 11.982, 3.8692, 0.550744],
  [13.8613, 42.1408, 9.12367, 5.77741, 0.493665],
  [18.2, 5.5, 17.4, 1.2, 0.31],
  [31.4, 12.8, 15.6, 6.7, 0.28],
  [16.8, 24.6, 19.2, 3.4, 0.46],
  [34.7, 37.9, 13.1, 9.1, 0.24],
  [14.5, 52.3, 18.6, 4.9, 0.4],
  [28.8, 66.7, 16.2, 8.3, 0.34],
  [19.6, 81.5, 20.4, 1.8, 0.45],
  [35.1, 96.2, 14.3, 5.6, 0.27],
  [11.9, 8.7, 12.4, 10.6, 0.5],
  [24.3, 21.1, 21.3, 2.6, 0.36],
  [32.6, 55.4, 17.8, 7.5, 0.3],
  [17.1, 69.8, 10.8, 11.2, 0.52],
  [26.9, 78.4, 19.6, 4.1, 0.33],
  [15.3, 88.9, 15.1, 9.8, 0.43],
];

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
      <div className="footer">
        <div className="bubble-container" aria-hidden="true">
          {bubbles.map(([size, left, duration, delay, opacity], index) => (
            <div
              className="bubble"
              key={index}
              style={{
                width: `${size}px`, height: `${size}px`, left: `${left}%`,
                bottom: `-${size}px`, animationDuration: `${duration}s`,
                animationDelay: `${delay}s`, opacity,
              }}
            />
          ))}
        </div>
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
          <Link to="/services">All Services</Link>
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
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/blog">Career & Blog</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/faqs">FAQs</Link>
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
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
        © {new Date().getFullYear()} ExcelCare. All rights reserved.
      </div>
      </div>
    </>
  );
}

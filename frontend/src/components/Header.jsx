import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/ExcelCare_Logo.png";

const services = [
  ["Laundry Services", "Fresh wash & fold", "/laundry-services", "L"],
  ["Dry Cleaning", "Delicate garment care", "/dry-cleaning", "D"],
  ["Ironing & Steam", "Crisp, ready-to-wear finish", "/ironing", "I"],
  ["Shoe Cleaning", "Restore every step", "/shoe-cleaning", "S"],
  ["Carpet Cleaning", "Deep home fabric care", "/carpet-cleaning", "C"],
  ["Curtain Cleaning", "Freshen your interiors", "/curtain-cleaning", "T"],
];
const Brand = () => <img className="brand-logo" src={logo} alt="ExcelCare" />;
const Arrow = () => <span aria-hidden="true">→</span>;
const ServiceIcon = ({ letter }) => (
  <span className="service-icon" aria-hidden="true">
    {letter}
  </span>
);

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };
  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-bar__inner">
          <p>Free pickup & delivery on your laundry orders</p>
          <div className="top-bar__links">
            <a href="tel:+910000000000">☎ +91 00000 00000</a>
            <a href="mailto:hello@excelcare.in">hello@excelcare.in</a>
          </div>
        </div>
      </div>
      <div className="desktop-header">
        <div className="container">
          <Link className="logo" to="/" aria-label="ExcelCare home">
            <Brand />
          </Link>
          <nav className="nav col" aria-label="Primary navigation">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="has-submenu">
                <Link to="/services">Services</Link>
                <span className="submenu-expander">⌄</span>
                <div className="submenu" role="menu">
                  <div className="submenu__heading">
                    <span>OUR SERVICES</span>
                    <Link to="/services">
                      View all <Arrow />
                    </Link>
                  </div>
                  <div className="submenu__grid">
                    {services.map(([name, detail, path, icon]) => (
                      <Link key={path} to={path} className="submenu__item">
                        <ServiceIcon letter={icon} />
                        <span>
                          <b>{name}</b>
                          <small>{detail}</small>
                        </span>
                        <Arrow />
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
          <Link className="book-btn" to="/contact-us">
            Book a Pickup <Arrow />
          </Link>
        </div>
      </div>
      <div className="mobile-header">
        <div className="mobile-top">
          <Link className="mobile-logo" to="/" aria-label="ExcelCare home">
            <Brand />
          </Link>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-menu"
            aria-label="Mobile navigation"
          >
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
            <Link onClick={closeMenu} to="/about-us">
              About Us
            </Link>
            <div className="mobile-services">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services <span>{servicesOpen ? "−" : "+"}</span>
              </button>
              {servicesOpen && (
                <div className="mobile-service-list">
                  <Link onClick={closeMenu} to="/services">
                    <ServiceIcon letter="A" />
                    <span>
                      <b>All Services</b>
                      <small>Explore every care service</small>
                    </span>
                  </Link>
                  {services.map(([name, detail, path, icon]) => (
                    <Link key={path} onClick={closeMenu} to={path}>
                      <ServiceIcon letter={icon} />
                      <span>
                        <b>{name}</b>
                        <small>{detail}</small>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link onClick={closeMenu} to="/blog">
              Blog
            </Link>
            <Link onClick={closeMenu} to="/contact-us">
              Contact Us
            </Link>
            <a
              className="mobile-book-btn"
              onClick={closeMenu}
              href="tel:+910000000000"
            >
              Call to Book <Arrow />
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

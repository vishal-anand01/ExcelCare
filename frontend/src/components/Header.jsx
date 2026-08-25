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
const SvgServiceIcon = ({ type }) => (
  <span className={`service-icon service-icon--${type}`} aria-hidden="true">
    <svg viewBox="0 0 24 24">
      {
        {
          laundry: (
            <>
              <path d="M3 4.5h18v15H3z" />
              <path d="M6 2.5h12" />
              <path d="M7 8h.01M10 8h.01" />
              <circle cx="12" cy="14" r="3.5" />
            </>
          ),
          dry: (
            <>
              <path d="M4 5h16l-2 15H6L4 5Z" />
              <path d="M3 5h18M8 2h8l1 3H7l1-3Z" />
              <path d="M9 11h6M9 15h4" />
            </>
          ),
          iron: (
            <>
              <path d="M3 16h18l-3-9H8L3 16Z" />
              <path d="M3 16v3h18" />
              <path d="M8 7c0-2 1.3-3 3-3h4" />
              <path d="M15 11h.01" />
            </>
          ),
          shoe: (
            <>
              <path d="M3 15c4 0 5-5 6-8 1.4 3.3 3.5 5 9 5 1.8 0 3 1.3 3 3v3H3v-3Z" />
              <path d="M3 18h18" />
              <path d="M7 15h.01M10 15h.01" />
            </>
          ),
          carpet: (
            <>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 8h10M7 12h10M7 16h10M8 7v10M12 7v10M16 7v10" />
            </>
          ),
          curtain: (
            <>
              <path d="M3 4h18M6 4v16M18 4v16" />
              <path d="M6 7c2 2 4 2 6 0 2 2 4 2 6 0" />
              <path d="M9 4v15M15 4v15" />
            </>
          ),
        }[type]
      }
    </svg>
  </span>
);
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
          <nav className="nav" aria-label="Primary navigation">
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
                <Link to="/best-laundry-franchise-in-india">Franchise</Link>
              </li>
              <li>
                <Link to="/store-locator">Stores</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
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
            <Link onClick={closeMenu} to="/best-laundry-franchise-in-india">
              Franchise
            </Link>
            <Link onClick={closeMenu} to="/store-locator">
              Stores
            </Link>
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

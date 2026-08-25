import { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout({ children }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleScrollTop = () => setShowScrollTop(window.scrollY > 360);
    toggleScrollTop();
    window.addEventListener('scroll', toggleScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', toggleScrollTop);
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <button
        className={`scroll-to-top ${showScrollTop ? 'is-visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M6 11l6-6 6 6" />
        </svg>
      </button>
    </>
  );
}

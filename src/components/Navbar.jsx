import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#0a0c10]/90 backdrop-blur-md border-b border-[#00E5FF]/10 py-4' : 'bg-transparent py-6'
        }`}
        style={{
          backgroundColor: scrolled ? 'rgba(5, 7, 11, 0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--glass-border)' : 'none',
          padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
          position: 'fixed', width: '100%', zIndex: 1000,
          transition: 'all 0.3s ease'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1300px', margin: '0 auto' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="https://www.sheltonenergy.com/html/images/imgs/sticky-logo.png" 
              alt="Shelton Energy Solutions Logo" 
              style={{ height: '45px', objectFit: 'contain', filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.9)) drop-shadow(0 0 25px rgba(255,255,255,0.5))' }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {['Home', 'About', 'Services', 'Safety', 'Careers', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif', textTransform: 'uppercase',
                    fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.12em',
                    color: location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'var(--blue)' : 'var(--text-light)',
                    transition: 'color 0.2s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.color = 'var(--blue)'}
                  onMouseOut={(e) => e.currentTarget.style.color = location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 'var(--blue)' : 'var(--text-light)'}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <a 
                href="tel:3184435894" 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '0.85rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--white)', background: 'var(--red)', borderRadius: '4px',
                  padding: '0.6rem 1rem', transition: 'all 0.2s', minHeight: '44px',
                  boxShadow: '0 0 15px rgba(230, 30, 37, 0.3)',
                  animation: 'pulse-red 3s infinite'
                }}
              >
                <Zap size={14} /> 24/7 STORM RESPONSE
              </a>
              <a 
                href="tel:3184435894" 
                style={{ 
                  display: 'flex', alignItems: 'center', gap: '0.5rem', 
                  fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 600,
                  color: 'var(--blue)', border: '1px solid var(--blue)', borderRadius: '4px',
                  padding: '0.6rem 1.2rem', transition: 'all 0.2s', minHeight: '44px'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.color = 'var(--dark)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 168, 255, 0.4)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--blue)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <Phone size={16} /> 318-443-5894
              </a>
            </div>
          </nav>

          {/* Mobile Toggle (44x44 target minimum) */}
          <button 
            className="mobile-toggle"
            style={{ display: 'none', background: 'none', border: 'none', color: 'var(--white)', cursor: 'pointer', padding: '10px' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Styling Overrides */}
      <style>{`
        @keyframes pulse-red {
          0%, 100% { box-shadow: 0 0 15px rgba(230, 30, 37, 0.3); }
          50% { box-shadow: 0 0 25px rgba(230, 30, 37, 0.6); }
        }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>

      {/* Mobile Menu Bottom-Sheet (Thumb Zone) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 1001, backdropFilter: 'blur(4px)' }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ ease: "circOut", duration: 0.3 }}
              style={{
                position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1002,
                background: 'var(--dark)', borderTop: '1px solid var(--blue)',
                borderTopLeftRadius: '24px', borderTopRightRadius: '24px',
                padding: '2rem 2rem 4rem', display: 'flex', flexDirection: 'column', 
                boxShadow: '0 -10px 40px rgba(0, 168, 255, 0.1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <span style={{ fontFamily: 'Barlow Condensed', color: 'var(--blue)', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>Navigation</span>
                <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', color: 'var(--white)', padding: '0.5rem', width: '44px', height: '44px' }}>
                  <X size={24} />
                </button>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {['Home', 'About', 'Services', 'Safety', 'Careers', 'Contact'].map((item, i) => (
                  <motion.div key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + (i * 0.05), duration: 0.2 }}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Barlow Condensed', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'var(--white)', background: 'var(--dark2)', border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: '8px', padding: '1rem', width: '100%'
                      }}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
                <a href="tel:3184435894" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'Barlow Condensed', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--white)', background: 'var(--red)', borderRadius: '8px', padding: '1rem', boxShadow: '0 0 20px rgba(230,30,37,0.3)' }}>
                  <Zap size={18} /> 24/7 STORM RESPONSE
                </a>
                <Link to="/careers" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'Barlow Condensed', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--blue)', background: 'transparent', border: '1px solid var(--blue)', borderRadius: '8px', padding: '1rem' }}>
                  Join Our Crew
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

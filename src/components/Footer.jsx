import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#000', borderTop: '1px solid rgba(240,240,250,0.06)', padding: '5rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem' }}>
        <div>
          <Link to="/" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
            <img src="https://www.sheltonenergy.com/html/images/imgs/sticky-logo.png" alt="Shelton Energy" style={{ height: '35px' }} />
          </Link>
          <p style={{ color: 'rgba(240,240,250,0.3)', lineHeight: 1.6, maxWidth: '280px', fontSize: '0.85rem' }}>
            Veteran-owned utility contractor delivering reliable power infrastructure across the Gulf South.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.3)', marginBottom: '1.5rem' }}>Company</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['About', 'Safety', 'Careers', 'Contact'].map(link => (
              <li key={link}><Link to={`/${link.toLowerCase()}`} style={{ color: 'rgba(240,240,250,0.5)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--red)'} onMouseOut={e => e.currentTarget.style.color='rgba(240,240,250,0.5)'}>{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.3)', marginBottom: '1.5rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Transmission', 'Distribution', 'Substation', 'Storm Response'].map(link => (
              <li key={link}><Link to="/services" style={{ color: 'rgba(240,240,250,0.5)', fontSize: '0.85rem', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--red)'} onMouseOut={e => e.currentTarget.style.color='rgba(240,240,250,0.5)'}>{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.3)', marginBottom: '1.5rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="tel:318-443-5894" style={{ color: 'rgba(240,240,250,0.5)', fontSize: '0.85rem' }}>318.443.5894</a></li>
            <li><a href="mailto:info@sheltonenergy.com" style={{ color: 'rgba(240,240,250,0.5)', fontSize: '0.85rem' }}>info@sheltonenergy.com</a></li>
            <li><span style={{ color: 'rgba(240,240,250,0.3)', fontSize: '0.85rem', lineHeight: 1.5 }}>Alexandria, LA</span></li>
          </ul>
        </div>
      </div>
      
      <div style={{ maxWidth: '1300px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid rgba(240,240,250,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'rgba(240,240,250,0.2)', letterSpacing: '0.05em' }}>&copy; 2026 Shelton Energy Solutions. All rights reserved.</p>
        <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', opacity: 0.6 }}>Veteran Owned</span>
      </div>

      <style>{`@media(max-width: 900px) { footer > div:first-child { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </footer>
  );
}

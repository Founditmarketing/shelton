import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#181818', borderTop: '1px solid #303030', padding: '5rem 2rem 2rem' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        
        <div style={{ gridColumn: 'span 2' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <img 
              src="https://www.sheltonenergy.com/html/images/imgs/sticky-logo.png" 
              alt="Shelton Energy Solutions Logo" 
              style={{ height: '40px', objectFit: 'contain' }}
            />
          </Link>
          <p style={{ color: '#8F8F8F', lineHeight: 1.7, maxWidth: '300px', fontSize: '0.9rem' }}>
            Veteran-owned. Family driven. One of the fastest-growing utility contractors in the Gulf South.
          </p>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.25rem' }}>Company</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['About', 'Safety', 'Careers', 'Contact'].map(link => (
              <li key={link}><Link to={`/${link.toLowerCase()}`} style={{ color: '#8F8F8F', transition: 'color 0.3s', fontSize: '0.9rem' }} onMouseOver={e => e.currentTarget.style.color='#DA291C'} onMouseOut={e => e.currentTarget.style.color='#8F8F8F'}>{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.25rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Distribution', 'Transmission', 'Substation', 'Storm Restoration', 'Boring', 'Underground'].map(link => (
              <li key={link}><Link to={`/services`} style={{ color: '#8F8F8F', transition: 'color 0.3s', fontSize: '0.9rem' }} onMouseOver={e => e.currentTarget.style.color='#DA291C'} onMouseOut={e => e.currentTarget.style.color='#8F8F8F'}>{link}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ffffff', marginBottom: '1.25rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><a href="tel:318-443-5894" style={{ color: '#8F8F8F', fontSize: '0.9rem' }}>318-443-5894</a></li>
            <li><a href="mailto:info@sheltonenergy.com" style={{ color: '#8F8F8F', fontSize: '0.9rem' }}>info@sheltonenergy.com</a></li>
            <li><a href="https://goo.gl/maps/iyc37Lib2cfxyCFP8" target="_blank" rel="noreferrer" style={{ color: '#8F8F8F', fontSize: '0.9rem' }}>1439 Centre Court</a></li>
          </ul>
        </div>

      </div>
      
      <div style={{ maxWidth: '1300px', margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid #303030', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <p style={{ fontSize: '0.8rem', color: '#666666' }}>&copy; 2026 Shelton Energy Solutions, LLC. All rights reserved.</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#DA291C' }}>Verified VOSB</span>
        </div>
      </div>
    </footer>
  );
}

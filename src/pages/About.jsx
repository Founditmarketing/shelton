import { motion } from 'framer-motion';
import { Users, Zap, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80" alt="Power Infrastructure" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4), #000)', zIndex: 1 }} />
        <div className="container" style={{ zIndex: 2, padding: '4rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Who We Are</div>
            <h1 className="section-title" style={{ maxWidth: '600px' }}>Family Owned.<br/>Values Driven.</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="about-grid">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.5)', marginBottom: '1.5rem' }}>
                We are 100 percent focused on people and safety at Shelton Energy Solutions. Our customers get high-quality, reliable service with the peace of mind of knowing our employees are constantly coached in and follow the industry's foremost safety practices.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)' }}>
                As a provider of Transmission, Distribution, Substation and Renewable Maintenance, we deliver a full field of scheduled and emergency electrical services across the Gulf South.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.5rem' }}>Our Values</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)', marginBottom: '1.5rem' }}>
                Family Owned. Values Driven. People Focused. Safety Leader. These aren't just words — they define every project we take on and every crew we deploy.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)' }}>
                With over 1,000 projects completed and 41,200+ hours without incident, Shelton Energy has the track record and expertise to deliver.
              </p>
            </motion.div>
          </div>

          {/* Leadership */}
          <div style={{ marginTop: '5rem', paddingTop: '4rem', borderTop: '1px solid rgba(240,240,250,0.06)' }}>
            <div className="section-label">Leadership</div>
            <h2 className="section-title" style={{ marginBottom: '3rem' }}>Our Team</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
              {[
                { name: 'Tony Jenkins', role: 'COO', email: 'tony@sheltonenergy.com' },
                { name: 'Chawn Brossette', role: 'VP Louisiana', email: 'cbrossette@sheltonenergy.com' },
                { name: 'Tyler Fogleman', role: 'Divisional Manager', email: 'tfogleman@sheltonenergy.com' },
                { name: 'Buddy Parker', role: 'Divisional Manager', email: 'bparker@sheltonenergy.com' },
                { name: 'Steve Delafosse', role: 'Divisional Manager', email: 'sdelafosse@sheltonenergy.com' },
                { name: 'Travis Ducote', role: 'Director of Safety', email: 'tducote@sheltonenergy.com' }
              ].map((person, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                  style={{ background: '#000', padding: '2.5rem 2rem' }}>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '1.05rem', color: '#f0f0fa', fontWeight: 600, marginBottom: '0.3rem' }}>{person.name}</h3>
                  <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1rem' }}>{person.role}</div>
                  <a href={`mailto:${person.email}`} style={{ fontSize: '0.8rem', color: 'rgba(240,240,250,0.4)', transition: 'color 0.2s' }}
                    onMouseOver={e => e.currentTarget.style.color='var(--red)'} onMouseOut={e => e.currentTarget.style.color='rgba(240,240,250,0.4)'}>
                    {person.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(240,240,250,0.06)', marginTop: '4rem' }}>
            {[
              { icon: <ShieldCheck size={20} color="var(--red)" />, title: 'Safety Leader', desc: 'Zero compromises' },
              { icon: <Heart size={20} color="var(--red)" />, title: 'Family Owned', desc: 'Values driven' },
              { icon: <Zap size={20} color="var(--red)" />, title: '24/7 Response', desc: 'Storm ready' },
              { icon: <Users size={20} color="var(--red)" />, title: 'People Focused', desc: '1000+ projects' }
            ].map((val, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                style={{ background: '#000', padding: '2.5rem 2rem', textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem', opacity: 0.8 }}>{val.icon}</div>
                <h4 style={{ fontFamily: 'Inter', fontSize: '0.95rem', color: '#f0f0fa', fontWeight: 600, marginBottom: '0.3rem' }}>{val.title}</h4>
                <p style={{ fontSize: '0.8rem', color: 'rgba(240,240,250,0.35)' }}>{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`@media(max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .container > div[style*="repeat(4"] { grid-template-columns: 1fr 1fr !important; } .container > div[style*="repeat(3"] { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Users, Zap, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=80" alt="Power Lines" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, #000 100%)', zIndex: 1 }} />
        <div className="container" style={{ zIndex: 2, padding: '4rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Who We Are</div>
            <h1 className="section-title" style={{ maxWidth: '600px' }}>Veteran-Owned.<br/>Family Driven.</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="about-grid">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.5)', marginBottom: '1.5rem' }}>
                Shelton Energy Solutions is one of the fastest-growing overhead and underground utility contractors in the Gulf South. Founded on the principles of integrity, hard work, and service — the same values instilled through military service.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)' }}>
                We provide transmission, distribution, substation, and storm response services to investor-owned utilities, electric cooperatives, and municipalities. Our crews are fully equipped and ready to deploy across Louisiana, Texas, Mississippi, Alabama, and Florida.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.5rem' }}>Our Mission</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)', marginBottom: '1.5rem' }}>
                To be the most dependable, safest, and most efficient utility contractor in the region. We invest in our people, our equipment, and our processes to deliver projects on time and on budget — every time.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)' }}>
                With over 2,850 miles of grid built and 140+ fully equipped crews, Shelton has the scale and expertise to handle projects of any size.
              </p>
            </motion.div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(240,240,250,0.06)', marginTop: '5rem' }}>
            {[
              { icon: <ShieldCheck size={20} color="var(--red)" />, title: 'Safety First', desc: 'Zero compromises' },
              { icon: <Heart size={20} color="var(--red)" />, title: 'Veteran Values', desc: 'Service & integrity' },
              { icon: <Zap size={20} color="var(--red)" />, title: '24/7 Response', desc: 'Storm ready' },
              { icon: <Users size={20} color="var(--red)" />, title: '140+ Crews', desc: 'Fully equipped' }
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

      <style>{`@media(max-width: 900px) { .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .container > div[style*="repeat(4"] { grid-template-columns: 1fr 1fr !important; } }`}</style>
    </div>
  );
}

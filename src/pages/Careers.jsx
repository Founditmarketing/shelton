import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Careers() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=1400&q=80" alt="Construction" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4), #000)', zIndex: 1 }} />
        <div className="container" style={{ zIndex: 2, padding: '4rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Join the Crew</div>
            <h1 className="section-title" style={{ maxWidth: '500px' }}>Build Your Future<br/>With Us</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.5)', marginBottom: '3rem' }}>
            Shelton Energy Solutions is always looking for skilled, safety-minded professionals to join our growing team. We offer competitive pay, comprehensive benefits, and clear paths for career advancement.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(240,240,250,0.06)', marginBottom: '3rem' }}>
            {[
              { icon: <TrendingUp size={20} color="var(--red)" />, title: 'Competitive Pay & Benefits', desc: 'Industry-leading compensation with full benefits package.' },
              { icon: <Shield size={20} color="var(--red)" />, title: 'Safety-First Culture', desc: 'Comprehensive training and a culture that puts your safety above all else.' },
              { icon: <Heart size={20} color="var(--red)" />, title: 'Veteran-Friendly Workplace', desc: 'Founded by a veteran — we understand and value military service and discipline.' }
            ].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                style={{ background: '#000', padding: '2rem', display: 'flex', gap: '1.25rem' }}>
                <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>{item.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'Inter', fontSize: '1rem', fontWeight: 600, color: '#f0f0fa', marginBottom: '0.3rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem', lineHeight: 1.5, color: 'rgba(240,240,250,0.4)' }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-red" style={{ flex: 1, justifyContent: 'center' }}>
              Apply Now <ArrowRight size={14} style={{ marginLeft: '8px' }} />
            </Link>
            <a href="tel:3184435894" className="btn btn-blue" style={{ flex: 1, justifyContent: 'center' }}>
              Call Us: 318.443.5894
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

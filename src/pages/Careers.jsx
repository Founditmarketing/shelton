import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Heart, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ADP_URL = 'https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=344e0cce-f039-42c3-b409-f142ffe6e8bc&ccId=9200117587439_2&lang=en_US';

export default function Careers() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ position: 'relative', minHeight: '50vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=1400&q=80" alt="Construction" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4), #000)', zIndex: 1 }} />
        <div className="container" style={{ zIndex: 2, padding: '4rem 2rem' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Join the Crew</div>
            <h1 className="section-title" style={{ maxWidth: '600px' }}>Career Training and Advancement<br/>That Put You First</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '4rem' }} className="careers-grid">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.5rem' }}>Why Shelton Energy</h3>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.5)' }}>
                Here, you can be part of leading the way in the energy industry, working alongside outstanding colleagues and giving back to the many communities we serve. We are a company that celebrates people and their unique perspectives. From great benefits to ongoing opportunities for learning and growth.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.5rem' }}>Benefits Package</h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(240,240,250,0.4)', marginBottom: '1.5rem' }}>We provide a comprehensive benefits package to all regular full-time employees:</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '100% coverage of monthly premiums for employees on medical plans',
                  'Life insurance',
                  'Long and short-term disability',
                  'Vacation pay',
                  'Paid holidays',
                  '401(k) with company match'
                ].map((b, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <CheckCircle2 size={14} color="var(--red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.9rem', color: 'rgba(240,240,250,0.5)', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href={ADP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-red" style={{ flex: 1, justifyContent: 'center' }}>
              View & Apply for Jobs <ExternalLink size={14} style={{ marginLeft: '8px' }} />
            </a>
            <a href="tel:3184435894" className="btn btn-blue" style={{ flex: 1, justifyContent: 'center' }}>
              Call Us: 318.443.5894
            </a>
          </div>
        </div>
      </section>

      <style>{`@media(max-width: 900px) { .careers-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </div>
  );
}

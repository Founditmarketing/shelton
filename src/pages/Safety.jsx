import { motion } from 'framer-motion';
import { ShieldAlert, Eye, AlertTriangle, UserCheck } from 'lucide-react';

export default function Safety() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ background: '#000', padding: '4rem 2rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Safety Program</div>
            <h1 className="section-title" style={{ maxWidth: '600px' }}>Safety Is Not<br/>Negotiable</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }} className="safety-grid">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.5)', marginBottom: '2rem' }}>
                At Shelton Energy, safety isn't a slogan — it's how we operate. Every crew member is trained, equipped, and empowered to maintain the highest safety standards on every job site, every day.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'rgba(240,240,250,0.4)' }}>
                Our safety program includes comprehensive hazard recognition training, daily tailboard meetings, regular safety audits, and a culture where every worker has stop-work authority. We maintain full compliance with OSHA regulations and industry best practices.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
              {[
                { icon: <ShieldAlert size={20} color="var(--red)" />, title: 'Hazard Recognition', desc: 'Comprehensive training to identify and mitigate risks before work begins.' },
                { icon: <Eye size={20} color="var(--red)" />, title: 'Daily Tailboard Meetings', desc: 'Every crew reviews job-specific hazards and safety protocols before starting work.' },
                { icon: <AlertTriangle size={20} color="var(--red)" />, title: 'Stop-Work Authority', desc: 'Every employee is empowered to stop work if conditions are unsafe. No exceptions.' },
                { icon: <UserCheck size={20} color="var(--red)" />, title: 'OSHA Compliance', desc: 'Full compliance with federal, state, and industry safety regulations at all times.' }
              ].map((p, idx) => (
                <div key={idx} style={{ background: '#000', padding: '2rem', display: 'flex', gap: '1rem' }}>
                  <div style={{ flexShrink: 0, marginTop: '0.2rem' }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontFamily: 'Inter', fontSize: '0.95rem', fontWeight: 600, color: '#f0f0fa', marginBottom: '0.4rem' }}>{p.title}</h4>
                    <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)' }}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`@media(max-width: 900px) { .safety-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }`}</style>
    </div>
  );
}

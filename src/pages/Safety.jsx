import { motion } from 'framer-motion';
import { ShieldAlert, Eye, AlertTriangle, UserCheck } from 'lucide-react';

export default function Safety() {
  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ background: '#000', padding: '4rem 2rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">Safety Program</div>
            <h1 className="section-title" style={{ maxWidth: '600px' }}>We Are Committed to Being<br/>an Industry Leader in Safety</h1>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: '4rem' }}>
            <h3 style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: '1.5rem' }}>Our Safety Values</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(240,240,250,0.06)' }} className="safety-grid">
            {[
              { icon: <ShieldAlert size={22} color="var(--red)" />, title: 'Stop-Work Authority', desc: 'Every employee is empowered to stop work when conditions aren\'t safe. This is an obligation, not a choice.' },
              { icon: <Eye size={22} color="var(--red)" />, title: 'Incident Investigation', desc: 'We promptly investigate all incidents. When incidents occur, we communicate, properly investigate them, and share lessons learned across the business.' },
              { icon: <AlertTriangle size={22} color="var(--red)" />, title: 'Prompt Reporting', desc: 'We report any injuries or incidents promptly. No matter how minor, we report all workplace injuries and incidents without delay.' },
              { icon: <UserCheck size={22} color="var(--red)" />, title: 'Personal Responsibility', desc: 'We promote personal responsibility. All employees are responsible for their own safety and the safety of others in the workplace.' }
            ].map((p, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}
                style={{ background: '#000', padding: '3rem 2.5rem' }}>
                <div style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{p.icon}</div>
                <h4 style={{ fontFamily: 'Inter', fontSize: '1.05rem', fontWeight: 600, color: '#f0f0fa', marginBottom: '0.75rem' }}>{p.title}</h4>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ marginTop: '4rem', padding: '3rem', borderTop: '1px solid rgba(240,240,250,0.06)', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Inter', fontSize: '1.5rem', fontWeight: 600, color: '#f0f0fa', lineHeight: 1.4 }}>
              Safety is our <span style={{ color: 'var(--red)' }}>Number One</span> Priority.
            </p>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,240,250,0.35)', marginTop: '1rem' }}>41,200+ hours without incident and counting.</p>
          </motion.div>
        </div>
      </section>

      <style>{`@media(max-width: 900px) { .safety-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

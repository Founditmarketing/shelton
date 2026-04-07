import { motion } from 'framer-motion';
import { Zap, Shield, Wrench, ArrowRight, Activity, Drill, Cable } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    { title: 'Distribution', icon: <Activity size={22} color="var(--red)" />, desc: 'Our employees are turnkey for any project that comes our way. For your overhead to underground project including new installation, reconducts, or rehab work. From the big city to the swamp, our linemen have all the equipment to complete the task on time, efficiently, and most importantly — safely.' },
    { title: 'Transmission', icon: <Zap size={22} color="var(--red)" />, desc: 'High-voltage transmission line construction and maintenance. Steel structures, conductor stringing, right-of-way clearing, and complete line rebuilds throughout the Gulf South.' },
    { title: 'Substation', icon: <Wrench size={22} color="var(--red)" />, desc: 'Full substation construction, retrofit, and commissioning. Concrete foundations, steel erection, bus work, and control system integration for utilities and cooperatives.' },
    { title: 'Storm Restoration', icon: <Shield size={22} color="var(--red)" />, desc: 'Rapid-deployment storm restoration crews available 24/7. Proven track record in hurricane, ice storm, tornado, and flood recovery operations across the Southeast.' },
    { title: 'Boring', icon: <Drill size={22} color="var(--red)" />, desc: 'Horizontal directional drilling and boring services for utility installation with minimal surface disruption. Capable of handling a wide range of soil conditions and project sizes.' },
    { title: 'Underground', icon: <Cable size={22} color="var(--red)" />, desc: 'Underground cable installation, splicing, and maintenance. Complete duct bank construction, conduit systems, and cable pulling for distribution and transmission networks.' }
  ];

  return (
    <div style={{ paddingTop: '8rem' }}>
      <section style={{ background: '#000', padding: '4rem 2rem 0' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">What We Do</div>
            <h1 className="section-title" style={{ maxWidth: '500px' }}>Full-Spectrum<br/>Utility Services</h1>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)', maxWidth: '550px' }}>Shelton Energy Solutions delivers a full field of scheduled and emergency electrical transmission & distribution services.</p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
            {services.map((srv, idx) => (
              <motion.div key={srv.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }}
                whileHover={{ background: 'rgba(218,41,28,0.04)' }}
                style={{ background: '#000', padding: '3rem 2.5rem', transition: 'background 0.3s' }}>
                <div style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{srv.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1.15rem', color: '#f0f0fa', marginBottom: '1rem', fontWeight: 600 }}>{srv.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)', marginBottom: '2rem' }}>{srv.desc}</p>
                <Link to="/contact" style={{ fontFamily: 'Barlow Condensed', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--red)', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                  Request Quote <ArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

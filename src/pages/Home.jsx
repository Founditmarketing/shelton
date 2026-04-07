import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wrench, ArrowRight, Activity, MapPin, Drill, Cable } from 'lucide-react';
import Marquee from '../components/Marquee';
import { ChevronRight } from 'lucide-react';

function SwipeHint() {
  return (
    <div className="swipe-hint" style={{ display: 'none' }}>
      <span>Swipe</span>
      <ChevronRight size={14} />
    </div>
  );
}

function AnimatedCounter({ from, to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(from);
  const spring = useSpring(count, { duration: 2500, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) count.set(to);
  }, [inView, count, to]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      <motion.span>{rounded}</motion.span>
      <span style={{ color: 'var(--red)' }}>{suffix}</span>
    </span>
  );
}

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#000' }}>
        <video className="desktop-video" src="/hero-desktop-v2.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <video className="mobile-video" src="/hero-mobile-v2.mp4" autoPlay loop muted playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 60%, #000 100%)', zIndex: 1 }} />

        <div className="container" style={{ paddingTop: 'clamp(8rem, 18vh, 12rem)', zIndex: 3, position: 'relative' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="section-label" style={{ marginBottom: '1.5rem' }}>Family Owned · Values Driven · People Focused</div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: 'Inter', fontSize: 'clamp(3rem, 7vw, 5.5rem)', color: '#f0f0fa', lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: '2rem', maxWidth: '800px', fontWeight: 600 }}>
            Powering the<br/>Grid
            <span className="hero-subtitle" style={{ display: 'block', fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', fontWeight: 400, color: 'rgba(240,240,250,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '1.5rem', fontFamily: 'Barlow Condensed' }}>
              Transmission · Distribution · Substation · Storm Restoration · Underground · Boring
            </span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
            style={{ fontSize: '1.05rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.5)', maxWidth: '520px', marginBottom: '3rem' }}>
            Provider of Transmission, Distribution, Substation and Renewable Maintenance. 100% focused on people and safety.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%' }}>
            <Link to="/contact" className="btn btn-blue">Request a Consultation</Link>
            <Link to="/careers" className="btn btn-outline">Join Our Crew <ArrowRight size={16} style={{ marginLeft: '8px' }} /></Link>
          </motion.div>
        </div>

        <motion.div className="desktop-only" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          style={{ position: 'absolute', bottom: '3rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
            style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, rgba(218,41,28,0.6), transparent)' }} />
        </motion.div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ background: '#000', borderTop: '1px solid rgba(240,240,250,0.06)', borderBottom: '1px solid rgba(240,240,250,0.06)', padding: '4rem 2rem' }}>
        <div className="container">
          <div className="carousel-wrapper">
          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', textAlign: 'center' }}>
            {[
              { value: 1000, suffix: '+', label: 'PROJECTS COMPLETED' },
              { value: 41200, suffix: '+', label: 'HOURS WITHOUT INCIDENT' },
              { value: 24, suffix: '/7', label: 'STORM RESPONSE' }
            ].map((stat, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Inter', fontWeight: 700, color: '#f0f0fa', lineHeight: 1, letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', color: 'rgba(240,240,250,0.35)' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <SwipeHint />
          </div>
        </div>
      </section>

      <Marquee />

      {/* ═══ CREW VIDEO ═══ */}
      <section style={{ position: 'relative', height: 'clamp(300px, 50vw, 500px)', overflow: 'hidden' }}>
        <video ref={(el) => { if (!el) return; el.muted = true; el.play().catch(() => {}); }}
          src="/crew-video.mp4" autoPlay loop muted playsInline preload="auto"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #000 0%, transparent 25%, transparent 75%, #000 100%)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="section-label">Our Crews in Action</div>
            <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', color: '#f0f0fa', fontWeight: 600, lineHeight: 1.1, maxWidth: '400px' }}>Safety First,<br/>Mission Driven.</h2>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES — 6 Divisions ═══ */}
      <section className="section" style={{ background: '#000' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', marginBottom: '4rem' }}>
            <div className="section-label">Services</div>
            <h2 className="section-title">Full-Spectrum<br/>Utility Services</h2>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)' }}>Shelton Energy Solutions delivers a full field of scheduled and emergency electrical transmission & distribution services.</p>
          </div>

          <div className="carousel-wrapper">
          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
            {[
              { title: 'Distribution', icon: <Activity color="var(--red)" size={22} />, desc: 'Overhead and underground — new installation, reconducts, and rehab work. From the big city to the swamp, our linemen have all the equipment to complete the task safely.' },
              { title: 'Transmission', icon: <Zap color="var(--red)" size={22} />, desc: 'High-voltage transmission line construction and maintenance. Steel structures, conductor stringing, and right-of-way clearing.' },
              { title: 'Substation', icon: <Wrench color="var(--red)" size={22} />, desc: 'Full substation construction, retrofit, and commissioning. Concrete foundations, steel erection, bus work, and control system integration.' },
              { title: 'Storm Restoration', icon: <Shield color="var(--red)" size={22} />, desc: 'Rapid-deployment storm restoration crews available 24/7. Proven track record in hurricane, ice storm, tornado, and flood recovery.' },
              { title: 'Boring', icon: <Drill color="var(--red)" size={22} />, desc: 'Horizontal directional drilling and boring services for utility installation with minimal surface disruption.' },
              { title: 'Underground', icon: <Cable color="var(--red)" size={22} />, desc: 'Underground cable installation, splicing, and maintenance. Duct bank construction and conduit systems.' }
            ].map((srv, idx) => (
              <motion.div key={srv.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                whileHover={{ background: 'rgba(218,41,28,0.04)' }}
                style={{ background: '#000', padding: '3rem 2.5rem', cursor: 'pointer', transition: 'background 0.3s' }}>
                <div style={{ marginBottom: '1.5rem', opacity: 0.8 }}>{srv.icon}</div>
                <h3 style={{ fontFamily: 'Inter', fontSize: '1.1rem', color: '#f0f0fa', marginBottom: '1rem', fontWeight: 600 }}>{srv.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.6, color: 'rgba(240,240,250,0.4)' }}>{srv.desc}</p>
              </motion.div>
            ))}
          </div>
          <SwipeHint />
          </div>
        </div>
      </section>

      {/* ═══ COVERAGE ═══ */}
      <section className="section" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(240,240,250,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Coverage Area</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Operating Across<br/>the Gulf South</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
            {['Louisiana', 'Texas', 'Mississippi', 'Alabama', 'Florida'].map((state, idx) => (
              <motion.div key={state} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
                style={{ background: '#0a0a0a', padding: '2rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                <MapPin size={14} color="var(--red)" />
                <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(240,240,250,0.5)' }}>{state}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LEADERSHIP — Real Team ═══ */}
      <section className="section" style={{ background: '#000', borderTop: '1px solid rgba(240,240,250,0.06)' }}>
        <div className="container">
          <div style={{ maxWidth: '500px', marginBottom: '4rem' }}>
            <div className="section-label">Leadership</div>
            <h2 className="section-title">Our Team</h2>
          </div>
          <div className="carousel-wrapper">
          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(240,240,250,0.06)' }}>
            {[
              { name: 'Tony Jenkins', role: 'COO', email: 'tony@sheltonenergy.com' },
              { name: 'Chawn Brossette', role: 'VP Louisiana', email: 'cbrossette@sheltonenergy.com' },
              { name: 'Tyler Fogleman', role: 'Divisional Manager', email: 'tfogleman@sheltonenergy.com' },
              { name: 'Buddy Parker', role: 'Divisional Manager', email: 'bparker@sheltonenergy.com' },
              { name: 'Steve Delafosse', role: 'Divisional Manager', email: 'sdelafosse@sheltonenergy.com' },
              { name: 'Travis Ducote', role: 'Director of Safety', email: 'tducote@sheltonenergy.com' }
            ].map((person, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }}
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
          <SwipeHint />
          </div>
        </div>
      </section>
    </div>
  );
}

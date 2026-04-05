import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wrench, ArrowRight, Activity, MapPin } from 'lucide-react';
import Marquee from '../components/Marquee';
import OpsMap from '../components/OpsMap';

function AnimatedCounter({ from, to, suffix = "", suffixClassName }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(from);
  const spring = useSpring(count, { duration: 2500, bounce: 0 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      count.set(to);
    }
  }, [inView, count, to]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      <motion.span>{rounded}</motion.span>
      <span className={suffixClassName}>{suffix}</span>
    </span>
  );
}


export default function Home() {
  const heroRef = useRef(null);

  return (
    <div style={{ paddingBottom: '0' }}>
      {/* EXTREME HERO SECTION */}
      <section ref={heroRef} className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Background Video */}
        <video 
          className="desktop-video"
          src="/hero-desktop.mp4" autoPlay loop muted playsInline 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} 
        />
        <video 
          className="mobile-video"
          src="/hero-mobile.mp4" autoPlay loop muted playsInline 
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} 
        />

        {/* Bottom gradient fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,12,16,0.3) 0%, var(--dark) 100%)', zIndex: 1 }} />

        <div className="container" style={{ paddingTop: 'clamp(7rem, 15vh, 10rem)', zIndex: 3, position: 'relative' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.5rem 1.2rem', background: 'rgba(230, 30, 37,0.08)', border: '1px solid rgba(230, 30, 37,0.4)', borderRadius: '100px', marginBottom: '2rem', boxShadow: '0 0 20px rgba(230, 30, 37,0.2)' }}
          >
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3],scale: [0.9, 1.1, 0.9] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              style={{ width: '8px', height: '8px', background: 'var(--red)', borderRadius: '50%', boxShadow: '0 0 10px var(--red)' }}
            />
            <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)' }}>Veteran-Owned &bull; Family Driven</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            style={{ fontFamily: 'Bebas Neue', fontSize: 'clamp(4rem, 9vw, 8.5rem)', color: 'var(--white)', lineHeight: 0.9, letterSpacing: '0.05em', marginBottom: '1.5rem', maxWidth: '1000px', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}
          >
            POWERING THE <motion.span 
              className="glitch" data-text="GRID"
              animate={{ opacity: [0.8, 1, 0.8] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              style={{ color: 'var(--blue)', display: 'inline-block' }}>GRID</motion.span>
            <span style={{ display: 'block', fontSize: 'clamp(1.2rem, 3vw, 2.8rem)', fontFamily: 'Barlow', fontWeight: '500', color: 'var(--text)', letterSpacing: '0', marginTop: '1rem' }}>
              Electric Utility Transmission & Distribution Systems
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{ fontSize: '1.25rem', lineHeight: 1.7, color: 'var(--text)', maxWidth: '600px', marginBottom: '3rem', textShadow: '0 2px 10px rgba(0,0,0,0.8)' }}
          >
            One of the fastest-growing overhead and underground utility contractors in the Gulf South. Safety-first. Mission-ready. Built to perform.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <Link to="/contact" className="btn btn-blue" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Get a Free Consultation</Link>
            <Link to="/about" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Apply for Jobs</Link>
          </motion.div>
        </div>

        {/* Scroll Indicator — desktop only */}
        <motion.div 
          className="desktop-only"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.4 }}
          style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
        >
          <span style={{ fontFamily: 'Barlow Condensed', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text)' }}>Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
            style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, var(--blue), transparent)' }} 
          />
        </motion.div>
      </section>

      {/* INFINITE MARQUEE */}
      <Marquee />

      {/* COUNTING STATS BENTO GRID */}
      <section className="section" style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden', padding: '7rem 2rem' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 100%, rgba(0, 168, 255,0.05) 0%, transparent 60%)', zIndex: 0 }} />
        <div className="container">
          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <motion.div 
              whileHover={{ y: -10, borderColor: 'var(--blue)', boxShadow: '0 20px 40px rgba(0, 168, 255,0.15)' }}
              style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center', transition: 'all 0.4s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--blue), transparent)' }}></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'Bebas Neue', color: 'var(--blue)', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 20px rgba(0, 168, 255,0.3)' }}
              >
                <AnimatedCounter from={0} to={2850} suffix="+" suffixClassName="amber-plus" />
              </motion.div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Miles of Grid Built</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10, borderColor: 'var(--blue)', boxShadow: '0 20px 40px rgba(0, 168, 255,0.15)' }}
              style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center', transition: 'all 0.4s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--blue), transparent)' }}></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'Bebas Neue', color: 'var(--blue)', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 20px rgba(0, 168, 255,0.3)' }}
              >
                <AnimatedCounter from={0} to={1500000} suffix="+" suffixClassName="amber-plus" />
              </motion.div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Safe Man-Hours Logged</div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10, borderColor: 'var(--blue)', boxShadow: '0 20px 40px rgba(0, 168, 255,0.15)' }}
              style={{ background: 'var(--dark2)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '4rem 2rem', textAlign: 'center', transition: 'all 0.4s', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--blue), transparent)' }}></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }}
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'Bebas Neue', color: 'var(--blue)', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 20px rgba(0, 168, 255,0.3)' }}
              >
                <AnimatedCounter from={0} to={140} suffix="+" suffixClassName="amber-plus" />
              </motion.div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Fully Equipped Crews</div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FULL-BLEED CREW VIDEO BREAK */}
      <section style={{ position: 'relative', height: 'clamp(300px, 50vw, 600px)', overflow: 'hidden' }}>
        <video 
          src="/crew-video.mp4" 
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }} 
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, var(--dark) 0%, transparent 15%, transparent 85%, var(--dark) 100%)' }} />
      </section>

      {/* OPERATIONS COMMAND CENTER MAP */}
      <section className="section" style={{ background: 'var(--dark)', borderTop: '1px solid var(--glass-border)', padding: '5rem 2rem' }}>
        <div className="container">
          <div className="ops-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.5fr)', gap: '4rem', alignItems: 'center' }}>
            
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="section-label" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={16} /> LIVE OPS TELEMETRY</div>
              <h2 className="section-title">GULF SOUTH <span style={{ color: 'var(--red)', textShadow: '0 0 20px rgba(230, 30, 37,0.4)' }}>GRID COMMAND.</span></h2>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text)', marginBottom: '2rem' }}>
                Our proprietary AI logistics system monitors regional weather threats, predicting infrastructure failure points before they collapse. When a storm makes landfall, our crews are already staged at the perimeter.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { status: 'HQ: ACTIVE', color: 'var(--blue)', loc: 'Alexandria, LA', desc: 'Central Logistics & Staging' },
                  { status: 'WARNING', color: 'var(--red)', loc: 'Houston, TX', desc: 'Predictive Hurricane Staging' },
                  { status: 'ACTIVE', color: 'var(--blue)', loc: 'Mobile, AL', desc: 'Underground Vault Rehab' }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--dark2)', padding: '1rem 1.5rem', borderRadius: '8px', borderLeft: `3px solid ${item.color}` }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, boxShadow: `0 0 10px ${item.color}` }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Barlow Condensed', fontWeight: 700, letterSpacing: '0.1em', fontSize: '1.1rem', color: 'var(--white)' }}>{item.loc}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text)' }}>{item.desc}</div>
                    </div>
                    <div style={{ fontFamily: 'Bebas Neue', letterSpacing: '0.05em', color: item.color }}>{item.status}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <OpsMap />
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section" style={{ background: 'var(--dark2)', position: 'relative', overflow: 'hidden' }}>
        {/* Lineman Cutout — Desktop Only */}
        <motion.img 
          className="desktop-only"
          src="/lineman.png" 
          alt="Professional lineman"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 0.15, x: 0 }}
          viewport={{ once: true }}
          style={{ position: 'absolute', right: '-2%', bottom: 0, height: '90%', objectFit: 'contain', zIndex: 0, pointerEvents: 'none', filter: 'brightness(0.8)' }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'left', maxWidth: '700px', margin: '0 0 5rem' }}>
            <div className="section-label">Capabilities</div>
            <h2 className="section-title">FULL-SPECTRUM <span style={{ color: 'var(--red)', textShadow: '0 0 20px rgba(230, 30, 37,0.4)' }}>ENERGY SERVICES</span></h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7 }}>From critical infrastructure construction to emergency storm response, we bring the expertise required to keep power flowing reliably.</p>
          </div>

          <div className="mobile-carousel hide-scrollbar" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', pointerEvents: 'auto' }}>
            {[
              { title: 'Distribution', icon: <Zap color="var(--blue)" size={32} />, desc: 'Turnkey overhead and underground distribution — new installations, reconductors, rehab work. From backyard pole changeouts to full right-of-way builds.' },
              { title: 'Transmission', icon: <Shield color="var(--blue)" size={32} />, desc: 'High-voltage transmission line construction, maintenance, and emergency repair. Engineered for reliability at scale across critical infrastructure.' },
              { title: 'Substation', icon: <Wrench color="var(--blue)" size={32} />, desc: 'Complete substation construction, upgrades, and maintenance. From foundations to energization — we deliver reliable power conversion.' }
            ].map((srv, idx) => (
              <motion.div 
                key={srv.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -10, borderColor: 'var(--blue)', boxShadow: '0 20px 50px rgba(0, 168, 255,0.15)' }}
                style={{ background: 'var(--dark)', border: '1px solid var(--glass-border)', borderRadius: '16px', padding: '3.5rem 2.5rem', position: 'relative', cursor: 'pointer', overflow: 'hidden', transition: 'all 0.4s' }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--blue), var(--red))', transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.5s' }} className="hover-line" />
                <div style={{ width: '70px', height: '70px', background: 'rgba(0, 168, 255,0.06)', border: '1px solid rgba(0, 168, 255,0.2)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', boxShadow: '0 0 20px rgba(0, 168, 255,0.1)' }} className="icon-box">
                  {srv.icon}
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '2rem', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '0.05em' }}>{srv.title}</h3>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--text)', marginBottom: '2rem' }}>{srv.desc}</p>
                <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Barlow Condensed', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)' }}>
                  Learn More <ArrowRight size={18} />
                </Link>
                <style>{`
                  div[style*="cursor: pointer"]:hover .hover-line { transform: scaleX(1) !important; }
                  div[style*="cursor: pointer"]:hover .icon-box { background: rgba(0, 168, 255,0.15) !important; border-color: var(--blue) !important; box-shadow: 0 0 30px rgba(0, 168, 255,0.3) !important; }
                `}</style>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM BEHIND THE GRID */}
      <section className="section" style={{ background: 'var(--dark)', padding: '7rem 2rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 4rem' }}>
            <div className="section-label">Our People</div>
            <h2 className="section-title">THE TEAM BEHIND <span style={{ color: 'var(--blue)' }}>THE GRID</span></h2>
            <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text)' }}>Every mile of wire built and every storm restored starts with our people. Meet the leaders who keep the lights on.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { img: '/team-supervisor.png', name: 'Field Operations', role: 'Supervisors & Foremen', desc: 'Veterans with decades of storm response and grid construction experience leading every crew.' },
              { img: '/team-dispatcher.png', name: 'Operations Center', role: 'Dispatch & Logistics', desc: 'Our 24/7 command center coordinates crews, equipment, and real-time weather intelligence.' },
              { img: '/team-pm.png', name: 'Project Management', role: 'Engineering & Planning', desc: 'From blueprint to energization — our PMs ensure every project delivers on time and on budget.' },
            ].map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem', border: '3px solid var(--glass-border)', boxShadow: '0 0 30px rgba(0,168,255,0.1)' }}>
                  <img src={person.img} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <h3 style={{ fontFamily: 'Bebas Neue', fontSize: '1.6rem', color: 'var(--white)', marginBottom: '0.3rem', letterSpacing: '0.05em' }}>{person.name}</h3>
                <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1rem' }}>{person.role}</div>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text)' }}>{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .amber-plus { font-size: 0.6em; color: var(--red); }
        @media(max-width: 900px) {
          .ops-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Zap, Wrench, ArrowRight, Activity, MapPin } from 'lucide-react';
import Marquee from '../components/Marquee';

function AnimatedCounter({ from, to, suffixClassName, suffix = "" }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const formatted = useTransform(rounded, (v) => v.toLocaleString());
  const springCount = useSpring(count, { duration: 3000, bounce: 0 });

  useEffect(() => {
    springCount.set(to);
  }, [springCount, to]);

  return (
    <>
      <motion.span>{formatted}</motion.span>
      <span className={suffixClassName}>{suffix}</span>
    </>
  );
}


export default function Home() {
  return (
    <div style={{ paddingBottom: '0' }}>
      {/* EXTREME HERO SECTION */}
      <section className="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        
        {/* Dual Orientation Videos */}
        <video 
          autoPlay loop muted playsInline className="desktop-video"
          style={{ position: 'absolute', width: '100vw', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        >
          <source src="/hero-desktop.mp4" type="video/mp4" />
        </video>
        <video 
          autoPlay loop muted playsInline className="mobile-video"
          style={{ position: 'absolute', width: '100vw', height: '100%', objectFit: 'cover', opacity: 0.6 }}
        >
          <source src="/hero-mobile.mp4" type="video/mp4" />
        </video>

        {/* Pulsing Grid & Overlay */}
        <div className="grid-bg" style={{ zIndex: 1 }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,12,16,0.3) 0%, var(--dark) 100%)', zIndex: 1 }} />

        <div className="container" style={{ paddingTop: '8rem', zIndex: 2 }}>
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
            <Link to="/services" className="btn btn-blue" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Explore Our Services</Link>
            <Link to="/contact" className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1.2rem 3rem' }}>Request a Quote</Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
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
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}
                style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', fontFamily: 'Bebas Neue', color: 'var(--blue)', lineHeight: 1, marginBottom: '0.5rem', textShadow: '0 0 20px rgba(0, 168, 255,0.3)' }}
              >
                <AnimatedCounter from={0} to={140} suffix="+" suffixClassName="amber-plus" />
              </motion.div>
              <div style={{ fontFamily: 'Barlow Condensed', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Fully Equipped Crews</div>
            </motion.div>

          </div>
        </div>
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

            <motion.div className="radar-map-container" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} style={{ position: 'relative', width: '100%', borderRadius: '24px', border: '1px solid var(--glass-border)', overflow: 'hidden', background: 'var(--dark2)' }}>
              
              {/* Swipe Wrapper for Mobile */}
              <div className="hide-scrollbar" style={{ width: '100%', overflowX: 'auto', overflowY: 'hidden' }}>
                <div style={{ position: 'relative', width: '100%', minWidth: '800px', height: '450px' }}>
                  
                  {/* Radar Grid CSS Background */}
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,168,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,168,255,0.08) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: 0 }} />
                  
                  {/* Radar Sweep */}
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} style={{ position: 'absolute', top: '50%', left: '50%', width: '150%', height: '150%', background: 'conic-gradient(from 0deg, transparent 70%, rgba(0,168,255,0.15) 100%)', transformOrigin: '0 0', zIndex: 1, pointerEvents: 'none' }} />

                  {/* Infrastructure Connecting Line */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
                    <path d="M 240 270 L 440 180 L 600 157" fill="transparent" stroke="var(--blue)" strokeWidth="2" strokeDasharray="6 6" opacity="0.4" />
                    {/* Animated Data Packets traveling along line */}
                    <circle r="3" fill="var(--white)" filter="drop-shadow(0 0 5px white)">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M 240 270 L 440 180 L 600 157" />
                    </circle>
                  </svg>

                  {/* Houston Node (30%, 60%) */}
                  <div style={{ position: 'absolute', top: '60%', left: '30%', zIndex: 2, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <motion.div animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0, 0.8] }} transition={{ repeat: Infinity, duration: 2 }} style={{ position: 'absolute', inset: -15, background: 'var(--red)', borderRadius: '50%', filter: 'blur(4px)' }} />
                      <div style={{ width: '12px', height: '12px', background: 'var(--white)', borderRadius: '50%', boxShadow: '0 0 10px white, 0 0 20px var(--red)', position: 'relative', zIndex: 2 }} />
                    </div>
                    <div style={{ marginTop: '15px', fontFamily: 'Barlow Condensed', color: 'var(--white)', fontWeight: 600, letterSpacing: '0.1em', background: 'rgba(230,30,37,0.2)', padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--red)', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>HOUSTON: SEVERE</div>
                  </div>

                  {/* Alexandria HQ Node (50%, 35%) */}
                  <div style={{ position: 'absolute', top: '35%', left: '50%', zIndex: 2, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <motion.div animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 3, delay: 1 }} style={{ position: 'absolute', inset: -10, background: 'var(--blue)', borderRadius: '50%', filter: 'blur(4px)' }} />
                      <div style={{ width: '14px', height: '14px', background: 'var(--white)', borderRadius: '50%', boxShadow: '0 0 10px white, 0 0 20px var(--blue)', position: 'relative', zIndex: 2 }} />
                    </div>
                    <div style={{ marginTop: '15px', fontFamily: 'Barlow Condensed', color: 'var(--blue)', fontWeight: 600, letterSpacing: '0.1em', background: 'rgba(0,168,255,0.2)', padding: '4px 10px', borderRadius: '4px', border: '1px solid var(--blue)', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap' }}>ALEXANDRIA HQ: STAGED</div>
                  </div>

                  {/* Mobile AL Node (75%, 35%) */}
                  <div style={{ position: 'absolute', top: '35%', left: '75%', zIndex: 2, transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ position: 'relative' }}>
                      <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ repeat: Infinity, duration: 4 }} style={{ position: 'absolute', inset: -8, background: 'var(--blue)', borderRadius: '50%', filter: 'blur(4px)' }} />
                      <div style={{ width: '8px', height: '8px', background: 'var(--white)', borderRadius: '50%', boxShadow: '0 0 10px white, 0 0 20px var(--blue)', position: 'relative', zIndex: 2 }} />
                    </div>
                  </div>

                </div>
              </div>

              {/* Fixed Overlay Stats */}
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', zIndex: 3, background: 'rgba(6, 11, 20, 0.9)', padding: '0.8rem 1rem', borderRadius: '8px', border: '1px solid var(--glass-border)', backdropFilter: 'blur(10px)', pointerEvents: 'none' }}>
                <div style={{ fontFamily: 'Bebas Neue', color: 'var(--white)', fontSize: '1.2rem', letterSpacing: '0.05em', lineHeight: 1 }}>SYSTEMS NOMINAL</div>
                <div style={{ color: 'var(--blue)', fontSize: '0.8rem', fontFamily: 'Barlow Condensed', letterSpacing: '0.1em', fontWeight: 600, marginTop: '0.2rem' }}>UPDATING FEED: 0ms</div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="section" style={{ background: 'var(--dark2)', position: 'relative' }}>
        <div className="desktop-only" style={{ position: 'absolute', top: '5%', right: '5%', width: '600px', height: '600px', pointerEvents: 'auto', zIndex: 0, opacity: 0.9 }}>
          <spline-viewer url="https://prod.spline.design/qTEClmohuTJzMq6S/scene.splinecode"></spline-viewer>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
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

      <style>{`
        .amber-plus { font-size: 0.6em; color: var(--red); }
        @media(max-width: 900px) {
          .ops-layout { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .radar-map-container { display: none !important; }
        }
      `}</style>
    </div>
  );
}

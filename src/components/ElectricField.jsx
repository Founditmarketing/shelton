import { useEffect, useRef } from 'react';

export default function ElectricField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    let bolts = [];
    let time = 0;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 60;
        this.x = cx + Math.cos(angle) * dist;
        this.y = cy + Math.sin(angle) * dist;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
        this.size = Math.random() * 2.5 + 0.5;
        // Color palette: electric blue, cyan, white-hot
        const colors = [
          [0, 168, 255],   // brand blue
          [80, 200, 255],  // cyan
          [180, 230, 255], // ice
          [255, 255, 255], // white-hot
          [100, 140, 255], // indigo
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        // Subtle drift toward edges
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const dx = this.x - cx;
        const dy = this.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 0) {
          this.vx += (dx / dist) * 0.008;
          this.vy += (dy / dist) * 0.008;
        }
        if (this.life <= 0) this.reset();
      }
      draw() {
        const alpha = (this.life / this.maxLife) * 0.8;
        const [r, g, b] = this.color;
        // Glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha * 0.15})`;
        ctx.fill();
        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }
    }

    // Lightning bolt generator
    function createBolt() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const angle = Math.random() * Math.PI * 2;
      const length = Math.random() * 250 + 120;
      const segments = [];
      let x = cx + Math.cos(angle) * 30;
      let y = cy + Math.sin(angle) * 30;
      const steps = Math.floor(length / 8);
      
      for (let i = 0; i < steps; i++) {
        const nx = x + Math.cos(angle) * 8 + (Math.random() - 0.5) * 16;
        const ny = y + Math.sin(angle) * 8 + (Math.random() - 0.5) * 16;
        segments.push({ x1: x, y1: y, x2: nx, y2: ny });
        x = nx;
        y = ny;
        
        // Branch chance
        if (Math.random() < 0.15 && i > 3) {
          const branchAngle = angle + (Math.random() - 0.5) * 1.5;
          let bx = x, by = y;
          const branchSteps = Math.floor(Math.random() * 8) + 3;
          for (let j = 0; j < branchSteps; j++) {
            const bnx = bx + Math.cos(branchAngle) * 6 + (Math.random() - 0.5) * 10;
            const bny = by + Math.sin(branchAngle) * 6 + (Math.random() - 0.5) * 10;
            segments.push({ x1: bx, y1: by, x2: bnx, y2: bny, branch: true });
            bx = bnx;
            by = bny;
          }
        }
      }
      
      return { segments, life: 12 + Math.random() * 8, maxLife: 20 };
    }

    // Initialize particles
    const particleCount = Math.min(180, Math.floor(window.innerWidth * 0.12));
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Central glow pulsing
    function drawCoreGlow() {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const pulse = Math.sin(time * 0.02) * 0.3 + 0.7;
      
      // Outer glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200 * pulse);
      grad.addColorStop(0, `rgba(0, 168, 255, ${0.12 * pulse})`);
      grad.addColorStop(0.4, `rgba(0, 100, 200, ${0.05 * pulse})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Hot core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40 * pulse);
      coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.25 * pulse})`);
      coreGrad.addColorStop(0.5, `rgba(100, 180, 255, ${0.1 * pulse})`);
      coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = coreGrad;
      ctx.fillRect(cx - 80, cy - 80, 160, 160);
    }

    // Draw a lightning bolt
    function drawBolt(bolt) {
      const alpha = (bolt.life / bolt.maxLife);
      bolt.segments.forEach(seg => {
        const width = seg.branch ? 1 : 2;
        // Glow layer
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = `rgba(0, 168, 255, ${alpha * 0.4})`;
        ctx.lineWidth = width + 4;
        ctx.stroke();
        // Core layer  
        ctx.beginPath();
        ctx.moveTo(seg.x1, seg.y1);
        ctx.lineTo(seg.x2, seg.y2);
        ctx.strokeStyle = `rgba(200, 230, 255, ${alpha * 0.9})`;
        ctx.lineWidth = width;
        ctx.stroke();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      drawCoreGlow();

      // Update & draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Spawn bolts periodically
      if (Math.random() < 0.04) {
        bolts.push(createBolt());
      }

      // Update & draw bolts
      bolts = bolts.filter(b => {
        b.life--;
        drawBolt(b);
        return b.life > 0;
      });

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}

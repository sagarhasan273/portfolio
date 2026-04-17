/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useRef, useCallback } from "react";
import { Box } from "@mui/material";

interface CosmicBackgroundProps {
  children: React.ReactNode;
  /** Number of web particles (default 70) */
  density?: number;
  /** Number of asteroids floating through (default 5) */
  asteroids?: number;
  /** 1 = slow, 4 = normal, 10 = fast (default 4) */
  speed?: number;
}

export default function CosmicBackground({
  children,
  density = 70,
  asteroids: numAst = 5,
  speed = 3,
}: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    particles: [] as any[],
    stars: [] as any[],
    asteroids: [] as any[],
    shootingStars: [] as any[],
    mouse: { x: -999, y: -999 },
    frame: 0,
    pulseR: 0,
    W: 0,
    H: 0,
    raf: 0,
  });

  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const rInt = (a: number, b: number) => Math.floor(rand(a, b));
  const speedMult = speed / 4;

  const initStars = useCallback((W: number, H: number) => {
    const stars = [];
    for (let i = 0; i < 160; i++) {
      stars.push({ x: rand(0, W), y: rand(0, H), r: rand(0.3, 1.2), alpha: rand(0.1, 0.7), twinkleOff: rand(0, Math.PI * 2) });
    }
    return stars;
  }, []);

  const initParticles = useCallback((W: number, H: number, count: number) => {
    const pts = [];
    for (let i = 0; i < count; i++) {
      pts.push({ x: rand(0, W), y: rand(0, H), vx: rand(-0.35, 0.35), vy: rand(-0.35, 0.35), r: rand(1, 2.5), alpha: rand(0.3, 0.9), hue: rInt(190, 240) });
    }
    return pts;
  },  [rInt]);


  const mkAsteroid = useCallback((W: number, H: number) => {
    const side = rInt(0, 4);
    let x = 0, y = 0, vx = 0, vy = 0;
    const spd = rand(0.4, 1.2) * speedMult;
    if (side === 0) { x = rand(0, W); y = -40; vx = rand(-0.5, 0.5); vy = spd; }
    else if (side === 1) { x = W + 40; y = rand(0, H); vx = -spd; vy = rand(-0.4, 0.4); }
    else if (side === 2) { x = rand(0, W); y = H + 40; vx = rand(-0.5, 0.5); vy = -spd; }
    else { x = -40; y = rand(0, H); vx = spd; vy = rand(-0.4, 0.4); }
    const pts = [];
    const n = rInt(6, 10);
    for (let i = 0; i < n; i++) { const a = (i / n) * Math.PI * 2; pts.push({ a, r: rand(12, 28) }); }
    return { x, y, vx, vy, rot: rand(0, Math.PI * 2), rotV: rand(-0.008, 0.008) * speedMult, pts, alpha: rand(0.5, 0.85) };
  }, [speedMult, rInt]);

  const initAsteroids = useCallback((W: number, H: number, count: number) => {
    return Array.from({ length: count }, () => mkAsteroid(W, H));
  }, [mkAsteroid]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d")!;
    const s = stateRef.current;

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      s.W = canvas.width = r.width;
      s.H = canvas.height = r.height;
      s.particles = initParticles(s.W, s.H, density);
      s.stars = initStars(s.W, s.H);
      s.asteroids = initAsteroids(s.W, s.H, numAst);
    };

    const onMouseMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      s.mouse.x = e.clientX - r.left;
      s.mouse.y = e.clientY - r.top;
    };
    const onMouseLeave = () => { s.mouse.x = -999; s.mouse.y = -999; };

    wrap.addEventListener("mousemove", onMouseMove);
    wrap.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);
    resize();

    function drawStars() {
      for (const st of s.stars) {
        const tw = 0.5 + 0.5 * Math.sin(s.frame * 0.02 + st.twinkleOff);
        ctx.beginPath();
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${st.alpha * tw})`;
        ctx.fill();
      }
    }

    function drawMoon() {
      const mx = s.W - 70, my = 60, mr = 32;
      const g = ctx.createRadialGradient(mx - 8, my - 8, 2, mx, my, mr);
      g.addColorStop(0, "rgba(240,248,255,0.12)");
      g.addColorStop(0.7, "rgba(180,200,255,0.06)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(mx, my, mr, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(180,210,255,0.15)"; ctx.lineWidth = 0.8; ctx.stroke();
      ctx.beginPath(); ctx.arc(mx + 10, my - 5, mr, 0, Math.PI * 2);
      ctx.fillStyle = "#050A14"; ctx.fill();
    }

    function mkShoot() {
      const x = rand(0, s.W), y = rand(0, s.H * 0.4);
      const angle = rand(15, 40) * Math.PI / 180;
      return { x, y, len: rand(80, 160), angle, life: 1, spd: rand(6, 14) * speedMult, done: false };
    }

    function updateShooting() {
      if (s.frame % 220 === 0 && Math.random() > 0.3) s.shootingStars.push(mkShoot());
      for (const sh of s.shootingStars) { sh.x += Math.cos(sh.angle) * sh.spd; sh.y += Math.sin(sh.angle) * sh.spd; sh.life -= 0.018; if (sh.life <= 0) sh.done = true; }
      s.shootingStars = s.shootingStars.filter((sh: any) => !sh?.done);
    }

    function drawShooting() {
      for (const sh of s.shootingStars) {
        const tx = sh.x - Math.cos(sh.angle) * sh.len, ty = sh.y - Math.sin(sh.angle) * sh.len;
        const g = ctx.createLinearGradient(tx, ty, sh.x, sh.y);
        g.addColorStop(0, "rgba(255,255,255,0)");
        g.addColorStop(1, `rgba(180,220,255,${sh.life * 0.9})`);
        ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(sh.x, sh.y);
        ctx.strokeStyle = g; ctx.lineWidth = 1.5; ctx.stroke();
      }
    }

    function updateParticles() {
      for (const p of s.particles) {
        p.x += p.vx * speedMult; p.y += p.vy * speedMult;
        if (p.x < 0) p.x = s.W; if (p.x > s.W) p.x = 0;
        if (p.y < 0) p.y = s.H; if (p.y > s.H) p.y = 0;
        const dx = p.x - s.mouse.x, dy = p.y - s.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          const f = ((90 - dist) / 90) * 0.012 * speedMult;
          p.vx += (dx / dist) * f; p.vy += (dy / dist) * f;
          const maxV = 1.8, sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (sp > maxV) { p.vx = (p.vx / sp) * maxV; p.vy = (p.vy / sp) * maxV; }
        }
      }
    }

    function drawWeb() {
      const LINK = 120;
      for (let i = 0; i < s.particles.length; i++) {
        const a = s.particles[i];
        const dxm = a.x - s.mouse.x, dym = a.y - s.mouse.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        const mb = dm < 150 ? 1 - dm / 150 : 0;
        for (let j = i + 1; j < s.particles.length; j++) {
          const b = s.particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const t = 1 - d / LINK;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(${210 + mb * 40},90%,65%,${t * 0.18 + mb * 0.4 * t})`;
            ctx.lineWidth = 0.6 + mb * 1.2; ctx.stroke();
          }
        }
      }
      for (const p of s.particles) {
        const dxm = p.x - s.mouse.x, dym = p.y - s.mouse.y;
        const dm = Math.sqrt(dxm * dxm + dym * dym);
        const glow = dm < 120 ? 1 - dm / 120 : 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + glow * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,70%,${p.alpha + glow * 0.5})`; ctx.fill();
      }
    }

    function updateAsteroids() {
      for (let i = 0; i < s.asteroids.length; i++) {
        const a = s.asteroids[i];
        a.x += a.vx * speedMult; a.y += a.vy * speedMult; a.rot += a.rotV * speedMult;
        if (a.x < -80 || a.x > s.W + 80 || a.y < -80 || a.y > s.H + 80) s.asteroids[i] = mkAsteroid(s.W, s.H);
      }
    }

    function drawAsteroids() {
      for (const a of s.asteroids) {
        ctx.save(); ctx.translate(a.x, a.y); ctx.rotate(a.rot);
        ctx.beginPath();
        for (let i = 0; i < a.pts.length; i++) {
          const pt = a.pts[i];
          i === 0 ? ctx.moveTo(Math.cos(pt.a) * pt.r, Math.sin(pt.a) * pt.r) : ctx.lineTo(Math.cos(pt.a) * pt.r, Math.sin(pt.a) * pt.r);
        }
        ctx.closePath();
        ctx.strokeStyle = `rgba(148,163,184,${a.alpha})`; ctx.lineWidth = 1.2; ctx.stroke();
        ctx.fillStyle = `rgba(30,41,59,${a.alpha * 0.6})`; ctx.fill();
        ctx.restore();
      }
    }

    function drawCursor() {
      if (s.mouse.x < 0) return;
      const g = ctx.createRadialGradient(s.mouse.x, s.mouse.y, 0, s.mouse.x, s.mouse.y, 60);
      g.addColorStop(0, "rgba(0,122,255,0.18)"); g.addColorStop(1, "rgba(0,122,255,0)");
      ctx.beginPath(); ctx.arc(s.mouse.x, s.mouse.y, 60, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
      ctx.beginPath(); ctx.arc(s.mouse.x, s.mouse.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,150,255,0.9)"; ctx.fill();
    }

    function drawAlienPulse() {
      if (s.mouse.x < 0) return;
      s.pulseR += 1.5 * speedMult;
      if (s.pulseR > 200) s.pulseR = 0;
      const alpha = Math.max(0, 0.15 - (s.pulseR / 200) * 0.15);
      ctx.beginPath(); ctx.arc(s.mouse.x, s.mouse.y, s.pulseR, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0,122,255,${alpha})`; ctx.lineWidth = 1; ctx.stroke();
    }

    function tick() {
      s.frame++;
      ctx.clearRect(0, 0, s.W, s.H);
      drawStars();
      drawShooting();
      drawMoon();
      updateShooting();
      updateParticles();
      drawWeb();
      updateAsteroids();
      drawAsteroids();
      drawAlienPulse();
      drawCursor();
      s.raf = requestAnimationFrame(tick);
    }

    s.raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(s.raf);
      wrap.removeEventListener("mousemove", onMouseMove);
      wrap.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, [density, numAst, speedMult, initParticles, initStars, initAsteroids, mkAsteroid]);

  return (
    <Box
      ref={wrapRef}
      sx={{
        position: "relative",
        overflow: "hidden",
        bgcolor: "#050A14",
        cursor: "none",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,122,255,0.15), transparent)",
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      />
      <Box sx={{ position: "relative", zIndex: 2 }}>
        {children}
      </Box>
    </Box>
  );
}
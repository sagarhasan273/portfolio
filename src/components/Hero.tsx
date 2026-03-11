import { Github, Linkedin, Mail, ArrowDown, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Software Engineer', 'Backend Architect', 'System Designer', 'Full-Stack Builder'];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1));
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #020817 0%, #0a1628 40%, #071020 100%)' }}
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl"
        style={{ background: 'radial-gradient(circle, #0ea5e9, transparent)' }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1 + 'px',
            height: Math.random() * 3 + 1 + 'px',
            background: '#38bdf8',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.4 + 0.1,
            animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
            animationDelay: Math.random() * 4 + 's',
          }}
        />
      ))}

      <div
        className={`max-w-5xl mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      >
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-5 py-2 rounded-full border text-sm font-medium"
          style={{
            background: 'rgba(56, 189, 248, 0.08)',
            borderColor: 'rgba(56, 189, 248, 0.3)',
            color: '#38bdf8',
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          Available for Full-Time Opportunities
        </div>

        {/* Name */}
        <p className="text-lg font-light tracking-widest uppercase mb-3" style={{ color: '#64748b', letterSpacing: '0.3em' }}>
          Sagar Hasan
        </p>

        {/* Animated role title */}
        <h1
          className="font-black mb-6"
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            lineHeight: '1.1',
            background: 'linear-gradient(135deg, #e2e8f0 0%, #38bdf8 50%, #7dd3fc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: '"Syne", sans-serif',
          }}
        >
          {displayText}
          <span className="animate-pulse" style={{ WebkitTextFillColor: '#38bdf8' }}>|</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl mb-4 font-light max-w-3xl mx-auto" style={{ color: '#94a3b8' }}>
          Building scalable systems with precision — from <span style={{ color: '#38bdf8', fontWeight: 600 }}>50K+ user platforms</span> to open-source tools
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 mt-8">
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '50K+', label: 'Eligible concurrent active users' },
            { value: '1500+', label: 'LeetCode Problems & others' },
            { value: '500+', label: 'Bugs Fixed at Lyxa' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-black" style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}>
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider" style={{ color: '#64748b' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="group px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
              color: '#fff',
              boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)',
            }}
          >
            <span className="flex items-center gap-2">
              <Zap size={16} />
              Hire Me
            </span>
          </a>
          <a
            href="#projects"
            className="group px-8 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.04)',
              color: '#cbd5e1',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            View Projects
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          {[
            { icon: Github, href: 'https://github.com/sagarhasan273', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/sagar-hasan-677b5b1ba', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sagarhasan273@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{ color: '#64748b' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#38bdf8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <Icon size={20} />
              <span className="hidden sm:block">{label}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} style={{ color: '#334155' }} />
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}

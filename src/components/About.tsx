import { Brain, Rocket, Users, Target, ExternalLink } from "lucide-react";
import sagarhasan from "../assets/images/sagarhasan.jpg";

const values = [
  {
    icon: Brain,
    title: "Problem Solver",
    description: "Approach complex engineering challenges with structured thinking, strong DSA foundations, and scalable system design principles.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quickly adapt to new technologies, frameworks, and architectural patterns with minimal supervision.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborate effectively in cross-functional teams, valuing clean code, constructive reviews, and shared ownership.",
    checkout: "https://www.linkedin.com/posts/lyxa_lyxaemployeerecognition-awardwinner-teamappreciation-activity-7373632136979001345-2p-b/?utm_source=share&utm_medium=member_desktop",
  },
  {
    icon: Target,
    title: "Impact Focused",
    description: "Focused on delivering measurable improvements in performance, scalability, and user experience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #0a1628 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(56, 189, 248, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-20">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#38bdf8', letterSpacing: '0.3em' }}>
            — About Me
          </p>
          <h2
            className="text-5xl font-black mb-4"
            style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
          >
            Driven by curiosity,<br />
            <span style={{ color: '#38bdf8' }}>built for scale</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start mb-20">
          {/* Photo column */}
          <div className="lg:col-span-2 relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(56, 189, 248, 0.2)' }}
            >
              <img
                src={sagarhasan}
                alt="Sagar Hasan"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5' }}
              />
              {/* Gradient overlay at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: 'linear-gradient(to top, rgba(2,8,23,0.9), transparent)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-white font-bold text-lg" style={{ fontFamily: '"Syne", sans-serif' }}>Sagar Hasan</div>
                <div style={{ color: '#38bdf8', fontSize: '0.85rem' }}>Software Engineer · Dhaka, Bangladesh</div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -right-4 top-8 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(56, 189, 248, 0.1)',
                border: '1px solid rgba(56, 189, 248, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-2xl font-black" style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}>1200+</div>
              <div className="text-xs" style={{ color: '#64748b' }}>LeetCode</div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-3">
            <div className="space-y-5 text-lg leading-relaxed" style={{ color: '#94a3b8', fontFamily: '"DM Sans", sans-serif' }}>
              <p>
                I'm a <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Software Engineer with 2+ years of professional experience</span>, specializing in JavaScript-based development and backend system design. I've contributed to production-grade platforms handling large-scale user activity.
              </p>
              <p>
                My work includes designing optimized APIs, implementing caching strategies, building modular React applications, and developing scalable Node.js backends. Most notably, I <span style={{ color: '#38bdf8', fontWeight: 500 }}>solely built Talk2Active</span> — a language practice platform serving <span style={{ color: '#38bdf8', fontWeight: 500 }}>50,000+ active users</span>, designed from architecture to deployment.
              </p>
              <p>
                Passionate about clean architecture, maintainable code, and continuous learning. Whether building e-commerce systems, autonomous AI platforms, or developer tools — I aim to create solutions that are efficient, scalable, and impactful.
              </p>
            </div>

            {/* Key numbers */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '50K+', label: 'Users on Talk2Active' },
                { value: '200+', label: 'Articles Published' },
                { value: '5+', label: 'Open Source Contributions' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: 'rgba(56, 189, 248, 0.06)',
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                  }}
                >
                  <div className="text-2xl font-black mb-1" style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}>
                    {s.value}
                  </div>
                  <div className="text-xs" style={{ color: '#64748b' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Value cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              onClick={() => { if (value.checkout) window.open(value.checkout, '_blank'); }}
              className="group rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(56, 189, 248, 0.1)',
                cursor: value.checkout ? 'pointer' : 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56, 189, 248, 0.35)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(56, 189, 248, 0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56, 189, 248, 0.1)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(15, 23, 42, 0.6)';
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(56, 189, 248, 0.12)' }}
              >
                <value.icon size={22} style={{ color: '#38bdf8' }} />
              </div>
              <h3 className="font-bold mb-2 flex items-center gap-2" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
                {value.title}
                {value.checkout && <ExternalLink size={12} style={{ color: '#38bdf8' }} />}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#64748b' }}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

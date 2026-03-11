import { X, Github, ExternalLink, Star, Users } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
    subtitle?: string;
    description: string;
    tags: string[];
    metrics: string[];
    image: string;
    fullDescription?: string;
    technologies?: string[];
    challenges?: string[];
    solutions?: string[];
    outcomes?: string[];
    code?: string;
    demo?: string;
    soloBuilt?: boolean;
    userCount?: string;
  } | null;
}

export default function ProjectDetail({ isOpen, onClose, data }: ProjectDetailProps) {
  if (!isOpen || !data) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: 'rgba(2, 8, 23, 0.9)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div
          className="max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative"
          style={{
            background: '#0a1628',
            border: '1px solid rgba(56,189,248,0.2)',
            boxShadow: '0 0 80px rgba(56,189,248,0.1)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="sticky top-4 right-4 float-right w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 z-10 m-4 mb-0"
            style={{ background: 'rgba(56,189,248,0.08)', color: '#64748b' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(56,189,248,0.15)';
              (e.currentTarget as HTMLButtonElement).style.color = '#e2e8f0';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(56,189,248,0.08)';
              (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
            }}
          >
            <X size={18} />
          </button>

          {/* Hero image */}
          <div className="relative h-56 overflow-hidden rounded-t-2xl">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(10,22,40,1) 0%, rgba(10,22,40,0.6) 40%, transparent 100%)' }}
            />

            {data.soloBuilt && (
              <div
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', color: '#fff' }}
              >
                <Star size={12} fill="currentColor" />
                Solely Built by Me
              </div>
            )}

            <div className="absolute bottom-4 left-6 right-16">
              <h2
                className="text-3xl font-black text-white mb-1"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                {data.title}
              </h2>
              {data.subtitle && (
                <p className="text-sm" style={{ color: '#64748b' }}>{data.subtitle}</p>
              )}
            </div>
          </div>

          <div className="p-8">
            {/* User count highlight for Talk2Active */}
            {data.userCount && (
              <div
                className="flex items-center gap-2 px-4 py-3 rounded-xl mb-6"
                style={{
                  background: 'rgba(56,189,248,0.08)',
                  border: '1px solid rgba(56,189,248,0.25)',
                }}
              >
                <Users size={18} style={{ color: '#38bdf8' }} />
                <span className="font-bold" style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}>
                  {data.userCount} Active Users
                </span>
                <span className="text-sm ml-2" style={{ color: '#64748b' }}>
                  — Built and scaled entirely as a solo project
                </span>
              </div>
            )}

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: '#94a3b8', fontFamily: '"DM Sans", sans-serif' }}
            >
              {data.fullDescription || data.description}
            </p>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {data.challenges && data.challenges.length > 0 && (
                <div>
                  <h3 className="font-black text-base mb-3" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
                    Challenges
                  </h3>
                  <ul className="space-y-2">
                    {data.challenges.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                        <span style={{ color: '#f87171', marginTop: '2px' }}>→</span>
                        <span style={{ fontFamily: '"DM Sans", sans-serif' }}>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.solutions && data.solutions.length > 0 && (
                <div>
                  <h3 className="font-black text-base mb-3" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
                    Solutions
                  </h3>
                  <ul className="space-y-2">
                    {data.solutions.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                        <span style={{ color: '#4ade80', marginTop: '2px' }}>✓</span>
                        <span style={{ fontFamily: '"DM Sans", sans-serif' }}>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Outcomes */}
            {data.outcomes && data.outcomes.length > 0 && (
              <div
                className="rounded-xl p-5 mb-8"
                style={{ background: 'rgba(56,189,248,0.05)', border: '1px solid rgba(56,189,248,0.12)' }}
              >
                <h3 className="font-black text-base mb-3" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
                  Key Outcomes
                </h3>
                <ul className="space-y-2">
                  {data.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                      <span style={{ color: '#38bdf8', marginTop: '4px' }}>●</span>
                      <span style={{ fontFamily: '"DM Sans", sans-serif' }}>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies & Metrics */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {data.technologies && (
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider mb-3" style={{ color: '#64748b', fontFamily: '"Syne", sans-serif' }}>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: 'rgba(30,41,59,0.8)', color: '#94a3b8', border: '1px solid rgba(56,189,248,0.08)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {data.metrics && data.metrics.length > 0 && (
                <div>
                  <h3 className="font-black text-sm uppercase tracking-wider mb-3" style={{ color: '#64748b', fontFamily: '"Syne", sans-serif' }}>
                    Key Metrics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium"
                        style={{ background: 'rgba(56,189,248,0.08)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.15)' }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div
              className="flex flex-wrap gap-3 pt-6"
              style={{ borderTop: '1px solid rgba(56,189,248,0.1)' }}
            >
              {data.code && (
                <button
                  onClick={() => window.open(data.code, '_blank')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'rgba(30,41,59,0.8)', color: '#e2e8f0', border: '1px solid rgba(56,189,248,0.15)' }}
                >
                  <Github size={16} />
                  View Code
                </button>
              )}
              {data.demo && (
                <button
                  onClick={() => window.open(data.demo, '_blank')}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)', color: '#fff' }}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </button>
              )}
              <button
                onClick={onClose}
                className="ml-auto px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
                style={{ background: 'rgba(56,189,248,0.06)', color: '#64748b', border: '1px solid rgba(56,189,248,0.1)' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

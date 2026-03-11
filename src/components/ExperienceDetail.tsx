import { X, Briefcase } from 'lucide-react';

interface ExperienceDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    company: string;
    role: string;
    period: string;
    description: string;
    achievements: string[];
  } | null;
}

export default function ExperienceDetail({ isOpen, onClose, data }: ExperienceDetailProps) {
  if (!isOpen || !data) return null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ background: 'rgba(2, 8, 23, 0.85)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div
          className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl relative"
          style={{
            background: '#0a1628',
            border: '1px solid rgba(56,189,248,0.2)',
            boxShadow: '0 0 60px rgba(56,189,248,0.1)',
          }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 z-10"
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

          <div className="p-8">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
              style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}
            >
              {data.period}
            </span>

            <h2
              className="text-3xl font-black mb-2"
              style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
            >
              {data.role}
            </h2>

            <div className="flex items-center gap-2 mb-6" style={{ color: '#38bdf8' }}>
              <Briefcase size={16} />
              <span className="font-semibold">{data.company}</span>
            </div>

            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: '#94a3b8', fontFamily: '"DM Sans", sans-serif', borderLeft: '2px solid rgba(56,189,248,0.3)', paddingLeft: '1rem' }}
            >
              {data.description}
            </p>

            <h3
              className="font-black text-lg mb-4"
              style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
            >
              Key Achievements
            </h3>

            <ul className="space-y-3">
              {data.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl transition-colors duration-300"
                  style={{ background: 'rgba(56,189,248,0.04)', border: '1px solid rgba(56,189,248,0.08)' }}
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#38bdf8' }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: '#94a3b8', fontFamily: '"DM Sans", sans-serif' }}>
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(56,189,248,0.1)' }}>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
                  color: '#fff',
                }}
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

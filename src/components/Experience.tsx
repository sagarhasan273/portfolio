import { Briefcase, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ExperienceDetail from './ExperienceDetail';

const experiences = [
  {
    company: 'Lyxa S.A.L (formerly KadriTech AB)',
    role: 'Software Engineer',
    period: '06/2023 – Present',
    type: 'Full-time',
    description: 'Built and scaled backend systems handling exponential user growth across Lyxa\'s e-commerce and logistics platform.',
    achievements: [
      'Designed and deployed a graph-based route optimization engine for rider assignment as part of a full-stack deliveryplatform, integrating algorithmic decision-making with real-time order tracking.',
      'Optimized REST API performance by 20% through database query optimization, response caching, and implementing pagination strategies.',
      'Designed and deployed a rider assignment system using graph algorithms to optimize real-time delivery routes.',
      'Implemented data caching and optimized database access patterns, significantly reducing response times and bandwidth usage.',
      'Applied Test-Driven Development (TDD) practices to deliver high-quality, maintainable, and reliable code.',
      'Fixed critical bugs [Over 500+] and collaborated across teams to maintain code quality.',
      'Experience building scalable backend services with Node.js and REST APIs.',
      'Collaborated closely with product, design, and QA teams in Agile sprints for high-quality feature delivery.',
    ],
  },
];

const achievements = [
  {
    title: 'Open Source Contributions',
    description: '3 contributioning to major ML/LLM projects including JavaScript and Python libraries',
  },
  {
    title: 'Technical Writing',
    description: 'Published 200+ articles on Algorithms at LeetCode with 21.5K+ readers',
  },
  {
    title: 'Certifications',
    description: 'Collaboration Ninja Certified at Lyxa',
  },
  {
    title: 'Lyxa Contributions',
    description: '500+ bugs fixed and 20+ features implemented across Lyxa\'s product suite',
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      style={{ background: '#020817' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#38bdf8', letterSpacing: '0.3em' }}>
            — Work History
          </p>
          <h2 className="text-5xl font-black" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
            Experience &<br />
            <span style={{ color: '#38bdf8' }}>Achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(exp)}
                className="w-full text-left group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(56, 189, 248, 0.1)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(56, 189, 248, 0.3)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(56, 189, 248, 0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(56, 189, 248, 0.1)';
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(15, 23, 42, 0.7)';
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-black mb-1"
                      style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#38bdf8' }}>
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2 ml-4 flex-shrink-0">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ background: 'rgba(56,189,248,0.1)', color: '#38bdf8', border: '1px solid rgba(56,189,248,0.2)' }}
                    >
                      {exp.period}
                    </span>
                    <span className="text-xs" style={{ color: '#475569' }}>{exp.type}</span>
                  </div>
                </div>

                <p className="text-sm mb-5" style={{ color: '#64748b', fontFamily: '"DM Sans", sans-serif' }}>
                  {exp.description}
                </p>

                {/* Achievements preview */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.slice(0, 6).map((ach, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#38bdf8' }} />
                      {ach}
                    </li>
                  ))}
                </ul>

                <div
                  className="flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all duration-300"
                  style={{ color: '#38bdf8' }}
                >
                  View all achievements
                  <ChevronRight size={14} />
                </div>
              </button>
            ))}
          </div>

          {/* Sidebar highlights */}
          <div className="lg:col-span-1">
            <div
              className="rounded-2xl p-6 sticky top-8"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(56, 189, 248, 0.15)',
              }}
            >
              <div className="flex items-center gap-2 mb-6">
                <Award size={20} style={{ color: '#38bdf8' }} />
                <h3 className="font-black text-lg" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
                  Highlights
                </h3>
              </div>

              <div className="space-y-5">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="pb-5 last:pb-0 last:border-0"
                    style={{ borderBottom: '1px solid rgba(56,189,248,0.08)' }}
                  >
                    <h4 className="font-semibold text-sm mb-1" style={{ color: '#cbd5e1', fontFamily: '"Syne", sans-serif' }}>
                      {a.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>
                      {a.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Big number */}
              <div
                className="mt-6 rounded-xl p-6 text-center"
                style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.12)' }}
              >
                <div
                  className="text-5xl font-black mb-1"
                  style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}
                >
                  2+
                </div>
                <div className="text-xs uppercase tracking-wider" style={{ color: '#64748b' }}>
                  Years of Professional Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ExperienceDetail
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        data={selectedExperience}
      />
    </section>
  );
}

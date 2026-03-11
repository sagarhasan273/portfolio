import { Code, Database, Globe, Smartphone, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'MySQL'],
  },
  {
    icon: Database,
    title: 'Backend & Database',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs'],
  },
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Material UI'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GCP'],
  },
  {
    icon: Terminal,
    title: 'Tools & Practices',
    skills: ['Git', 'Linux', 'Microservices', 'System Design', 'Computer Networks'],
  },
  {
    icon: Smartphone,
    title: 'Mobile & Other',
    skills: ['WebRTC', 'WebSockets', 'JWT', 'React Native', 'Socket.io'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden"
      style={{ background: '#020817' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>

      {/* Horizontal accent line */}
      <div
        className="absolute left-0 right-0"
        style={{ top: '50%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.1), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#38bdf8', letterSpacing: '0.3em' }}>
            — Technical Skills
          </p>
          <h2
            className="text-5xl font-black"
            style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
          >
            Tools I build<br />
            <span style={{ color: '#38bdf8' }}>with</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group rounded-2xl p-6 transition-all duration-400 hover:-translate-y-1"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(56, 189, 248, 0.1)',
                transitionDuration: '0.35s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56, 189, 248, 0.3)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(56, 189, 248, 0.05)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56, 189, 248, 0.1)';
                (e.currentTarget as HTMLDivElement).style.background = 'rgba(15, 23, 42, 0.7)';
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(56, 189, 248, 0.12)' }}
                >
                  <category.icon size={20} style={{ color: '#38bdf8' }} />
                </div>
                <h3
                  className="font-bold text-lg"
                  style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}
                >
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                    style={{
                      background: 'rgba(30, 41, 59, 0.8)',
                      color: '#94a3b8',
                      border: '1px solid rgba(56, 189, 248, 0.08)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: 'rgba(56,189,248,0.1)' }} />
          <p className="text-sm" style={{ color: '#334155' }}>Continuously expanding • Always learning</p>
          <div className="flex-1 h-px" style={{ background: 'rgba(56,189,248,0.1)' }} />
        </div>
      </div>
    </section>
  );
}

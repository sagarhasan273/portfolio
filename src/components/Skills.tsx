import { Code, Database, Globe, Smartphone, Cloud, Terminal } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Languages',
    skills: ['JavaScript/TypeScript', 'Python', 'C++', 'MySQL']
  },
  {
    icon: Database,
    title: 'Backend & Database',
    skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs']
  },
  {
    icon: Globe,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Metaterial UI']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'GCP']
  },
  {
    icon: Terminal,
    title: 'Tools & Practices',
    skills: ['Git', 'Linux', 'Microservices', 'System Design', "Computer Networks"]
  },
  {
    icon: Smartphone,
    title: 'Mobile & Other',
    skills: ['WebRTC', 'WebSockets', 'JWT', 'React Native']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-slate-50 rounded-xl p-6 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                  <category.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm group-hover:shadow-md transition-shadow duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

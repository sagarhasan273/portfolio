import { Briefcase, Award, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ExperienceDetail from './ExperienceDetail';

const experiences = [
  {
    company: 'Lyxa S.A.L (formerly KadriTech AB)',
    role: 'Software Engineer',
    period: '06/2023 - Present',
    description: 'Built and scaled backend systems handling exponential user growth.',
    achievements: [
      'Developed real-time analytics pipeline processing 50k+ events daily',
      'Implemented caching layer reducing API latency by 70%',
      'Implemented data caching and optimized database access patterns, significantly reducing response times and bandwidth usage across services',
      'Designed and deployed a rider assignment system using graph algorithms to optimize real-time delivery routes—improving logistical efficiency and response time.',
      'Established CI/CD pipelines reducing deployment failures by 90%',
      'Collaborated closely with product, design, and QA teams in Agile sprints to ensure high-quality feature delivery and rapid iteration'
    ]
  },
  {
    company: 'KadriTech AB',
    role: 'Full Stack Developer',
    period: '02/2024 - 08/2024',
    description: 'Developed customer-facing applications with focus on performance and UX.',
    achievements: [
      'Built responsive web applications used by 50K+ users',
      'Improved page load times by 50% through code splitting and lazy loading',
      'Enhanced API performance through efficient memory management and CPU optimization across critical services—contributing to infrastructure cost reduction.',
      'Supported the development and maintenance of Lyxa\'s e-commerce platform, with a focus on system scalability and resilience',
      'Participated in debugging production issues, performing root cause analysis and deploying stable patches with minimal downtime.',
      'Collaborated with cross-functional teams to design and implement new features based on customer feedback and market trends.'
    ]
  }
];

const achievements = [
  {
    title: 'Open Source Contributions',
    description: '5+ contributions to major ML/LLM projects including JavaScript, and Python libraries'
  },
  {
    title: 'Technical Writing',
    description: 'Published 200+ articles on Algorithms at leetcode with 21.5K+ readers'
  },
  {
    title: 'Certifications',
    description: 'Collaboration Ninja Certified at Lyxa'
  },
  {
    title: 'Lyxa Contributions',
    description: 'More than 1000+ Bugs fixed and 20+ features implemented across Lyxa\'s product suite, contributing to improved user experience and system performance.'
  }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<typeof experiences[0] | null>(null);

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience & Achievements</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Track record of delivering high-impact solutions and driving technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-blue-200 last:pb-0"
                >
                  <div className="absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="w-full text-left bg-slate-50 rounded-xl p-6 hover:shadow-lg hover:bg-blue-50 transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                          <Briefcase size={16} />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                        <ChevronRight className="text-slate-400 group-hover:text-blue-600 transition-colors duration-300" size={20} />
                      </div>
                    </div>

                    <p className="text-slate-600 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-slate-700">
                          <span className="text-blue-600 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm group-hover:gap-2 transition-all duration-300">
                        View Details
                        <ChevronRight size={16} />
                      </span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 sticky top-8">
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-blue-600" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Highlights</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="pb-4 border-b border-blue-100 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-slate-900 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-slate-600">{achievement.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-blue-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">2+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
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
      </div>
    </section>
  );
}

import { Brain, Rocket, Users, Target } from 'lucide-react';
import sagarhasan from '../assets/images/sagarhasan.jpg';

const values = [
  {
    icon: Brain,
    title: 'Problem Solver',
    description: 'Passionate about tackling complex technical challenges with elegant, scalable solutions'
  },
  {
    icon: Rocket,
    title: 'Fast Learner',
    description: 'Continuously exploring new technologies and adapting to evolving industry standards'
  },
  {
    icon: Users,
    title: 'Team Player 🔗',
    description: 'Strong collaborator who values code reviews, knowledge sharing, and mentorship',
    checkout: 'https://www.linkedin.com/posts/lyxa_lyxaemployeerecognition-awardwinner-teamappreciation-activity-7373632136979001345-2p-b/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADMShvsBFVz-GSSWAwdR6-RCSnXTABAPGzw'
  },
  {
    icon: Target,
    title: 'Impact Focused',
    description: 'Driven by measurable results and creating meaningful value for users and business'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Driven by curiosity and committed to technical excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1">
              <div className="w-full h-full bg-slate-800 rounded-2xl p-8 flex items-center justify-center">
                <img
                  src={sagarhasan}
                  alt="Developer workspace"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Building the Future, One Line at a Time</h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                As a software engineer with 2+ years of experience, I specialize in building
                high-performance, scalable systems that handle millions of users. My journey
                started with a fascination for how things work under the hood, which evolved
                into a career building production systems at scale.
              </p>
              <p>
                I thrive in environments where I can tackle challenging problems, whether
                it's optimizing database queries to handle 10x traffic, architecting
                microservices platforms, or building real-time collaborative applications.
                I believe in writing clean, maintainable code and making data-driven decisions.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source, writing
                technical articles, or exploring the latest developments in distributed
                systems and machine learning. I'm passionate about sharing knowledge and
                helping others grow in their engineering journey.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              onClick={() =>{ if (value?.checkout) window.open(value?.checkout, '_blank');}}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 border border-slate-700 cursor-pointer"
              style={{
                cursor: value?.checkout ? 'pointer' : 'default'
              }}
              title={value?.checkout ? 'Click to view recognition' : ''}
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-slate-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

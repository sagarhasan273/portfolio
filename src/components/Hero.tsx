import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className={`max-w-4xl mx-auto px-6 text-center z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-1">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium mb-8">
            Available for Full-Time Opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400" style={{ lineHeight: '1.5' }}>
          Software Engineer
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-4">
          Building scalable systems and elegant user experiences
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm Sagar Hasan. Full-stack developer passionate about solving complex problems with clean, efficient code.
          Specialized in modern web technologies, distributed systems, and performance optimization.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/sagarhasan273" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sagar-hasan-677b5b1ba" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="mailto:sagarhasan273@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={32} />
      </div>
    </section>
  );
}

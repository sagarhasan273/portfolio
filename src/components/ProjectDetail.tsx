import { X, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    title: string;
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
  } | null;
}

export default function ProjectDetail({ isOpen, onClose, data }: ProjectDetailProps) {
  if (!isOpen || !data) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="sticky top-6 right-6 float-right text-slate-400 hover:text-slate-900 transition-colors duration-300 z-10"
          >
            <X size={24} />
          </button>

          <div className="relative h-64 overflow-hidden">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <h2 className="absolute bottom-6 left-8 text-3xl font-bold text-white">
              {data.title}
            </h2>
          </div>

          <div className="p-8">
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              {data.fullDescription || data.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {data.challenges && data.challenges.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {data.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <span className="text-blue-600 font-bold mt-1">→</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.solutions && data.solutions.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Solutions</h3>
                  <ul className="space-y-2">
                    {data.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700">
                        <span className="text-green-600 font-bold mt-1">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {data.outcomes && data.outcomes.length > 0 && (
              <div className="mb-8 bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Outcomes</h3>
                <ul className="space-y-2">
                  {data.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <span className="text-blue-600 mt-1">●</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {data.technologies && data.technologies.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {data.metrics && data.metrics.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Key Metrics</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.metrics.map((metric, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
              <button
              style={{
                      pointerEvents: data?.code ? "auto" : "none",
                      cursor: !data?.code ? "pointer" : "not-allowed",
                    }}
              className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <Github size={18} />
                View Code
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                <ExternalLink size={18} />
                Live Demo
              </button>
              <button
                onClick={onClose}
                className="ml-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-lg font-medium transition-all duration-300"
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

import { X } from 'lucide-react';

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
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors duration-300"
          >
            <X size={24} />
          </button>

          <div className="p-8">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                {data.period}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{data.role}</h2>
              <p className="text-lg text-blue-600 font-semibold">{data.company}</p>
            </div>

            <p className="text-slate-700 mb-8 leading-relaxed text-lg">
              {data.description}
            </p>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {data.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-700 leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <button
                onClick={onClose}
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300"
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

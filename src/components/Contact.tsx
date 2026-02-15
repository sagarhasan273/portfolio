import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Open to full-time opportunities, interesting projects, or just a
            chat about technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Let's Connect
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                I’m currently seeking full-time opportunities where I can
                contribute to impactful, scalable projects and continue growing
                as a software engineer. I’m always open to meaningful
                collaborations and conversations about exciting opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:sagarhasan273@gmail.com"
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Email</div>
                  <div className="text-sm text-slate-600">
                    sagarhasan273@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/sagarhasan273"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                  <Github
                    className="text-slate-800 group-hover:text-white transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <div className="font-medium text-slate-900">GitHub</div>
                  <div className="text-sm text-slate-600">
                    github.com/yourprofile
                  </div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/sagar-hasan-677b5b1ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Linkedin
                    className="text-blue-600 group-hover:text-white transition-colors duration-300"
                    size={20}
                  />
                </div>
                <div>
                  <div className="font-medium text-slate-900">LinkedIn</div>
                  <div className="text-sm text-slate-600">
                    linkedin.com/in/sagar-hasan-677b5b1ba
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-cyan-600" size={20} />
                </div>
                <div>
                  <div className="font-medium text-slate-900">Location</div>
                  <div className="text-sm text-slate-600">
                    Dhaka, Bangladesh
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Tell me about your opportunity or project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

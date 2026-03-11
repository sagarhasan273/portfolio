import { Mail, Github, Linkedin, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #020817 0%, #0a1628 100%)' }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@300;400;500&display=swap');
        .input-field {
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(56, 189, 248, 0.15);
          color: #e2e8f0;
          outline: none;
          transition: border-color 0.3s;
          font-family: 'DM Sans', sans-serif;
        }
        .input-field::placeholder { color: #475569; }
        .input-field:focus { border-color: rgba(56, 189, 248, 0.5); }
      `}</style>

      {/* Glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(circle, #38bdf8, transparent)' }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#38bdf8', letterSpacing: '0.3em' }}>
            — Get In Touch
          </p>
          <h2 className="text-5xl font-black mb-4" style={{ color: '#e2e8f0', fontFamily: '"Syne", sans-serif' }}>
            Let's work together
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#64748b', fontFamily: '"DM Sans", sans-serif' }}>
            Open to full-time opportunities, interesting projects, or just a conversation about tech
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info */}
          <div>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: '#94a3b8', fontFamily: '"DM Sans", sans-serif' }}
            >
              I'm actively seeking full-time opportunities where I can contribute to impactful, scalable projects.
              I bring 2+ years of professional engineering experience, having built systems from the ground up — including
              Talk2Active, now serving <span style={{ color: '#38bdf8', fontWeight: 600 }}>50,000+ active users</span>.
            </p>

            <div className="space-y-3">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'sagarhasan273@gmail.com',
                  href: 'mailto:sagarhasan273@gmail.com',
                  color: '#38bdf8',
                },
                {
                  icon: Github,
                  label: 'GitHub',
                  value: 'github.com/sagarhasan273',
                  href: 'https://github.com/sagarhasan273',
                  color: '#94a3b8',
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/sagar-hasan-677b5b1ba',
                  href: 'https://linkedin.com/in/sagar-hasan-677b5b1ba',
                  color: '#38bdf8',
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Dhaka, Bangladesh',
                  href: null,
                  color: '#64748b',
                },
              ].map(({ icon: Icon, label, value, href, color }) => {
                const inner = (
                  <div
                    className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-300"
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(56,189,248,0.08)',
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(56,189,248,0.08)' }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color: '#475569' }}>{label}</div>
                      <div className="text-sm font-medium" style={{ color: '#cbd5e1', fontFamily: '"DM Sans", sans-serif' }}>{value}</div>
                    </div>
                    {href && <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#38bdf8' }} />}
                  </div>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(56,189,248,0.15)',
            }}
          >
            <form className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                  Name
                </label>
                <input
                  type="text"
                  className="input-field w-full px-4 py-3 rounded-lg text-sm"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                  Email
                </label>
                <input
                  type="email"
                  className="input-field w-full px-4 py-3 rounded-lg text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                  Message
                </label>
                <textarea
                  rows={5}
                  className="input-field w-full px-4 py-3 rounded-lg text-sm resize-none"
                  placeholder="Tell me about your opportunity or project..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(56,189,248,0.2)',
                }}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

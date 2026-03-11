import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="py-12 relative"
      style={{
        background: '#020817',
        borderTop: '1px solid rgba(56,189,248,0.08)',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div
              className="text-xl font-black mb-1"
              style={{ color: '#38bdf8', fontFamily: '"Syne", sans-serif' }}
            >
              SH<span style={{ color: '#e2e8f0' }}>.</span>
            </div>
            <p className="text-xs" style={{ color: '#334155' }}>
              Built with React, TypeScript & Tailwind CSS
            </p>
            <p className="text-xs mt-1" style={{ color: '#1e293b' }}>
              © 2024 Sagar Hasan. All rights reserved.
            </p>
          </div>

          <div className="flex gap-5">
            {[
              { icon: Github, href: 'https://github.com/sagarhasan273', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/sagar-hasan-677b5b1ba', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sagarhasan273@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(56,189,248,0.06)',
                  border: '1px solid rgba(56,189,248,0.12)',
                  color: '#475569',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#38bdf8';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(56,189,248,0.3)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#475569';
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(56,189,248,0.12)';
                }}
                title={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

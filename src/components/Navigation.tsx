import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import resume from '../assets/resume/Sagar_Hasan_Exp_02.pdf';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href === '#home' ? 'body' : href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        .nav-logo { font-family: 'Syne', sans-serif; }
      `}</style>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={
          isScrolled
            ? {
                background: 'rgba(2, 8, 23, 0.92)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(56, 189, 248, 0.1)',
              }
            : { background: 'transparent' }
        }
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection('#home')}
              className="nav-logo font-black text-xl tracking-tight transition-all duration-300"
              style={{ color: isScrolled ? '#38bdf8' : '#e2e8f0' }}
            >
              SH<span style={{ color: '#38bdf8' }}>.</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-all duration-300 relative group"
                  style={{ color: activeSection === item.href ? '#38bdf8' : isScrolled ? '#94a3b8' : '#cbd5e1' }}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300 group-hover:w-full"
                    style={{
                      width: activeSection === item.href ? '100%' : '0',
                      background: '#38bdf8',
                    }}
                  />
                </button>
              ))}
              <a
                href={resume}
                download
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)',
                  color: '#fff',
                  boxShadow: '0 0 15px rgba(56, 189, 248, 0.25)',
                }}
              >
                <Download size={15} />
                Resume
              </a>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <a href={resume} download style={{ color: isScrolled ? '#94a3b8' : '#e2e8f0' }}>
                <Download size={20} />
              </a>
              <button
                style={{ color: isScrolled ? '#94a3b8' : '#e2e8f0' }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            className="md:hidden border-t"
            style={{
              background: 'rgba(2, 8, 23, 0.97)',
              borderColor: 'rgba(56, 189, 248, 0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium"
                  style={{
                    color: activeSection === item.href ? '#38bdf8' : '#94a3b8',
                    background: activeSection === item.href ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

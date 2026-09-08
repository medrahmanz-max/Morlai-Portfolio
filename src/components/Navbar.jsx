import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import Logo from '../assets/imagelogo.jpeg';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = links.map(l => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <nav className={`glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between ${scrolled ? 'shadow-xl' : ''}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
             <img className="w-full h-full object-cover rounded-lg" src={Logo} alt="Brand Logo" />
            </div>
            <span className="font-semibold text-white hidden sm:block">Morlai Mansaray</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active === link.href.slice(1)
                    ? 'text-white bg-white/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button href="#contact" className="text-sm px-5 py-2.5">
              Let's Work Together
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-4 flex flex-col gap-1 animate-fade-in-up">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium ${
                  active === link.href.slice(1) ? 'bg-white/10 text-white' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button href="#contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Let's Work Together
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

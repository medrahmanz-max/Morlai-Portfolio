import { Github, Mail } from 'lucide-react';
import Logo from '../assets/imagelogo.jpeg';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 flex items-center justify-center font-bold text-white text-xs">
              <img className="w-full h-full object-cover rounded-lg" src={Logo} alt="Brand Logo" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">Morlai Mansaray</div>
              <div className="text-xs text-slate-500">Computer Science Student • Web Developer • Freelancer</div>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-white transition-colors">
                {l}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="https://github.com/MorlaiMansaray" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:medrahmanz@gmail.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
          © 2026 Morlai Mansaray. Built with React, Vite & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

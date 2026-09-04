import { Github, ArrowUpRight } from 'lucide-react';
import Button from './Button';

export default function GitHubSection() {
  return (
    <section className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center border border-white/10 shadow-xl">
              <Github size={32} className="text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Code Is Where I Practice
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              My portfolio is growing through practical projects, coursework, experiments and continuous learning.
            </p>
            <Button
              href="https://github.com/MorlaiMansaray"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub <ArrowUpRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Github, Mail, MapPin, ArrowRight } from 'lucide-react';
import Button from './Button';
import Logo from '../assets/imagelogo.jpeg';
  
const orbitItems = [
  { label: 'React', color: 'from-cyan-400 to-blue-500', delay: '0s' },
  { label: 'JS', color: 'from-yellow-400 to-amber-500', delay: '3s' },
  { label: 'UI', color: 'from-violet-400 to-purple-500', delay: '6s' },
  { label: 'Git', color: 'from-orange-400 to-red-500', delay: '9s' },
  { label: 'HTML', color: 'from-blue-400 to-indigo-500', delay: '12s' },
  { label: 'CSS', color: 'from-pink-400 to-rose-500', delay: '15s' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-cyan-300 border border-cyan-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight">
              Building Digital Experiences{' '}
              <span className="gradient-text">That Actually Work</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              I’m Morlai Mansaray, a Computer Science student and aspiring software developer from Freetown, Sierra Leone.
              I design and build responsive web experiences with HTML, CSS, JavaScript, React, and Tailwind CSS, while
              developing a strong foundation in backend systems, APIs, and full-stack problem solving.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#projects">
                View My Work <ArrowRight size={18} />
              </Button>
              <Button href="#contact" variant="secondary">
                Let's Work Together
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4 text-sm text-slate-400">
              <a href="https://github.com/medrahmanz-max" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <Github size={16} /> GitHub
              </a>
              <a href="mailto:medrahmanz@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} /> Email
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} /> Freetown, Sierra Leone
              </span>
            </div>
          </div>

          {/* Right - Developer Orbit */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-70 h-70 sm:w-80 sm:h-80">
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-4 rounded-full border border-dashed border-white/5" />

              {/* Profile */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-500/20">
                  <img
                    src={Logo}
                    alt="Morlai Mansaray"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#070B14]/40 to-transparent" />
                </div>
              </div>

              {/* Floating tech cards */}
              {orbitItems.map((item, i) => {
                const angle = (i * 60) * (Math.PI / 180);
                const radius = 130;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <div
                    key={item.label}
                    className="absolute left-1/2 top-1/2 glass rounded-xl px-3 py-1.5 text-xs font-semibold text-white shadow-lg animate-float"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      animationDelay: item.delay,
                      animationDuration: `${5 + i * 0.4}s`,
                    }}
                  >
                    <span className={`bg-linear-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 lg:mt-20">
          {[
            { value: '03+', label: 'Featured Projects' },
            { value: '05+', label: 'Programming Languages' },
            { value: '03', label: 'Years of CS Study' },
            { value: '100%', label: 'Passion for Technology' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-5 text-center hover:bg-white/6 transition-colors">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

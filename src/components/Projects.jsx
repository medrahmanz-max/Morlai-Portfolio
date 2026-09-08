import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Button from './Button';

const projects = [
  {
    number: '01',
    title: 'Solar Solutions Website',
    description: 'Responsive solar energy website presenting clean energy solutions, services, projects and customer information. Built as a complete multi-section site with modern layout and clear calls to action.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vite'],
    live: 'https://solarsolutionsl.vercel.app/',
    github: 'https://github.com/medrahmanz-max',
    featured: true,
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
  },
  {
    number: '02',
    title: 'Fatish Kitchen Website',
    description: 'Structured business website applying core HTML, CSS and web design principles. Clean layout focused on presenting services and information clearly.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/medrahmanz-max',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/5',
  },
  {
    number: '03',
    title: 'React UI Project',
    description: 'Modern user interface using component-based front-end development with React, JavaScript, Vite and Tailwind CSS.',
    tech: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/medrahmanz-max',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/5',
  },
  {
    number: '04',
    title: 'My First Phone Layout',
    description: 'Mobile phone interface created as front-end practice. Focused on layout, spacing and interactive elements using modern tooling.',
    tech: ['JavaScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/medrahmanz-max',
    gradient: 'from-violet-500/20 via-purple-500/10 to-pink-500/5',
  },
  {
    number: '05',
    title: 'Class Practice Projects',
    description: 'Programming and web development exercises completed as part of Computer Science coursework — foundations in logic, structure and implementation.',
    tech: ['C#', 'Python', 'Java', 'HTML/CSS'],
    github: 'https://github.com/medrahmanz-max',
    gradient: 'from-slate-500/20 via-slate-400/10 to-slate-300/5',
  },

    {
    number: '06',
    title: 'morlai-mansaray-portfolio-Website',
    description: 'Built with React + Vite + Tailwind CSS and a glassmorphism design system.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    live: 'https://morlai-mansaray-portfolio.vercel.app/',
    github: 'https://github.com/medrahmanz-max',
    featured: true,
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
  },

];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real work from coursework and personal practice. Every project represents hands-on learning."
        />

        <div className="space-y-8">
          {projects.map((p) => (
            <article
              key={p.number}
              className={`group glass rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/15`}
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Visual */}
                <div className={`md:col-span-2 relative min-h-50 md:min-h-60 bg-linear-to-br ${p.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(59,130,246,0.3), transparent 50%),
                                       radial-gradient(circle at 70% 60%, rgba(139,92,246,0.2), transparent 50%)`
                  }} />
                  <div className="relative z-10 text-center p-6">
                    <span className="text-5xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                      {p.number}
                    </span>
                    {p.featured && (
                      <div className="mt-2 inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        FEATURED
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white/5 text-slate-300 border border-white/8">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        Live Demo <ExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                      <Github size={14} /> Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            href="https://github.com/MorlaiMansaray"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            View More Projects on GitHub <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}

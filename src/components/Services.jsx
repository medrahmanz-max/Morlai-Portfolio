import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { Monitor, Code, RefreshCw, GraduationCap, Server } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Responsive Websites',
    description: 'Clean, mobile-friendly websites that look and work well across phones, tablets and desktops using modern HTML, CSS and responsive techniques.',
  },
  {
    icon: Code,
    title: 'Front-End Development',
    description: 'Building interactive user interfaces with JavaScript, React and Tailwind CSS. Focused on usable components and maintainable code.',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    description: 'Beginner-level backend development using Node.js, Express.js, REST APIs and MySQL. Learning how to build complete web applications with server-side logic and database integration.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Refreshing existing sites with improved layout, clarity and modern styling while keeping the content and goals intact.',
  },
  {
    icon: GraduationCap,
    title: 'Student / Small Business Projects',
    description: 'Practical websites for students, personal brands and small businesses that need a professional online presence without unnecessary complexity.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What I Can Help With"
          subtitle="Practical front-end services delivered with care, honesty and attention to detail."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <GlassCard key={s.title} className="group">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center border border-white/10 mb-4 group-hover:scale-105 transition-transform">
                <s.icon size={22} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

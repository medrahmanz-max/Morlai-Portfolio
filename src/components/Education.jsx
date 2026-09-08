import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { GraduationCap, BookOpen, Code, Database, Github } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Education & Practical Experience"
          subtitle="Academic foundation paired with hands-on practice through projects and coursework."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Timeline */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Education</h3>
            <div className="relative pl-8 space-y-8 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-px before:bg-linear-to-b before:from-blue-500/50 before:via-violet-500/30 before:to-transparent">
              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-linear-to-br from-blue-500 to-violet-500 border-4 border-[#070B14] shadow-lg shadow-blue-500/30" />
                <GlassCard className="p-5!">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-blue-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Bachelor's Degree in Computer Science</h4>
                      <p className="text-sm text-cyan-400 mt-0.5">University of Management and Technology (UNIMTECH)</p>
                      <p className="text-xs text-slate-500 mt-1">Final Year · Expected Graduation 2027</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-slate-600 border-4 border-[#070B14]" />
                <GlassCard className="p-5!">
                  <div className="flex items-start gap-3">
                    <BookOpen size={20} className="text-violet-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Secondary School Education</h4>
                      <p className="text-sm text-slate-400 mt-0.5">Benevolent Islamic Secondary School, Makeni</p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-slate-600 border-4 border-[#070B14]" />
                <GlassCard className="p-5!">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={20} className="text-violet-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">WASSCE Certificate</h4>
                      <p className="text-sm text-cyan-400 mt-0.5">West African Senior School Certificate Examination</p>
                      <p className="text-xs text-slate-500 mt-1">2020 – 2021</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Practical Experience */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">Practical Experience</h3>
            <div className="space-y-4">
              {[
                { icon: Code, title: 'Front-End Development', desc: 'Building responsive websites and interfaces with HTML, CSS, JavaScript, React and Tailwind CSS.' },
                { icon: BookOpen, title: 'Academic Programming', desc: 'Coursework and practice in C#, Python, C++, Java and core computer science fundamentals.' },
                { icon: Database, title: 'Database Coursework', desc: 'Learning database systems, basic SQL and data modeling as part of the CS curriculum.' },
                { icon: Github, title: 'GitHub Projects', desc: 'Public repositories and personal projects used to practice version control and showcase progress.' },
              ].map((item) => (
                <GlassCard key={item.title} className="p-5! flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/8">
                    <item.icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

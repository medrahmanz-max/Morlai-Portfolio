import { GraduationCap, MapPin, Mail, Phone, Calendar } from 'lucide-react';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import profileImg from '../assets/profile.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="More Than Just Code"
          subtitle="A Computer Science student building practical skills through real projects and continuous learning."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Profile card */}
          <div className="lg:col-span-2">
            <GlassCard className="text-center" hover={false}>
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden border border-white/10 mb-5 shadow-xl">
                <img src={profileImg} alt="Morlai Mansaray" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">Morlai Mansaray</h3>
              <p className="text-sm text-cyan-400 mb-4">Computer Science Student / Web Developer</p>
              <p className="text-xs text-slate-400 mb-4">Designer / IT Support Specialist / Aiming to Become a Full-Stack Developer</p>
              
              <div className="space-y-3 text-left text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <GraduationCap size={16} className="text-blue-400 shrink-0" />
                  <span>University of Management and Technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-violet-400 shrink-0" />
                  <span>Year 3 · Expected 2027</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-cyan-400 shrink-0" />
                  <span>Shell New Road, Freetown, Sierra Leone</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-indigo-400 shrink-0" />
                  <a href="mailto:medrahmanz@gmail.com" className="hover:text-white transition-colors">medrahmanz@gmail.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-emerald-400 shrink-0" />
                  <span>+232 77-06-24-01</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Bio */}
          <div className="lg:col-span-3 space-y-6">
            <GlassCard>
              <p className="text-slate-300 leading-relaxed mb-4">
                Third-year Computer Science student at the University of Management and Technology (UNIMTECH), 
                with hands-on front-end development experience building responsive websites and interfaces using 
                HTML, CSS, JavaScript, React, and Tailwind CSS.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Comfortable across the fundamentals of programming including C#, Python, C++, and Java, with 
                knowledge of databases, software engineering, data structures, and algorithms. Currently growing 
                my portfolio through practical projects and public GitHub work while seeking opportunities to 
                apply my knowledge in a real workplace.
              </p>
              <blockquote className="border-l-2 border-blue-500/50 pl-4 italic text-slate-400">
                I believe good websites should not only look beautiful. They should be useful, responsive, 
                accessible, and easy to use.
              </blockquote>
            </GlassCard>

            {/* My Development Journey */}
            <GlassCard>
              <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">My Development Journey</h4>
              <p className="text-slate-300 leading-relaxed">
                I'm also working towards becoming a Full-Stack Developer. I am currently at the beginner stage of my full-stack development journey, 
                building my knowledge of both front-end and back-end development. I'm gradually learning how websites communicate with servers, APIs, 
                databases, and backend technologies while continuing to strengthen my front-end skills.
              </p>
            </GlassCard>

            {/* Strengths */}
            <div>
              <h4 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wider">How I Work</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Fast Learner', 'Problem Solver', 'Team Player', 'Reliable',
                  'Adaptable', 'Good Communication', 'Time Management', 'Continuous Learner'
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-xs font-medium glass text-slate-300 border border-white/5 hover:border-blue-500/30 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

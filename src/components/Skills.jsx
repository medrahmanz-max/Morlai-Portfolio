import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { Code2, Layout, Database, Wrench, Server } from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code2,
    items: [
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'Python', level: 'Familiar' },
      { name: 'C#', level: 'Familiar' },
      { name: 'C++', level: 'Familiar' },
      { name: 'Java', level: 'Familiar' },
    ],
  },
  {
    title: 'Front-End Development',
    icon: Layout,
    items: [
      { name: 'HTML & CSS', level: 'Working Knowledge' },
      { name: 'JavaScript', level: 'Working Knowledge' },
      { name: 'React', level: 'Learning' },
      { name: 'Vite', level: 'Familiar' },
      { name: 'Tailwind CSS', level: 'Working Knowledge' },
      { name: 'Responsive Design', level: 'Working Knowledge' },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    items: [
      { name: 'Node.js', level: 'Learning' },
      { name: 'Express.js', level: 'Learning' },
      { name: 'REST APIs', level: 'Beginner' },
      { name: 'API Development', level: 'Learning' },
      { name: 'Server-side Development', level: 'Beginner' },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MySQL', level: 'Beginner' },
      { name: 'SQL', level: 'Familiar' },
      { name: 'Database Integration', level: 'Beginner' },
      { name: 'Relational Database Concepts', level: 'Familiar' },
    ],
  },
  {
    title: 'Computer Science',
    icon: Code2,
    items: [
      { name: 'Data Structures & Algorithms', level: 'Familiar' },
      { name: 'Software Engineering', level: 'Familiar' },
      { name: 'Cloud Computing Fundamentals', level: 'Learning' },
      { name: 'Mobile App Development', level: 'Learning' },
    ],
  },
  {
    title: 'Tools & Office',
    icon: Wrench,
    items: [
      { name: 'Git & GitHub', level: 'Working Knowledge' },
      { name: 'VS Code', level: 'Working Knowledge' },
      { name: 'Microsoft Word', level: 'Working Knowledge' },
      { name: 'Microsoft Excel', level: 'Working Knowledge' },
      { name: 'Microsoft PowerPoint', level: 'Working Knowledge' },
      { name: 'Microsoft Access', level: 'Familiar' },
      { name: 'Microsoft Publisher', level: 'Familiar' },
    ],
  },
  {
    title: 'Design & Creative Tools',
    icon: Wrench,
    items: [
      { name: 'Adobe Photoshop', level: 'Familiar' },
      { name: 'Adobe Animate', level: 'Familiar' },
      { name: 'Adobe Illustrator', level: 'Familiar' },
      { name: 'Adobe Premiere Pro', level: 'Familiar' },
    ],
  },
];

const levelColor = {
  'Working Knowledge': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'Familiar': 'bg-violet-500/20 text-violet-300 border-violet-500/30',
  'Learning': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="Tools I use for programming, web development, databases, office work, and creative design, including Adobe Photoshop, Adobe Animate, Adobe Illustrator, and Adobe Premiere Pro."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <GlassCard key={group.title}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center border border-white/10">
                  <group.icon size={20} className="text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">{group.title}</h3>
              </div>
              <div className="space-y-3">
                {group.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-300">{item.name}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium ${levelColor[item.level]}`}>
                      {item.level}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

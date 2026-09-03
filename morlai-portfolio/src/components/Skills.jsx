import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { Code2, Layout, Database, Wrench } from 'lucide-react';

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
    title: 'Web & Front-End',
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
    title: 'Coursework & Concepts',
    icon: Database,
    items: [
      { name: 'Database Systems & SQL', level: 'Familiar' },
      { name: 'Data Structures & Algorithms', level: 'Familiar' },
      { name: 'Software Engineering', level: 'Familiar' },
      { name: 'Mobile App Development', level: 'Learning' },
      { name: 'Cloud Computing', level: 'Learning' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: [
      { name: 'Git & GitHub', level: 'Working Knowledge' },
      { name: 'VS Code', level: 'Working Knowledge' },
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
          subtitle="Honest assessment of where I am — learning, familiar, or working knowledge."
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

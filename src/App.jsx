import logo from './assets/imagelogo.jpeg';
import profileImg from './assets/profile.jpg';

const navItems = ['About', 'Learning', 'Work', 'Gallery', 'Services', 'Education', 'Contact'];

const chapterData = [
  {
    title: 'Build for the browser',
    description:
      'This is where I spend most of my time. I can take a layout from an idea to a working, responsive page and keep the markup readable while doing it.',
    items: [
      ['HTML & CSS', 'working with'],
      ['JavaScript', 'working with'],
      ['React', 'practising'],
      ['Vite', 'working with'],
      ['Tailwind CSS', 'working with'],
      ['Responsive design', 'practising'],
    ],
  },
  {
    title: 'Learning the application layer',
    description:
      'Newer ground for me. I\'m working through how a page talks to a server, how data is stored, and what a small honest API looks like.',
    items: [
      ['Node.js', 'currently learning'],
      ['Express.js', 'currently learning'],
      ['REST APIs', 'practising'],
      ['MySQL', 'practising'],
      ['Database integration', 'currently learning'],
      ['Server-side development', 'currently learning'],
    ],
  },
  {
    title: 'Strengthening foundations and craft',
    description:
      'Coursework languages, computer science fundamentals, and the tools I use to make and edit the visual side of a project.',
    items: [
      ['C#', 'working with'],
      ['Python', 'working with'],
      ['C++', 'practising'],
      ['Java', 'practising'],
      ['Data structures & algorithms', 'practising'],
      ['Software engineering', 'working with'],
      ['Cloud computing fundamentals', 'currently learning'],
      ['Mobile app development', 'currently learning'],
      ['Git & GitHub', 'working with'],
      ['VS Code', 'working with'],
      ['Adobe Photoshop', 'working with'],
      ['Adobe Illustrator', 'working with'],
      ['Adobe Animate', 'practising'],
      ['Adobe Premiere Pro', 'practising'],
    ],
  },
];

const galleryItems = [
  { title: 'Solar Solutions', subtitle: 'Landing page', accent: 'bg-[#B8462C]' },
  { title: 'Business Website', subtitle: 'Brand showcase', accent: 'bg-[#C68A31]' },
  { title: 'React UI', subtitle: 'Component mockup', accent: 'bg-[#42687A]' },
  { title: 'Mobile Layout', subtitle: 'Phone interface', accent: 'bg-[#2A211B]' },
  { title: 'Practice Projects', subtitle: 'Academic builds', accent: 'bg-[#8C6D4A]' },
  { title: 'Portfolio', subtitle: 'Personal portfolio', accent: 'bg-[#B6A5D8]' },
];

const serviceItems = [
  {
    title: 'Responsive websites',
    description:
      'Websites that stay readable and usable on phones, tablets and desktops, checked at the sizes people actually use rather than one fixed width.',
  },
  {
    title: 'Front-end development',
    description:
      'Building interfaces with HTML, CSS, JavaScript, React and Tailwind CSS, paying attention to layout, spacing, type and keyboard access.',
  },
  {
    title: 'Backend & API development',
    description:
      'This is beginner-level for me. I\'m developing it through practice with Node.js, Express, REST APIs and MySQL, so I take on small, well-defined pieces and say so up front.',
  },
  {
    title: 'Website redesign',
    description:
      'Reworking an existing site\'s layout, typography and structure so it reads more clearly and is easier to move through.',
  },
  {
    title: 'Student and small-business projects',
    description:
      'Coursework support, simple business sites and small practice builds for people who need a straightforward web presence.',
  },
];

const projectItems = [
  {
    number: 'Project 01',
    title: 'Solar Solutions Website',
    description: 'A responsive solar energy site presenting clean energy solutions, services, projects and customer information.',
    tags: 'HTML · CSS · JavaScript · Vite',
    live: 'https://solarsolutionsl.vercel.app/',
    code: 'https://github.com/medrahmanz-max',
    accent: 'bg-[#B8462C]',
    letter: 'S',
    featured: true,
  },
  {
    number: 'Project 02',
    title: 'Fatish Kitchen Website',
    description: 'A structured business website applying core HTML, CSS and web design principles.',
    tags: 'HTML · CSS',
    code: null,
    accent: 'bg-[#C68A31]',
    letter: 'F',
    featured: false,
  },
  {
    number: 'Project 03',
    title: 'React UI Project',
    description: 'A component-based front-end interface, built to practise splitting a page into reusable parts.',
    tags: 'React · JavaScript · Vite · Tailwind CSS',
    code: 'https://github.com/medrahmanz-max',
    accent: 'bg-[#42687A]',
    letter: 'R',
    featured: false,
  },
  {
    number: 'Project 04',
    title: 'My First Phone Layout',
    description: 'A mobile phone interface built as front-end practice, focused on layout, spacing and interactive elements.',
    tags: 'JavaScript · Vite · Tailwind CSS',
    code: 'https://github.com/medrahmanz-max',
    accent: 'bg-[#2A211B]',
    letter: 'P',
    featured: false,
  },
  {
    number: 'Project 05',
    title: 'Class Practice Projects',
    description: 'Programming and web exercises from my Computer Science coursework, kept together as a record of practice.',
    tags: 'C# · Python · Java · HTML/CSS',
    code: null,
    accent: 'bg-[#8C6D4A]',
    letter: 'C',
    featured: false,
  },
  {
    number: 'Project 06',
    title: 'Morlai Mansaray Portfolio Website',
    description: 'This site. Built with React, Vite and Tailwind CSS to present my work and contact details in one place.',
    tags: 'React · Vite · Tailwind CSS',
    live: 'https://morlai-mansaray-portfolio.vercel.app/',
    code: 'https://github.com/medrahmanz-max',
    accent: 'bg-[#B8462C]',
    letter: 'M',
    featured: false,
  },
];

export default function App() {
  return (
    <div className="folio" id="top">
      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr]">
        <div className="rail pt-8 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">01 / Intro</span>
        </div>

        <div className="pt-8 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <header className="flex flex-wrap items-center gap-x-6 gap-y-4 pb-5 border-b border-[#2A211B]/25">
            <div className="flex items-center gap-3">
              <img alt="Morlai logo" className="w-9 h-9 object-cover border border-[#2A211B]/40" src={logo} />
              <div className="leading-tight">
                <div className="disp text-[18px] font-semibold">Morlai Mansaray</div>
                <div className="mono text-[12px] text-[#42687A]">Computer Science student · Freetown</div>
              </div>
            </div>

            <nav className="ml-auto flex flex-wrap items-center gap-x-7 gap-y-2 text-[14px]">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#B8462C]">
                  {item}
                </a>
              ))}
            </nav>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-10 lg:gap-12 pt-14">
            <div className="lg:col-span-7">
              <p className="mono text-[12px] uppercase tracking-[0.18em] text-[#C68A31] mb-6">Portfolio · 2026</p>
              <h1 className="disp text-[42px] sm:text-[54px] lg:text-[60px] leading-[1.06] font-semibold max-w-[15ch] sm:max-w-none">
                I&apos;m Morlai Mansaray, a Computer Science student building websites in
                <span className="relative whitespace-nowrap">
                  Freetown.
                  <span className="absolute left-0 -bottom-1 w-[130%] h-0.5 bg-[#B8462C]" />
                </span>
              </h1>
              <p className="mt-9 text-[17px] leading-[1.7] max-w-[54ch]">
                I&apos;m in my final year at UNIMTECH. Most of my learning happens by turning coursework and small ideas into working interfaces.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
                <a className="btn-rust inline-flex items-center gap-2 px-6 py-3 text-[15px] font-medium" href="https://solarsolutionsl.vercel.app/" target="_blank" rel="noreferrer">
                  View Solar Solutions
                  <i className="ti ti-arrow-up-right text-[16px]" />
                </a>
                <a className="txt-act inline-flex items-center gap-1.5 text-[15px] decoration-[#B8462C]" href="mailto:medrahmanz@gmail.com">
                  Email Morlai
                  <i className="ti ti-arrow-up-right text-[15px]" />
                </a>
              </div>

              <p className="mono text-[12px] uppercase tracking-[0.14em] text-[#42687A] mt-10 pt-4 border-t border-[#2A211B]/20">
                Latest featured work:
                <span className="text-[#2A211B]"> Solar Solutions Website</span>
              </p>

              <div className="mt-6 flex flex-wrap items-stretch divide-x divide-[#2A211B]/20 border-y border-[#2A211B]/20">
                <div className="pr-8 py-4">
                  <div className="disp text-[26px] font-semibold">6</div>
                  <div className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">projects</div>
                </div>
                <div className="px-8 py-4">
                  <div className="disp text-[26px] font-semibold">Final Year</div>
                  <div className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">at UNIMTECH</div>
                </div>
                <div className="px-8 py-4">
                  <div className="disp text-[26px] font-semibold">2026</div>
                  <div className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">current</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-[#B6A5D8] border border-[#2A211B]/25">
                <img alt="Morlai Mansaray" className="w-full h-105 lg:h-130 object-cover object-top" src={profileImg} />
              </div>
              <p className="mono text-[12px] text-[#42687A] mt-3">Freetown, Sierra Leone · 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#F3EBDD]" id="about">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">02 / About</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <h2 className="disp text-[34px] sm:text-[40px] font-semibold leading-tight">A short account of where I am</h2>

          <div className="grid grid-cols-1 lg:grid-cols-11 gap-10 lg:gap-14 mt-12">
            <div className="lg:col-span-4">
              <div className="w-33 bg-[#B6A5D8] border border-[#2A211B]/25">
                <img alt="Morlai Mansaray portrait" className="w-33 h-40 object-cover object-top" src={profileImg} />
              </div>

              <dl className="mt-7 border-t border-[#2A211B]/25">
                {[
                  ['Name', 'Morlai Mansaray'],
                  ['University', 'University of Management and Technology (UNIMTECH)'],
                  ['Standing', 'Final Year Student'],
                  ['Based in', 'Freetown, Sierra Leone'],
                  ['Email', 'medrahmanz@gmail.com'],
                  ['Phone', '+232 77-06-24-01'],
                ].map(([label, value]) => (
                  <div key={label} className="py-3 border-b border-[#2A211B]/20">
                    <dt className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">{label}</dt>
                    <dd className={`text-[16px] mt-1 ${label === 'Email' ? 'text-[#2A211B]' : ''}`}>
                      {label === 'Email' ? (
                        <a className="txt-act decoration-[#B8462C]" href="mailto:medrahmanz@gmail.com">{value}</a>
                      ) : (
                        <span className={label === 'Phone' ? 'mono' : ''}>{value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[17px] leading-[1.75] max-w-[62ch]">
                I&apos;m a final-year Computer Science student at UNIMTECH with hands-on front-end experience. I build responsive
                websites and interfaces using HTML, CSS, JavaScript, React and Tailwind CSS, mostly by taking something from
                class or a small idea of my own and finishing it properly.
              </p>
              <p className="text-[17px] leading-[1.75] max-w-[62ch] mt-6">
                I&apos;m comfortable with the fundamentals of C#, Python, C++ and Java, along with databases, software engineering,
                data structures and algorithms. Right now I&apos;m growing into full-stack work by learning how sites talk to
                servers, APIs and databases, while I keep strengthening my front-end skills.
              </p>

              <figure className="mt-12 pl-6 border-l-2 border-[#B8462C]">
                <blockquote className="disp text-[28px] sm:text-[32px] leading-[1.3] font-medium max-w-[34ch]">
                  “A website should be useful, responsive, accessible, and easy to use.”
                </blockquote>
              </figure>

              <p className="mono text-[13px] uppercase tracking-widest text-[#2A211B] mt-12 pt-4 border-t border-[#2A211B]/25">
                Curious
                <span className="text-[#B8462C]"> / </span>
                dependable
                <span className="text-[#B8462C]"> / </span>
                improving through practice
                <span className="text-[#B8462C]"> / </span>
                open to feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr]" id="learning">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">03 / Learning</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <h2 className="disp text-[34px] sm:text-[42px] font-semibold leading-tight">What I&apos;m learning by building</h2>
          <p className="text-[16px] leading-[1.7] max-w-[56ch] mt-5">Three chapters, in the order I&apos;ve actually worked through them. Each one is still open.</p>

          {chapterData.map((chapter, index) => (
            <div key={chapter.title}>
              {index > 0 && (
                <div aria-hidden="true" className={index === 1 ? 'ml-1 sm:ml-8' : 'ml-1 sm:ml-33'}>
                  <svg className="text-[#B8462C]" fill="none" height="86" viewBox="0 0 180 86" width="180">
                    <path d="M1 0 V42 H120 V86" stroke="currentColor" strokeWidth="1" />
                    <circle cx="120" cy="86" fill="currentColor" r="2.5" />
                  </svg>
                </div>
              )}

              <div className={`max-w-220 ${index === 1 ? 'ml-1 sm:ml-31' : index === 2 ? 'ml-1 sm:ml-63' : ''}`}>
                <div className="flex items-baseline gap-4">
                  <span className="mono text-[12px] uppercase tracking-[0.16em] text-[#C68A31]">Chapter {index + 1}</span>
                  <span className="h-px flex-1 bg-[#2A211B]/25" />
                </div>

                <h3 className="disp text-[26px] font-semibold mt-4">{chapter.title}</h3>
                <p className="text-[16px] leading-[1.7] max-w-[58ch] mt-3">{chapter.description}</p>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 mt-6 border-t border-[#2A211B]/25">
                  {chapter.items.map(([name, status]) => (
                    <div key={name} className="flex items-baseline justify-between gap-4 py-2.5 border-b border-[#2A211B]/15">
                      <dt className="text-[16px]">{name}</dt>
                      <dd className="mono text-[12px] uppercase tracking-widest text-[#42687A]">{status}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#F3EBDD]" id="work">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">04 / Work</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <h2 className="disp text-[34px] sm:text-[42px] font-semibold leading-tight">Work from class and practice</h2>
          <p className="text-[16px] leading-[1.7] max-w-[56ch] mt-5">Six builds, in the order they matter. Links go to what actually exists.</p>

          {projectItems.map((project, index) => {
            const isFeatured = project.featured;
            const isReversed = index % 2 === 1;

            if (isFeatured) {
              return (
                <article key={project.title} className="mt-14 border-t-2 border-[#2A211B] pt-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    <div className="lg:col-span-7">
                      <div className={`${project.accent} h-75 lg:h-90 flex items-center justify-center`}>
                        <span className="disp text-[#E7D9BE] text-[190px] leading-none font-semibold select-none">{project.letter}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="mono text-[12px] uppercase tracking-[0.16em] text-[#C68A31]">{project.number}</p>
                      <h3 className="disp text-[30px] sm:text-[34px] font-semibold leading-tight mt-3">{project.title}</h3>
                      <p className="text-[16px] leading-[1.75] mt-4">{project.description}</p>
                      <p className="mono text-[13px] text-[#42687A] mt-6 pt-4 border-t border-[#2A211B]/25">{project.tags}</p>

                      <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
                        <a className="btn-rust inline-flex items-center gap-2 px-5 py-2.5 text-[15px] font-medium" href={project.live} target="_blank" rel="noreferrer">
                          View live site
                          <i className="ti ti-arrow-up-right text-[16px]" />
                        </a>
                        <a className="txt-act inline-flex items-center gap-1.5 text-[15px] decoration-[#B8462C]" href={project.code} target="_blank" rel="noreferrer">
                          <i className="ti ti-brand-github text-[16px]" />
                          Code
                          <i className="ti ti-arrow-up-right text-[14px]" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article key={project.title} className="mt-16 border-t border-[#2A211B]/30 pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {!isReversed ? (
                  <>
                    <div className="lg:col-span-2 lg:border-r lg:border-[#2A211B]/25 lg:pr-6">
                      <p className="mono text-[12px] uppercase tracking-[0.16em] text-[#C68A31]">{project.number}</p>
                      <p className="mono text-[13px] text-[#42687A] mt-4 leading-relaxed">{project.tags}</p>
                      {project.code ? (
                        <a className="txt-act inline-flex items-center gap-1.5 text-[14px] mt-4 decoration-[#B8462C]" href={project.code} target="_blank" rel="noreferrer">
                          <i className="ti ti-brand-github text-[15px]" />
                          Code
                          <i className="ti ti-arrow-up-right text-[13px]" />
                        </a>
                      ) : (
                        <p className="mono text-[12px] text-[#2A211B]/55 mt-4 leading-relaxed">Code link not available yet</p>
                      )}
                    </div>
                    <div className="lg:col-span-6">
                      <h3 className="disp text-[26px] font-semibold leading-tight">{project.title}</h3>
                      <p className="text-[16px] leading-[1.75] mt-3 max-w-[52ch]">{project.description}</p>
                    </div>
                    <div className="lg:col-span-4">
                      <div className={`${project.accent} h-37.5 flex items-center justify-center`}>
                        <span className="disp text-[#F3EBDD] text-[90px] leading-none font-semibold select-none">{project.letter}</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:col-span-4 lg:order-1">
                      <div className={`${project.accent} h-37.5 flex items-center justify-center`}>
                        <span className="disp text-[#F3EBDD] text-[90px] leading-none font-semibold select-none">{project.letter}</span>
                      </div>
                    </div>
                    <div className="lg:col-span-6 lg:order-2">
                      <h3 className="disp text-[26px] font-semibold leading-tight">{project.title}</h3>
                      <p className="text-[16px] leading-[1.75] mt-3 max-w-[52ch]">{project.description}</p>
                    </div>
                    <div className="lg:col-span-2 lg:order-3 lg:border-l lg:border-[#2A211B]/25 lg:pl-6">
                      <p className="mono text-[12px] uppercase tracking-[0.16em] text-[#C68A31]">{project.number}</p>
                      <p className="mono text-[13px] text-[#42687A] mt-4 leading-relaxed">{project.tags}</p>
                      {project.code ? (
                        <a className="txt-act inline-flex items-center gap-1.5 text-[14px] mt-4 decoration-[#B8462C]" href={project.code} target="_blank" rel="noreferrer">
                          <i className="ti ti-brand-github text-[15px]" />
                          Code
                          <i className="ti ti-arrow-up-right text-[13px]" />
                        </a>
                      ) : (
                        <p className="mono text-[12px] text-[#2A211B]/55 mt-4 leading-relaxed">Code link not available yet</p>
                      )}
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#F3EBDD]" id="gallery">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">04 / Gallery</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <h2 className="disp text-[34px] sm:text-[42px] font-semibold leading-tight">Project gallery</h2>
          <p className="text-[16px] leading-[1.7] max-w-[56ch] mt-5">A dedicated space for screenshots and project previews that I will add later as I build and complete more work.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            {galleryItems.map((item) => (
              <div key={item.title} className="border border-[#2A211B]/20 bg-[#F8F0E5] shadow-sm">
                <div className={`${item.accent} h-52 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_55%)]" />
                  <span className="disp text-[72px] text-[#F3EBDD] relative z-10">{item.title.charAt(0)}</span>
                </div>
                <div className="p-5">
                  <p className="mono text-[12px] uppercase tracking-widest text-[#42687A]">{item.subtitle}</p>
                  <h3 className="disp text-[24px] mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr]" id="services">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">05 / Services</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="disp text-[36px] sm:text-[46px] font-semibold leading-[1.1]">Ways I can contribute</h2>
              <p className="text-[16px] leading-[1.7] mt-5 max-w-[34ch]">Select a row to read what the work involves.</p>

              <div className="mt-10 pt-6 border-t border-[#2A211B]/25 max-w-[34ch]">
                <p className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">Working from</p>
                <p className="text-[16px] mt-1.5">Freetown, Sierra Leone</p>
                <p className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A] mt-5">Tools I build with</p>
                <p className="mono text-[13px] text-[#2A211B] mt-1.5 leading-relaxed">HTML · CSS · JavaScript · React · Vite · Tailwind CSS</p>
                <a className="txt-act inline-flex items-center gap-1.5 text-[15px] mt-7 decoration-[#B8462C]" href="mailto:medrahmanz@gmail.com">
                  <i className="ti ti-mail text-[16px]" />
                  Ask about a project
                  <i className="ti ti-arrow-up-right text-[14px]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8" id="svc-list">
              {serviceItems.map((service, index) => (
                <details key={service.title} className="svc-row border-t border-[#2A211B]/30" open={index === 0}>
                  <summary className="flex items-baseline gap-5 py-6">
                    <span className="mono text-[12px] text-[#C68A31] w-8 shrink-0">{String(index + 1).padStart(2, '0')}</span>
                    <span className="disp text-[24px] sm:text-[26px] font-semibold flex-1">{service.title}</span>
                    <span className="plus mono text-[20px] text-[#B8462C] shrink-0 leading-none">+</span>
                  </summary>
                  <p className="text-[16px] leading-[1.75] pb-7 pl-13 max-w-[58ch]">{service.description}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#F3EBDD]" id="education">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="marker mono text-[12px] tracking-widest uppercase text-[#B8462C]">06 / Educ.</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <h2 className="disp text-[34px] sm:text-[42px] font-semibold leading-tight">Education & practical experience</h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mt-12">
            <div className="lg:col-span-6">
              <h3 className="mono text-[12px] uppercase tracking-[0.16em] text-[#42687A] pb-4 border-b border-[#2A211B]/25">Education</h3>
              <ol className="mt-8 space-y-9">
                <li className="grid grid-cols-[92px_1fr] gap-5">
                  <div className="mono text-[13px] text-[#B8462C] border-l-2 border-[#B8462C] pl-3 py-0.5">
                    2027
                    <br />
                    <span className="text-[12px] text-[#2A211B]/60">expected</span>
                  </div>
                  <div>
                    <p className="disp text-[21px] font-semibold leading-snug">BSc Computer Science</p>
                    <p className="text-[16px] mt-1.5">University of Management and Technology (UNIMTECH)</p>
                    <p className="mono text-[12px] uppercase tracking-widest text-[#42687A] mt-2">Final Year</p>
                  </div>
                </li>

                <li className="grid grid-cols-[92px_1fr] gap-5">
                  <div className="mono text-[13px] text-[#B8462C] border-l-2 border-[#B8462C] pl-3 py-0.5">Makeni</div>
                  <div>
                    <p className="disp text-[21px] font-semibold leading-snug">Secondary school</p>
                    <p className="text-[16px] mt-1.5">Benevolent Islamic Secondary School, Makeni</p>
                  </div>
                </li>

                <li className="grid grid-cols-[92px_1fr] gap-5">
                  <div className="mono text-[13px] text-[#B8462C] border-l-2 border-[#B8462C] pl-3 py-0.5">
                    2020
                    <br />
                    –2021
                  </div>
                  <div>
                    <p className="disp text-[21px] font-semibold leading-snug">WASSCE</p>
                    <p className="text-[16px] mt-1.5">West African Senior School Certificate Examination</p>
                  </div>
                </li>
              </ol>

              <div className="mt-12 pt-6 border-t border-[#2A211B]/25 max-w-[40ch]">
                <p className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">Currently</p>
                <p className="text-[16px] leading-[1.7] mt-1.5">Studying full time in Freetown and building websites alongside coursework.</p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h3 className="mono text-[12px] uppercase tracking-[0.16em] text-[#42687A] pb-4 border-b border-[#2A211B]/25">Practical experience</h3>
              <dl className="mt-2">
                {[
                  ['Front-End Development', 'Building responsive pages and interfaces with HTML, CSS, JavaScript, React and Tailwind CSS.'],
                  ['Academic Programming', 'Coursework exercises and assignments written in C#, Python, C++ and Java.'],
                  ['Database Coursework', 'Writing MySQL queries and connecting simple applications to a database.'],
                  ['GitHub Projects', 'Keeping practice builds and class work in version control and published on GitHub.'],
                ].map(([title, description]) => (
                  <div key={title} className="py-5 border-b border-[#2A211B]/20">
                    <dt className="disp text-[20px] font-semibold">{title}</dt>
                    <dd className="text-[16px] leading-[1.7] mt-1.5 max-w-[46ch]">{description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="on-dark grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#2A211B] text-[#E7D9BE]" id="github">
        <div className="rail-dark pt-20 pb-20 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#C68A31]">07 / GitHub</span>
        </div>

        <div className="pt-20 pb-20 pl-5 md:pl-9 pr-6 md:pr-14">
          <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-16">
            <div className="max-w-[46ch]">
              <img alt="Morlai stamp" className="w-11 h-11 object-cover border border-[#C68A31]/60 mb-7" src={logo} />
              <h2 className="disp text-[32px] sm:text-[38px] font-semibold leading-tight">Where the experiments live</h2>
              <p className="text-[16px] leading-[1.75] mt-5 text-[#E7D9BE]/85">My repositories are where coursework, practice builds, and small experiments continue after class.</p>
            </div>

            <div className="lg:ml-auto lg:pb-1">
              <a className="txt-act inline-flex items-center gap-2.5 text-[18px] text-[#C68A31] decoration-[#C68A31]" href="https://github.com/medrahmanz-max" target="_blank" rel="noreferrer">
                <i className="ti ti-brand-github text-[20px]" />
                Open GitHub profile
                <i className="ti ti-arrow-up-right text-[17px]" />
              </a>
              <p className="mono text-[12px] text-[#E7D9BE]/55 mt-3">github.com/medrahmanz-max</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr]" id="contact">
        <div className="rail pt-24 pb-24 pr-3 md:pr-5 text-right">
          <span className="mono text-[12px] tracking-[0.14em] uppercase text-[#B8462C]">08 / Contact</span>
        </div>

        <div className="pt-24 pb-24 pl-5 md:pl-9 pr-6 md:pr-14">
          <div className="max-w-155">
            <h2 className="disp text-[34px] sm:text-[42px] font-semibold leading-[1.15]">Have a website idea or a project to discuss?</h2>
            <p className="text-[17px] leading-[1.75] mt-6">For questions, small website work, or feedback on a project, email me.</p>

            <div className="mt-10 flex flex-wrap items-center gap-x-9 gap-y-5">
              <a className="btn-rust inline-flex items-center gap-2.5 px-6 py-3.5 text-[16px] font-medium" href="mailto:medrahmanz@gmail.com">
                <i className="ti ti-mail text-[18px]" />
                medrahmanz@gmail.com
              </a>
              <a className="txt-act inline-flex items-center gap-2 text-[16px] decoration-[#B8462C]" href="https://github.com/medrahmanz-max" target="_blank" rel="noreferrer">
                <i className="ti ti-brand-github text-[18px]" />
                GitHub
                <i className="ti ti-arrow-up-right text-[15px]" />
              </a>
            </div>

            <dl className="mt-12 pt-6 border-t border-[#2A211B]/25 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
              <div>
                <dt className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">Address</dt>
                <dd className="text-[16px] mt-1.5">Shell New Road, Freetown, Sierra Leone</dd>
              </div>
              <div>
                <dt className="mono text-[12px] uppercase tracking-[0.12em] text-[#42687A]">Phone</dt>
                <dd className="text-[16px] mt-1.5 mono">+232 77-06-24-01</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <footer className="grid grid-cols-[13%_1fr] md:grid-cols-[11%_1fr] bg-[#F3EBDD]">
        <div className="rail pt-10 pb-12 pr-3 md:pr-5" />
        <div className="pt-10 pb-12 pl-5 md:pl-9 pr-6 md:pr-14">
          <div className="border-t border-[#2A211B]/35 pt-8 flex flex-wrap items-start gap-x-12 gap-y-8">
            <div className="flex items-center gap-3">
              <img alt="Morlai logo" className="w-10 h-10 object-cover border border-[#2A211B]/40" src={logo} />
              <div className="leading-tight">
                <div className="disp text-[17px] font-semibold">Morlai Mansaray</div>
                <div className="mono text-[12px] text-[#42687A]">Computer Science student and web developer</div>
              </div>
            </div>

            <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[14px]">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#B8462C]">
                  {item}
                </a>
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-5 text-[19px]">
              <a aria-label="Email Morlai" className="hover:text-[#B8462C]" href="mailto:medrahmanz@gmail.com">
                <i className="ti ti-mail" />
              </a>
              <a aria-label="GitHub profile" className="hover:text-[#B8462C]" href="https://github.com/medrahmanz-max" target="_blank" rel="noreferrer">
                <i className="ti ti-brand-github" />
              </a>
            </div>
          </div>
          <p className="mono text-[12px] text-[#2A211B]/65 mt-8">© 2026 Morlai Mansaray.</p>
        </div>
      </footer>
    </div>
  );
}

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Education from './components/Education';
import GitHubSection from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Education />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ReduceMotionToggle from './components/ReduceMotionToggle';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <CTA />
      <Footer />
      <ReduceMotionToggle />
    </div>
  );
}

export default App;

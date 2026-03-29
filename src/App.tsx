import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Personal from './components/Personal';
import Contact from './components/Contact';
import WaveDivider from './components/WaveDivider';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <WaveDivider upperColor="var(--color-hero-start)" lowerColor="var(--color-coral-start)" />
        <About />
        <WaveDivider upperColor="var(--color-bg-light)" lowerColor="var(--color-coral-start)" flip={true} />
        <Experience />
        <WaveDivider upperColor="var(--color-bg-light)" lowerColor="var(--color-hero-start)" />
        <Education />
        <WaveDivider upperColor="var(--color-bg-light)" lowerColor="var(--color-hero-start)" flip={true} />
        <Skills />
        <WaveDivider upperColor="var(--color-bg-light)" lowerColor="var(--color-coral-start)" />
        <Projects />
        <WaveDivider lowerColor="var(--color-coral-start)" upperColor="var(--color-hero-start)" flip={true} />
        <Personal />
        <WaveDivider upperColor="var(--color-hero-start)" lowerColor="var(--color-coral-start)" />
        <Contact />
      </main>
      <WaveDivider lowerColor="var(--color-coral-start)" upperColor="var(--color-hero-start)" flip={true} />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jacob Knuts Johansson. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;

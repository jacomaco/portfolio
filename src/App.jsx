import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Interests from './components/Interests';
import Contact from './components/Contact';
import WaveDivider from './components/WaveDivider';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <WaveDivider upperColor="#667eea" lowerColor="#FF6B6B" />
        <About />
        <WaveDivider upperColor="#FF6B6B" lowerColor="#4ECDC4" />
        <Experience />
        <WaveDivider upperColor="#4ECDC4" lowerColor="#A8E6CF" />
        <Education />
        <WaveDivider upperColor="#A8E6CF" lowerColor="#ffffff" />
        <Skills />
        <WaveDivider upperColor="#ffffff" lowerColor="#FF8A5B" />
        <Projects />
        <WaveDivider upperColor="#FF8A5B" lowerColor="#B794F6" />
        <Languages />
        <WaveDivider upperColor="#B794F6" lowerColor="#63B3ED" />
        <Interests />
        <WaveDivider upperColor="#63B3ED" lowerColor="#FF8A5B" />
        <Contact />
      </main>
      <WaveDivider upperColor="#FF8A5B" lowerColor="#667eea" />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jacob Knuts Johansson. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;

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
        <WaveDivider upperColor="#667eea" lowerColor="#FF6B6B" />
        <About />
        <WaveDivider upperColor="#f8f9ff" lowerColor="#FF6B6B" flip={true} />
        <Experience />
        <WaveDivider upperColor="#f8f9ff" lowerColor="#667eea" />
        <Education />
        <WaveDivider upperColor="#ffffff" lowerColor="#667eea" flip={true} />
        <Skills />
        <WaveDivider upperColor="#ffffff" lowerColor="#FF6B6B" />
        <Projects />
        <WaveDivider lowerColor="#FF6B6B" upperColor="#667eea" flip={true} />
        <Personal />
        <WaveDivider upperColor="#667eea" lowerColor="#FF6B6B" />
        <Contact />
      </main>
      <WaveDivider lowerColor="#FF6B6B" upperColor="#667eea" flip={true} />
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jacob Knuts Johansson. Alla rättigheter förbehållna.</p>
      </footer>
    </div>
  );
}

export default App;

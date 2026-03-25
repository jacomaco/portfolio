import { useState, useEffect } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Orden som ska loopas i din typing effect
  const words = ['Fullstack Developer', 'MERN-specialist', 'Kreativ Problemlösare'];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, typingSpeed]);

  const handleType = () => {
    const i = loopNum % words.length;
    const fullText = words[i];

    // Om vi raderar, ta bort en bokstav. Om vi skriver, lägg till en bokstav.
    setText(isDeleting 
      ? fullText.substring(0, text.length - 1) 
      : fullText.substring(0, text.length + 1)
    );

    // Gör raderandet snabbare än skrivandet
    setTypingSpeed(isDeleting ? 50 : 150);

    // Logik för att byta mellan att skriva och radera
    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500); // Pausa när ordet är färdigskrivet
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500); // Kort paus innan nästa ord börjar skrivas
    }
  };

  return (
    <section id="hero" className="section">
      <div className="container">
        <h1 className="hero-title">Jacob Knuts Johansson</h1>
        
        {/* Typing effect container */}
        <h2 className="hero-typing-container">
          Jag är en <span className="hero-typed-text">{text}</span>
          <span className="hero-cursor">|</span>
        </h2>
        
        <p className="hero-location">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Stockholm
        </p>
        <p className="hero-tagline">
          Bygger moderna webbapplikationer med React, Node.js och MongoDB
        </p>

        {/* CTA Grouping likt Codecademy */}
        <div className="hero-cta-group">
          <p className="cta-label">Låt oss skapa något fantastiskt</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Se Projekt</a>
            <a href="#contact" className="btn btn-secondary">Kontakta Mig</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
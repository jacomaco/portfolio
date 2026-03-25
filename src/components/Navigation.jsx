import { scroller } from 'react-scroll';

const Navigation = () => {
  const scrollTo = (e, section) => {
    e.preventDefault(); // Förhindrar standardhoppet från <a>-taggen
    scroller.scrollTo(section, {
      smooth: true,
      offset: -80,
      duration: 500
    });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="nav-logo">
          Portfolio
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => scrollTo(e, 'about')}>Om mig</a></li>
          <li><a href="#experience" onClick={(e) => scrollTo(e, 'experience')}>Erfarenhet</a></li>
          <li><a href="#education" onClick={(e) => scrollTo(e, 'education')}>Utbildning</a></li>
          <li><a href="#skills" onClick={(e) => scrollTo(e, 'skills')}>Kunskaper</a></li>
          <li><a href="#projects" onClick={(e) => scrollTo(e, 'projects')}>Projekt</a></li>
          <li><a href="#languages" onClick={(e) => scrollTo(e, 'languages')}>Språk</a></li>
          <li><a href="#interests" onClick={(e) => scrollTo(e, 'interests')}>Intressen</a></li>
          <li><a href="#contact" onClick={(e) => scrollTo(e, 'contact')}>Kontakt</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
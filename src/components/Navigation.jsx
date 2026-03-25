import { useState } from 'react';
import { scroller } from 'react-scroll';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (e, section) => {
    e.preventDefault();
    setIsOpen(false); // Stäng menyn vid klick
    scroller.scrollTo(section, {
      smooth: true,
      offset: -80,
      duration: 500
    });
  };

  const navItems = [
    { id: 'about', label: 'Om mig' },
    { id: 'experience', label: 'Erfarenhet' },
    { id: 'education', label: 'Utbildning' },
    { id: 'skills', label: 'Kunskaper' },
    { id: 'projects', label: 'Projekt' },
    { id: 'languages', label: 'Språk' },
    { id: 'interests', label: 'Intressen' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="nav-logo">
          Portfolio
        </a>

        {/* Desktop-meny */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburgermeny för mobil */}
        <button 
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <svg viewBox="0 0 100 80" width="24" height="24" fill="currentColor">
            <rect className="line-1" width="100" height="10" rx="5"></rect>
            <rect className="line-2" y="35" width="100" height="10" rx="5"></rect>
            <rect className="line-3" y="70" width="100" height="10" rx="5"></rect>
          </svg>
        </button>
      </div>

      {/* Mobil Dropdown-meny */}
      <div className={`nav-mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={(e) => scrollTo(e, item.id)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
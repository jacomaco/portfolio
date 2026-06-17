import { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';

interface NavItem {
  id: string;
  label: string;
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setIsOpen(false);
    scroller.scrollTo(section, {
      smooth: true,
      offset: -80,
      duration: 500
    });
  };

  const navItems: NavItem[] = [
    { id: 'about', label: 'Om mig' },
    { id: 'experience', label: 'Erfarenhet' },
    { id: 'education', label: 'Utbildning' },
    { id: 'skills', label: 'Kunskaper' },
    { id: 'projects', label: 'Projekt' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="nav-logo">
          JKJ
        </a>

        <div className="nav-controls">
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

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle dark mode">
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M22 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            )}
          </button>

          {/* Hamburgermeny för mobil */}
          <button
            className={`nav-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 100 100" width="24" height="24" fill="currentColor">
              <rect className="line-1" y="10" width="100" height="10" rx="5"></rect>
              <rect className="line-2" y="45" width="100" height="10" rx="5"></rect>
              <rect className="line-3" y="80" width="100" height="10" rx="5"></rect>
            </svg>
          </button>
        </div>
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

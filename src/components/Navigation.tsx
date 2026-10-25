import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollProgress from './ScrollProgress';
import { scrollToSection } from './SmoothScroll';

gsap.registerPlugin(ScrollTrigger);

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'Om mig' },
  { id: 'experience', label: 'Erfarenhet' },
  { id: 'education', label: 'Utbildning' },
  { id: 'skills', label: 'Kunskaper' },
  { id: 'projects', label: 'Projekt' },
  { id: 'contact', label: 'Kontakt' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
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

  useEffect(() => {
    const triggers = navItems.flatMap(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return [];

      return [{
        id,
        trigger: ScrollTrigger.create({
          trigger: section,
          start: 'top 40%',
          end: 'bottom 40%',
          onToggle: (self) => {
            if (self.isActive) setActiveSection(id);
          },
        }),
      }];
    });

    // Sätt rätt sektion direkt vid omladdning mitt på sidan.
    const current = triggers.find(({ trigger }) => trigger.isActive);
    if (current) setActiveSection(current.id);

    return () => {
      triggers.forEach(({ trigger }) => trigger.kill());
    };
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(section);
    scrollToSection(section);
  };

  return (
    <nav className="navbar">
      <ScrollProgress />
      <div className="nav-container">
        {/* Desktop-meny */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-controls">
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
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                aria-current={activeSection === item.id ? 'location' : undefined}
                onClick={(e) => scrollTo(e, item.id)}
              >
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

import FadeInSection from './FadeInSection';

interface Language {
  language: string;
  level: string;
}

const languages: Language[] = [
  { language: 'Svenska', level: 'Modersmål' },
  { language: 'Engelska', level: 'Flytande i tal och skrift' },
  { language: 'Spanska', level: 'Grundläggande' }
];

const interests: string[] = [
  'Motionera och spela bordtennis',
  'Läsa böcker och se på film',
  'Resa och bredda mina kunskaper',
  'Kontinuerligt lära mig nya tekniker'
];

const Personal = () => {
  return (
    <section id="personal" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title">Personligt</h2>
          <div className="personal-grid">
            <div className="personal-column">
              <h3 className="personal-subtitle">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                Språk
              </h3>
              <div className="personal-languages">
                {languages.map((lang, index) => (
                  <div key={index} className="language-card">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="personal-column">
              <h3 className="personal-subtitle">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Intressen
              </h3>
              <ul className="personal-interests">
                {interests.map((interest, index) => (
                  <li key={index} className="interest-item">
                    <span className="interest-bullet">→</span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Personal;

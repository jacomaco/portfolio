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

const Languages = () => {
  return (
    <section id="languages" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title-dark">Språk</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-card">
                <div className="language-header">
                  <h3 className="language-name">{lang.language}</h3>
                  <span className="language-level">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Languages;

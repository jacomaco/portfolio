import FadeInSection from './FadeInSection';

const languages = [
  { language: 'Svenska', level: 'Modersmål', levelPercent: 100 },
  { language: 'Engelska', level: 'Flytande i tal och skrift', levelPercent: 95 },
  { language: 'Spanska', level: 'Grundläggande', levelPercent: 30 }
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
                <div className="language-bar">
                  <div
                    className="language-progress"
                    style={{ width: `${lang.levelPercent}%` }}
                  ></div>
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

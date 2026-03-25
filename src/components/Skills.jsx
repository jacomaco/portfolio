import FadeInSection from './FadeInSection';

const skills = {
  languages: ['JavaScript (ES6+)', 'Java', 'Python', 'C', 'Go'],
  frontend: ['React', 'HTML/CSS', 'Tailwind CSS', 'React Router'],
  backend: ['Node.js', 'Express', 'REST APIs', 'MVC'],
  database: ['MongoDB Atlas', 'Mongoose ODM', 'Google Cloud Storage'],
  tools: ['Git/GitHub', 'Vite', 'JWT', 'Bcrypt'],
  concepts: ['OOP', 'SOLID', 'SDLC', 'Agile', 'Deklarativ programmering', 'SPA-arkitektur', 'GDPR']
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title-dark">Kunskaper & Teknologier</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programmeringsspråk</h3>
              <div className="skill-tags">
                {skills.languages.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & API</h3>
              <div className="skill-tags">
                {skills.backend.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databas & Moln</h3>
              <div className="skill-tags">
                {skills.database.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Verktyg</h3>
              <div className="skill-tags">
                {skills.tools.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Koncept</h3>
              <div className="skill-tags">
                {skills.concepts.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Skills;

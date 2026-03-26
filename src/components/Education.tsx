import FadeInSection from './FadeInSection';

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details: string;
}

const education: EducationItem[] = [
  {
    degree: 'Civilingenjör Datateknik',
    school: 'KTH (Kungliga Tekniska Högskolan)',
    period: 'Pågående',
    details: 'Utbildningen ger en bred grund inom datateknik, inklusive programmering, systemutveckling och teknisk arkitektur.'
  },
  {
    degree: 'Naturvetenskapliga Programmet',
    school: 'Nacka Gymnasium',
    period: 'Avslutad',
    details: 'Gymnasieutbildning med inriktning mot naturvetenskap och matematik.'
  }
];

const Education = () => {
  return (
    <section id="education" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title-dark">Utbildning</h2>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <span className="education-school">{edu.school}</span>
                  <span className="education-period">{edu.period}</span>
                  <p className="education-details">{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Education;

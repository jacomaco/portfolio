import FadeInSection from './FadeInSection';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

const experience: ExperienceItem[] = [
  {
    title: 'Fullstack-Utvecklare',
    company: 'Star Match - IT-Konsulter, Stockholm',
    period: '2025 – 2026',
    bullets: [
      'Utvecklade en komplett fullstack-rekryteringsplattform (ATS) med MERN-stacken',
      'Implementerade ett responsivt gränssnitt i React och Tailwind CSS',
      'Byggde ett säkert autentiseringssystem med JWT och Bcrypt (HTTPOnly-cookies)',
      'Integrerade säker filuppladdning till Google Cloud Storage för kandidatansökningar',
      'Säkerställde GDPR-efterlevnad och implementerade säkerhetsarkitektur med Rate Limiting och Helmet'
    ]
  },
  {
    title: 'Lärare / Läxhjälp',
    company: 'StudyBuddy, Stockholm',
    period: '2023 – 2025',
    bullets: [
      'Undervisning och coachning av elever i matematik, NO och programmering',
      'Förklarar komplexa koncept på ett lättförståeligt sätt',
      'Tränar pedagogisk förmåga och inspirerande kommunikation'
    ]
  },
  // {
  //   title: 'Egenföretagare / Grundare',
  //   company: 'RS Sommarjobb',
  //   period: '2016',
  //   bullets: [
  //     'Startade och drev eget företag med inriktning på bilvård',
  //     'Ansvarade för marknadsföring, bokningshantering och kundkontakt',
  //     'Lärde mig vikten av eget driv, struktur och goda kundrelationer'
  //   ]
  // },
  // {
  //   title: 'Butikssäljare & Receptionist',
  //   company: 'Båthall 2',
  //   period: '2014',
  //   bullets: [
  //     'Direktförsäljning och kundrådgivning',
  //     'Snabbt förstå kunders behov och hitta rätt lösningar'
  //   ]
  // },
  // {
  //   title: 'Kundservice & Support',
  //   company: 'ICA & Djurönäset',
  //   period: '2015',
  //   bullets: [
  //     'Arbetade i miljöer med högt tempo',
  //     'Hanterade stressiga situationer med positiv inställning'
  //   ]
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title-dark">Arbetslivserfarenhet</h2>
          <div className="experience-grid">
            {experience.map((job, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-title">{job.title}</h3>
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-period">{job.period}</span>
                </div>
                <ul className="experience-bullets">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Experience;

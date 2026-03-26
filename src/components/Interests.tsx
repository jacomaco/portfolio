import FadeInSection from './FadeInSection';

const interests: string[] = [
  'Motionera och spela bordtennis',
  'Läsa böcker och se på film',
  'Resa och bredda mina kunskaper',
  'Kontinuerligt lära mig nya tekniker'
];

const Interests = () => {
  return (
    <section id="interests" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title-dark">Intressen</h2>
          <div className="interests-content">
            <ul className="interests-list">
              {interests.map((interest, index) => (
                <li key={index} className="interest-item">
                  <span className="interest-bullet">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Interests;

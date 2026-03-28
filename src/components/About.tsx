import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title">Om Mig</h2>
          <div className="about-content">
            <div className="about-photo">
              <img src={`${import.meta.env.BASE_URL}placeholderImage.png`} alt="Om Mig Foto" className="about-image" />
            </div>
            <div className="about-text">
              <p>
                Jag är en driven civilingenjörsstudent inom datateknik på KTH med en passion för modern webbutveckling och systemarkitektur.
                Genom min senaste erfarenhet som fullstack-utvecklare på Starmatch har jag praktisk vana av att bygga avancerade applikationer med MERN-stacken,
                där jag fokuserat på allt från säkerhetsarkitektur och GDPR-efterlevnad till molnbaserade lösningar.
              </p>
              <p>
                Med en bakgrund som både lärare och egenföretagare kombinerar jag teknisk problemlösning med en stark förmåga att
                kommunicera komplexa koncept och ta ett helhetsansvar. Jag drivs av att ständigt utvecklas, lära mig nya tekniker
                och att bidra i team som skapar innovativa lösningar med användaren i fokus.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

    </section>
  );
};

export default About;

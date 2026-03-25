import FadeInSection from './FadeInSection';

const About = () => {
  return (
    <section id="about" className="section">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title">Om Mig</h2>
          <div className="about-content">
            <div className="about-photo">
              <div className="photo-placeholder">[Foto]</div>
            </div>
            <div className="about-text">
              <p>
                Jag är en mycket positiv, flexibel, uthållig och driven person.
                Min utbildning och mina egna kodprojekt har gett mig en stark förmåga
                inom problemlösning och teknisk arkitektur.
              </p>
              <p>
                Genom min bakgrund inom kundservice och som egenföretagare är jag lyhörd,
                trivs i sociala sammanhang och är van vid att ta stort eget ansvar.
                Jag har alltid ett driv att lära mig nya tekniker och trivs utmärkt
                med att arbeta i team för att bygga bra system och starka kundupplevelser.
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

    </section>
  );
};

export default About;

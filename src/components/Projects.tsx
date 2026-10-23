import FadeInSection from './FadeInSection';

interface Project {
  name: string;
  role?: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  secondaryLink?: { label: string; url: string };
  wip?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const projects: Project[] = [
  {
    name: 'Föreningen Sicklaslussen — Webbplatsombyggnad',
    role: 'Webbutvecklare / Webbansvarig (ideellt uppdrag)',
    description: 'Komplett ombyggnad av föreningens föråldrade statiska webbplats till en modern, mobilanpassad och helt gratis sajt med Eleventy, GitHub Pages och ett webbläsarbaserat CMS. Ansvarade för hela kedjan: innehållsmigrering, design/layout, bildoptimering, sök, tillgänglighet, CI/CD, domän/DNS och dokumentation för överlämning till föreningen.',
    features: [
      'Statisk sajt i Eleventy (11ty) med Nunjucks-mallar, Markdown-innehåll och återanvändbara partials',
      'Automatiserad bildpipeline med @11ty/eleventy-img och sharp: responsiva webp/jpeg-versioner, lazy loading och hashade filnamn',
      'Migrerade 975 foton i 49 album, 46 PDF:er och 14 äldre HTML-artiklar till webboptimerade lokala resurser',
      'Tillgänglig lightbox i vanilla JS med tangentbordsnavigering, fokusfälla, aria-modal och touch-swipe',
      'Pages CMS så att föreningens redaktörer kan uppdatera nyheter, kalendarium, album och sidor – utan git-kunskap',
      'Pagefind-sökning med automatiskt genererat index och egen länkkontroll i Node.js som verifierar alla interna länkar i CI',
      'CI/CD med GitHub Actions för bygge, länkkontroll och publicering till GitHub Pages vid push till main',
      'Custom domain, DNS, canonical-URL:er, sitemap.xml, robots.txt, RSS, Open Graph och egen 404-sida',
    ],
    technologies: ['Eleventy 3', 'Nunjucks', 'Markdown', 'Node.js 22', '@11ty/eleventy-img', 'sharp', 'Pagefind', 'Vanilla JS', 'CSS', 'GitHub Actions', 'GitHub Pages', 'Pages CMS', 'Git'],
    link: 'https://jacomaco.github.io/sicklaSluss/',
    secondaryLink: { label: 'Gamla sidan', url: 'https://www.sicklasluss.se/' },
  },
  {
    name: 'Kornets Hälso Spa — Webbplats',
    role: 'Frontendutvecklare / webbutvecklare · Maj–augusti 2026 · Soloansvarig',
    description: 'Utvecklade och driftsatte en responsiv one-page-webbplats åt Kornets Hälso Spa på Södermalm i Stockholm. Ansvarade för hela den tekniska leveransen – från komponentarkitektur och styling till CI/CD, custom domain och produktion.',
    features: [
      'Byggde webbplatsen i React 19, TypeScript och Vite med ett återanvändbart komponentbibliotek och egen CSS',
      'Implementerade responsiv design med mobilanpassad meny och anpassning för desktop, tablet och mobil',
      'Utvecklade interaktiva komponenter: omdömeskarusell med autoplay och SVG-betyg, FAQ-accordion, scrolltriggade animationer (IntersectionObserver), behandlingsmarquee och back-to-top',
      'Genomförde prestanda- och SEO-arbete: lazy loading, bilddimensioner mot layoutskifte, fetchPriority för LCP-bild, preconnect, semantisk HTML och metadata',
      'Integrerade Bokadirekt (bokningsflöde), ASEA (extern shop), Vimeo (inbäddad film) och Google Maps',
      'Satte upp CI/CD med GitHub Actions som bygger och deployar till GitHub Pages vid push till main, med custom domain kornets.se bakom Cloudflare',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'CSS', 'ESLint', 'GitHub Actions', 'GitHub Pages', 'Cloudflare'],
    link: 'https://kornets.se/',
  },
  {
    name: 'Star Match',
    description: 'En komplett fullstack-rekryteringsplattform byggd med MERN-stacken. Plattformen erbjuder publicering av jobbannonser, hantering av kandidatansökningar och ett skräddarsytt CMS för administratörer.',
    features: [
      'Responsivt gränssnitt i React och Tailwind CSS',
      'Autentisering med JWT och Bcrypt (HTTPOnly-cookies)',
      'Säker ATS med filuppladdning till Google Cloud Storage',
      'GDPR-efterlevnad med säker radering av molndata',
      'Säkerhetsarkitektur: Rate Limiting, Helmet, robots.txt'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Google Cloud Storage', 'GCP'],
    link: 'https://starmatch.se'
  },
  {
    name: 'Jobbql — Auto-Apply Pipeline',
    description: 'Ett automationsverktyg som hämtar jobbannonser från Arbetsförmedlingens API, analyserar dem mot en kandidatprofil med AI, och genererar skräddarsydda CV:n. Systemet hanterar hela flödet från datainsamling till ansökningskö med dubblettskydd.',
    features: [
      'Realtidshämtning av jobbannonser via JobTech Dev Stream API',
      'AI-driven matchning och CV-generering mot användarprofil',
      'Mongoose-modeller med dubblettskydd (unikt index: userId + jobPostId)',
      'Asynkron generator-arkitektur för minneseffektiv bearbetning',
      'Dockeriserad MongoDB med Mongo Express för datavisualisering',
    ],
    technologies: ['TypeScript', 'Bun', 'MongoDB', 'Mongoose', 'Docker', 'REST API'],
    link: 'https://github.com/jacomaco/jobbql-autoapply',
    wip: true,
  },
];

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="project-card card-solid hover-lift">
    {project.wip && (
      <div className="wip-banner">
        <span className="wip-banner__icon">🚧</span>
        <span className="wip-banner__text">Under Utveckling</span>
      </div>
    )}
    <h3 className="project-title">{project.name}</h3>
    {(project.role) && (
      <p className="project-meta">
        <span>{project.role}</span>
      </p>
    )}
    <p className="project-description">{project.description}</p>
    <ul className="project-features">
      {project.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="project-tech">
      {project.technologies.map(tech => (
        <span key={tech} className={`tech-tag ${project.wip ? 'badge-wip' : 'badge-primary'}`}>{tech}</span>
      ))}
    </div>
    {project.link && (
      <div className="project-links">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
          {project.link.includes('github.com') ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>Se på GitHub</span>
            </>
          ) : (
            <>
              <span>Besök Projekt</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </>
          )}
        </a>
        {project.secondaryLink && (
          <a href={project.secondaryLink.url} target="_blank" rel="noopener noreferrer" className="project-link project-link--secondary">
            <span>{project.secondaryLink.label}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 7h10v10"></path>
              <path d="M7 17 17 7"></path>
            </svg>
          </a>
        )}
      </div>
    )}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="section bg-hero">
      <FadeInSection>
        <div className="container">
          <h2 className="section-title title-light">Projekt</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

export default Projects;


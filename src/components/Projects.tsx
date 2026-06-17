import FadeInSection from './FadeInSection';

interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  wip?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const projects: Project[] = [
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
  <div className={`project-card card-solid hover-lift ${project.wip ? 'project-card--wip' : 'project-card--regular'}`}>
    {project.wip && (
      <div className="wip-banner">
        <span className="wip-banner__icon">🚧</span>
        <span className="wip-banner__text">Under Utveckling</span>
      </div>
    )}
    <h3 className="project-title">{project.name}</h3>
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


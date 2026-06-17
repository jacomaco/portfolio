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
        <span>Besök Projekt</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 7h10v10"></path>
          <path d="M7 17 17 7"></path>
        </svg>
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


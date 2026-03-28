import FadeInSection from './FadeInSection';

interface Project {
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
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
      'Rollebaserad autentisering med JWT och Bcrypt (HTTPOnly-cookies)',
      'Säker ATS med filuppladdning till Google Cloud Storage',
      'GDPR-efterlevnad med säker radering av molndata',
      'Säkerhetsarkitektur: Rate Limiting, Helmet, robots.txt'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT', 'Google Cloud Storage', 'GCP'],
    link: 'https://one43-1s7b.onrender.com/'
  }
];

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="project-card card-solid hover-lift">
    <h3 className="project-title">{project.name}</h3>
    <p className="project-description">{project.description}</p>
    <ul className="project-features">
      {project.features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
    <div className="project-tech">
      {project.technologies.map(tech => (
        <span key={tech} className="tech-tag badge-primary">{tech}</span>
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
    <section id="projects" className="section bg-coral">
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

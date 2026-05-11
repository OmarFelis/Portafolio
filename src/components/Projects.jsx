import { projects, projectImages } from '../data/portfolio'
import ProjectCarousel from './ProjectCarousel'

function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2>
          <span className="section-number">05.</span>
          Proyectos
        </h2>
        <div className="grid grid-2">
          {projects.map((project, index) => (
            <div className="project-card fade-in" key={index}>
              <ProjectCarousel images={projectImages[project.imagesIndex]} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                    {project.linkLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

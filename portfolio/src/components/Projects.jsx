import ProjectCard from "./ProjectCard";
import { featuredProjects, otherProjects } from "../data/projects";

function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-heading">
        <p className="eyebrow">A few things I have built</p>
        <h2>Projects</h2>
        <p>
          From a production planning tool to a Raspberry Pi dashboard. These
          are the projects that best show how I approach a problem.
        </p>
      </div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="other-projects">
        <div>
          <p className="eyebrow">Other project</p>
          <h3>{otherProjects[0].title}</h3>
          <p>{otherProjects[0].summary}</p>
        </div>

        <div className="other-project-meta">
          <div className="technologies">
            {otherProjects[0].technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <a
            className="project-link"
            href={otherProjects[0].githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View project ↗
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

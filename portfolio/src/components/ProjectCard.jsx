function ProjectVisual({ project }) {
  if (project.images?.length) {
    return (
      <div className="project-visual project-visual-images">
        <div className="project-image-stack">
          {project.images.map((image, index) => (
            <figure className="project-preview" key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className={index === 0 ? "project-preview-primary" : ""}
              />
            </figure>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual" aria-hidden="true">
      <div className="visual-window">
        <div className="visual-window-bar">
          <span />
          <span />
          <span />
        </div>

        <div className="visual-content">
          <p>{project.visualLabel}</p>
          <strong>{project.title}</strong>

          <div className="visual-items">
            {project.visualItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article
      className={`project-feature ${index % 2 === 1 ? "project-feature-reverse" : ""}`}
    >
      <ProjectVisual project={project} />

      <div className="project-details">
<<<<<<< HEAD
        <p className="eyebrow">{project.eyebrow}</p>
=======
        <div className="project-kicker">
          <span className="project-number">0{index + 1}</span>
          <p className="eyebrow">{project.eyebrow}</p>
        </div>
>>>>>>> portfolio-redesign
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contribution}</p>

<<<<<<< HEAD
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

=======
>>>>>>> portfolio-redesign
        <div className="technologies" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {project.githubUrl ? (
          <a
            className="project-link"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
<<<<<<< HEAD
            View on GitHub ↗
=======
            View code ↗
>>>>>>> portfolio-redesign
          </a>
        ) : (
          <p className="project-note">Private or company-owned code</p>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;

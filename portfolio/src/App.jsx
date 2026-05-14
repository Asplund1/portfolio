const projects = [
  {
    title: "Dashboard",
    description:
      "A personal dashboard built for a Raspberry Pi screen. The application displays useful information such as weather, time and API-based data in a clean interface designed for daily use at home. The project combines frontend development with a small backend that handles API requests and data caching. It is built with React, Node.js and Express.",
    technologies: ["React", "Node.js", "Express"],
    image: "/images/dashboard.png",
    githubUrl: "https://github.com/Asplund1/Home-screen",
  },
  {
    title: "Hitract Admin Page",
    description:
      "Developed an admin page for apartment rental management during a six-month LIA internship at Hitract. The project was built in a real company environment where I worked with an existing codebase, design requirements and frontend architecture. My work focused on creating user-friendly admin functionality with React, TypeScript and Material UI. The code is company-owned, but selected screenshots are included to show the interface and the type of work I contributed to.",
    technologies: ["React", "TypeScript", "Material UI", "Frontend"],
    image: "/images/hitract-admin.png",
    githubUrl: "",
  },
  {
    title: "Karolinska Project",
    description:
      "A prototype for a digital tool that supports production planning and dimensioning in a healthcare context. The project focuses on making complex planning data easier to enter, understand and connect to resource needs. I work with user flows, interface design and database-driven functionality to reduce manual administration and create a clearer planning process. The solution is built with React, Next.js and PostgreSQL.",
    technologies: ["React", "Next.js", "PostgreSQL"],
    image: "/images/karolinska.png",
    githubUrl: "",
  },

  {
    title: "Airbean API",
    description:
      "A school collaboration project between frontend students, system development students and fullstack students. I was responsible for the backend and worked with the API, database structure and logic needed to support the application. Since I understood both the frontend needs and the backend requirements, I also acted as a bridge between different parts of the group to help make the full solution work together.",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    image: "",
    githubUrl: "https://github.com/orgs/GruppII-ChasAcademy/repositories",
  },
];

function ProjectImage({ src, title }) {
  if (!src) {
    return (
      <div className="project-placeholder">
        <span>{title}</span>
      </div>
    );
  }

  return (
    <img
      className="project-image"
      src={src}
      alt={`Screenshot of ${title}`}
      onError={(event) => {
        event.currentTarget.style.display = "none";

        const fallback = event.currentTarget.nextElementSibling;

        if (fallback) {
          fallback.style.display = "flex";
        }
      }}
    />
  );
}

function App() {
  return (
    <main>
      <header className="hero">
        <p className="tag">Fullstack JavaScript Developer</p>

        <h1>Andreas Asplund</h1>

        <p className="intro">
          I am an educated fullstack JavaScript developer with real world experience
          from building web applications in company projects, team collaborations and
          independent projects. I focus on creating clean and readable code with modern standards and a clear structure.
        </p>

        <div className="links">
          <a href="#projects">Projects</a>

          <a
            href="https://github.com/Asplund1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/andreas-asplund-558bab32a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </header>

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="projects">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="image-wrapper">
                <ProjectImage src={project.image} title={project.title} />

                <div className="project-placeholder fallback">
                  <span>{project.title}</span>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="technologies">
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
                    View on GitHub
                  </a>
                ) : (
                  <p className="private-code">Company-owned code</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>About</h2>

        <p className="text">
          I am an educated fullstack JavaScript developer with real world experience
          from working in company environments, school collaborations and independent
          projects. I have developed systems both on my own and together with different
          teams, which has given me experience in understanding user needs, technical
          requirements and how different parts of an application connect. I always aim
          to write clean, readable and maintainable code that follows modern standards
          and is easy for other developers to understand.
        </p>
      </section>

      <section className="section">
        <h2>Contact</h2>

        <p className="text">
          You can reach me by email or connect with me on LinkedIn.
        </p>

        <div className="links">
          <a href="mailto:asplund_andreas@outlook.com">Email</a>

          <a
            href="https://www.linkedin.com/in/ditt-linkedin-namn"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
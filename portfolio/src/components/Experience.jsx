const experiences = [
  {
    role: "Fullstack Developer Intern",
    company: "Hitract",
    period: "Nov 2025 – Apr 2026",
    description:
      "Worked in an existing product environment with React, TypeScript and Material UI, developing administrative interfaces and data-driven functionality.",
  },
  {
    role: "Thesis Project · Fullstack Development",
    company: "Karolinska",
    period: "May 2026 – Jun 2026",
    description:
      "Developed a fullstack prototype for production planning and resource dimensioning, working from stakeholder requirements to interface, application logic and database.",
  },
];

function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-heading compact">
        <p className="eyebrow">Work and study</p>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={experience.company}>
            <div>
              <p className="experience-period">{experience.period}</p>
              <h3>{experience.role}</h3>
              <p className="experience-company">{experience.company}</p>
            </div>

            <p className="experience-description">{experience.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;

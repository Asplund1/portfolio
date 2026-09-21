const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Material UI"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Vite", "GitHub"],
  },
];

function Skills() {
  return (
    <section className="section skills-section" aria-labelledby="skills-title">
      <div className="section-heading compact">
<<<<<<< HEAD
        <p className="eyebrow">Technologies</p>
        <h2 id="skills-title">Tools I work with.</h2>
=======
        <p className="eyebrow">The toolbox</p>
        <h2 id="skills-title">What I use</h2>
>>>>>>> portfolio-redesign
      </div>

      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

function Hero() {
  return (
    <header className="hero" id="top">
      <p className="eyebrow">Fullstack Developer · Stockholm</p>

      <h1>Portfolio · Andreas Asplund</h1>

      <p className="hero-copy">
        I work primarily with React, TypeScript, Next.js, Node.js and PostgreSQL.
        My experience includes an internship at Hitract, a thesis project for
        Karolinska and independent fullstack projects.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="#work">
          View my work
        </a>

        <a
          className="button button-secondary"
          href="https://github.com/Asplund1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          className="text-link"
          href="https://www.linkedin.com/in/andreas-asplund-558bab32a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn ↗
        </a>
      </div>

      <div className="hero-meta" aria-label="Current status">
        <span className="status-dot" aria-hidden="true" />
        Open to development opportunities
      </div>
    </header>
  );
}

export default Hero;

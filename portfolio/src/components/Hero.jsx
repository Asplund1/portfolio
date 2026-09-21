function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-intro">
        <p className="eyebrow">Andreas Asplund · Stockholm</p>
        <h1>Fullstack developer for the web.</h1>
        <p className="hero-copy">
          I like working on the parts people use and the parts they never see:
          interfaces, APIs, databases and the small decisions in between.
        </p>

        <div className="hero-actions">
          <a className="button button-primary" href="#work">
            Look at my work
          </a>

          <a
            className="text-link"
            href="https://github.com/Asplund1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="hero-aside">
        <p className="hero-aside-label">Currently</p>
        <p>Looking for a place to keep building.</p>
        <div className="hero-meta" aria-label="Current status">
          <span className="status-dot" aria-hidden="true" />
          Open to development roles
        </div>
      </div>
    </header>
  );
}

export default Hero;

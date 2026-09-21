function About() {
  return (
    <section className="section about" id="about">
      <div className="about-heading">
        <p className="eyebrow">A little about me</p>
        <h2>I care about how things work.</h2>
      </div>

      <div className="about-copy">
        <p>
          I am a Stockholm-based developer with a background in fullstack web
          development and a preference for useful, well-made software.
        </p>
        <p>
          I enjoy getting into the details, whether that means cleaning up a
          UI, tracing a request through an API or figuring out a database
          model. Good code should make the next change easier.
        </p>
      </div>
    </section>
  );
}

export default About;

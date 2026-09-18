function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="eyebrow">Contact</p>
      <h2>Interested in working together?</h2>
      <p>
        I am open to fullstack, frontend and software development opportunities
        in Stockholm.
      </p>

      <div className="contact-links">
        <a className="button button-primary" href="mailto:asplund_andreas@outlook.com">
          Send me an email
        </a>

        <a
          className="button button-secondary"
          href="https://www.linkedin.com/in/andreas-asplund-558bab32a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
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
    </section>
  );
}

export default Contact;

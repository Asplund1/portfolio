import { ContactSection, DarkButton, Eyebrow, LightButton, Link, Links } from "../styles/ContactStyles";

function Contact() {
  return (
    <ContactSection id="contact">
      <Eyebrow>Say hello</Eyebrow>
      <h2>Have a project in mind?</h2>
      <p>
        I am open to fullstack, frontend and software development roles. Email
        is the easiest way to reach me.
      </p>

      <Links>
        <LightButton href="mailto:asplund_andreas@outlook.com">
          Get in touch
        </LightButton>

        <DarkButton
          href="https://www.linkedin.com/in/andreas-asplund-558bab32a/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </DarkButton>

        <Link
          href="https://github.com/Asplund1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </Link>
      </Links>
    </ContactSection>
  );
}

export default Contact;

import { Eyebrow } from "../styles/layout";
import { Copy, Heading, Layout, Title } from "../styles/AboutStyles";

function About() {
  return (
    <Layout as="section" id="about">
      <Heading>
        <Eyebrow>A little about me</Eyebrow>
        <Title>I care about how things work.</Title>
      </Heading>

      <Copy>
        <p>
          I am a Stockholm-based developer with a background in fullstack web
          development and a preference for useful, well-made software.
        </p>
        <p>
          I enjoy getting into the details, whether that means cleaning up a
          UI, tracing a request through an API or figuring out a database
          model. Good code should make the next change easier.
        </p>
      </Copy>
    </Layout>
  );
}

export default About;

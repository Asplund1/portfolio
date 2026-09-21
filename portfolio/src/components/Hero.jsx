import { Eyebrow, PrimaryButton, TextLink } from "../styles/layout";
import { Actions, Aside, AsideLabel, Copy, HeroSection, Intro, Meta, StatusDot, Title } from "../styles/HeroStyles";

function Hero() {
  return (
    <HeroSection id="top">
      <Intro>
        <Eyebrow>Andreas Asplund · Stockholm</Eyebrow>
        <Title>Fullstack developer for the web.</Title>
        <Copy>
          I like working on the parts people use and the parts they never see:
          interfaces, APIs, databases and the small decisions in between.
        </Copy>

        <Actions>
          <PrimaryButton href="#work">
            Look at my work
          </PrimaryButton>

          <TextLink
            href="https://github.com/Asplund1"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </TextLink>
        </Actions>
      </Intro>

      <Aside>
        <AsideLabel>Currently</AsideLabel>
        <p>Looking for a place to keep building.</p>
        <Meta aria-label="Current status">
          <StatusDot aria-hidden="true" />
          Open to development roles
        </Meta>
      </Aside>
    </HeroSection>
  );
}

export default Hero;

import { Eyebrow } from "../styles/layout";
import { Description, Heading, Item, List, Period, Role, Company, Section } from "../styles/ExperienceStyles";
import { HeadingTitle } from "../styles/SectionStyles";

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
    <Section id="experience">
      <Heading compact>
        <Eyebrow>Work and study</Eyebrow>
        <HeadingTitle>Experience</HeadingTitle>
      </Heading>

      <List>
        {experiences.map((experience) => (
          <Item key={experience.company}>
            <div>
              <Period>{experience.period}</Period>
              <Role>{experience.role}</Role>
              <Company>{experience.company}</Company>
            </div>

            <Description>{experience.description}</Description>
          </Item>
        ))}
      </List>
    </Section>
  );
}

export default Experience;

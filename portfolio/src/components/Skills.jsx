import { Eyebrow, Tags } from "../styles/layout";
import { Grid, Group, Heading, Section } from "../styles/SkillsStyles";
import { HeadingTitle } from "../styles/SectionStyles";

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
    skills: ["Git", "Docker", "GitHub"],
  },
];

function Skills() {
  return (
    <Section aria-labelledby="skills-title">
      <Heading compact>
        <Eyebrow>The toolbox</Eyebrow>
        <HeadingTitle id="skills-title">What I use</HeadingTitle>
      </Heading>

      <Grid>
        {skillGroups.map((group, index) => (
          <Group $index={index} key={group.title}>
            <h3>{group.title}</h3>
            <Tags>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </Tags>
          </Group>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;

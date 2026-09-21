import ProjectCard from "./ProjectCard";
import { featuredProjects, otherProjects } from "../data/projects";
import { Eyebrow, Tags, TextLink } from "../styles/layout";
import { Featured, Other, OtherMeta } from "../styles/ProjectsStyles";
import { Heading, HeadingCopy, HeadingTitle, Section } from "../styles/SectionStyles";

function Projects() {
  return (
    <Section id="work">
      <Heading>
        <Eyebrow>A few things I have built</Eyebrow>
        <HeadingTitle>Projects</HeadingTitle>
        <HeadingCopy>
          From a production planning tool to a Raspberry Pi dashboard. These
          are the projects that best show how I approach a problem.
        </HeadingCopy>
      </Heading>

      <Featured>
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </Featured>

      <Other>
        <div>
          <Eyebrow>Other project</Eyebrow>
          <h3>{otherProjects[0].title}</h3>
          <p>{otherProjects[0].summary}</p>
        </div>

        <OtherMeta>
          <Tags>
            {otherProjects[0].technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </Tags>

          <TextLink
            href={otherProjects[0].githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View project ↗
          </TextLink>
        </OtherMeta>
      </Other>
    </Section>
  );
}

export default Projects;

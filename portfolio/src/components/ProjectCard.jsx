import { Eyebrow, Tags } from "../styles/layout";
import { CardTags, Contribution, Details, Feature, ImageStack, ImageVisual, Kicker, Note, Number, Preview, ProjectLink, Summary, Title, Visual, VisualContent, VisualItems, Window, WindowBar } from "../styles/ProjectCardStyles";

function ProjectVisual({ project }) {
  if (project.images?.length) {
    return (
      <ImageVisual>
        <ImageStack>
          {project.images.map((image) => (
            <Preview key={image.src}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />
            </Preview>
          ))}
        </ImageStack>
      </ImageVisual>
    );
  }

  return (
    <Visual aria-hidden="true">
      <Window>
        <WindowBar>
          <span />
          <span />
          <span />
        </WindowBar>

        <VisualContent>
          <p>{project.visualLabel}</p>
          <strong>{project.title}</strong>

          <VisualItems>
            {project.visualItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </VisualItems>
        </VisualContent>
      </Window>
    </Visual>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Feature $reverse={index % 2 === 1}>
      <ProjectVisual project={project} />

      <Details>
        <Kicker>
          <Number>0{index + 1}</Number>
          <Eyebrow>{project.eyebrow}</Eyebrow>
        </Kicker>
        <Title>{project.title}</Title>
        <Summary>{project.summary}</Summary>
        <Contribution>{project.contribution}</Contribution>

        <CardTags aria-label="Technologies used"><Tags>
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </Tags></CardTags>

        {project.githubUrl ? (
          <a
            as={ProjectLink}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View code ↗
          </a>
        ) : (
            <Note>Private or company-owned code</Note>
        )}
      </Details>
    </Feature>
  );
}

export default ProjectCard;

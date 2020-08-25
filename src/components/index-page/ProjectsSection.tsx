import React, { FC } from "react";
import IndexContentContainer from "../common/IndexContentContainer";
import styled from "styled-components";
import { ProjectsContent } from "types";

const ProjectsSection: FC<{ projectsContent: ProjectsContent[] }> = ({
  projectsContent,
}) => (
  <ProjectContentBase sectionType="projects" title="Projects">
    {projectsContent.map(({ link, name, description }) => (
      <ProjectDescriptionBase>
        <ProjectLink href={link} target="_blank">
          {name}
        </ProjectLink>{" "}
        - {description}
      </ProjectDescriptionBase>
    ))}
  </ProjectContentBase>
);

export default ProjectsSection;

const ProjectDescriptionBase = styled.p`
  margin: 0;
`;

const ProjectContentBase = styled(IndexContentContainer)`
  ${ProjectDescriptionBase}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ProjectLink = styled.a`
  font-size: 16px;
  color: #2d7788;
`;

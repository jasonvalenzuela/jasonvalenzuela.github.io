import React, { FC } from "react";
import styled from "styled-components";
import CareerProfileSection from "components/index-page/CareerProfileSection";
import ExperienceSection from "components/index-page/ExperienceSection";
import ProjectsSection from "components/index-page/ProjectsSection";

const careerProfileContent = [
  "I am full stack software developer and a computer science graduate from the University of Virginia looking for software development roles in the Eugene-Springfield, OR area. I am also open to roles in Corvallis, Portland, or remote. I have a breadth of experience in software development, ranging from web and mobile development to machine learning and data analytics, and I enjoy expanding my knowledge of my craft and delivering pleasurable experiences to clients and stakeholders.",
  "Please feel free to reach out to me with any questions about my background or information about a role for which I am a fit!",
];

const IndexPageContent: FC = () => (
  <MainWrapper>
    <CareerProfileSection paragraphs={careerProfileContent} />
    <ExperienceSection />
    <ProjectsSection />
  </MainWrapper>
);

export default IndexPageContent;

const MainWrapper = styled.div`
  background: #fff;
  padding: 60px;
  padding-right: 300px;

  & > :not(:last-child) {
    margin-bottom: 60px;
  }
`;

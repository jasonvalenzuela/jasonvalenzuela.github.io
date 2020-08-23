import React, { FC } from "react";
import MainContainer from "./common/MainContainer";
import styled from "styled-components";

interface CareerProfileSectionProps {
  paragraphs: string[];
}

const CareerProfileSection: FC<CareerProfileSectionProps> = ({
  paragraphs,
}) => (
  <MainContainer sectionType="career" title="Career Profile">
    {paragraphs.map((text) => (
      <SectionText>{text}</SectionText>
    ))}
  </MainContainer>
);

export default CareerProfileSection;

const SectionText = styled.p`
  margin-top: 0;
`;

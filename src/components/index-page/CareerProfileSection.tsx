import React, { FC } from "react";
import IndexContentContainer from "../common/IndexContentContainer";
import styled from "styled-components";

interface CareerProfileSectionProps {
  paragraphs: string[];
}

const CareerProfileSection: FC<CareerProfileSectionProps> = ({
  paragraphs,
}) => (
  <IndexContentContainer sectionType="career" title="Career Profile">
    {paragraphs.map((text, index) => (
      <SectionText key={index}>{text}</SectionText>
    ))}
  </IndexContentContainer>
);

export default CareerProfileSection;

const SectionText = styled.p`
  margin: 0;
`;

import React, { FC } from "react";
import IndexContentContainer from "../common/IndexContentContainer";
import styled from "styled-components";

const CareerProfileSection: FC<{
  careerProfileContent: string[];
}> = ({ careerProfileContent }) => (
  <CareerContentBase sectionType="career" title="Career Profile">
    {careerProfileContent.map((text, index) => (
      <SectionText key={index}>{text}</SectionText>
    ))}
  </CareerContentBase>
);

export default CareerProfileSection;

const SectionText = styled.p`
  margin: 0;
`;

const CareerContentBase = styled(IndexContentContainer)`
  ${SectionText}:not(:last-child) {
    margin-bottom: 10px;
  }
`;

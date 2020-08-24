import React, { FC } from "react";
import IndexContentContainer from "../common/IndexContentContainer";
import styled from "styled-components";
import { ExperienceContent, ExperienceDetails } from "types";

const ExperienceTitle: FC<ExperienceDetails> = ({
  position,
  startDate,
  endDate,
  companyName,
  location,
}) => (
  <ExperienceTitleBase>
    <ExperiencePositionAndDatesRow>
      <ExperienceHeaderText>{position}</ExperienceHeaderText>
      <ExperienceSubText>
        {startDate} - {endDate}
      </ExperienceSubText>
    </ExperiencePositionAndDatesRow>
    <ExperienceSubText>
      {companyName}, {location}
    </ExperienceSubText>
  </ExperienceTitleBase>
);

const ExperienceContentSection: FC<ExperienceContent> = ({
  details,
  description,
}) => (
  <ExperienceContentBase>
    <ExperienceTitle {...details} />
    {description.map((text, index) => (
      <ExperienceContentText key={index}>{text}</ExperienceContentText>
    ))}
  </ExperienceContentBase>
);

const ExperienceSection: FC<{
  experienceContent: ExperienceContent[];
}> = ({ experienceContent }) => (
  <ExperienceSectionBase sectionType="experience" title="Experience">
    {experienceContent.map((content, index) => (
      <ExperienceContentSection {...content} key={index} />
    ))}
  </ExperienceSectionBase>
);

export default ExperienceSection;

const ExperienceSectionBase = styled(IndexContentContainer)`
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ExperienceContentBase = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ExperienceTitleBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ExperienceContentText = styled.p`
  margin: 0;
`;

const ExperiencePositionAndDatesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ExperienceHeaderText = styled.h3`
  color: #3f4650;
  font-size: 16px;
  margin: 0;
`;

const ExperienceSubText = styled.div`
  color: #97aac3;
  font-size: 14px;
`;

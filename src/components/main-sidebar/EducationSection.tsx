import React, { FC } from "react";
import SidebarContainer from "../common/SidebarContainer";
import SidebarTitle from "../common/SidebarTitle";
import styled from "styled-components";
import { EducationContent } from "types";

const EducationSection: FC<EducationContent> = ({
  degree,
  university,
  yearStart,
  yearEnd,
}) => (
  <SidebarContainer>
    <SidebarTitle>Education</SidebarTitle>
    <DegreeText>{degree}</DegreeText>
    <UniversityInfo>{university}</UniversityInfo>
    <UniversityInfo>
      {yearStart} - {yearEnd}
    </UniversityInfo>
  </SidebarContainer>
);

export default EducationSection;

const DegreeText = styled.h4`
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const UniversityInfo = styled.h5`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 0;
`;

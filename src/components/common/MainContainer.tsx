import React, { FC } from "react";
import styled from "styled-components";
import { MainSectionType } from "types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faBriefcase,
  faArchive,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MainContainerProps {
  title: string;
  sectionType: MainSectionType;
}

const MainSectionTypeToIcon: Record<MainSectionType, IconDefinition> = {
  career: faUser,
  experience: faBriefcase,
  projects: faArchive,
};

const MainContainerTitle: FC<{ sectionType: MainSectionType }> = ({
  sectionType,
  children,
}) => (
  <TitleBase>
    <IconBase>
      <FontAwesomeIcon
        icon={MainSectionTypeToIcon[sectionType]}
        size="xs"
        color="#fff"
      />
    </IconBase>
    {children}
  </TitleBase>
);

const MainContainer: FC<MainContainerProps> = ({
  sectionType,
  title,
  children,
}) => (
  <ContainerBase>
    <MainContainerTitle sectionType={sectionType}>{title}</MainContainerTitle>
    {children}
  </ContainerBase>
);

export default MainContainer;

const IconBase = styled.div`
  background-color: #2d7788;
  margin-right: 10px;
  height: 30px;
  width: 30px !important;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleBase = styled.h2`
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 20px;
  color: #2d7788;
  font-weight: 500;
`;

const ContainerBase = styled.div`
  display: flex;
  flex-direction: column;
`;

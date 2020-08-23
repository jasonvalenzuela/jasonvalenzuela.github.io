import React, { FC } from "react";
import SidebarContainer from "./common/SidebarContainer";
import SidebarTitle from "./common/SidebarTitle";
import styled from "styled-components";
import { SidebarListContent } from "types";

const SidebarList: FC<SidebarListContent> = ({ title, content }) => (
  <SidebarContainer>
    <SidebarTitle>{title}</SidebarTitle>
    <SidebarListContainer>
      {content.map((text) => (
        <SidebarListText>{text}</SidebarListText>
      ))}
    </SidebarListContainer>
  </SidebarContainer>
);

export default SidebarList;

const SidebarListText = styled.div`
  font-size: 14px;
`;

const SidebarListContainer = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

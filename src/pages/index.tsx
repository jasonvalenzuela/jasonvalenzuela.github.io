import React from "react";
import styled from "styled-components";
import MainSidebar from "containers/MainSidebar";

export default () => (
  <>
    <MainSidebar />
    <MainWrapper>
      <h1>
        Welcome to React-Static <br /> + TypeScript
      </h1>
      <p>
        Learn{" "}
        <a href="https://github.com/sw-yx/react-typescript-cheatsheet">
          React + TypeScript
        </a>
      </p>
      <p>
        <a href="https://twitter.com/swyx">Report issues with this template</a>
      </p>
    </MainWrapper>
  </>
);

const MainWrapper = styled.div`
  background: #fff;
  padding: 60px;
  padding-right: 300px;
`;

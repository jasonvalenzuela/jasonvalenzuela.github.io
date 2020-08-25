import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import { GlobalStyles } from "./global-styles";
import styled from "styled-components";

function App() {
  return (
    <Root>
      <GlobalStyles />
      <Wrapper>
        <React.Suspense fallback={<em>Loading...</em>}>
          <Routes>
            <Router pattern="*" />
          </Routes>
        </React.Suspense>
      </Wrapper>
    </Root>
  );
}

export default App;

const Wrapper = styled.div`
  background: #42a8c0;
  max-width: 960px;
  margin: 0 auto;
  position: relative;
  -webkit-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

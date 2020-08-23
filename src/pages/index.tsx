import React from "react";
import styled from "styled-components";
import MainSidebar from "containers/MainSidebar";
import CareerProfileSection from "components/CareerProfileSection";

export default () => (
  <>
    <MainSidebar />
    <MainWrapper>
      <CareerProfileSection />
    </MainWrapper>
  </>
);

const MainWrapper = styled.div`
  background: #fff;
  padding: 60px;
  padding-right: 300px;
`;

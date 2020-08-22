import React from "react";
import styled from "styled-components";
import ContactSection from "components/ContactSection";
import ProfileSection from "components/ProfileSection";

const profileImage = require("../../assets/images/9-23.png");

export default () => {
  return (
    <SidebarRoot>
      <ProfileSection
        profileImage={profileImage}
        name="Jason Valenzuela"
        tagline="Software Developer"
      />
      <ContactSection />
    </SidebarRoot>
  );
};

const SidebarRoot = styled.div`
  background: #42a8c0;
  position: absolute;
  right: 0;
  width: 240px;
  height: 100%;
  min-height: 800px;
  color: #fff;
`;

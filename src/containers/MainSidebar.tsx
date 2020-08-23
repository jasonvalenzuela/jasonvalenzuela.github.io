import React from "react";
import styled from "styled-components";
import ContactSection from "components/ContactSection";
import ProfileSection from "components/ProfileSection";
import { ContactContent } from "types";

const profileImage = require("../../assets/images/9-23.png");

const contactContent: ContactContent[] = [
  {
    contactType: "email",
    text: "jev4zs@virginia.edu",
    href: "mailto:jev4zs@virginia.edu",
  },
  {
    contactType: "phone",
    text: "(571)-337-4895",
    href: "tel:(571)-337-4895",
  },
  {
    contactType: "linkedin",
    text: "Jason Valenzuela",
    href: "https://www.linkedin.com/in/jason-valenzuela/",
  },
  {
    contactType: "github",
    text: "toyotathon",
    href: "https://github.com/toyotathon",
  },
];

export default () => {
  return (
    <SidebarRoot>
      <ProfileSection
        profileImage={profileImage}
        name="Jason Valenzuela"
        tagline="Software Developer"
      />
      <ContactSection contactContent={contactContent} />
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

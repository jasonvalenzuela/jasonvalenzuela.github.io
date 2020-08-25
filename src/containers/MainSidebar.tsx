import React from "react";
import styled from "styled-components";
import ContactSection from "components/main-sidebar/ContactSection";
import ProfileSection from "components/main-sidebar/ProfileSection";
import {
  ContactContent,
  ProfileContent,
  EducationContent,
  SidebarListContent,
} from "types";
import EducationSection from "components/main-sidebar/EducationSection";
import SidebarList from "components/common/SidebarList";

const profileImage = require("../../assets/images/9-23.png");
const profileContent: ProfileContent = {
  profileImage,
  name: "Jason Valenzuela",
  tagline: "Software Developer",
};

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

const educationContent: EducationContent = {
  degree: "B.S. Computer Science",
  university: "University of Virginia",
  yearStart: "2013",
  yearEnd: "2017",
};

const interestContent: SidebarListContent = {
  title: "Interests",
  content: [
    "Web Development",
    "Mobile Application Development",
    "Machine Learning",
    "Functional Programming",
    "Data Science",
  ],
};

export default () => {
  return (
    <SidebarRoot>
      <ProfileSection {...profileContent} />
      <ContactSection contactContent={contactContent} />
      <EducationSection {...educationContent} />
      <SidebarList {...interestContent} />
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

  @media (max-width: 767px) {
    position: static;
    width: inherit;
  }
`;

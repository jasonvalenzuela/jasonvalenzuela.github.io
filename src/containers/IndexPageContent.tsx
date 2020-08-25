import React, { FC } from "react";
import styled from "styled-components";
import CareerProfileSection from "components/index-page/CareerProfileSection";
import ExperienceSection from "components/index-page/ExperienceSection";
import ProjectsSection from "components/index-page/ProjectsSection";
import { ExperienceContent, ProjectsContent } from "types";

const careerProfileContent = [
  "I am full stack software developer and a computer science graduate from the University of Virginia looking for software development roles in the Eugene-Springfield, OR area. I am also open to roles in Corvallis, Portland, or remote. I have a breadth of experience in software development, ranging from web and mobile development to machine learning and data analytics, and I enjoy expanding my knowledge of my craft and delivering pleasurable experiences to clients and stakeholders.",
  "Please feel free to reach out to me with any questions about my background or information about a role for which I am a fit!",
];

const experienceContent: ExperienceContent[] = [
  {
    details: {
      position: "Software Developer",
      startDate: "March 2018",
      endDate: "July 2019",
      companyName: "Twenty Ideas",
      location: "Eugene, OR",
    },
    description: [
      "At Twenty Ideas, I had the opportunity to alongside talented developers and designers to create enjoyable software experiences for a variety of projects and clients. The projects ranged from data collection and analysis, web and mobile development, machine learning, and game development.",
      "During my time, I worked with several different tech stacks depending on the needs of the projects. For web development projects, I used React/Typescript and Kotlin/Spring Boot. For machine learning, I worked with the Analytic Spot machine learning framework and Apache Spark for data processing and classification. For web and mobile development projects, I used Ionic, Angular and Typescript to create cross-platform applications.",
    ],
  },
  {
    details: {
      position: "Software Developer",
      startDate: "July 2017",
      endDate: "March 2018",
      companyName: "Comcast",
      location: "Reston, VA",
    },
    description: [
      "I worked with the Video Acquisition Deployment Engineering and Research (VADER) team at Comcast, where I provided support for the ingest and delivery of video content, which comes in the form of legacy QAM, IP, and MPEG video formats.",
      "My role consisted of compiling data and creating tools to handle the asset payload, and monitor the health and status of the infrastructure that handles the storage and transcoding of video content. These tools are written in Java and Ruby, and they communicate with the data services that handle content delivery. I also communicated with content providers on issues that they were having with the technologies that the team was using.",
    ],
  },
  {
    details: {
      position: "Web Developer",
      startDate: "May 2017",
      endDate: "August 2017",
      companyName: "UVA School of Architecture",
      location: "Charlottesville, VA",
    },
    description: [
      "I worked alongside a graduated Architecture student to develop The Material Exchange, a platform for Architecture students to buy, sell, or exchange their leftover project material to other students. The project was done as an effort to promote ecological sustainability within the Architecture school to tackle the issue of unused paper and project materials leftover after each semester.",
      "The platform utilized the Django REST Framework for the backend, and React.js was used for the frontend. The system was deployed with Heroku services, and Circle CI was used for continuous integration.",
    ],
  },
];

const projectsContent: ProjectsContent[] = [
  {
    link: "https://github.com/OpenEugene/openboard",
    name: "Openboard",
    description:
      "Collaborating with contributors in the Eugene Tech community to create an open source bulletin board for publicizing announcements relevant to other members of the community. It is being built with Elm, Go, and gRPC and will include a REST API to allow for other clients to consume this data.",
  },
  {
    link: "https://github.com/hackoregon/civic",
    name: "Hack Oregon",
    description:
      "Working as a front-end engineer for this organization, which is a rapid prototyping lab taking a creative approach to data projects that bring insight to complex issues in the public interest. I am using React and Redux to help build out the component library that other Hack Oregon projects use.",
  },
  {
    link: "https://github.com/toyotathon/service-learning-practicum",
    name: "Service Learning Practicum",
    description:
      "Implemented a data management system for Georgia's Healing House, a non-profit organization in Charlottesville, VA, alongside five other senior students. The system utilized the Django framework and other Python libraries for statistical analysis and display.",
  },
];

const IndexPageContent: FC = () => (
  <MainWrapper>
    <CareerProfileSection careerProfileContent={careerProfileContent} />
    <ExperienceSection experienceContent={experienceContent} />
    <ProjectsSection projectsContent={projectsContent} />
  </MainWrapper>
);

export default IndexPageContent;

const MainWrapper = styled.div`
  background: #fff;
  padding: 60px;
  padding-right: 300px;

  & > :not(:last-child) {
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    padding: 30px;
  }
`;

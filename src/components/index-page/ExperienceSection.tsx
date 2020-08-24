import React, { FC } from "react";
import IndexContentContainer from "../common/IndexContentContainer";
import styled from "styled-components";
import { ExperienceContent, ExperienceDetails } from "types";

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

const ExperienceTitle: FC<ExperienceDetails> = ({
  position,
  startDate,
  endDate,
  companyName,
  location,
}) => (
  <ExperienceTitleBase>
    <ExperiencePositionAndDatesRow>
      <ExperienceHeaderText>{position}</ExperienceHeaderText>
      <ExperienceSubText>
        {startDate} - {endDate}
      </ExperienceSubText>
    </ExperiencePositionAndDatesRow>
    <ExperienceSubText>
      {companyName}, {location}
    </ExperienceSubText>
  </ExperienceTitleBase>
);

const ExperienceContentSection: FC<ExperienceContent> = ({
  details,
  description,
}) => (
  <ExperienceContentBase>
    <ExperienceTitle {...details} />
    {description.map((text, index) => (
      <ExperienceContentText key={index}>{text}</ExperienceContentText>
    ))}
  </ExperienceContentBase>
);

const ExperienceSection: FC = () => (
  <ExperienceSectionBase sectionType="experience" title="Experience">
    {experienceContent.map((content, index) => (
      <ExperienceContentSection {...content} key={index} />
    ))}
  </ExperienceSectionBase>
);

export default ExperienceSection;

const ExperienceSectionBase = styled(IndexContentContainer)`
  & > :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ExperienceContentBase = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ExperienceTitleBase = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ExperienceContentText = styled.p`
  margin: 0;
`;

const ExperiencePositionAndDatesRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

const ExperienceHeaderText = styled.h3`
  color: #3f4650;
  font-size: 16px;
  margin: 0;
`;

const ExperienceSubText = styled.div`
  color: #97aac3;
  font-size: 14px;
`;

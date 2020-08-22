import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { ContactType } from "types";

const ContactTypeToIconMap: Record<ContactType, IconDefinition> = {
  email: faEnvelope,
  phone: faPhone,
  linkedin: faLinkedinIn,
  github: faGithub,
};

const ContactSectionRow: FC<{ contactType: ContactType; text: string }> = ({
  contactType,
  text,
}) => (
  <ContactRowBase>
    <FontAwesomeIcon icon={ContactTypeToIconMap[contactType]} />
    <ContactRowText>{text}</ContactRowText>
  </ContactRowBase>
);

// TODO: need to add links
const ContactSection: FC = () => (
  <ContactRoot>
    <ContactSectionRow contactType="email" text="jev4zs@virginia.edu" />
    <ContactSectionRow contactType="phone" text="(571) 337-4895" />
    <ContactSectionRow contactType="linkedin" text="Jason Valenzuela" />
    <ContactSectionRow contactType="github" text="toyotathon" />
  </ContactRoot>
);

export default ContactSection;

const ContactRowText = styled.div`
  margin-left: 5px;
  font-size: 14px;
`;

const ContactRowBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ContactRoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  ${ContactRowBase} {
    margin-bottom: 15px;
  }
`;

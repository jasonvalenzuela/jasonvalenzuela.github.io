import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import { ContactType, ContactContent } from "types";

const ContactTypeToIconMap: Record<ContactType, IconDefinition> = {
  email: faEnvelope,
  phone: faPhone,
  linkedin: faLinkedinIn,
  github: faGithub,
};

const ContactSectionRow: FC<ContactContent> = ({ contactType, text, href }) => (
  <ContactRowBase>
    <FontAwesomeIcon icon={ContactTypeToIconMap[contactType]} />
    <ContactRowLink href={href} target="_blank">
      {text}
    </ContactRowLink>
  </ContactRowBase>
);

const ContactSection: FC<{ contactContent: ContactContent[] }> = ({
  contactContent,
}) => (
  <ContactRoot>
    {contactContent.map(({ contactType, text, href }) => (
      <ContactSectionRow contactType={contactType} text={text} href={href} />
    ))}
  </ContactRoot>
);

export default ContactSection;

const ContactRowLink = styled.a`
  margin-left: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
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

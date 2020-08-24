import React, { FC } from "react";
import styled from "styled-components";
import { ProfileContent } from "types";

const ProfileSection: FC<ProfileContent> = ({
  profileImage,
  name,
  tagline,
}) => (
  <ProfileRoot>
    <ProfileImage src={profileImage} />
    <ProfileName>{name}</ProfileName>
    <ProfileTagline>{tagline}</ProfileTagline>
  </ProfileRoot>
);

export default ProfileSection;

const ProfileRoot = styled.div`
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
`;

const ProfileImage = styled.img`
  max-width: 100px;
  margin-bottom: 15px;
  border: 0px solid #fff;
  border-radius: 100%;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.h1`
  font-size: 32px;
  font-weight: 900;
  margin-top: 0;
  margin-bottom: 10px;
`;

const ProfileTagline = styled.h3`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 0;
`;

export type ContactType = "email" | "phone" | "linkedin" | "github";

export type MainSectionType = "career" | "experience" | "projects";

export interface ContactContent {
  contactType: ContactType;
  text: string;
  href: string;
}

export interface ProfileContent {
  profileImage: string;
  name: string;
  tagline: string;
}

export interface EducationContent {
  degree: string;
  university: string;
  yearStart: string;
  yearEnd: string;
}

export interface SidebarListContent {
  title: string;
  content: string[];
}

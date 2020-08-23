export type ContactType = "email" | "phone" | "linkedin" | "github";

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

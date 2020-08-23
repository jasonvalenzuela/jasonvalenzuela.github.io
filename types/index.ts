export type ContactType = "email" | "phone" | "linkedin" | "github";

export interface Post {
  body: string;
  id: number;
  title: string;
}

export interface ContactContent {
  contactType: ContactType;
  text: string;
  href: string;
}

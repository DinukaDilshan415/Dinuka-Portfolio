// Shared types for the portfolio. Every section reads its data through these shapes.

export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'certifications'
  | 'experience'
  | 'projects'
  | 'skills'
  | 'contact'

export interface NavItem {
  id: SectionId
  label: string
  to: string
}

export interface Profile {
  name: string
  shortName: string
  title: string
  location: string
  email: string
  phone?: string
  github: string
  linkedin: string
  socialLinks: FooterSocialLink[]
  /** Path to the CV inside `public/`, opened in a new browser tab. */
  resume: string
  /** Path to the profile photo inside `public/`. Falls back to initials if missing. */
  photo: string
  intro: string
  about: string[]
  highlights: Highlight[]
  availability: string
}

export interface Highlight {
  value: string
  label: string
}

export type ProjectVisual = 'shop' | 'api' | 'mobile'

export interface Project {
  number: string
  name: string
  category: string
  description: string
  stack: string[]
  status: string
  github: string
  demo?: string
  visual: ProjectVisual
}

export interface SkillGroup {
  title: string
  items: string[]
}

export type EducationKind = 'degree' | 'diploma' | 'school'

export interface EducationItem {
  period: string
  qualification: string
  institution: string
  detail: string
  kind: EducationKind
  /** Optional credential ID, used for diplomas. */
  credentialId?: string
}

export interface Certification {
  credential: string
  issuer: string
  issued: string
  id: string
  imageUrl?: string
  /** Optional link where the certificate can be verified or viewed. */
  url?: string
}

export interface ExperienceItem {
  period: string
  role: string
  organisation: string
  type: string
  points: string[]
  tools: string[]
}

export type FooterSocialPlatform = 'Facebook' | 'Instagram' | 'WhatsApp' | 'YouTube' | 'X'

export interface FooterSocialLink {
  label: FooterSocialPlatform
  href: string
}

export interface SocialLink {
  label: string
  href: string
}

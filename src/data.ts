// Update this file with your real links, education, experience, and project details.
// Items marked "EDIT" are placeholders added to complete the site — replace them with your own details.
import type {
  Certification,
  EducationItem,
  ExperienceItem,
  NavItem,
  Profile,
  Project,
  SkillGroup
} from './types'

export const profile: Profile = {
  name: 'Dinuka Dilshan Athapaththu',
  shortName: 'Dinuka',
  title: 'Software Engineer',
  location: 'Sri Lanka',
  email: 'dinukadilshan8026@gmail.com',
  github: 'https://github.com/DinukaDilshan415',
  linkedin: 'https://www.linkedin.com/in/dinuka-dilshan-athapaththu/',
  // Replace these platform homepages with your profile or channel URLs.
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/dinuka.dilshan.415/' },
    { label: 'Instagram', href: 'https://www.instagram.com/dinuka_dilshan_/' },
    { label: 'WhatsApp', href: 'https://wa.me/+94762078415' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'X', href: 'https://x.com/DinukaD415' }
  ],
  resume: '/Dinuka-Dilshan-Athapaththu-CV.pdf', // Add your CV PDF to public/
  photo: '/profile.png', // Add your photo to public/ (square image, ~800×800 works best)
  intro: 'I turn ideas into dependable, thoughtful digital experiences.',
  about: [
    "I'm a software engineer who enjoys building useful products from the first idea to the final detail. I care about clean architecture, accessible interfaces, and software that solves real problems.",
    'My work spans Java enterprise development, modern web interfaces, APIs, databases, and cloud-native tools. I enjoy learning how the pieces fit together—and making them work well together.'
  ],
  highlights: [
    { value: '2', label: 'Professional diplomas' },
    { value: '25+', label: 'Tools & technologies' },
    { value: 'BSc', label: 'Software Engineering (Hons)' }
  ],
  availability: 'Open to internships, graduate roles & collaborations'
}

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'education', label: 'Education', to: '/#education' },
  { id: 'certifications', label: 'Certifications', to: '/certifications' },
  { id: 'experience', label: 'Experience', to: '/experience' },
  { id: 'projects', label: 'Projects', to: '/projects' },
  { id: 'skills', label: 'Skills', to: '/#skills' },
  { id: 'contact', label: 'Contact', to: '/#contact' }
]

export const projects: Project[] = [
  {
    number: '01',
    name: 'TechMart Online',
    category: 'E-commerce platform',
    description:
      'An online shopping platform with product discovery, shopping cart and order flows, inventory-focused features, and an admin experience. Update this description to match the exact functionality you implemented.',
    stack: ['React', 'Jakarta EE', 'MySQL', 'JMS'],
    status: 'Featured project',
    github: 'https://github.com/DinukaDilshan415', // Replace with the specific TechMart repository URL
    demo: '', // Add the deployed website URL when available
    visual: 'shop'
  }
]

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  {
    title: 'Backend & Databases',
    items: ['Jakarta EE', 'Spring Boot', 'Java', 'Node.js', 'REST APIs', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase']
  },
  {
    title: 'Tools & Other',
    items: ['Python', 'C++', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Git', 'GitHub', 'Postman', 'Android', 'React Native']
  },
]

// Diplomas are listed here as well as in Certifications, as requested.
export const education: EducationItem[] = [
  {
    period: 'April 2023 – Present',
    qualification: 'BSc (Hons) in Software Engineering',
    institution: 'Birmingham City University, UK',
    detail: 'Undergraduate degree focused on software engineering.',
    kind: 'degree'
  },
  {
    period: 'Awarded August 2026',
    qualification: 'Professional Higher Diploma in Software Engineering',
    institution: 'Skills and Education Group, UK',
    detail:
      'Higher-level diploma covering advanced software engineering practice, enterprise application development, and system design.',
    kind: 'diploma',
    credentialId: '22304394-01-MXHV'
  },
  {
    period: 'Awarded August 2026',
    qualification: 'Professional Diploma in Software Engineering',
    institution: 'Skills and Education Group, UK',
    detail:
      'Diploma covering programming fundamentals, object-oriented design, databases, and web development.',
    kind: 'diploma',
    credentialId: '04167761-01-5UWA'
  },
  {
    period: 'January 2014 – December 2022',
    qualification: '(G.C.E.) Ordinary Level (O/L) | Advanced Level (A/L) ',
    institution: 'Kingswood College, Kandy',
    detail: 'Completed in Mathematics, Chemistry, and Physics',
    kind: 'school'
  }
]

// Add `imageUrl` for each badge image and `url` for its digital copy or verification page.
export const certifications: Certification[] = [
  {
    credential: 'Professional Higher Diploma in Software Engineering',
    issuer: 'Skills and Education Group, UK',
    issued: 'August 2026',
    id: '22304394-01-MXHV',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jyXqTF9ukYjVLsur6uvKJCbgmDHmnaCa-brILa-m_w&s=10',
    url: 'https://verify.skillsandeducationgroup.co.uk/?reference=25067344-01-S8ZC'
  },
  {
    credential: 'Professional Diploma in Software Engineering',
    issuer: 'Skills and Education Group, UK',
    issued: 'August 2026',
    id: '04167761-01-5UWA',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3jyXqTF9ukYjVLsur6uvKJCbgmDHmnaCa-brILa-m_w&s=10',
    url: 'https://verify.skillsandeducationgroup.co.uk/?reference=04167761-01-5UWA'
  }
]

// EDIT: placeholder experience — replace with your real roles, internships, or freelance work.
export const experience: ExperienceItem[] = [
  {
    period: '2023 – Present',
    role: 'Software Engineering Undergraduate',
    organisation: 'Birmingham City University, UK',
    type: 'Academic',
    points: [
      'Designed and built full-stack applications as part of coursework and team projects.',
      'Applied object-oriented design, testing, and version control in collaborative settings.',
      'Explored cloud-native tooling with Docker, Kubernetes, and Google Cloud Platform.'
    ],
    tools: ['Java', 'React', 'MySQL', 'Docker']
  },
  {
    period: '2024 – Present',
    role: 'Independent Developer',
    organisation: 'Personal projects',
    type: 'Self-directed',
    points: [
      'Built TechMart Online, an e-commerce platform with Jakarta EE, React, and JMS messaging.',
      'Developed REST APIs and relational database schemas for real-world use cases.',
      'Experimented with Android and React Native for cross-platform mobile apps.'
    ],
    tools: ['Jakarta EE', 'TypeScript', 'REST APIs', 'React Native']
  }
]

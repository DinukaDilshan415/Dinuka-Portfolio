
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
  location: '',
  email: 'dinukadilshan8026@gmail.com',
  github: 'https://github.com/DinukaDilshan415',
  linkedin: 'https://www.linkedin.com/in/dinuka-dilshan-athapaththu/',

  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/dinuka.dilshan.415/' },
    { label: 'Instagram', href: 'https://www.instagram.com/dinuka_dilshan_/' },
    { label: 'WhatsApp', href: 'https://wa.me/+94762078415' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'X', href: 'https://x.com/DinukaD415' }
  ],
  resume: '/DinukaDilshanAthapaththu_Resume.pdf', // Add your CV PDF to public/
  photo: '/profile.png',
  intro: 'I turn ideas into dependable, thoughtful digital experiences.',
  about: [
    "I'm a software engineer who enjoys building useful products from the first idea to the final detail. I care about clean architecture, accessible interfaces, and software that solves real problems.",
    'My work spans Java enterprise development, modern web interfaces, APIs, databases, and cloud-native tools. I enjoy learning how the pieces fit together and making them work well together.'
  ],
  highlights: [
    { value: '2', label: 'Certifications' },
    { value: '25+', label: 'Tools & technologies' },
    { value: 'BSc', label: 'Software Engineering (Hons)' }
  ],
  availability: 'Open to opportunities & collaborations'
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
    name: 'GlobalTrade Logistics',
    category: 'Supply Chain Management System',
    description:
      'An enterprise-oriented application developed as part of my Software Engineering studies to support supply chain operations, including shipment management, inventory tracking, vendor management, customs processes, alerts, and system monitoring..',
    stack: ['React', 'Java', 'MySQL', 'REST APIs', 'Software Architectural Design'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/gGbKXBF4',
    visual: 'shop',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQF4VgmYbSO_kQ/profile-treasury-image-shrink_800_800/B56aF90y4fKoAI-/0/1793112354694?e=1795618800&v=beta&t=I6goJDx5SJhXHbcO2m3e7zthmHd7g0BmjmCKTBN3fRY'
  },
  {
    number: '02',
    name: 'GuideMe',
    category: 'Platform for Tourism Guide and Booking',
    description:
      'GuideMe is a full-stack mobile application. The project was designed to bridge the digital gap between local tourism service providers and travelers by bringing hotels, activities, and other travel-related services together in one mobile marketplace.',
    stack: ['Android Development', 'Java', 'MySQL', 'REST APIs', 'Full-Stack Development'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/gSTpsaqe',
    visual: 'mobile',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFsFFPSs9GUFg/profile-treasury-image-shrink_800_800/B56aF5Qp5LG4AI-/0/1793035771768?e=1795618800&v=beta&t=m77zczHyrj8MNhhCiDz2cPlZv_HfKw38JUZ93pGmy_I'
  },
  {
    number: '03',
    name: 'EduMart',
    category: 'Academic & Office Supplies E-Commerce Platform',
    description:
      'EduMart is a specialized, full-stack e-commerce web application designed to eliminate the friction students and educators face when sourcing academic, school, and office supplies from fragmented or generic marketplaces.',
    stack: ['Java', 'MySQL', 'REST APIs', 'Full-Stack Development', 'E-commerce Optimization'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/g3-xMtbq',
    visual: 'shop',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFilTRlL9dTmw/profile-treasury-image-shrink_800_800/B56aF2aYpXJ8AI-/0/1792987990989?e=1795618800&v=beta&t=Q8vB28zOqMWotKm235y7vUUquN5sCZ-LBS39sh_qmBY'
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
    period: 'April 2023 – 2027',
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

export const experience: ExperienceItem[] = [
  {
    period: '2023 – 2027',
    role: 'Software Engineering Undergraduate',
    organisation: 'Birmingham City University, UK',
    type: 'Academic',
    points: [
      'Designed and built full-stack applications as part of coursework and team projects.',
      'Applied object-oriented design, testing, and version control in collaborative settings.',
      'Explored cloud-native tooling with Docker, Kubernetes, and Google Cloud Platform.'
    ],
    tools: []
  },
  {
    period: '2024 – Present',
    role: 'Freelance Developer',
    organisation: 'Personal projects',
    type: 'Self-directed',
    points: [
      'Built a web application for a local business, e-commerce platform and content management system.',
      'Developed REST APIs and relational database schemas for real-world use cases.',
      'Experimented with Android and React Native for cross-platform mobile apps.'
    ],
    tools: []
  }
]

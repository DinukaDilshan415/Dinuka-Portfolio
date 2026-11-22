
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
  title: 'Software Engineering | IT Support & Systems',
  location: 'Sri Lanka',
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
  resume: '/Dinuka-Dilshan-IT-Resume.pdf',
  resumes: [
    {
      label: 'Software Engineering',
      description: 'For software and development roles',
      file: '/DinukaDilshanAthapaththu_Resume.pdf'
    },
    {
      label: 'Other IT',
      description: 'For IT and technical roles',
      file: '/Dinuka-Dilshan-IT-Resume.pdf'
    }
  ],
  photo: '/profile.png',
  intro: 'I diagnose and resolve technical problems, build dependable systems, and turn complex solutions into clear support for users.',
  about: [
    "I'm a Software Engineering graduate with hands-on experience in computer hardware, Windows systems, networking, and troubleshooting. I enjoy diagnosing problems, maintaining systems, and helping people get back to work.",
    'My technical foundation includes React and Java enterprise development, REST APIs, databases, cloud tools, and mobile applications. I combine practical IT support with development experience to deliver reliable solutions.'
  ],
  highlights: [
    { value: '2', label: 'Certifications' },
    { value: 'IT', label: 'Hardware, systems & support' },
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
    name: 'Supply Chain Management System',
    category: 'Supply Chain Management System',
    description:
      'An enterprise system with JWT authentication, role-based access, automated alerts, scheduled database backups, and centralised logging.',
    stack: ['Jakarta EE', 'React', 'MySQL', 'JWT', 'REST APIs'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/gGbKXBF4',
    visual: 'shop',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQF4VgmYbSO_kQ/profile-treasury-image-shrink_800_800/B56aF90y4fKoAI-/0/1793112354694?e=1795618800&v=beta&t=I6goJDx5SJhXHbcO2m3e7zthmHd7g0BmjmCKTBN3fRY'
  },
  {
    number: '02',
    name: 'GuideMe',
    category: 'Tourism Booking App',
    description:
      'A mobile booking application with online payments, push notifications, Google Maps integration, and admin tools for user access management.',
    stack: ['Android', 'Firebase', 'Google Maps', 'REST APIs'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/gSTpsaqe',
    visual: 'mobile',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFsFFPSs9GUFg/profile-treasury-image-shrink_800_800/B56aF5Qp5LG4AI-/0/1793035771768?e=1795618800&v=beta&t=m77zczHyrj8MNhhCiDz2cPlZv_HfKw38JUZ93pGmy_I'
  },
  {
    number: '03',
    name: 'EduMart',
    category: 'E-Commerce Platform',
    description:
      'A full-stack web shop with an admin dashboard for inventory, orders, payments, and user role management.',
    stack: ['React', 'TypeScript', 'Java', 'MySQL', 'REST APIs'],
    status: 'Featured project',
    github: 'https://lnkd.in/p/g3-xMtbq',
    visual: 'shop',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFilTRlL9dTmw/profile-treasury-image-shrink_800_800/B56aF2aYpXJ8AI-/0/1792987990989?e=1795618800&v=beta&t=Q8vB28zOqMWotKm235y7vUUquN5sCZ-LBS39sh_qmBY'
  }
]

export const skillGroups: SkillGroup[] = [
  { title: 'IT Support & Systems', items: ['Windows', 'Hardware', 'Networking', 'Microsoft Office', 'Troubleshooting', 'LAN & Wi-Fi'] },
  {
    title: 'Development',
    items: ['React', 'JavaScript', 'TypeScript', 'Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Android']
  },
  {
    title: 'Databases & Tools',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Python', 'C++', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Git', 'GitHub']
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
    period: 'Ongoing',
    role: 'IT Support',
    organisation: 'Independent · Nawalapitiya, Sri Lanka',
    type: 'Independent',
    points: [
      'Assembled, upgraded, and maintained desktop PCs and laptops.',
      'Installed and configured Windows, device drivers, Microsoft Office, and everyday software.',
      'Diagnosed hardware, software, and performance issues for non-technical users.',
      'Set up home and small-office Wi-Fi networks and routers and resolved connectivity problems.'
    ],
    tools: ['Windows', 'Hardware', 'Networking', 'Troubleshooting']
  },
  {
    period: '2024 – Present',
    role: 'Freelance Developer',
    organisation: 'Self-directed · Remote',
    type: 'Self-directed',
    points: [
      'Built a web application for a local business, e-commerce platform and content management system.',
      'Developed REST APIs and relational database schemas for real-world use cases.',
      'Experimented with Android and React Native for cross-platform mobile apps.'
    ],
    tools: []
  }
]

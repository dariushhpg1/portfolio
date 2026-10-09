/**
 * Portfolio content, based on the October 2026 CV, exported LinkedIn profile,
 * and URLs provided directly by Darius. Edit content and links here.
 * Khooger deliberately has no URL until the real case-study link is supplied.
 */
export const profile = {
  name: 'Darius H.',
  initials: 'DH',
  role: 'Product Design Lead · Design Systems',
  location: 'Istanbul, Türkiye',
  email: 'dariushhpg1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dariushhpg1/',
  github: 'https://github.com/dariushhpg1',
  resume: 'Darius-H-Resume-2026.pdf',
  avatar: 'darius-profile.jpg',
  eyebrow: 'DESIGN SYSTEMS / PRODUCT THINKING / CRAFT',
  headline: 'Designing systems that help',
  headlineAccent: 'great products scale.',
  introduction: 'I’m Darius, a product designer with 10+ years of experience shaping digital products, design systems, and cross-functional workflows. For the past five years, my core focus has been Coin and blubank.design — the design foundations behind blu Bank’s growing ecosystem.',
  about: 'I work where product thinking, visual craft, and engineering meet. At blu Bank, I’ve spent the last five years leading Coin and blubank.design to bring consistency, speed, and clarity to a fast-growing product ecosystem. I care about the little details, but I care just as much about how a good idea scales.',
};

export const highlights = [
  { value: '10+', label: 'years in design' },
  { value: '200+', label: 'system components' },
  { value: '5 yrs', label: 'building Coin & blu design' },
  { value: '27M+', label: 'users reached at blu' },
  { value: '2,400+', label: 'open-source icons' },
];

export type ProjectLink = { label: string; href: string; kind?: 'primary' | 'secondary' };
export type Project = {
  id: string;
  index: string;
  company: string;
  title: string;
  category: string;
  period: string;
  description: string;
  contribution: string;
  stat: string;
  statLabel: string;
  tags: string[];
  artwork: 'blu' | 'icons' | 'khooger';
  coverImage?: string;
  badge?: string;
  links: ProjectLink[];
  pendingLink?: string;
};

export const projects: Project[] = [
  {
    id: 'blu', index: '01', company: 'blu Bank',
    title: 'Coin & blubank.design — one design language for an entire banking ecosystem.',
    category: 'FEATURED / DESIGN SYSTEM / FINTECH', period: '2021 — PRESENT',
    description: 'My most important body of work over the past five years: leading Coin, blu Bank’s scalable design system, and building blubank.design as the documentation hub that helps design, product, and engineering teams work from the same source of truth.',
    contribution: 'Design system strategy, multi-brand theming, design tokens, component libraries, documentation architecture, Figma/WordPress tooling, and Git-based asset delivery.',
    stat: '200+', statLabel: 'components in Coin',
    tags: ['Featured work', 'Design systems', 'Documentation', 'DesignOps', 'Multi-brand'], artwork: 'blu',
    coverImage: 'blu-design-cover.png',
    badge: 'PRIMARY FOCUS · LAST 5 YEARS',
    links: [
      { label: 'Explore blubank.design', href: 'https://blubank.design/', kind: 'primary' },
      { label: 'Read the Git workflow article', href: 'https://medium.com/design-bootcamp/from-design-to-development-optimizing-asset-delivery-with-git-adfd54a18354' },
    ],
  },
  {
    id: 'iconamoon', index: '02', company: 'IconaMoon',
    title: 'A little icon library with a lot of possibilities.',
    category: 'OPEN SOURCE / ICONOGRAPHY', period: 'SINCE 2021',
    description: 'A carefully crafted, open-source icon library with 2,400+ icons across eight styles — designed to be useful, consistent, and easy to adapt.',
    contribution: 'Icon design, visual consistency, asset organization, and publishing for the design community.',
    stat: '2,400+', statLabel: 'icons · 8 styles',
    tags: ['Icon design', 'Figma', 'Open source'], artwork: 'icons',
    links: [
      { label: 'Get it on Figma', href: 'https://www.figma.com/community/file/1014143897459418663/iconamoon-1-1-2400-icons-8-styles', kind: 'primary' },
      { label: 'View on GitHub', href: 'https://github.com/dariushhpg1/IconaMoon' },
    ],
  },
  {
    id: 'khooger', index: '03', company: 'Khooger',
    title: 'A better way to discover a place called home.',
    category: 'E-COMMERCE / PRODUCT DESIGN', period: '2018 — 2021',
    description: 'Led a complete redesign of Khooger’s e-commerce experience, from the product interface and 400+ screens to a more cohesive visual system.',
    contribution: 'End-to-end UX/UI, design system, research, visual identity, and growing a three-person design team.',
    stat: '8×', statLabel: 'user growth over 3 years',
    tags: ['E-commerce', 'UX strategy', 'Leadership'], artwork: 'khooger',
    links: [], pendingLink: 'Full Khooger work link — coming soon',
  },
];


export const capabilities = [
  { id: '01', title: 'Design systems at scale', description: 'Components, tokens, libraries, documentation, and the invisible rules that keep products coherent.', tags: 'Systems · Tokens · Accessibility' },
  { id: '02', title: 'Product & experience design', description: 'Making the complicated feel intuitive — from first idea and journey mapping to shipped mobile and web experiences.', tags: 'UX Strategy · UI · Prototyping' },
  { id: '03', title: 'Design meets development', description: 'Building bridges with practical tools, automation, Git workflows, and a shared language between teams.', tags: 'DesignOps · Figma · Git' },
  { id: '04', title: 'Leadership through craft', description: 'Helping designers grow, aligning cross-functional contributors, and protecting quality as teams expand.', tags: 'Direction · Collaboration · Mentorship' },
];

export const experience = [
  { company: 'blu Bank', role: 'Product Design Lead · Design Systems', period: 'Nov 2021 — Present', detail: 'Leading Coin, the design system documentation platform and a shared visual language for multiple banking products.' },
  { company: 'Podro', role: 'Product Design Consultant', period: 'Nov 2023 — Apr 2024', detail: 'Improved component scalability and UI consistency, reducing developer handoff time by 20%.' },
  { company: 'Khooger', role: 'Design Team Lead / Senior Product Designer', period: 'Jun 2018 — Oct 2021', detail: 'Led the e-commerce redesign, design system, and visual direction; contributed to 8× user growth.' },
  { company: 'EFA', role: 'Senior Product Designer', period: 'Apr 2021 — Aug 2021', detail: 'A five-month engagement as a senior product designer.' },
  { company: 'Beyad', role: 'Product Designer', period: 'Oct 2016 — May 2018', detail: 'Designed games and apps, including an indie game, an AR experience, and a digital magazine.' },
];

export const articles = [
  {
    index: '01', category: 'DESIGNOPS · 5 MIN READ', date: 'AUG 18, 2024',
    title: 'From design to development: optimizing asset delivery with Git',
    excerpt: 'A practical workflow for keeping design assets organized, consistent, and in sync with engineering.',
    href: 'https://medium.com/design-bootcamp/from-design-to-development-optimizing-asset-delivery-with-git-adfd54a18354',
    image: 'article-git-cover.svg',
  },
  {
    index: '02', category: 'ICON DESIGN · 7 MIN READ', date: 'MAY 4, 2024',
    title: 'Design and deliver icons to +12m users',
    excerpt: 'How we built a distinctive, readable, and scalable icon language for blu Bank.',
    href: 'https://medium.com/design-bootcamp/design-and-deliver-icons-to-7m-users-d1a559b7d829',
    image: 'article-icons-cover.svg',
  },
];

export const skillGroups = [
  { label: 'CORE', skills: ['Design Systems', 'Product Design', 'UX/UI', 'Visual Design', 'Design Tokens', 'Multi-brand Theming'] },
  { label: 'WAYS OF WORKING', skills: ['Design Leadership', 'User Research', 'Prototyping', 'DesignOps', 'Cross-functional Collaboration'] },
  { label: 'TOOLS', skills: ['Figma', 'Git', 'Docusaurus', 'Framer', 'Adobe Creative Cloud', 'Jira', 'GA4', 'AI-assisted Tools'] },
];

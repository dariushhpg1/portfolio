/** Content and external links. Image files are replaceable in public/images. */
export const profile = {
  name: 'Darius H.',
  role: 'Product Design Lead · Design Systems',
  email: 'dariushhpg1@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dariushhpg1/',
  github: 'https://github.com/dariushhpg1',
  resume: 'Darius-H-Resume-2026.pdf',
  avatar: 'images/profile-avatar.png',
  eyebrow: 'Product design lead · Design systems',
  headline: 'Designing for clarity.',
  headlineAccent: 'Building for scale.',
  introduction: 'I build thoughtful digital products and the systems behind them. For the past five years, I’ve focused on Coin and blubank.design at blu Bank.',
  about: 'I’m a product designer with 10+ years of experience across fintech, e-commerce, and open source. I work at the intersection of design, technology, and teams — turning complex challenges into clear, lasting systems.',
};

export type ProjectLink = { label: string; href: string; kind?: 'primary' | 'secondary' };
export type Project = {
  id: string;
  index: string;
  company: string;
  title: string;
  category: string;
  period: string;
  description: string;
  stat?: string;
  statLabel?: string;
  coverImage: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: 'blu', index: '01', company: 'blu Bank',
    title: 'Coin & blubank.design',
    category: 'Design system · Product design', period: '2021 — Present',
    description: 'A shared foundation for a growing banking ecosystem: components, tokens, documentation, and smoother design-to-development workflows.',
    stat: '200+', statLabel: 'components',
    coverImage: 'images/work-blu.png',
    links: [
      { label: 'Explore design website', href: 'https://blubank.design/', kind: 'primary' },
      { label: 'Read about the workflow', href: 'https://medium.com/design-bootcamp/from-design-to-development-optimizing-asset-delivery-with-git-adfd54a18354' },
    ],
  },
  {
    id: 'blu-illustrations', index: '02', company: 'blu Bank',
    title: 'blu Illustrations',
    category: 'Illustration · Visual language', period: '2021 — Present',
    description: 'A warm, approachable visual language that gives digital banking a more human personality.',
    coverImage: 'images/work-blu-illustrations.png',
    links: [
      { label: 'Behance', href: 'https://www.behance.net/gallery/218714967/blu-Illustrations-Part-1', kind: 'primary' },
      { label: 'Dribbble', href: 'https://dribbble.com/shots/25594850-blu-Illustrations' },
    ],
  },
  {
    id: 'blu-icons', index: '03', company: 'blu Bank',
    title: 'blu Icons',
    category: 'Iconography · Design system', period: '2021 — Present',
    description: 'A consistent set of product icons, designed to remain recognizable and readable across touchpoints.',
    coverImage: 'images/work-blu-icons.png',
    links: [
      { label: 'Read the story', href: 'https://medium.com/design-bootcamp/design-and-deliver-icons-to-7m-users-d1a559b7d829', kind: 'primary' },
    ],
  },
  {
    id: 'iconamoon', index: '04', company: 'IconaMoon',
    title: 'IconaMoon',
    category: 'Open source · Iconography', period: 'Since 2021',
    description: 'An open-source icon library built around precision, versatility, and consistency.',
    stat: '135K+', statLabel: 'users',
    coverImage: 'images/work-iconamoon.png',
    links: [
      { label: 'Figma Community', href: 'https://www.figma.com/community/file/1014143897459418663/iconamoon-1-1-2400-icons-8-styles', kind: 'primary' },
      { label: 'GitHub', href: 'https://github.com/dariushhpg1/IconaMoon' },
    ],
  },
  {
    id: 'khooger', index: '05', company: 'Khooger',
    title: 'Khooger',
    category: 'E-commerce · Product design', period: '2018 — 2021',
    description: 'Redesigned Khooger’s shopping experience and established its product design foundations.',
    stat: '8×', statLabel: 'user growth',
    coverImage: 'images/work-khooger.png',
    links: [
      { label: 'View case study', href: 'https://www.behance.net/gallery/126697295/Visual-and-Product-Design-for-Khoogercom', kind: 'primary' },
    ],
  },
];

export const capabilities = [
  { id: '01', title: 'Design systems', description: 'Components, tokens, and documentation.' },
  { id: '02', title: 'Product design', description: 'Thoughtful experiences from concept to launch.' },
  { id: '03', title: 'Design operations', description: 'Shared workflows that connect design and engineering.' },
];

export const experience = [
  { company: 'blu Bank', role: 'Product Design Lead · Design Systems', period: '2021 — Present' },
  { company: 'Podro', role: 'Product Design Consultant', period: '2023 — 2024' },
  { company: 'Khooger', role: 'Design Team Lead / Senior Product Designer', period: '2018 — 2021' },
  { company: 'EFA', role: 'Senior Product Designer', period: '2021' },
  { company: 'Beyad', role: 'Product Designer', period: '2016 — 2018' },
];

export const articles = [
  {
    category: 'Design operations',
    title: 'From design to development: optimizing asset delivery with Git',
    href: 'https://medium.com/design-bootcamp/from-design-to-development-optimizing-asset-delivery-with-git-adfd54a18354',
    image: 'images/article-git-cover.png',
  },
  {
    category: 'Icon design',
    title: 'Design and deliver icons to +12m users',
    href: 'https://medium.com/design-bootcamp/design-and-deliver-icons-to-7m-users-d1a559b7d829',
    image: 'images/article-icons-cover.png',
  },
];

export const skillGroups = [
  { label: 'Focus', skills: ['Design systems', 'Product design', 'Visual design', 'Design leadership'] },
  { label: 'Tools', skills: ['Figma', 'Git', 'Adobe Creative Cloud', 'Docusaurus'] },
];

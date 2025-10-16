import {
  SiAmazonaws,
  SiDocker,
  SiFramer,
  SiGraphql,
  SiNextdotjs,
  SiNodeDotJs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { FiLayers, FiTrendingUp, FiUsers, FiZap } from 'react-icons/fi'

export const skillCategories = [
  {
    title: 'Frontend Engineering',
    description:
      'Designing interactive, accessible, and high-performing interfaces with an eye for craft and motion.',
    skills: [
      { name: 'React', Icon: SiReact, proficiency: 92 },
      { name: 'Next.js', Icon: SiNextdotjs, proficiency: 88 },
      { name: 'TypeScript', Icon: SiTypescript, proficiency: 90 },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, proficiency: 91 },
      { name: 'Framer Motion', Icon: SiFramer, proficiency: 85 },
    ],
  },
  {
    title: 'Platform & Architecture',
    description:
      'Building resilient foundations, scalable APIs, and modern tooling that empower product teams to move fast.',
    skills: [
      { name: 'Node.js', Icon: SiNodeDotJs, proficiency: 82 },
      { name: 'GraphQL', Icon: SiGraphql, proficiency: 78 },
      { name: 'PostgreSQL', Icon: SiPostgresql, proficiency: 76 },
      { name: 'AWS', Icon: SiAmazonaws, proficiency: 70 },
      { name: 'Docker', Icon: SiDocker, proficiency: 72 },
    ],
  },
  {
    title: 'Product Craft',
    description:
      'Leading end-to-end product experiences from discovery to launch with process, clarity, and empathy.',
    skills: [
      { name: 'Design Systems', Icon: FiLayers, proficiency: 90 },
      { name: 'Rapid Prototyping', Icon: SiFramer, proficiency: 84 },
      { name: 'Product Strategy', Icon: FiTrendingUp, proficiency: 80 },
      { name: 'UX Research', Icon: FiUsers, proficiency: 78 },
      { name: 'Creative Direction', Icon: FiZap, proficiency: 82 },
    ],
  },
]

export const highlightedSkills = [
  'Motion-first storytelling',
  'Accessible experience design',
  'Design ops & workflow automation',
  'Creative coding & prototyping',
  'Inclusive leadership & facilitation',
  'Continuous discovery culture',
]

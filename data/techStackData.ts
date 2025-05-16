import type { TechStackItem } from '@/types/TechStack';

export const techStack: TechStackItem[] = [
  // Backend
  { name: 'Java', category: 'Backend', icon: 'devicon:java' },
  { name: 'Spring', category: 'Backend', icon: 'devicon:spring' },
  { name: 'Python', category: 'Backend', icon: 'devicon:python' },
  { name: 'Flask', category: 'Backend', icon: 'devicon:flask' },
  { name: 'PHP', category: 'Backend', icon: 'devicon:php' },
  { name: 'CakePHP', category: 'Backend', icon: 'devicon:cakephp' },

  // Frontend
  { name: 'HTML', category: 'Frontend', icon: 'devicon:html5' },
  { name: 'CSS', category: 'Frontend', icon: 'devicon:css3' },
  { name: 'JavaScript', category: 'Frontend', icon: 'devicon:javascript' },
  { name: 'jQuery', category: 'Frontend', icon: 'devicon:jquery' },
  { name: 'TypeScript', category: 'Frontend', icon: 'devicon:typescript' },
  { name: 'Vue.js', category: 'Frontend', icon: 'devicon:vuejs' },
  { name: 'Nuxt.js', category: 'Frontend', icon: 'devicon:nuxtjs' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon:tailwindcss' },

  // Database
  { name: 'MySQL', category: 'Database', icon: 'devicon:mysql' },
  { name: 'PostgreSQL', category: 'Database', icon: 'devicon:postgresql' },
  { name: 'Redis', category: 'Database', icon: 'devicon:redis' },

  // Cloud
  { name: 'AWS', category: 'Cloud', icon: 'devicon:amazonwebservices-wordmark' },
  { name: 'Google Cloud (GCP)', category: 'Cloud', icon: 'devicon:googlecloud' },

  // DevOps
  { name: 'Git', category: 'DevOps', icon: 'devicon:git' },
  { name: 'GitHub Actions', category: 'DevOps', icon: 'devicon:githubactions' },
  { name: 'Docker', category: 'DevOps', icon: 'devicon:docker' },

  // Testing

  // Other
  { name: 'OpenAPI', category: 'Other', icon: 'devicon:openapi' },
  { name: 'OpenID', category: 'Other', icon: 'mdi:openid' },
  { name: 'WordPress', category: 'Other', icon: 'devicon:wordpress' },
];

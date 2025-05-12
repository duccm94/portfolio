import type { TechStackItem } from '@/types/TechStack';

export const techStack: TechStackItem[] = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: 'devicon:html5' },
  { name: 'CSS3', category: 'Frontend', icon: 'devicon:css3' },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: 'devicon:javascript' },
  { name: 'TypeScript', category: 'Frontend', icon: 'devicon:typescript' },
  { name: 'Vue.js', category: 'Frontend', icon: 'devicon:vuejs' },
  { name: 'Nuxt.js', category: 'Frontend', icon: 'devicon:nuxtjs' },
  { name: 'React', category: 'Frontend', icon: 'devicon:react' },
  { name: 'Next.js', category: 'Frontend', icon: 'devicon:nextjs' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'devicon:tailwindcss' },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: 'devicon:nodejs' },
  { name: 'Express.js', category: 'Backend', icon: 'devicon:express' },
  { name: 'Python', category: 'Backend', icon: 'devicon:python' },
  { name: 'Django', category: 'Backend', icon: 'devicon:django' },
  { name: 'Java', category: 'Backend', icon: 'devicon:java' },
  { name: 'Spring Boot', category: 'Backend', icon: 'devicon:spring' },

  // Database
  { name: 'PostgreSQL', category: 'Database', icon: 'devicon:postgresql' },
  { name: 'MySQL', category: 'Database', icon: 'devicon:mysql' },
  { name: 'MongoDB', category: 'Database', icon: 'devicon:mongodb' },
  { name: 'Redis', category: 'Database', icon: 'devicon:redis' },

  // Cloud
  { name: 'AWS', category: 'Cloud', icon: 'devicon:amazonwebservices' },
  { name: 'Google Cloud (GCP)', category: 'Cloud', icon: 'devicon:googlecloud' },
  { name: 'Azure', category: 'Cloud', icon: 'devicon:azure' },

  // DevOps
  { name: 'Docker', category: 'DevOps', icon: 'devicon:docker' },
  { name: 'Kubernetes', category: 'DevOps', icon: 'devicon:kubernetes' },
  { name: 'Git', category: 'DevOps', icon: 'devicon:git' },
  { name: 'GitHub Actions', category: 'DevOps', icon: 'devicon:githubactions' }, // Assuming devicon has this, or use a generic one
  { name: 'Terraform', category: 'DevOps', icon: 'devicon:terraform' },

  // Testing
  { name: 'Jest', category: 'Testing', icon: 'devicon:jest' },
  { name: 'Vitest', category: 'Testing', icon: 'devicon:vitest' }, // Assuming devicon has this
  { name: 'Cypress', category: 'Testing', icon: 'devicon:cypressio' }, // Assuming devicon has this

  // Other
  { name: 'GraphQL', category: 'Other', icon: 'devicon:graphql' },
  { name: 'REST APIs', category: 'Other', icon: '' }, // No specific icon, or find a generic API icon
];

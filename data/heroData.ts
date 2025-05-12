import type { Hero } from '@/types/Hero';

export const heroData: Hero = {
  name: 'Duc CM',
  title: 'Software Engineer',
  bio: 'Passionate and experienced software engineer specializing in building modern web applications with a focus on clean code, user experience, and scalable solutions. Always eager to learn new technologies and contribute to impactful projects.',
  avatarUrl: '/profile-placeholder.jpg',
  avatarAlt: 'Duc CM - Profile Picture',
  location: 'Yokohama, Kanagawa, Japan',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/duccm94',
      icon: 'devicon:github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/duccm/',
      icon: 'devicon:linkedin',
    },
    // Add more social links here if needed
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/your-twitter',
    //   icon: 'devicon:twitter',
    // },
  ],
};

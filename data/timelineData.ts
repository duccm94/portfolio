import type { TimelineEvent } from '@/types/TimelineEvent';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '4',
    startDate: '2022/03',
    endDate: 'Present', // Add endDate, same as startDate for single-point event
    title: 'Backend Engineer',
    organization: 'KINTO Technologies Corporation',
    location: 'Tokyo, Japan',
    shortDescription: 'TODO',
    detailedDescription: [
      'Develop global ID system',
      'Develop https://toyota-community.kinto-technologies.com/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-01-en/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-01/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-02-en/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-02/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-03/',
      'https://blog.kinto-technologies.com/posts/Innovation-Days-03-ja/',
      'https://blog.kinto-technologies.com/posts/2024-12-03-toyota-community/',
    ],
    skills: ['TypeScript', 'Nuxt.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: '3',
    startDate: '2018/11',
    endDate: '2022/02',
    title: 'Software Engineer, BrSE',
    organization: 'Hitachi Systems, Ltd.',
    location: 'Kanagawa, Japan',
    shortDescription: 'Led development of Tokyo Metropolitan systems.',
    detailedDescription: [
      'Led a team of 5 engineers in the development of a new microservices-based architecture.',
      'Improved application performance by 30% through query optimization and caching strategies.',
      'Mentored junior developers and conducted code reviews to ensure code quality.'
    ],
    skills: ['TypeScript', 'Nuxt.js', 'Vue.js', 'Node.js', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    startDate: '2017/11',
    endDate: '2018/11',
    title: 'Full Stack Engineer',
    organization: 'ReasonWhy Inc.',
    location: 'Tokyo, Japan',
    shortDescription: 'Developed and maintained healthcare applications.',
    detailedDescription: 'Contributed to the full software development lifecycle, from concept and design to testing and deployment. Collaborated with cross-functional teams to deliver high-quality software products.',
    skills: ['JavaScript', 'React', 'Redux', 'Node.js', 'MongoDB'],
  },
  {
    id: '1',
    startDate: '2017/07',
    endDate: '2017/11',
    title: 'Junior Software Engineer',
    organization: 'Sun* Inc. (formerly Framgia Inc.)',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Developed a new mobile application.',
    detailedDescription: 'Developed Whytlink Android application - one of ReasonWhy Inc.\'s services with offshore team.',
    skills: ['Java', 'Android SDK', 'Git'],
  },
  {
    id: '0',
    startDate: '2017/08',
    endDate: '2017/08',
    title: 'Graduation',
    organization: 'Hanoi University of Science and Technology (HUST)',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Graduated with the degree of Engineer in Information Technology (HEDSPI program)',
    detailedDescription: 'Completed HEDSPI (Higher Education Development Support Project on ICT) - a practical information technology education program based on Japanese IT skill standards (ITSS)',
  }
];

// To ensure bottom-up display (newer on top), we can sort here or in the component.
// For simplicity, data is already ordered with newer items first.
// If it wasn't, we could do:
// export const sortedWorkExperiences = workExperiences.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());

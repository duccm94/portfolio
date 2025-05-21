import type { TimelineEvent } from '@/types/TimelineEvent';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '4',
    startDate: '2022/03',
    endDate: 'Present', // Add endDate, same as startDate for single-point event
    title: 'Backend Engineer',
    organization: '[KINTO Technologies Corporation](https://www.kinto-technologies.com/){.markdown-link}',
    location: 'Tokyo, Japan',
    shortDescription: 'Developing mobility related services',
    detailedDescription: [
      'Develop global ID system',
      `# Participated and won the company's hackathon - KINTO Global Innovation Days 2022 with my team United Nations.

- About KINTO Global Innovation Days 2022: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-01-en/){.markdown-link}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-01/){.markdown-link}
- On the day of the event: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-02-en/){.markdown-link}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-02/){.markdown-link}
- Winning team interview: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-03/){.markdown-link}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-03-ja/){.markdown-link}
- Developed [Toyota Community by KINTO](https://toyota-community.kinto-technologies.com/){.markdown-link}
- My teammate wrote [a blog article about the community]('https://blog.kinto-technologies.com/posts/2024-12-03-toyota-community/){.markdown-link}
`,
    ],
    skills: ['Java', 'Spring', 'Python', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'MySQL', 'Redis', 'AWS', 'OpenID', 'OpenAPI']
  },
  {
    id: '3',
    startDate: '2018/11',
    endDate: '2022/02',
    title: 'Software Engineer, BrSE',
    organization: '[Hitachi Systems, Ltd.](https://www.hitachi-systems.com/){.markdown-link}',
    location: 'Kanagawa, Japan',
    shortDescription: 'Led development of Tokyo Metropolitan systems.',
    detailedDescription: [
      'TODO',
      'Led a team of 5 engineers in the development of a new microservices-based architecture.',
      'Improved application performance by 30% through query optimization and caching strategies.',
      'Mentored junior developers and conducted code reviews to ensure code quality.'
    ],
    skills: ['PHP', 'CakePHP', 'WordPress', 'Java', 'Spring', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    startDate: '2017/11',
    endDate: '2018/11',
    title: 'Full Stack Engineer',
    organization: '[ReasonWhy Inc.](https://www.reasonwhy.jp/){.markdown-link}',
    location: 'Tokyo, Japan',
    shortDescription: 'Developed and maintained healthcare applications.',
    detailedDescription: [
      'TODO',
      'Contributed to the full software development lifecycle, from concept and design to testing and deployment. Collaborated with cross-functional teams to deliver high-quality software products.'
    ],
    skills: ['Java', 'Android', 'Ruby', 'Ruby on Rails', 'Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Electron', 'PostgreSQL', 'AWS'],
  },
  {
    id: '1',
    startDate: '2017/07',
    endDate: '2017/11',
    title: 'Junior Software Engineer',
    organization: '[Sun* Inc. (formerly Framgia Inc.)](https://sun-asterisk.vn/){.markdown-link}',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Developed a new mobile application.',
    detailedDescription: 'Developed Whytlink Android application - one of ReasonWhy Inc.\'s services with offshore team.',
    skills: ['Java', 'Android', 'Git'],
  },
  {
    id: '0',
    startDate: '2017/08',
    endDate: '2017/08',
    title: 'Graduation',
    organization: '[Hanoi University of Science and Technology (HUST)](https://hust.edu.vn/){.markdown-link}',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Graduated with the degree of Engineer in Information Technology (HEDSPI program)',
    detailedDescription: 'Completed HEDSPI (Higher Education Development Support Project on ICT) - a practical information technology education program based on Japanese IT skill standards (ITSS)',
  }
];

// To ensure bottom-up display (newer on top), we can sort here or in the component.
// For simplicity, data is already ordered with newer items first.
// If it wasn't, we could do:
// export const sortedWorkExperiences = workExperiences.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());

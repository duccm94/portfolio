import type { TimelineEvent } from '@/types/TimelineEvent';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '4',
    startDate: '2022/03',
    endDate: 'Present', // Add endDate, same as startDate for single-point event
    title: 'Backend Engineer',
    organization: '[KINTO Technologies Corporation](https://www.kinto-technologies.com/){:target="_blank"}',
    location: 'Tokyo, Japan',
    shortDescription: 'Developing mobility related services',
    detailedDescription: [
      `Developing mobility related services:
- Develop global ID system.
- Participated and won the company’s hackathon - KINTO Global Innovation Days 2022 with my team Crew. ![Hackathon winning prize](https://drive.google.com/uc?export=view&id=1_zTCJRA1msctSKCEt4M_pshu8HNLn2ku)
  - About KINTO Global Innovation Days 2022: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-01-en/){:target="_blank"}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-01/){:target="_blank"}
  - On the day of the event: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-02-en/){:target="_blank"}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-02/){:target="_blank"}
  - Winning team interview: [in English](https://blog.kinto-technologies.com/posts/Innovation-Days-03/){:target="_blank"}, [in Japanese](https://blog.kinto-technologies.com/posts/Innovation-Days-03-ja/){:target="_blank"}
  - Developed [Toyota Community by KINTO](https://toyota-community.kinto-technologies.com/){:target="_blank"}
  - My teammate wrote [a blog article about the community]('https://blog.kinto-technologies.com/posts/2024-12-03-toyota-community/){:target="_blank"}
- Got the Individual Award in the company’s annual award ceremony. ![Individual Award](/individual-award.png)
- Won the MVP by having the highest score in 3 out of 4 programming languages in the company Secure Coding Tournament. ![Secure Coding MVP](https://drive.google.com/uc?export=view&id=19z_4U9y5_ql4cRjnrWXsgxPVy0W19AkM)`,
    ],
    skills: ['Java', 'Spring', 'Python', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Vue.js', 'Nuxt.js', 'MySQL', 'Redis', 'AWS', 'OpenID', 'OpenAPI']
  },
  {
    id: '3',
    startDate: '2018/11',
    endDate: '2022/02',
    title: 'Software Engineer, BrSE',
    organization: '[Hitachi Systems, Ltd.](https://www.hitachi-systems.com/){:target="_blank"}',
    location: 'Kanagawa, Japan',
    shortDescription: 'Worked as a tech lead for projects commissioned by the Tokyo Metropolitan Government, covering the entire development lifecycle from requirements definition to maintenance, and as a Bridge SE to ensure quality of deliverables.',
    detailedDescription: [
      `I served as both technical leader and Bridge SE, led the development of web systems commissioned by the Tokyo Metropolitan Government in a multinational team of engineers from Japan, Vietnam, China, and Myanmar. My work spanned wide range from basic design, detailed design to development, testing, and maintenance. I proactively identified and resolved critical issues, managed development schedules and ensured high-quality outputs. I regularly communicated with Japanese clients and Vietnamese offshore teams to clarify requirements and manage progress, conducted detailed reviews of deliverables to ensure deliverable quality. Key projects included:
- [Tokyo Startup Station](https://startup-station.jp/){:target="_blank"}: Created design documents and developed the system using CakePHP. Built batch processes and data migration tools, implemented message queue for email delivery. Reviewed offshore source code. Detected critical issues such as SQL injection, missing transactions, and improper SQL mode. Optimized SQL query for statistics data from 2 minutes to less than 2 seconds. Implemented an SEO optimization to improve website ranking and visibility. Responsible for all testing levels and system maintenance. Also mentored junior developers and conducted code reviews to ensure code quality.
- [Business Chance Navi](https://www.chancenavi.jp/bcn/){:target="_blank"}: Upgraded major versions for core components of the system, including PHP, CakePHP, WordPress, jQuery, and PostgreSQL. Hanlded numerous issues due to deprecated or removed features and resolved breaking changes.
- [Tokyo Condominium Management Status Notification System](https://www.mansion-todokede.metro.tokyo.lg.jp/){:target="_blank"}: Developed and maintained using Java (Spring Boot). Fixed critical issues such as invalid data insertion, incorrect security context handling, and insufficient security configuration.`,
    ],
    skills: ['PHP', 'CakePHP', 'WordPress', 'Java', 'Spring', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'PostgreSQL', 'AWS']
  },
  {
    id: '2',
    startDate: '2017/11',
    endDate: '2018/11',
    title: 'Full-Stack Engineer',
    organization: '[ReasonWhy Inc.](https://www.reasonwhy.jp/){:target="_blank"}',
    location: 'Tokyo, Japan',
    shortDescription: 'Worked at a medical startup as a full-stack engineer, engaging in a wide range of tasks from front-end, back-end to app development across multiple healthcare products.',
    detailedDescription: [
      `At ReasonWhy Inc., a J-Startup certified medical tech company, I mainly served as a full-stack engineer, contributed to the development of various healthcare services from design to deployment. Additionally, I coordinated with offshore teams in Vietnam as a bridge SE to manage specifications, oversee progress, and ensure quality of deliverables. Key contributions include:
- [Whytlink](https://www.whytlink.com/lp/index.html){:target="_blank"}: Led the Android app development for a doctor-only networking platform. Implemented core features such as chat, timeline, profile, notification, emergency, QR code scanning, and OCR.
- [Findme](https://www.findme.life/){:target="_blank"}: Built an online second-opinion service for cancer patients using Ruby on Rails and React.js. Integrated PAY.JP for secure online payments, significantly reducing development costs while ensuring high security.
- [WhytPlot](https://whytplot.jp/lp/product/){:target="_blank"}: Developed a desktop scraping tool using Electron for medical data analysis service. Enhanced scraping capabilities, improved existing scripts to eliminate data errors, and automated data extraction.
- WhytX: Created a Python application to recognize answers on surgery questionnaires using OpenCV and TensorFlow. Enhanced recognition of varied question types and resolved parsing issues.
- WhytCore: Developed backend system and admin dashboard for all services using Ruby on Rails. Extended and optimized core functions, API endpoints and dashboard.
- Corporate website: Recreated company’s homepage, with a focus on responsive UI and cross-device compatibility.`
    ],
    skills: ['Java', 'Android', 'Ruby', 'Ruby on Rails', 'Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'React.js', 'Electron', 'PostgreSQL', 'AWS'],
  },
  {
    id: '1',
    startDate: '2017/07',
    endDate: '2017/11',
    title: 'Junior Software Engineer',
    organization: '[Sun* Inc. (formerly Framgia Inc.)](https://sun-asterisk.vn/){:target="_blank"}',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Developed a new Android application for ReasonWhy Inc.',
    detailedDescription: 'Developed Whytlink Android application - one of ReasonWhy Inc.’s services with offshore team.',
    skills: ['Java', 'Android', 'Git'],
  },
  {
    id: '0',
    startDate: '2012/08',
    endDate: '2017/08',
    title: 'Graduation',
    organization: '[Hanoi University of Science and Technology (HUST)](https://hust.edu.vn/){:target="_blank"}',
    location: 'Hanoi, Vietnam',
    shortDescription: 'Graduated with the degree of Engineer in Information Technology (HEDSPI program)',
    detailedDescription: 'Completed HEDSPI (Higher Education Development Support Project on ICT) - a practical information technology education program based on Japanese IT skill standards (ITSS)',
  }
];

// To ensure bottom-up display (newer on top), we can sort here or in the component.
// For simplicity, data is already ordered with newer items first.
// If it wasn't, we could do:
// export const sortedWorkExperiences = workExperiences.sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime());

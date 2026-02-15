export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Teaching Assistant — Algorithmic Problem Solving',
    company: 'New York University',
    period: 'Sep 2024 – Present',
    description: [
      'Mentor 60+ students in algorithmic thinking and competitive programming techniques.',
      'Design problem sets and hold weekly office hours.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Arista Networks',
    period: 'Jul 2022 – Jul 2024',
    description: [
      'Designed and built microservice architecture reducing page load times by 98%.',
      'Led a team of 4 engineers to deliver a network monitoring dashboard used by Fortune 500 clients.',
      'Implemented CI/CD pipelines and containerized services with Docker and Kubernetes.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Arista Networks',
    period: 'May 2021 – Jul 2021',
    description: [
      'Built internal tooling for automated test infrastructure, reducing manual QA time by 40%.',
      'Developed REST APIs in Python/Django for device configuration management.',
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Khatepay',
    description:
      'Co-founded a mobile app for peer-to-peer expense tracking and splitting. Achieved 1,000+ downloads within the first week of launch.',
    tags: ['Dart', 'Flutter', 'Firebase'],
    github: 'https://github.com/divyanshum/khatepay',
  },
  {
    title: 'Microservice Platform',
    description:
      'Engineered a microservice architecture that reduced page load times by 98%, serving thousands of concurrent users with high availability.',
    tags: ['Go', 'Docker', 'Kubernetes', 'gRPC'],
    github: 'https://github.com/divyanshum/microservice-platform',
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio built with Next.js and Material UI, statically exported and hosted on GitHub Pages.',
    tags: ['Next.js', 'TypeScript', 'MUI'],
    github: 'https://github.com/divyanshum/portfolio',
    live: 'https://divyanshum.github.io/portfolio',
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive web app to visualize sorting and graph algorithms step-by-step for educational purposes.',
    tags: ['React', 'TypeScript', 'Canvas API'],
    github: 'https://github.com/divyanshum/algo-visualizer',
  },
];

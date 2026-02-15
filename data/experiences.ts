export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Team Lead',
    company: 'NYU IT High Speed Research Network',
    period: 'Jun 2025 – Present',
    description: [
      'Leading the Audio Engineering program, implementing ASRC to jitter buffer for dynamic buffer modification.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'NYU IT High Speed Research Network',
    period: 'Sep 2024 – May 2025',
    description: [
      'Worked on Audio Engineering, implementing ASRC to jitter buffer for dynamic buffer modification.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Meta',
    period: 'May 2025 – Aug 2025',
    description: [
      'Worked on the Ads Monetization team, running experiments to optimize metrics-to-features before feeding them to the ranking model and measuring how gains translated.',
    ],
  },
  {
    role: 'Tutor — CSCI 480.52 Algorithmic Problem Solving',
    company: 'NYU Courant Institute of Mathematical Sciences',
    period: 'Sep 2024 – Dec 2024',
    description: [
      'Regularly held office hours to supplement course materials and support students in algorithmic problem solving.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Arista Networks',
    period: 'Jul 2022 – Jul 2024',
    description: [
      'Developed a scalable multi-tenant microservice by migrating business logic from the front-end, optimizing page load time by 98%, and implementing in-memory caching with on-demand state computation.',
      'Designed and maintained event-driven mechanisms to provide visibility into the WAN network at global, regional, and site levels. Implemented per-tenant sharding using a Go-routine pool.',
      'Investigated and resolved buffer overflow and notification loss issues using pprof profiling. Designed a multi-shard solution, enhancing scalability and reducing notification ingest time by 500%.',
      'Managed the Zero Touch Provisioning (ZTP) package, addressing customer escalations, fixing critical bugs, and debugging complex issues.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'Arista Networks',
    period: 'May 2021 – Jul 2021',
    description: [
      'Designed and implemented a cron job to automate synchronization between purchased device data from sales files and the internal Cloud Spanner database, ensuring seamless data consistency.',
      'Developed gRPC resource APIs for both the purchased database and the Cloud Spanner database, enabling the cron job to synchronize files automatically at a fixed time daily.',
    ],
  },
  {
    role: 'Co-Founder | Tech',
    company: 'KhatePay',
    period: 'Nov 2021 – Sep 2022',
    description: [
      'Spearheaded the development of a mobile app using Flutter and a Django back-end, leading a team of 5 developers. Successfully deployed the app within 30 days of inception.',
      'Utilized AWS EC2 and S3 for hosting, integrated KhatePay QRs with campus vendors in collaboration with ISB Mohali, and deployed the back-end behind an Nginx proxy.',
      'Published the app on the Google Play Store, achieving 1k+ downloads in the first week.',
    ],
  },
  {
    role: 'Undergraduate Teaching Assistant — Databases',
    company: 'Indian Institute of Technology, Ropar',
    period: 'Aug 2021 – Dec 2021',
    description: [
      'Served as a TA for the Databases course during senior year, responsible for grading assignments and projects as part of the course curriculum.',
    ],
  },
  {
    role: 'Coding Club Coordinator',
    company: 'Coding Club, IIT Ropar',
    period: 'Jul 2019 – May 2020',
    description: [
      'Regularly organized sessions for freshers related to competitive programming and discussing approaches to solve problems.',
    ],
  },
];

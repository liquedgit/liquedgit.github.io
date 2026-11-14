export type Category = 'Tooling' | 'CTF Challenge' | 'Exploit / PoC' | 'Vulnerable Lab';

export type Project = {
  name: string;
  category: Category;
  description: string;
  tags: string[];
  repo: string;
  link?: { label: string; url: string };
};

const gh = (name: string) => `https://github.com/liquedgit/${name}`;

export const projects: Project[] = [
  {
    name: 'Sentinel Flow',
    category: 'Tooling',
    description:
      'Real-time Broken Access Control detection that learns from live traffic. A Go reverse-proxy agent streams access events through Kafka to a detection engine, which builds endpoint-to-role baselines and flags requests that break them. No hand-written rules.',
    tags: ['BAC / RBAC', 'Go', 'Kafka', 'TypeScript'],
    repo: gh('sentinel-flow'),
    link: { label: 'Docs', url: 'https://sentinel-flow-docs.pages.dev/docs/intro/' },
  },
  {
    name: "Diddy's Party",
    category: 'CTF Challenge',
    description:
      'Hard-rated smart contract exploitation challenge authored for National Cyber Week 2024.',
    tags: ['Blockchain', 'Solidity', 'NCW 2024'],
    repo: gh('diddy-s-party'),
  },
  {
    name: 'PDFGenerator',
    category: 'CTF Challenge',
    description: 'Medium web exploitation challenge authored for the Beefest 2024 qualification round.',
    tags: ['Web', 'TypeScript', 'Beefest 2024'],
    repo: gh('PDFGenerator'),
  },
  {
    name: 'SteaML',
    category: 'CTF Challenge',
    description: 'Entry-level web exploitation challenge authored for IFEST 2024.',
    tags: ['Web', 'TypeScript', 'IFEST 2024'],
    repo: gh('IFEST2024-SteaML'),
  },
  {
    name: 'WebEx Baby',
    category: 'CTF Challenge',
    description: 'Beginner web exploitation challenge authored for ITFest 2024.',
    tags: ['Web', 'EJS', 'ITFest 2024'],
    repo: gh('ITFest2024-WebEx-Baby'),
  },
  {
    name: 'petir-easier',
    category: 'Exploit / PoC',
    description:
      'XSS payload hosted through jsDelivr to slip past Content Security Policies that trust the CDN. A practical CSP-bypass delivery script.',
    tags: ['XSS', 'CSP bypass'],
    repo: gh('petir-easier'),
  },
  {
    name: 'ghost-note solver',
    category: 'Exploit / PoC',
    description: 'Automated exploit script for the Ghost Note web exploitation CTF challenge.',
    tags: ['Web', 'JavaScript', 'CTF'],
    repo: gh('ghost-note-solver'),
  },
  {
    name: 'Burp Academy PoCs',
    category: 'Exploit / PoC',
    description: 'Proof-of-concept payloads used to solve PortSwigger Web Security Academy labs.',
    tags: ['Web', 'PortSwigger'],
    repo: gh('POC-BurpAcademy'),
  },
  {
    name: 'Log Me In — API',
    category: 'Vulnerable Lab',
    description:
      'Deliberately vulnerable Go/Fiber backend for teaching API attacks such as broken authentication and access control.',
    tags: ['API security', 'Go', 'Training'],
    repo: gh('log-me-in-backend'),
  },
  {
    name: 'Log Me In — Android',
    category: 'Vulnerable Lab',
    description:
      'Companion Android client to the vulnerable API, for practising mobile-to-backend attack chains.',
    tags: ['Android', 'Java', 'Training'],
    repo: gh('log-me-in-app'),
  },
];

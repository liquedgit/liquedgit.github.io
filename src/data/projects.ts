export type Category = 'Tooling' | 'Maintained Fork' | 'CTF Challenge' | 'Exploit / PoC' | 'Vulnerable Lab';

export type Project = {
  name: string;
  category: Category;
  description: string;
  tags: string[];
  repo: string;
  link?: { label: string; url: string };
  /** Original project, credited on forks. */
  upstream?: { name: string; url: string };
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
    name: 'rootAVD',
    category: 'Maintained Fork',
    description:
      'Maintained fork of the Android Studio AVD rooting script, unmaintained upstream since Oct 2024. Updated to Magisk v31.1 with API 36 arm64-v8a support, added the latest Magisk GitHub release to the version menu, and repointed self-update to the fork, so I can keep rooted emulators for mobile pentesting.',
    tags: ['Android', 'Magisk', 'Shell'],
    repo: gh('rootAVD'),
    upstream: { name: 'newbit1/rootAVD', url: 'https://github.com/newbit1/rootAVD' },
  },
  {
    name: 'reFlutter',
    category: 'Maintained Fork',
    description:
      'Fork of the Flutter reverse engineering framework. Fixed per-ABI snapshot hash detection that broke multi-ABI APKs, added a fallback scan of extracted APK/IPA archives, and added a non-interactive mode for scripted and CI use.',
    tags: ['Flutter', 'Reverse engineering', 'Python'],
    repo: gh('reFlutter'),
    upstream: { name: 'Impact-I/reFlutter', url: 'https://github.com/Impact-I/reFlutter' },
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

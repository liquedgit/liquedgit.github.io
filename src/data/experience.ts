export type Role = {
  role: string;
  org: string;
  period: string;
  location?: string;
  current?: boolean;
  points: string[];
};

export const experience: Role[] = [
  {
    role: 'Product Security Engineer',
    org: 'Confidential Startup Company',
    period: 'Nov 2025 — Present',
    location: 'Jakarta, Indonesia',
    current: true,
    points: [
      'Run black-box and grey-box penetration tests across web applications, APIs, and internal systems of a multi-product SaaS platform.',
      'Target authentication and authorisation logic in a multi-tenant architecture, chaining weaknesses into working exploits that prove real impact before escalation.',
      'Lead AI/LLM red teaming of production agentic systems and chatbot agents: prompt injection, tool abuse, guardrail bypass, excessive agency, and data exfiltration.',
      'Built an AI-driven remediation pipeline on Jira webhooks that locates the affected repository, generates the code fix, and opens a pull request for developer review — cutting time-to-fix for critical and high findings.',
      'Triage bug bounty reports end to end and drive every verified finding to a retested fix within SLA alongside engineering and DevSecOps.',
      'Benchmark AI defence and SIEM products against AI-specific attack techniques through structured proof-of-concepts.',
    ],
  },
  {
    role: 'Security Assessment & Solution Engineer',
    org: 'Lintasarta',
    period: 'Mar 2025 — Oct 2025',
    location: 'Jakarta, Indonesia',
    points: [
      'Delivered vulnerability assessments and penetration tests for internal and enterprise client systems, with CVSS-scored reports and prioritised remediation roadmaps.',
      'Built an internal tool orchestrating vulnerability scanning workflows, cutting assessment setup time and standardising coverage.',
      'Integrated SAST/DAST into client SDLCs and supported threat hunting and CSIRT operations during live incidents.',
    ],
  },
  {
    role: 'Web Exploitation — CTF Player & Challenge Author',
    org: 'PETIR Cyber Security Team',
    period: 'Apr 2024 — Present',
    points: [
      'Top 7 in Indonesia and Top 30 in Southeast Asia at PwC Hackaday 2024.',
      'Authored web and blockchain exploitation challenges for National Cyber Week, Beefest, and IFEST 2024.',
    ],
  },
  {
    role: 'Subject Coordinator → Laboratory Assistant',
    org: 'Bina Nusantara University',
    period: 'Feb 2023 — Feb 2025',
    location: 'Jakarta, Indonesia',
    points: [
      'Taught hands-on cybersecurity and networking labs built around real-world attack and defence scenarios.',
      'Led the lab assistant team for security subjects and co-developed new courses, including Azure Kubernetes Service labs.',
    ],
  },
];

export const featuredBuild = {
  title: 'AI-Assisted Vulnerability Remediation',
  context: 'Built at a Confidential Startup Company',
  problem:
    'Finding a vulnerability is only half the job. Engineers lost time working out which repository served the affected endpoint before they could even start on a fix, and critical findings waited in the queue.',
  steps: [
    { label: 'Jira finding', detail: 'A security finding is filed or updated in Jira.' },
    { label: 'Webhook', detail: 'A Jira webhook triggers the pipeline with the finding context.' },
    {
      label: 'Repo resolver',
      detail: 'Maps the affected endpoint to the most likely owning repositories and ranks them.',
    },
    { label: 'AI patch', detail: 'Generates a code-level fix for the vulnerability class in that codebase.' },
    { label: 'Pull request', detail: 'Opens a PR carrying the finding details for the owning team.' },
    { label: 'Human review', detail: 'A developer reviews, adjusts, and merges. Nothing ships without approval.' },
  ],
  outcome:
    'Engineers start from a ready-to-review fix in the right repository instead of a ticket, so critical and high-severity vulnerabilities are remediated faster.',
};

export const bounties = [
  {
    title: 'Authentication bypass in GraphQL PIN verification',
    impact: 'Account access',
    detail:
      'Bypassed OTP enforcement through the PIN verify mutation, gaining access to accounts in both locked and unlocked states.',
  },
  {
    title: 'Unauthenticated internal Harbor registry',
    impact: 'Supply chain exposure',
    detail:
      'Reached an internet-exposed private container registry without credentials, exposing internal images and the software supply chain behind them.',
  },
  {
    title: 'Config endpoint leak chained with public GCS bucket',
    impact: 'Internal data exposure',
    detail:
      'An unauthenticated configuration endpoint leaked internal service details, chained with a publicly listable Google Cloud Storage bucket to reach internal data.',
  },
];

export type Certification = {
  short: string;
  name: string;
  issuer: string;
  /** Set for certifications still in progress (0–100). */
  progress?: number;
  /** Public credential page (e.g. Credly) shown as a "Verify" button. */
  verifyUrl?: string;
};

export const certifications: Certification[] = [
  {
    short: 'CWES',
    name: 'Certified Web Exploitation Specialist',
    issuer: 'Hack The Box',
    verifyUrl: 'https://www.credly.com/badges/884a9f08-1d59-4b91-b74b-9e7d3bdce2f2/public_url',
  },
  { short: 'CAPT', name: 'Certified Android Penetration Tester', issuer: 'Mobile Hacking Lab', progress: 66 },
  { short: 'CMPen-Android', name: 'Certified Mobile Application Penetration Tester', issuer: 'The SecOps Group' },
  { short: 'CNSP', name: 'Certified Network Security Practitioner', issuer: 'The SecOps Group' },
  { short: 'CAP', name: 'Certified AppSec Practitioner', issuer: 'The SecOps Group' },
  { short: 'CBP', name: 'Certified Blockchain Practitioner', issuer: 'The SecOps Group' },
];

export const arsenal = [
  {
    group: 'Offensive Tooling',
    items: ['Burp Suite', 'Frida', 'Objection', 'MobSF', 'Ghidra', 'Metasploit', 'BloodHound', 'sqlmap', 'Nuclei', 'ffuf', 'Nmap', 'Wireshark', 'Kali Linux'],
  },
  {
    group: 'Methodologies',
    items: ['OWASP WSTG', 'ASVS', 'API Security Top 10', 'LLM Top 10', 'MASVS / MASTG', 'MITRE ATT&CK', 'CVSS'],
  },
  {
    group: 'Targets & Platforms',
    items: ['AWS', 'Azure', 'GCP', 'Alibaba Cloud', 'Kubernetes', 'Docker', 'Linux', 'Windows'],
  },
  {
    group: 'Exploit Dev & Scripting',
    items: ['Python', 'Go', 'Bash', 'JavaScript / TypeScript', 'Java', 'C#'],
  },
  {
    group: 'Supporting',
    items: ['Secure code review', 'Threat modelling', 'SAST / DAST / SCA', 'CI/CD security', 'Threat hunting', 'Incident response'],
  },
];

export const education = {
  school: 'BINUS University',
  degree: 'Bachelor of Computer Science — Cyber Security',
  period: '2021 — 2025',
  gpa: '3.73 / 4.00',
};

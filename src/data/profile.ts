export const profile = {
  name: 'Michael Bryan Chandra',
  handle: 'liquedgit',
  title: 'Offensive Security Engineer',
  focus: ['Penetration Testing', 'AI / LLM Red Teaming', 'Web, API & Mobile Exploitation'],
  tagline: 'I break production systems before adversaries do — and make sure they get fixed.',
  location: 'Jakarta, Indonesia',
  // Split so the address is not present as a plain string in the HTML; joined client-side.
  emailParts: ['michaelchandr003', 'gmail.com'],
  links: {
    github: 'https://github.com/liquedgit',
    linkedin: 'https://www.linkedin.com/in/michael-bryan-chandra/',
    hackthebox: 'https://profile.hackthebox.com/profile/019df41d-7329-7260-a405-6e64282d3dbe',
  },
  about: [
    'I am an offensive security engineer with 2+ years of hands-on penetration testing across web applications, APIs, Android, cloud, and AI/LLM systems. I approach every target the way an attacker would: map the attack surface, find the weakest trust boundary, and chain small flaws into impact that cannot be argued with.',
    'I currently work as a Product Security Engineer at a Confidential Startup Company, a multi-product SaaS provider, where I attack the platform end to end and drive findings through to verified fixes. My specialism is the newest attack surface in production: agentic AI systems, where prompt injection, tool abuse, and guardrail bypass turn helpful assistants into pivot points.',
    'Outside work I hunt bugs in private programmes. With the PETIR Cyber Security Team I competed in CTFs, placing Top 7 in Indonesia at PwC Hackaday 2024, and authored web and blockchain exploitation challenges for national competitions.',
  ],
};

export const stats = [
  { value: '2+', label: 'Years in offensive security' },
  { value: 'Top 7', label: 'Indonesia · PwC Hackaday 2024' },
  { value: '5 + 1', label: 'Certifications earned + in progress' },
  { value: '3', label: 'National CTFs with authored challenges' },
];

export const capabilities = [
  {
    id: 'web',
    title: 'Web & API Exploitation',
    summary:
      'Black-box and grey-box attacks on production SaaS. I go after the trust boundaries: authentication, authorisation, and tenant isolation.',
    techniques: [
      'Broken access control → account takeover',
      'Multi-tenant isolation bypass → cross-tenant data access',
      'Session & token weaknesses',
      'Business logic abuse, injection, SSRF',
    ],
    standards: 'OWASP WSTG · ASVS · API Top 10 · CVSS',
  },
  {
    id: 'ai',
    title: 'AI / LLM Red Teaming',
    summary:
      'Adversarial testing of production agentic systems and chatbot agents, where natural language becomes an exploit primitive.',
    techniques: [
      'Direct & indirect prompt injection',
      'Injection escalated to SSRF via agent tool access',
      'Tool / function-call abuse, excessive agency',
      'System-prompt & guardrail bypass, data exfiltration',
    ],
    standards: 'OWASP LLM Top 10',
  },
  {
    id: 'mobile',
    title: 'Android Exploitation',
    summary:
      'Static and dynamic analysis with runtime instrumentation to defeat client-side controls and reach the backend underneath.',
    techniques: [
      'Frida & Objection instrumentation',
      'Certificate pinning & root detection bypass',
      'Exported component abuse, insecure storage',
      'Backend API attacks from the mobile client',
    ],
    standards: 'OWASP MASVS · MASTG',
  },
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    summary:
      'Hunting misconfigurations and privilege escalation paths across multi-cloud and containerised environments.',
    techniques: [
      'AWS, Azure, GCP & Alibaba Cloud configuration review',
      'IAM privilege escalation paths',
      'Container & Kubernetes attack surface',
      'Internal network penetration testing',
    ],
    standards: 'MITRE ATT&CK',
  },
];

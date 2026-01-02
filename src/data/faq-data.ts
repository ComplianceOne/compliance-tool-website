import { IFaqDT } from '@/types/faq-d-t';

export const faqData: IFaqDT[] = [
  {
    uuid: 'a',
    title: 'What is ComplianceONE?',
    description: `ComplianceONE is an AI powered compliance management platform designed to automate frameworks such as CMMC, FedRAMP, NIST 800-171, SOC 2, and more. It helps organizations streamline gap assessments, generate SSPs and policies, and maintain continuous readiness through real-time AI guidance.
`,
  },
  {
    uuid: 'b',
    title: 'How does the AI help with compliance?',
    description: `Our AI engine automates manual compliance work analyzing your inputs, comparing them against controls, and recommending remediations leveraging our purpose built large language models (LLMs)/ Retrieval Augmented Generation (RAG) specifically trained on FISMA, FedRAMP, and CMMC frameworks for accurate compliance guidance. It can also auto-generate System Security Plans (SSPs), policies, and procedures while highlighting missing evidence or controls.
`,
  },
  {
    uuid: 'c',
    title: 'What frameworks do you currently support?',
    description: `ComplianceONE currently supports: 
- CMMC 2.0 (Levels 1–2)
- FedRAMP (Low, Moderate, High)
Additional frameworks like NIST CSF 2.0, ISO 27001, GDPR, and SOC 2 are being added as the product evolves.
`,
  },
  {
    uuid: 'd',
    title: 'Can I use ComplianceONE for multiple clients or frameworks?',
    description: `Unfortunately, not today, we only support one client at a time with multiple frameworks.`,
  },
  {
    uuid: 'e',
    title: 'How secure is my data?',
    description: `Security is at the core of ComplianceONE. All data is encrypted in transit and at rest using FIPS 140-2. The platform is hosted on Azure Commercial Cloud, which is FedRAMP High–authorized infrastructure with optional GCC High upgrade. We also provide audit logs, access controls, and optional dedicated environments for enterprise clients.
`,
  },
  {
    uuid: 'f',
    title: 'Do I need compliance experience to use ComplianceONE?',
    description: `Not at all. Our step by step AI Assistant guides you through every requirement, explaining each control in plain language, identifying gaps and issues, and offering recommendations for remediation.`,
  },
  {
    uuid: 'g',
    title: 'How long does it take to get started?',
    description: `You can start instantly. After signing up for the Free 7-Day Trial, you’ll gain immediate access to the dashboard and can begin your first automated gap assessment within minutes.`,
  },
  {
    uuid: 'h',
    title: 'What happens when my free trial ends?',
    description: `At the end of your trial, your progress and data are securely saved. You can upgrade to a Starter, Corporate, or Partner plan to continue working without losing any existing data.
Note: Data is only saved for 7 days after the trial ends.`,
  },
  {
    uuid: 'i',
    title: 'Can ComplianceONE replace an advisor or consultant?',
    description: `Yes! ComplianceONE automates up to 80% of manual consultant work, from readiness reports to documentation generation, by utilizing our AI advisor built on compliance. However, you can still invite external consultants or auditors to collaborate within the platform for review and validation.`,
  },
  {
    uuid: 'j',
    title: 'Do you offer discounts or custom enterprise pricing?',
    description: `Yes. We offer multi-year pricing discounts and custom enterprise plans for organizations managing multiple frameworks or business units. Contact us for a tailored quote.`,
  },
];
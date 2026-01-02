import { IServiceDT } from '@/types/service-d-t';

import serviceImg19 from '@/assets/images/s1.png';
import serviceImg20 from '@/assets/images/s2.png';
import serviceImg21 from '@/assets/images/s3.png';
import serviceImg211 from '@/assets/images/s4.png';
import serviceImg22 from '@/assets/images/s5.png';
import serviceImg23 from '@/assets/images/s6.png';
import serviceImg24 from '@/assets/images/s7.png';
import serviceImg25 from '@/assets/images/s8.png';
import serviceImg26 from '@/assets/images/s9.png';
import serviceImg27 from '@/assets/images/s10.png';
import serviceDetailsImg from '@/assets/img/blog/details-1-1.png';


export const serviceDataFour: IServiceDT[] = [
  {
    id: 19,
    image: serviceImg19,
    serviceNumber: '01',
    title: 'Select Your Framework',
    description:
      'Choose your compliance framework by selecting CMMC 2.0, which will receive upcoming support for FedRAMP, NIST 800-171, and ISO 27001. ComplianceONE automatically preloads all required controls and templates specific to your framework from information received about your environment.',
  },
  {
    id: 20,
    image: serviceImg20,
    serviceNumber: '02',
    title: 'Start your Gap Assessment',
    description:
      'Answer a short, interactive AI powered questionnaire that evaluates your organization’s compliance posture. The platform identifies control gaps, assigns readiness scores, and provides a tailored remediation and recommendation report that provides step by step instructions to help you efficiently meet compliance requirements.',
  },
  {
    id: 21,
    image: serviceImg21,
    serviceNumber: '03',
    title: 'Understand and Implement Controls',
    description:
      'Dive deeper into control families with the help of AI to understand complex requirements. ComplianceONE helps you interpret complex controls in plain language, providing thorough explanations of the required technologies and processes, and guiding you on how to achieve full compliance in a structured and trackable way.',
  },
  {
    id: 211,
    image: serviceImg211,
    serviceNumber: '04',
    title: 'Generate Audit Ready Documentation',
    description:
      'Once your Gap Assessment and controls are complete, let the AI handle the rest.  ComplianceONE automatically generates your System Security Plan (SSP), Policies, and Procedures, all mapped to your selected framework and formatted for auditor review.',
  },
];

export const serviceDataFive: IServiceDT[] = [
  {
    id: 27,
    image: serviceImg27,
    title: 'Agentic AI advisor',
    description: `Get expert advised answers, remediation guidance, and audit support while leveraging purpose built large language models (LLMs)/ Retrieval Augmented Generation (RAG) specifically trained on FISMA, FedRAMP, and CMMC frameworks for accurate compliance guidance.
`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },
  {
    id: 22,
    image: serviceImg22,
    title: 'AI Gap Assessment',
    description: `Quickly identify missing controls and weak areas with AI driven assessments. Get instant readiness scores, detailed insights, and prioritized recommendations for remediation.`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },
  {
    id: 24,
    image: serviceImg24,
    title: 'Policy & SSP Generator',
    description: `Create and format audit ready policies, procedures, and System Security Plans (SSPs). All documents are framework aligned and ready to use, featuring dozens of pre-built templates.
`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },

  {
    id: 26,
    image: serviceImg26,
    title: 'Real-Time Compliance Dashboard',
    description: `Track compliance progress across all control families. Monitor readiness levels, team assignments, and task completions in one unified view.`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },
  {
    id: 23,
    image: serviceImg23,
    title: 'Control Guidance Engine',
    description: `Understand what each CMMC or FedRAMP control really means, with AI explaining it in plain, actionable language.`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },
  {
    id: 25,
    image: serviceImg25,
    title: 'Evidence & Trust Center',
    description: `Manage, upload, and map your evidence and ATO documents directly to relevant controls. Keep your auditors confident with traceable, organized documentation.`,
    detailsImage: serviceDetailsImg,
    btnText: 'Details',
  },

];

export const serviceData: IServiceDT[] = [
  ...serviceDataFive,
];

import { CheckMarkNine, Circle } from "@/components/svg";

import { IPriceDT } from "@/types/price-d-t";

export const priceData: IPriceDT[] = [
    {
        id: 1,
        title: "Free Trial",
        price: "$0",
        pricePeriod: "/ 7 Days",
        description:
            "Perfect for exploring the power of ComplianceONE before making a commitment.",
        includesHeader: "During your 7-day trial, you can:",
        services: [
            {
                icon: <CheckMarkNine />,
                service:
                    "Access one compliance framework (CMMC or FedRAMP – limited scope)",
            },
            {
                icon: <CheckMarkNine />,
                service: "Complete a guided compliance assessment",
            },
            {
                icon: <CheckMarkNine />,
                service: "View identified gaps and control-level insights",
            },
            {
                icon: <CheckMarkNine />,
                service: "Explore AI-assisted remediation guidance",
            },
            {
                icon: <CheckMarkNine />,
                service: "Preview Compliance templates",
            },
            {
                icon: <CheckMarkNine />,
                service: "Track progress through the ComplianceONE dashboard",
            },
        ],
        note: "Note: The trial focuses on evaluation and understanding, not full certification.",
        btnText: "Start Free Trial",
        link: "https://www.complianceone.io/register",
    },
    {
        id: 2,
        title: "Starter Plan",
        price: "$2,000",
        pricePeriod: "/ Month",
        description:
            "Best for small organizations looking to establish a strong, AI-driven compliance foundation.",
        includesHeader: "What's included",
        services: [
            {
                icon: <CheckMarkNine />,
                service: "2 Compliance Frameworks",
            },
            {
                icon: <CheckMarkNine />,
                service:
                    "15 Users (Additional users available for additional cost)",
            },
            {
                icon: <CheckMarkNine />,
                service: "Intuitive Dashboards",
            },
            {
                icon: <CheckMarkNine />,
                service: "Framework-Aligned Gap Assessments",
            },
            {
                icon: <CheckMarkNine />,
                service: "AI-Assisted Guidance (Limited)",
            },
            {
                icon: <CheckMarkNine />,
                service: "AI-Assisted SSP Creation (Limited)",
            },
            {
                icon: <CheckMarkNine />,
                service: "Complete Policy & Procedure Templates",
            },
            {
                icon: <CheckMarkNine />,
                service: "Compliance Reporting ",
            },
            {
                icon: <CheckMarkNine />,
                service: "Trust Center Access",
            },
        ],
        btnText: "Choose Starter",
        link: "https://calendly.com/platformoneinc/complianceone-starter-plan-onboarding-review",
    },
    {
        id: 3,
        title: "Corporate Plan",
        price: "$3,000",
        pricePeriod: "/ Month",
        description:
            "Most popular for growing organizations ready for audit preparation.",
        includesHeader: "Includes everything in Starter, plus the following:",
        services: [
            // {
            //     icon: <CheckMarkNine />,
            //     service: "Includes all Starter features",
            // },
            {
                icon: <CheckMarkNine />,
                service:
                    "4 frameworks included (+$250 per additional framework)",
            },
            {
                icon: <CheckMarkNine />,
                service:
                    "30 users included (additional users available at extra cost)",
            },
            {
                icon: <CheckMarkNine />,
                service: "High-limit AI-assisted SSP creation",
            },
            {
                icon: <CheckMarkNine />,
                service: "Extended AI-powered Policies & Templates",
            },
            {
                icon: <CheckMarkNine />,
                service: "Exportable Reports",
            },
        ],
        btnText: "Choose Corporate",
        link: "https://calendly.com/platformoneinc/new-meeting",
    },
    {
        id: 4,
        title: "Partner Plan",
        price: "Get Quote",
        pricePeriod: "",
        description:
            "For consultants, MSPs, or enterprise teams managing multiple clients or frameworks.",
        includesHeader: "Includes everything in Corporate, plus the following:",
        services: [
            // {
            //     icon: <CheckMarkNine />,
            //     service: "Includes all Corporate features",
            // },
            {
                icon: <CheckMarkNine />,
                service:
                    "2 client portals included (+$175 per additional portal)",
            },
            {
                icon: <CheckMarkNine />,
                service: "Per portal:",
            },
            {
                icon: <Circle style={{ color: "#475467" }} />,
                service: "2 frameworks (+$250 per additional framework)",
                itemClass: "ml-20 list-style-disc",
            },
            {
                icon: <Circle style={{ color: "#475467" }} />,
                service: "10 users (+$10 per additional user)",
                itemClass: "ml-20 list-style-disc",
            },
            {
                icon: <CheckMarkNine />,
                service: "AI-assisted SSP creation (Highest-capacity)",
            },
            {
                icon: <CheckMarkNine />,
                service: "Static & AI consulting modes (Highest-capacity)",
            },
            {
                icon: <CheckMarkNine />,
                service: "White-label option",
            },
            {
                icon: <CheckMarkNine />,
                service: "Dedicated Compliance Manager",
            },
            {
                icon: <CheckMarkNine />,
                service:
                    "Multi-framework support (FedRAMP, CMMC, NIST, ISO, SOC 2…)",
            },
        ],
        note: "Note:  Custom pricing based on client volume and framework requirements.",
        btnText: "Choose Partner",
        link: "https://calendly.com/platformoneinc/complianceone-partner-plan-alignment-call",
    },
];

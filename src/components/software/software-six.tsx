import Image from "next/image";
import Link from "next/link";
import { CheckMarkFive } from "../svg";

import shapeImg1 from "@/assets/img/shape/software-6-1.png";
import shapeImg2 from "@/assets/img/shape/software-6-2.png";
import heroImg1 from "@/assets/images/c3.png";
// import heroImg2 from "@/assets/images/i2.png";

const itemData = [
    "AI Control Editor: Write and refine responses in plain English.",
    "AI Agent/Advisor: Have our Agentic Advisor guide you through your GAP assessment.",
    "Automated Documentation: Generate SSPs, policies, and procedures within minutes.",
    "Policy & Procedure Library: Choose from dozens of different pre-built templates.",
    "OSCAL & Audit Exports: Deliver machine readable and human ready outputs.",
];

const SoftwareSix = () => {
    return (
        <div
            id="core-capabilities"
            className="it-software-area ai-software-style cr-software-style pb-160 dt-software-style-2 z-index-1 p-relative"
            style={{
                paddingTop: 100,
            }}
        >
            <Image
                className="it-software-shape-1 d-none d-xl-block"
                src={shapeImg1}
                alt="Shape Img"
                width={69}
                height={63}
            />
            <Image
                className="it-software-shape-2 d-none d-xl-block"
                src={shapeImg2}
                alt="Shape Img"
                width={687}
                height={810}
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className=" p-relative d-flex">
                            <div
                                className="it-software-thumb"
                                style={{
                                    marginBottom: 20,
                                }}
                            >
                                <Image
                                    className="image-height-auto"
                                    src={heroImg1}
                                    alt="Software Img"
                                    width={567}
                                    height={568}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="it-software-right-box">
                            <div className="ai-section-title-box mb-30">
                                <h4 className="ai-section-title mb-10 it-split-text it-split-in-right">
                                    Build Audit Ready Documentation <br /> in a
                                    Single Click
                                </h4>
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                >
                                    <p>
                                        Skip the endless spreadsheets.
                                        ComplianceONE’s AI driven documentation
                                        engine transforms your control responses
                                        into fully formatted, framework aligned
                                        Authority to Operate (ATO) documents.
                                        Generate CMMC SSPs, POA&Ms, and
                                        procedures instantly ready for auditor
                                        review and OSCAL export.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="it-software-item-list mb-40 it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".5"
                            >
                                <ul>
                                    {itemData.map((item, i) => (
                                        <li key={i}>
                                            <CheckMarkFive />
                                            <span className="text-black">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div
                                className="it-fade-anim"
                                data-fade-from="top"
                                data-ease="bounce"
                                data-delay=".7"
                            >
                                <Link
                                    className="it-btn"
                                    href="https://www.complianceone.io/register"
                                >
                                    Register for a Free 7 Day Trial
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SoftwareSix;

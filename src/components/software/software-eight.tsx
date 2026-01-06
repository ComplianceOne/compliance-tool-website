import Image from "next/image";
import Link from "next/link";
import { CheckMarkFive } from "../svg";

import shapeImg1 from "@/assets/img/shape/software-6-1.png";
import shapeImg2 from "@/assets/img/shape/software-6-2.png";
import heroImg1 from "@/assets/images/c4.png";
// import heroImg2 from "@/assets/images/i2.png";

const itemData = [
    " Launch faster: Onboard a new client, generate structured intake questionnaires, stand up an active compliance dashboard, and begin building SSPs and Policies & Procedures in hours—not weeks.",
    "Repeatable delivery: Use a consistent workflow across clients so every engagement follows the same proven steps for controls, risks, SSPs, and P&Ps.",
    "Reduce rework: Keep SSPs, policies, evidence, and mappings centralized so you’re not rebuilding documentation every audit cycle.",
    " Improve client confidence: Show clear progress, gaps, and readiness status through living SSPs and dashboards clients can understand without technical translation.",
    " Increase margins: Build SSPs and P&Ps more efficiently, reduce manual writing and formatting, and spend more time delivering high-value advisory guidance.",
];

const SoftwareEight = () => {
    return (
        <div
            id="partners"
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
                                    Turn Your Compliance Work Into a Scalable Service
                                </h4>
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                >
                                    <p>
                                        If you’re a consultant, MSP, or advisory
                                        firm, you know the pain: every new
                                        client means new spreadsheets, repeated
                                        documentation, scattered evidence, and
                                        long back-and-forth. ComplianceONE helps
                                        you standardize delivery so you can take
                                        on more clients without doubling
                                        headcount. Real-world ways partners use
                                        ComplianceONE:
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
                                style={{
                                    display: "flex",
                                    gap: 20,
                                }}
                            >
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="top"
                                    data-ease="bounce"
                                    data-delay=".7"
                                >
                                    <Link className="it-btn" href="#">
                                        Become a Partner
                                    </Link>
                                </div>
                                {/* <div
                                    className="it-fade-anim d-flex align-items-center gap-3 flex-wrap"
                                    data-fade-from="top"
                                    data-ease="bounce"
                                    data-delay=".5"
                                >
                                    <Link
                                        className=" it-btn white-bg"
                                        target="_blank"
                                        href="https://calendly.com/platformoneinc/complianceone-investor-call"
                                    >
                                        Schedule a Partner Call
                                    </Link>
                                </div> */}
                            </div>
                            <p
                                className=" mt-20 text-center text-lg-end"
                                style={{
                                    fontSize: "12px",
                                    opacity: 0.8,
                                }}
                            >
                                ComplianceONE is currently in ALPHA. BETA
                                release planned for 2026.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SoftwareEight;

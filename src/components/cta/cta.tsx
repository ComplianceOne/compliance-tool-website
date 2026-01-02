import Image from "next/image";
import { Circle } from "../svg";
import { ALPHA_DISCLAIMER } from "@/utils/constants";
import shapeImg1 from "@/assets/img/shape/cta-6-1.png";
import shapeImg2 from "@/assets/img/shape/cta-6-2.png";

const itemData = [
    "AI-Generated SSPs & Policies",
    "Automated Gap Assessment",
    "Real-Time AI Guidance",
    "1 Framework Included",
];

const CtaSix = () => {
    return (
        <div className="it-cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div
                            className="ai-cta-wrap it-cta-wrap z-index-3 fix p-relative text-center section-bg"
                            style={{
                                backgroundImage: `url('/assets/img/shape/cta-bg-6-1.jpg')`,
                            }}
                        >
                            <Image
                                className="ai-cta-shape-1 d-none d-lg-block"
                                src={shapeImg2}
                                alt="Shape Img"
                                width={43}
                                height={75}
                            />
                            <Image
                                className="ai-cta-shape-2 d-none d-lg-block"
                                src={shapeImg1}
                                alt="Shape Img"
                                width={70}
                                height={48}
                            />
                            <div className="it-section-title-box mb-30">
                                <span className="it-section-subtitle text-white d-block mb-10">
                                    Get audit-ready 10x faster
                                </span>
                                <h4 className="it-section-title-2 text-white mb-15">
                                    Skip the spreadsheets, documents, and
                                    confusion.
                                </h4>
                                <p className="text-white">
                                    ComplianceOne turns complex CMMC & FedRAMP
                                    requirements into clear, automated steps —
                                    instantly.
                                </p>
                            </div>
                            <a
                                href="https://www.complianceone.io/register"
                                target="_blank"
                            >
                                <button
                                    className={"it-btn white-bg mb-40"}
                                    type="submit"
                                    style={{
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    7 Day Trial
                                </button>
                            </a>
                            <div className="it-cta-info">
                                {itemData.map((item, i) => (
                                    <span key={i}>
                                        <Circle />
                                        {item}
                                    </span>
                                ))}
                            </div>
                            <p
                                className="text-white mt-30 mx-auto"
                                style={{
                                    fontSize: "12px",
                                    opacity: 0.8,
                                    maxWidth: "600px",
                                }}
                            >
                                {ALPHA_DISCLAIMER}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CtaSix;

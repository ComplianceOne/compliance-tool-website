import Image from "next/image";
import { CheckMarkSeven } from "../svg";

import shapeImg1 from "@/assets/img/shape/choose-6-3.png";
import shapeImg2 from "@/assets/img/shape/choose-6-2.png";
import chooseImg1 from "@/assets/images/c1.png";
// import chooseImg2 from "@/assets/images/c2.png";

const chooseData = [
    {
        id: 1,
        title: "Instant AI Advisory",
        subtitle:
            "Our AI advisor explains every control requirement in plain language and shows precisely what’s needed for compliance, saving you hours of research and reducing interpretation errors.",
    },
    {
        id: 2,
        title: "Accelerated Documentation",
        subtitle:
            "Generate audit ready System Security Plans (SSPs), policies, and procedures automatically aligned with CMMC and other frameworks within minutes.",
    },
    {
        id: 3,
        title: "Consistent Accuracy",
        subtitle:
            "Every recommendation is framework-mapped and cross-verified against the latest NIST and DoD updates and guidance, ensuring zero guesswork and reliable audit outcomes.",
    },
    {
        id: 4,
        title: "Expert Backed + AI Enhanced",
        subtitle:
            "Our AI doesn’t replace experts; it’s built by them. Each recommendation is trained from verified CMMC, FedRAMP, and NIST documentation, validated by compliance specialists.",
    },
];

const ChooseOne = () => {
    return (
        <div
            id="choose"
            className="ai-choose-area ai-choose-style pt-160 pb-160 z-index-1 p-relative"
        >
            <Image
                className="ai-choose-shape-3 d-none d-xl-block"
                src={shapeImg1}
                alt="Shape Img"
                width={125}
                height={93}
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-5">
                        <div className="ai-choose-left-box">
                            <div className="ai-section-title-box it-text-anim mb-30">
                                <h4 className="ai-section-title mb-10 it-split-text it-split-in-right">
                                    The Smarter Way to Achieve Compliance
                                </h4>
                                <p>
                                    ComplianceONE eliminates the manual,
                                    confusing, and expensive parts of
                                    compliance. With our AI powered automation,
                                    you can focus on securing your business,
                                    rather than deciphering regulations.
                                </p>
                            </div>
                            <div
                                className="it-software-item-list mb-40 it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".3"
                            >
                                <ul>
                                    {chooseData.map((item) => (
                                        <li key={item.id}>
                                            <CheckMarkSeven />
                                            <div>
                                                <span className="text-black">
                                                    {item.title}
                                                </span>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="ai-choose-right-box z-index-1 p-relative">
                            <div className="it-img-anim-wrap p-relative">
                                <div
                                    className="ai-choose-thumb it-img-anim"
                                    data-displacement="/assets/img/webgl/pattern-1.jpg"
                                    data-intensity="0.5"
                                    data-speedin="1"
                                    data-speedout="1"
                                >
                                    <Image
                                        className="image-height-auto"
                                        src={chooseImg1}
                                        alt="Choose Img"
                                        width={642}
                                        height={697}
                                    />
                                </div>
                            </div>
                            {/* <div className="ai-choose-thumb-sm">
                                <Image
                                    className="image-height-auto"
                                    src={chooseImg2}
                                    alt="Choose Img"
                                    width={250}
                                    height={233}
                                />
                            </div> */}
                            <Image
                                className="ai-choose-shape-2 d-none d-xl-block"
                                src={shapeImg2}
                                alt="Shape Img"
                                width={64}
                                height={63}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChooseOne;

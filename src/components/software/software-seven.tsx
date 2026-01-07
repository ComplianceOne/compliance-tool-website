import Image from "next/image";
import Link from "next/link";

import shapeImg1 from "@/assets/img/shape/software-6-1.png";
import shapeImg2 from "@/assets/img/shape/software-6-2.png";
import heroImg1 from "@/assets/images/ideamoney.jpg";

const SoftwareSeven = () => {
    return (
        <div
            id="investors"
            className="it-software-area ai-software-style cr-software-style pb-160 dt-software-style-2 z-index-1 p-relative"
            style={{
                paddingTop: 0,
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
                        <div className="it-software-right-box">
                            <div className="ai-section-title-box mb-30">
                                <h4 className="ai-section-title mb-10 it-split-text it-split-in-right">
                                    Investors: Intrested in Investing?
                                </h4>
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                >
                                    <p>
                                        ComplianceONE is building the next
                                        generation of compliance automation
                                        using Agentic AI to simplify complex
                                        federal frameworks such as CMMC and
                                        FedRAMP. As regulatory requirements
                                        continue to expand and organizations
                                        seek faster, more cost-effective paths
                                        to compliance, we believe ComplianceONE
                                        is uniquely positioned to lead this
                                        market.
                                    </p>
                                </div>
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                >
                                    <p>
                                        We welcome conversations with strategic
                                        partners and investors who are
                                        interested in collaborating on
                                        technology, go-to-market strategy,
                                        integrations, or long-term growth
                                        initiatives. Whether your interest is
                                        financial, technical, or operational, we
                                        believe meaningful partnerships can
                                        accelerate innovation and expand the
                                        impact of ComplianceONE.
                                    </p>
                                </div>
                                <div
                                    className="it-fade-anim"
                                    data-fade-from="bottom"
                                    data-delay=".3"
                                >
                                    <p>
                                        To learn more about our vision, product
                                        roadmap, and market opportunity, you may
                                        review our pitch deck or connect
                                        directly with our team for a discussion
                                        or live walkthrough.
                                    </p>
                                </div>
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
                                    Schedule a Call
                                </Link>
                            </div> */}

                            <div
                                className="it-fade-anim"
                                data-fade-from="top"
                                data-ease="bounce"
                                data-delay=".7"
                            >
                                <Link className="it-btn" href="https://calendly.com/platformoneinc/complianceone-investor-call">
                                    Schedule a Call
                                </Link>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
};
export default SoftwareSeven;

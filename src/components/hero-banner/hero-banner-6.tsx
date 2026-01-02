import Image from "next/image";
import { ALPHA_DISCLAIMER } from "@/utils/constants";
// import HeroFormThree from "../form/hero-form-three";

import heroImg1 from "@/assets/images/hero.png";
import heroImg2 from "@/assets/images/hero2.png";
import shapeImg from "@/assets/images/hero-shape.svg";

const HeroBanner = () => {
    return (
        <div
            className="ai-hero-area ai-hero-ptb z-index-1 p-relative section-bg"
            style={{
                backgroundImage: `url('/assets/img/hero/hero-bg-6-1.jpg')`,
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="ai-hero-content">
                            <h1 className="ai-hero-title text-white mb-20 it_text_reveal_anim">
                                Automating Cybersecurity <br /> Compliance with
                                Agentic AI
                            </h1>
                            <div
                                className="it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".3"
                            >
                                <p className="mb-35 text-white">
                                    Federal compliance on autopilot. AI that
                                    thinks, documents, and delivers.
                                    ComplianceONE speaks <strong>CMMC</strong>{" "}
                                    fluently today, with a clear path to{" "}
                                    <strong>FedRAMP</strong> and various other
                                    Frameworks on the way that will get you
                                    audit ready in{" "}
                                    <strong>minutes, not weeks.</strong>
                                </p>
                            </div>
                            {/* <div
                                className="dt-hero-input-box p-relative mb-30 it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".5"
                            >
                                <HeroFormThree
                                    placeholderText="Enter your email address"
                                    btnText="7 Day Trial"
                                />
                               
                            </div> */}
                            <div
                                className="p-relative mb-30 it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".5"
                            >
                                <a
                                    href="https://www.complianceone.io/register"
                                    target="_blank"
                                >
                                    <button
                                        className={"it-btn"}
                                        type="submit"
                                        style={{
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        Sign up for a FREE 7 Day Trial
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-6 it-fade-anim"
                        data-fade-from="right"
                        data-delay=".5"
                        data-ease="bounce"
                    >
                        <div className="ai-hero-thumb-wrap z-index-1 p-relative">
                            <div className="ai-hero-thumb text-center text-lg-end">
                                <Image
                                    className="image-height-auto"
                                    src={heroImg1}
                                    alt="Hero Img"
                                    width={648}
                                    height={471}
                                />
                            </div>
                            <div className="ai-hero-thumb-sm">
                                <Image
                                    className="image-height-auto"
                                    src={heroImg2}
                                    alt="Hero Img"
                                    width={216}
                                    height={437}
                                />
                            </div>
                            <Image
                                className="ai-hero-thumb-shape-1  image-height-auto"
                                src={shapeImg}
                                alt="Shape Img"
                                width={482}
                                height={557}
                            />
                        </div>
                        <p
                            className="text-white mt-20 text-center text-lg-end"
                            style={{
                                fontSize: "12px",
                                opacity: 0.8,
                            }}
                        >
                            {ALPHA_DISCLAIMER}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeroBanner;

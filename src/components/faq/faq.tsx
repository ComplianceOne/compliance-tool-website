import Image from "next/image";

import faqImg from "@/assets/img/faq/faq-6-1.png";
import FaqItemOne from "./faq-item/faq-item-one";
import { faqData } from "@/data/faq-data";

const Faq = () => {
    return (
        <div
            id="faq"
            className="ai-faq-style pg-faq-area gray-bg pt-150 pb-150"
        >
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="ai-section-title-box it-text-anim">
                            <h4 className="ai-section-title pb-15 it-split-text it-split-in-right">
                                Frequently Asked <br />
                                Questions.
                            </h4>
                            <p className="mb-35">
                                We know compliance can be complex. Here are
                                answers to the most common questions about
                                ComplianceONE, our AI driven compliance
                                automation platform.
                            </p>
                            <div
                                className="it-fade-anim"
                                data-fade-from="top"
                                data-ease="bounce"
                                data-delay=".5"
                            >
                                <Image
                                    className="image-height-auto"
                                    src={faqImg}
                                    alt="Faq Img"
                                    width={361}
                                    height={301}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="pg-faq-wrap">
                            <div className="pg-custom-accordion">
                                <FaqItemOne faqs={faqData} preExpand="a" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Faq;

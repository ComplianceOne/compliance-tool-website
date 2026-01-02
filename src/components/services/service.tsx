import Image from "next/image";
import { serviceDataFour } from "@/data/service-data";
import ServiceItemFour from "./service-item/service-item-four";

import shapeImg from "@/assets/img/shape/service-shape-1.png";

const Service = () => {
    return (
        <div
            id="service"
            className="dt-service-area z-index-1 ai-service-area pg-service-style p-relative pt-155 pb-120 custom-pb-120"
        >
            <Image
                className="ai-service-shape-1 d-none d-md-block"
                src={shapeImg}
                alt="Shape Img"
                width={86}
                height={97}
            />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="ai-section-title-box text-center mb-55">
                            <h4
                                className="ai-section-title it-split-text it-split-in-right"
                                data-fade-from="bottom"
                                data-delay=".5"
                            >
                                How Does ComplianceONE Work?
                            </h4>
                            <span
                                className="ai-section-subtitle it-fade-anim"
                                data-fade-from="bottom"
                                data-delay=".3"
                            >
                                Start Your Compliance Journey In 4 Simple Steps
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {serviceDataFour.map((service, i) => (
                        <div
                            key={service.id}
                            className="col-xl-3 col-lg-6 col-md-6 it-fade-anim mb-30"
                            data-fade-from="bottom"
                            data-delay={0.3 + i * 0.2}
                        >
                            <ServiceItemFour service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Service;

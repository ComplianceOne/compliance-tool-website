import Image from "next/image";
import { serviceDataFive } from "@/data/service-data";
import ServiceItemTwo from "./service-item/service-item-two";

import shapeImg from "@/assets/img/shape/service-shape-1.png";

interface ServiceProps {
    itemClass?: string;
    hasShape?: boolean;
}

const ServiceFive = ({ itemClass, hasShape }: ServiceProps) => {
    return (
        <div
            id="automation"
            className={
                itemClass ||
                "dt-service-area ai-service-style-2 p-relative z-index-1 gray-bg pg-service-style pt-150 pb-130"
            }
        >
            {hasShape && (
                <Image
                    className="ai-service-shape-1 d-none d-lg-block"
                    src={shapeImg}
                    alt="Shape Img"
                    width={86}
                    height={97}
                />
            )}

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-8">
                        <div className="ai-section-title-box text-center it-text-anim mb-65">
                            <h4 className="ai-section-title mb-10 it-split-text it-split-in-right">
                                Automate Every Step of <br /> Compliance with AI
                            </h4>
                            <p>
                                From framework selection to audit readiness,
                                ComplianceONE streamlines every part of your
                                compliance lifecycle. <br /> Explore the
                                platform’s intelligent tools designed to
                                simplify, automate, and accelerate your journey
                                to certification.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {serviceDataFive.map((service, i) => (
                        <div
                            key={service.id}
                            className="col-xl-4 col-lg-6 col-md-6 it-fade-anim mb-30"
                            data-fade-from="bottom"
                            data-delay={0.3 + i * 0.2}
                        >
                            <ServiceItemTwo service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ServiceFive;

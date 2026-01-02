import Image from "next/image";
import { IServiceDT } from "@/types/service-d-t";

interface ServiceItemProps {
    service: IServiceDT;
}

const ServiceItemTwo = ({ service }: ServiceItemProps) => {
    return (
        <div className="dt-service-item h-100">
            <span className="dt-service-icon mb-35 d-block">
                <Image
                    className="image-height-auto"
                    src={service.image}
                    alt={service.title}
                    style={{
                        objectFit: "contain",
                    }}
                />
            </span>
            <div className="dt-service-content">
                <h4 className="dt-service-title mb-20">{service.title}</h4>
                <p className="mb-30">{service.description}</p>
                {/* <Link
                    className="pg-btn green-bg"
                    href={`/service-details/${service.id}`}
                >
                    {service.btnText}
                </Link> */}
            </div>
        </div>
    );
};
export default ServiceItemTwo;

import Image from "next/image";
import { IServiceDT } from "@/types/service-d-t";

interface ServiceItemProps {
    service: IServiceDT;
}

const ServiceItemFour = ({ service }: ServiceItemProps) => {
    return (
        <div className="ai-service-item p-relative z-index-1 h-100">
            <span className="ai-service-icon mb-30 d-block">
                <Image
                    className="image-height-auto"
                    src={service.image}
                    alt={`Service Img${service.id}`}
                    width={120}
                    height={120}
                />
            </span>
            <i className="ai-service-number">{service.serviceNumber}</i>
            <div className="ai-service-content">
                <h4 className="dt-service-title mb-25">{service.title}</h4>
                <p className="mb-0">{service.description}</p>
            </div>
        </div>
    );
};
export default ServiceItemFour;

"use client";
import { priceData } from "@/data/price-data";
import PriceItemThree from "./price-item/price-item-three";

interface PriceProps {
    itemClass?: string;
}

const Price = ({ itemClass }: PriceProps) => {
    return (
        <div
            id="price"
            className={
                itemClass ||
                "it-price-area ai-price-style p-relative z-index-1 it-price-bg pt-115 pb-90 container"
            }
        >
            <div className="container-fluid" style={{ padding: "0 50px" }}>
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-md-9">
                        <div className="it-price-top-box mb-60 text-center">
                            <div className="it-section-title-box it-text-anim mb-35">
                                <h4
                                    className="ai-section-title mb-15 it-split-text it-split-in-right"
                                    style={{
                                        maxWidth: "768px",
                                        margin: "0 auto",
                                    }}
                                >
                                    Choose the Right Plan for Your Compliance
                                    Journey
                                </h4>
                                <p
                                    style={{
                                        maxWidth: "768px",
                                        margin: "0 auto",
                                    }}
                                >
                                    Start with a free 7-day trial or scale your
                                    compliance automation with flexible plans
                                    designed for growing organizations and
                                    service providers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="it-price-tab">
                            <div className="row" style={{ rowGap: "30px" }}>
                                {priceData.map((price, i) => (
                                    <div
                                        key={price.id}
                                        className="col-xl-3 col-lg-6 col-md-6 it-fade-anim"
                                        data-fade-from="bottom"
                                        data-delay={0.3 + i * 0.2}
                                    >
                                        <PriceItemThree
                                            price={price}
                                            index={i}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Price;

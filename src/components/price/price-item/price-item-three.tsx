import Link from "next/link";
import { IPriceDT } from "@/types/price-d-t";

interface PriceItemProps {
    price: IPriceDT;
    index: number;
}

const PriceItemThree = ({ price, index }: PriceItemProps) => {
    const isActive = index === 1;
    return (
        <div
            className={`it-price-item p-relative mb-30 ${
                isActive ? "active" : ""
            }`}
            style={{
                backgroundColor: isActive ? "#7064F5" : "#F3F5FC",
                color: isActive ? "white" : "inherit",
                padding: "40px 30px",
                borderRadius: "10px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {index === 1 && (
                <span className="it-price-recommend">Recommend</span>
            )}
            <div className="it-price-tag mb-20 text-center">
                <span
                    style={{
                        color: isActive ? "white" : "#7064F5",
                        fontSize: "18px",
                        fontWeight: 600,
                    }}
                >
                    {price.title}
                </span>
            </div>

            <div className="it-price-head mb-10 text-center">
                <span
                    className="it-price-value"
                    style={{
                        color: isActive ? "white" : "#7064F5",
                        fontSize: "42px",
                        fontWeight: 700,
                        display: "block",
                        lineHeight: 1,
                    }}
                >
                    {price.price}
                </span>
                <span
                    style={{
                        fontSize: "24px",
                        color: isActive ? "white" : "#7064F5",
                        fontWeight: 700,
                        display: "block",
                        marginTop: "5px",
                    }}
                >
                    {price.pricePeriod}
                </span>
            </div>

            <div className="it-price-description mb-30 text-center">
                <p
                    style={{
                        color: isActive ? "white" : "#5E6278",
                        fontSize: "14px",
                        lineHeight: "1.6",
                        marginBottom: 0,
                    }}
                >
                    {price.description}
                </p>
            </div>

            <div
                className="it-price-divider mb-30"
                style={{
                    borderTop: `1px solid ${
                        isActive ? "rgba(255,255,255,0.2)" : "#E6E8F0"
                    }`,
                    margin: "0 -30px",
                    padding: "0 30px",
                }}
            ></div>

            <div
                className="it-price-body"
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
            >
                <div className="it-price-item-list mb-40">
                    <span
                        style={{
                            color: isActive ? "white" : "#181C31",
                            fontWeight: 700,
                            fontSize: "16px",
                            display: "block",
                            marginBottom: "20px",
                            marginTop: "20px",
                        }}
                    >
                        {price.includesHeader}
                    </span>
                    <ul>
                        {price.services.map((item, i) => (
                            <li
                                key={i}
                                className={item.itemClass || ""}
                                style={{
                                    marginBottom: "15px",
                                    display: "flex",
                                    alignItems: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        color: isActive ? "white" : "#5E6278",
                                        display: "flex",
                                        gap: "12px",
                                        fontSize: "14px",
                                        lineHeight: "1.5",
                                        textAlign: "left",
                                    }}
                                >
                                    <span
                                        className="icon"
                                        style={{
                                            color: isActive
                                                ? "white"
                                                : "#7064F5",
                                            flexShrink: 0,
                                            marginTop: "3px",
                                            display: "flex",
                                        }}
                                    >
                                        {item.icon}
                                    </span>
                                    {item.service}
                                </div>
                            </li>
                        ))}
                    </ul>
                    {price.note && (
                        <p
                            style={{
                                fontWeight: "700",
                                marginTop: "20px",
                                color: isActive ? "white" : "#181C31",
                                fontSize: "14px",
                                lineHeight: "1.5",
                            }}
                        >
                            {price.note}
                        </p>
                    )}
                </div>
                <div className="it-price-button text-center mt-auto">
                    <Link
                        className="ai-btn"
                        href={
                            price.link ||
                            "https://www.complianceone.io/register"
                        }
                        target="_blank"
                        style={{
                            backgroundColor: isActive ? "white" : "#7064F5",
                            color: isActive ? "#7064F5" : "white",
                            width: "100%",
                            display: "inline-block",
                            padding: "12px 30px",
                            borderRadius: "50px",
                            fontWeight: 600,
                        }}
                    >
                        {price.btnText}
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PriceItemThree;

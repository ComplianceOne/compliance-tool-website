import Image from "next/image";

import breadcrumbImg from "@/assets/img/breadcrumb/thumb-1.png";
import Link from "next/link";

interface BreadcrumbProps {
    title: string;
    subtitle?: string;
}

const Breadcrumb = ({ title, subtitle }: BreadcrumbProps) => {
    return (
        <div
            className="it-breadcrumb-area it-breadcrumb-ptb z-index-1 fix p-relative"
            style={{
                backgroundImage: `url('/assets/img/breadcrumb/breadcrumb-bg.jpg')`,
            }}
        >
            <div className="it-breadcrumb-thumb">
                <Image
                    className="image-height-auto"
                    src={breadcrumbImg}
                    alt="breadcrumb-img"
                    width={353}
                    height={299}
                />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="it-breadcrumb-content z-index-3">
                            <div className="it-breadcrumb-title-box">
                                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                                    {title || "Title Not Found"}
                                </h3>
                            </div>
                            <div className="it-breadcrumb-list-wrap">
                                <div className="it-breadcrumb-list">
                                    <span>
                                        <Link href="/">Home</Link>
                                    </span>
                                    <span className="dvdr">-</span>
                                    <i>{subtitle || title || "No Subtitle"}</i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Breadcrumb;

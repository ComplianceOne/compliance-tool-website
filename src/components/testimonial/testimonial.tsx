import Image from "next/image";
import SliderItem from "./slider-item/slider-item-two";

import shapeImg1 from "@/assets/img/testimonial/avatar.png";
import shapeImg2 from "@/assets/img/testimonial/avatar-2.png";
import shapeImg3 from "@/assets/img/testimonial/avatar-3.png";
import shapeImg4 from "@/assets/img/testimonial/avatar-4.png";
import testimonialBG from "@/assets/img/shape/testimonial-bg-2-1.png";

interface TestimonialProps {
    itemClass?: string;
    hasSubTitle?: boolean;
}

const Testimonial = ({ itemClass, hasSubTitle }: TestimonialProps) => {
    return (
        <div
            id="testimonial"
            className={
                itemClass ||
                "dt-testimonial-area z-index-1 p-relative pt-130 pb-195"
            }
        >
            <Image
                className="dt-testimonial-shape-2 zoom-anim d-none d-lg-block"
                src={shapeImg1}
                alt="Shape Img"
                width={72}
                height={72}
            />
            <Image
                className="dt-testimonial-shape-3 zoom-anim d-none d-lg-block"
                src={shapeImg2}
                alt="Shape Img"
                width={59}
                height={59}
            />
            <Image
                className="dt-testimonial-shape-4 zoom-anim d-none d-lg-block"
                src={shapeImg4}
                alt="Shape Img"
                width={72}
                height={72}
            />
            <Image
                className="dt-testimonial-shape-5 zoom-anim d-none d-lg-block"
                src={shapeImg3}
                alt="Shape Img"
                width={72}
                height={72}
            />
            <Image
                className="dt-testimonial-shape-6 zoom-anim d-none d-lg-block"
                src={shapeImg2}
                alt="Shape Img"
                width={59}
                height={59}
            />
            <Image
                className="dt-testimonial-shape-7 zoom-anim d-none d-lg-block"
                src={shapeImg1}
                alt="Shape Img"
                width={72}
                height={72}
            />
            <div className="dt-testimonial-shape-1">
                <Image
                    className="image-height-auto"
                    src={testimonialBG}
                    alt="BG"
                    width={1032}
                    height={596}
                />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7">
                        <div className="dt-section-title-box text-center mb-55">
                            {hasSubTitle && (
                                <span className="dt-section-subtitle it_text_reveal_anim">
                                    Our Testimonial
                                </span>
                            )}
                            <h4 className="dt-section-title-2 it_text_reveal_anim">
                                SaasTech All Over The World 23M+ Satisfied
                                Customers
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <SliderItem />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Testimonial;

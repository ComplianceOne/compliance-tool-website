import ChooseOne from "@/components/choose/choose-one";
import Cta from "@/components/cta/cta";
import Faq from "@/components/faq/faq";
import HeroBanner from "@/components/hero-banner/hero-banner-6";
import Price from "@/components/price/price";
import ServiceFive from "@/components/services/service-five";
import Service from "@/components/services/service";
import SoftwareSix from "@/components/software/software-six";
// import Testimonial from "@/components/testimonial/testimonial";
import VideoThree from "@/components/video/video-three";
import SoftwareSeven from "@/components/software/software-seven";

const MainContentSix = () => {
    return (
        <main>
            <HeroBanner />
            <Service />
            <SoftwareSix />
            <ServiceFive hasShape />
            <ChooseOne />
            <VideoThree />
            <Price />
            <SoftwareSeven />
            <Faq />
            {/* <Testimonial itemClass="dt-testimonial-area ai-testimonial-style z-index-1 p-relative p-relative" /> */}
            <Cta />
        </main>
    );
};
export default MainContentSix;

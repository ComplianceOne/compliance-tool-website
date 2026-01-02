"use client";

import { useGSAP } from "@gsap/react";
import {
    fadeAnimation,
    revealAnimation,
    splitAnimation,
    textAnimation,
} from "@/utils/title-animation";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import Wrapper from "@/layouts/wrapper";
import ContactAreaOne from "@/components/contact/contact-area-one";
import { LOADING_ANIMATION_TIMEOUT } from "@/utils/constants";
import Header from "@/layouts/headers/header";
import Footer from "@/layouts/footers/footer";
import Cta from "@/components/cta/cta";
import { useEffect } from "react";
import { setIsOnePage, setOnePageData } from "@/redux/slices/header-slice";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { webglAnim } from "@/utils/webgl-anim";
import { onePageDataSix } from "@/data/menu-data";

const ContactV1Main = () => {
    const dispatch = useAppDispatch();

    // Enable smooth scrolling
    useScrollSmooth();

    // GSAP animations
    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            splitAnimation();
            textAnimation();
            revealAnimation();
            webglAnim();
        }, LOADING_ANIMATION_TIMEOUT);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        // Set global state for the header
        dispatch(setIsOnePage(true));
        dispatch(setOnePageData(onePageDataSix));
    }, [dispatch]);

    return (
        <Wrapper>
            <Header hasWhiteStyle={true} />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Breadcrumb title="Contact Us " />
                        <div
                            style={{
                                zIndex: 100,
                                position: "relative",
                                paddingBottom: "100px",
                            }}
                        >
                            <ContactAreaOne />
                        </div>
                        <Cta />
                        <Footer />
                    </main>
                </div>
            </div>
        </Wrapper>
    );
};
export default ContactV1Main;

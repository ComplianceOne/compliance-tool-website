"use client";

import { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { setIsOnePage, setOnePageData } from "@/redux/slices/header-slice";
import {
    fadeAnimation,
    revealAnimation,
    splitAnimation,
    textAnimation,
} from "@/utils/title-animation";
import { webglAnim } from "@/utils/webgl-anim";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Wrapper from "@/layouts/wrapper";
import Footer from "@/layouts/footers/footer";
import Header from "@/layouts/headers/header";
import MainContent from "./content";
import { onePageDataSix } from "@/data/menu-data";
import { LOADING_ANIMATION_TIMEOUT } from "@/utils/constants";

const HomePage = () => {
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
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <MainContent />

                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};
export default HomePage;

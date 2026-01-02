"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import {
    fadeAnimation,
    splitAnimation,
    textAnimation,
} from "@/utils/title-animation";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import Wrapper from "@/layouts/wrapper";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import errorImg from "@/assets/img/error/error.png";
import Header from "@/layouts/headers/header";
import { LOADING_ANIMATION_TIMEOUT } from "@/utils/constants";
import Footer from "@/layouts/footers/footer";

type ErrorProps = {
    errorMessage?: string;
    onRetry?: () => void;
};

const ErrorMain = ({ errorMessage, onRetry }: ErrorProps) => {
    // Enable Smooth Scrolling
    useScrollSmooth();

    // GSAP Animations
    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
            splitAnimation();
            textAnimation();
        }, LOADING_ANIMATION_TIMEOUT);
        return () => clearTimeout(timer);
    });

    return (
        <Wrapper>
            <Header />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Breadcrumb
                            title={
                                errorMessage
                                    ? "Something Went Wrong"
                                    : "404 Error"
                            }
                            subtitle="Error"
                        />

                        <div className="it-error-area pt-120 pb-120">
                            <div className="container">
                                {!errorMessage && (
                                    <div className="row justify-content-center">
                                        <div className="col-xxl-12 col-xl-7 col-lg-7 col-md-9">
                                            <div className="it-error-thumb text-center mb-80">
                                                <Image
                                                    className="image-height-auto"
                                                    src={errorImg}
                                                    alt="error-img"
                                                    width={903}
                                                    height={869}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row">
                                    <div className="col-12">
                                        <div className="it-error-content text-center it-text-anim">
                                            <h5 className="it-section-title mb-25 it-split-text it-split-in-right">
                                                {errorMessage
                                                    ? "Something went wrong!"
                                                    : "Oops! That page can’t be found."}
                                            </h5>

                                            {errorMessage ? (
                                                <p className="mb-35">
                                                    {errorMessage ||
                                                        `An unexpected error occurred. Please try again later.`}
                                                </p>
                                            ) : (
                                                <p className="mb-35">
                                                    Oops! The page you are
                                                    looking for does not exist.
                                                    It might have <br /> been
                                                    moved or deleted. Please
                                                    check and try again.
                                                </p>
                                            )}

                                            <div
                                                className="it-fade-anim"
                                                data-fade-from="top"
                                                data-ease="bounce"
                                                data-delay=".5"
                                            >
                                                {onRetry ? (
                                                    <button
                                                        onClick={onRetry}
                                                        className="it-btn"
                                                    >
                                                        Try Again
                                                    </button>
                                                ) : (
                                                    <Link
                                                        className="it-btn"
                                                        href="/"
                                                    >
                                                        Back To Home
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </Wrapper>
    );
};
export default ErrorMain;

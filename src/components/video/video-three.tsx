"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { openModal } from "@/redux/slices/modal-slice";
import ModalVideoWrapper from "../modal-video/modal-video";
import { VideoPlayThree } from "../svg";

import videoImg from "@/assets/images/hero.png";

const Video = () => {
    const dispatch = useAppDispatch();

    // Handler for opening modal video
    const handleLinkClick = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch(openModal("MzEFeIRJ0eQ"));
    };

    return (
        <div
            id="video"
            className="cr-video-area p-relative z-index-1 pt-110 pb-110 "
            style={{
                backgroundImage: `url('/assets/img/hero/hero-bg-6-1.jpg')`,
            }}
        >
            {/* Modal Video Wrapper */}
            <ModalVideoWrapper />
            {/* Modal Video Wrapper */}

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6">
                        <div className="cr-video-left">
                            <div className="ai-section-title-box it-text-anim mb-35">
                                <h4 className="ai-section-title text-white mb-15 it-split-text it-split-in-right">
                                    ComplianceONE in Action
                                </h4>
                                <p className="text-white">
                                    Experience how our AI automates compliance
                                    from start to finish. Watch how
                                    ComplianceONE simplifies CMMC readiness,
                                    from automated Gap Assessment Reports and
                                    SSP generation, all inside one intelligent
                                    dashboard.
                                </p>
                            </div>
                            <div
                                className="it-fade-anim d-flex align-items-center gap-3 flex-wrap"
                                data-fade-from="top"
                                data-ease="bounce"
                                data-delay=".5"
                            >
                                <Link
                                    className="it-btn"
                                    href="#"
                                    onClick={handleLinkClick}
                                >
                                    Watch Demo
                                </Link>
                                <Link
                                    className=" it-btn white-bg"
                                    href="https://calendly.com/platformoneinc/complianceone-demo-call"
                                    target="_blank"
                                >
                                    Book a Live Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div
                            className="cr-video-right text-lg-end it-fade-anim"
                            data-fade-from="right"
                        >
                            <div className="cr-video-thumb p-relative">
                                <Image
                                    className="image-height-auto"
                                    src={videoImg}
                                    alt="Video Img"
                                    width={601}
                                    height={376}
                                />
                                <Link
                                    className="cr-video-btn popup-video"
                                    href="#"
                                    onClick={handleLinkClick}
                                >
                                    <i>
                                        <VideoPlayThree />
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Video;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux-hooks";
import { useHeaderScroll } from "@/hooks/use-header-scroll";
import { toggleOffCanvas } from "@/redux/slices/header-slice";
import { HEADER_STICKY_CLASS } from "@/utils/constants";
import OffCanvas from "@/components/offcanvas/offcanvas";
import HeaderMenusOnePage from "./header-menus-one-page";
import { MenuBar } from "@/components/svg";

// import LogoBlack from "@/assets/img/logo/logo-1.png";
import LogoBlack from "@/assets/img/logo/logo.svg";
import LogoWhite from "@/assets/img/logo/logo-2.png";

const Header = ({ hasWhiteStyle }: { hasWhiteStyle?: boolean }) => {
    const dispatch = useAppDispatch();
    const { isVisible } = useHeaderScroll(); // Custom hook for showing sticky header

    // Handler for opening Off Canvas
    const handleOffCanvasOpen = () => {
        dispatch(toggleOffCanvas(true));
    };

    return (
        <>
            {/* Off-canvas */}
            <OffCanvas />
            {/* Off-canvas */}

            <header>
                <div
                    id="header-sticky"
                    className={`it-header-area p-relative ai-header-style dt-header-style it-header-transparent it-header-ptb  ${isVisible ? HEADER_STICKY_CLASS : ""
                        } `}
                >
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-6">
                                <div className="it-header-logo">
                                    <Link href="/">
                                        {!hasWhiteStyle && !isVisible ? (
                                            <Image
                                                className=" image-height-auto"
                                                src={LogoWhite}
                                                alt="Saasty"
                                                width={163}
                                                height={43}
                                            />
                                        ) : (
                                            <Image
                                                className=" image-height-auto"
                                                src={LogoBlack}
                                                alt="Saasty"
                                                width={184}
                                                height={43}
                                            />
                                        )}
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                                <div className="it-header-menu it-dropdown-menu">
                                    <nav className="it-menu-content">
                                        <HeaderMenusOnePage
                                            hasWhiteStyle={hasWhiteStyle}
                                        />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-6">
                                <div className="it-header-right-action d-flex justify-content-end align-items-center">
                                    <div className="it-header-search-box d-none d-md-block d-flex align-items-center mr-25">
                                        <a
                                            className={
                                                isVisible
                                                    ? "border-line-black"
                                                    : "border-line-white"
                                            }
                                            href="https://complianceone.io"
                                            target="_blank"
                                            style={{
                                                color:
                                                    hasWhiteStyle || isVisible
                                                        ? "black"
                                                        : "white",
                                            }}
                                        >
                                            Log In
                                        </a>
                                    </div>
                                    <Link
                                        href="/contact"
                                        className="it-btn d-none d-lg-block"
                                    >
                                        Contact Us
                                    </Link>
                                    <div className="it-header-bar d-xl-none">
                                        <button
                                            className="it-menu-bar"
                                            onClick={handleOffCanvasOpen}
                                        >
                                            <span>
                                                <MenuBar />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;

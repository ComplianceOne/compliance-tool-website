import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/img/logo/logo-2.png";

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const topPosition = element.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });
        }
    };

    const handleLinkClick = (e: React.MouseEvent, href: string) => {
        e.preventDefault();
        const sectionId = href.startsWith("#") ? href.substring(1) : null;
        if (sectionId) {
            if (window.location.pathname !== "/") {
                window.location.href = "/" + href;
            } else {
                scrollToSection(sectionId);
            }
        } else {
            window.location.href = href;
        }
    };

    return (
        <footer>
            <div
                className="it-footer-bg ai-footer-style black-bg z-index-1"
                style={{
                    backgroundImage: `url('/assets/img/shape/footer-bg-1-1.png')`,
                }}
            >
                <div className="it-footer-area mb-65 mobile-footer-bottom-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-3 col-lg-3 col-md-6 col-sm-6 mobile-footer-spacing">
                                <div className="it-footer-widget it-footer-col-1">
                                    <div className="it-footer-widget-logo mb-25">
                                        <Link href="/">
                                            <Image
                                                src={Logo}
                                                alt="Saasty"
                                                width={214}
                                                height={40}
                                            />
                                        </Link>
                                    </div>
                                    <div className="it-footer-widget-text">
                                        <p>
                                            Automating Cybersecurity Compliance
                                            with Agentic AI. Put Federal
                                            compliance on autopilot. AI that
                                            thinks, documents, and delivers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6 mobile-footer-spacing">
                                <div className="it-footer-widget it-footer-col-2">
                                    <div className="it-footer-widget-menu">
                                        <ul>
                                            <li>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <a
                                                    href="#service"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#service"
                                                        )
                                                    }
                                                >
                                                    Flow
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#core-capabilities"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#core-capabilities"
                                                        )
                                                    }
                                                >
                                                    Core
                                                </a>
                                            </li>

                                            <li>
                                                <a
                                                    href="#core-capabilities"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#partners"
                                                        )
                                                    }
                                                >
                                                    Partner
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/#investors"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#investors"
                                                        )
                                                    }
                                                >
                                                    Invest
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mobile-footer-spacing">
                                <div className="it-footer-widget it-footer-col-3">
                                    <div className="it-footer-widget-menu">
                                        <ul>
                                            <li>
                                                <a
                                                    href="#video"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#video"
                                                        )
                                                    }
                                                >
                                                    Demo{" "}
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#price"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#price"
                                                        )
                                                    }
                                                >
                                                    Pricing
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#faq"
                                                    onClick={(e) =>
                                                        handleLinkClick(
                                                            e,
                                                            "#faq"
                                                        )
                                                    }
                                                >
                                                    FAQ
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50">
                                <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
                                    <div>
                                        <h4 className="it-footer-widget-title">
                                            Contact Info
                                        </h4>
                                        <div className="it-footer-widget-tel-box d-flex align-items-center mb-20">
                                            <div className="it-footer-widget-tel-icon">
                                                <span>
                                                    <i className="fa-light fa-map"></i>
                                                </span>
                                            </div>
                                            <div className="it-footer-widget-tel-text">
                                                <a
                                                    className="border-line-white"
                                                    target="_blank"
                                                    href="https://www.google.com/maps/dir///@24.4503253,17.1644279,4.17z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"
                                                >
                                                    569 Cost AvenueSilver Spring
                                                    MD 20910.New york
                                                </a>
                                            </div>
                                        </div>
                                        <div className="it-footer-widget-tel-box d-flex align-items-center mb-20">
                                            <div className="it-footer-widget-tel-icon">
                                                <span>
                                                    <i className="fa-light fa-phone-volume"></i>
                                                </span>
                                            </div>
                                            <div className="it-footer-widget-tel-text">
                                                <a
                                                    className="border-line-white"
                                                    href="tel:+8903014155058"
                                                >
                                                    (+890)301-415-5058
                                                </a>
                                            </div>
                                        </div>
                                        <div className="it-footer-widget-tel-box d-flex align-items-center">
                                            <div className="it-footer-widget-tel-icon">
                                                <span>
                                                    <i className="fa-light fa-envelope"></i>
                                                </span>
                                            </div>
                                            <div className="it-footer-widget-tel-text">
                                                <a
                                                    className="border-line-white"
                                                    href="mailto:Saasty@gmail.com"
                                                >
                                                    Saasty@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Copyright Area */}
                {/* <div className="it-copyright-area it-copyright-border">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="it-copyright-left text-center">
                                    <p className="mb-0">
                                        © 2025 <a href="#">SaaSty</a> All Rights
                                        Reserved, Created by{" "}
                                        <a href="#">Ordianit.</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* Copyright Area */}
            </div>
        </footer>
    );
};
export default Footer;

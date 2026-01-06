"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectOnePageData } from "@/redux/selectors/header-selector";
import { toggleOffCanvas } from "@/redux/slices/header-slice";
import { IMenuOnePageDT } from "@/types/menu-d-t";

const MobileMenusOnePage = () => {
    const dispatch = useAppDispatch();
    const onePageMenuData = useAppSelector(selectOnePageData); // Selector for getting the state of One page Data
    const [activeMenu, setActiveMenu] = useState<number | null>(
        onePageMenuData[0]?.id || null
    );
    const [navTitle, setNavTitle] = useState<string | null>(null);

    // Toggle Mobile Menu
    const toggleMobileMenu = (menu: string) => {
        setNavTitle((prev) => (prev === menu ? null : menu));
    };

    // Function to scroll to specific section
    const scrollToSection = useCallback((id: string) => {
        const element = document.getElementById(id);

        if (element) {
            const topPosition = element.offsetTop;
            window.scrollTo({
                top: topPosition,
                behavior: "smooth",
            });
        }
    }, []);

    // Handler for menu click with scroll functionality
    const handleMenuClick = useCallback(
        (id: number, link: string) => {
            setActiveMenu(id);
            // Close the offcanvas menu
            dispatch(toggleOffCanvas(false));

            const sectionId = link.startsWith("#") ? link.substring(1) : null;
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    // Small delay to allow offcanvas to close before scrolling
                    setTimeout(() => {
                        scrollToSection(sectionId);
                    }, 300);
                } else {
                    // If element doesn't exist (e.g., on another page), navigate to home with hash
                    window.location.href = `/${link}`;
                }
            } else {
                window.location.href = link;
            }
        },
        [scrollToSection, dispatch]
    );

    return (
        <ul className="it-onepage-menu">
            {onePageMenuData.map((menu: IMenuOnePageDT) => (
                <li
                    key={menu.id}
                    className={menu.home_menus ? "has-dropdown p-static" : ""}
                >
                    <Link
                        href={menu.link}
                        // className={activeMenu === menu.id ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick(menu.id, menu.link);
                        }}
                    >
                        {menu.title}

                        {menu.home_menus && (
                            <button
                                className={`dropdown-toggle-btn ${navTitle === menu.title
                                    ? "dropdown-opened"
                                    : ""
                                    } d-xl-none`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggleMobileMenu(menu.title);
                                }}
                            >
                                <i className="fal fa-angle-right"></i>
                            </button>
                        )}
                    </Link>
                    {menu.home_menus && (
                        <div
                            className={`it-submenu submenu has-home-img ${navTitle === menu.title ? "d-block" : ""
                                }`}
                        >
                            <div className="it-homemenu-wrapper">
                                <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-5">
                                    {menu.home_menus.map((home_menu, i) => (
                                        <div key={i} className="col home-img">
                                            <div className="home-img-thumb home-img-overly mb-20">
                                                <Image
                                                    className="image-height-auto"
                                                    src={home_menu.img}
                                                    alt="home-img"
                                                    width={340}
                                                    height={500}
                                                />
                                                {home_menu.buttons && (
                                                    <div className="home-img-btn">
                                                        {home_menu.buttons?.map(
                                                            (btn, i) => (
                                                                <Link
                                                                    key={i}
                                                                    className="it-btn-sm"
                                                                    href={
                                                                        btn.href
                                                                    }
                                                                >
                                                                    <span className="text-one">
                                                                        {
                                                                            btn.label
                                                                        }
                                                                    </span>
                                                                </Link>
                                                            )
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="home-img-content text-center">
                                                <h4 className="home-img-title">
                                                    <Link href={home_menu.link}>
                                                        {home_menu.title}
                                                    </Link>
                                                </h4>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};
export default MobileMenusOnePage;

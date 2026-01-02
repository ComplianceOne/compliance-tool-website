"use client";

import { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "@/plugins";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectOnePageData } from "@/redux/selectors/header-selector";
import { IMenuOnePageDT } from "@/types/menu-d-t";

gsap.registerPlugin(ScrollToPlugin);

const HeaderMenusOnePage = ({ hasWhiteStyle }: { hasWhiteStyle?: boolean }) => {
    const onePageMenuData = useAppSelector(selectOnePageData); // Selector for getting the state one page Data
    // const [activeMenu, setActiveMenu] = useState<number | null>(
    //     onePageMenuData[0]?.id || null
    // );

    // Function to go Specific section
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

    // Handler for menu click
    const handleMenuClick = useCallback(
        (id: number, link: string) => {
            const sectionId = link.startsWith("#") ? link.substring(1) : null;
            if (sectionId) {
                const element = document.getElementById(sectionId);
                if (element) {
                    scrollToSection(sectionId);
                    // setActiveMenu(id);
                } else {
                    // If element doesn't exist (e.g., on another page), navigate to home with hash
                    window.location.href = `/${link}`;
                }
            } else {
                // setActiveMenu(id);
                window.location.href = link;
            }
        },
        [scrollToSection]
    );

    return (
        <ul className="it-onepage-menu">
            {onePageMenuData.map((menu: IMenuOnePageDT) => (
                <li key={menu.id} className="p-static">
                    <Link
                        href={menu.link}
                        // className={activeMenu === menu.id ? "active" : ""}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick(menu.id, menu.link);
                        }}
                        style={{ color: hasWhiteStyle ? "black" : undefined }}
                    >
                        {menu.title}
                    </Link>
                    {menu.home_menus && (
                        <div className="it-submenu submenu has-home-img">
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

export default HeaderMenusOnePage;

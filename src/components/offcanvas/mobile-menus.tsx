'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { menuData } from '@/data/menu-data';

import megaMenuImg from '@/assets/img/menu/thumb.png';

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState<string | null>(null);

  // Toggle Mobile Menu
  const toggleMobileMenu = (menu: string) => {
    setNavTitle((prev) => (prev === menu ? null : menu));
  };

  return (
    <ul>
      {menuData.map((menu) => (
        <li
          key={menu.id}
          className={`has-dropdown ${navTitle === menu.title ? 'active' : ''}`}
        >
          <Link href={menu.link}>
            {menu.title}
            <button
              className={`dropdown-toggle-btn ${
                navTitle === menu.title ? 'dropdown-opened' : ''
              } d-xl-none`}
              onClick={(e) => {
                e.preventDefault();
                toggleMobileMenu(menu.title);
              }}
            >
              <i className="fal fa-angle-right"></i>
            </button>
          </Link>
          {/* Render Submenus */}
          {menu.home_menus ? (
            <div
              className={`it-submenu submenu has-home-img ${
                navTitle === menu.title ? 'd-block' : ''
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
                            {home_menu.buttons?.map((btn, i) => (
                              <Link
                                className="it-btn-sm"
                                href={btn.href}
                                key={i}
                              >
                                <span className="text-one">{btn.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="home-img-content text-center">
                        <h4 className="home-img-title">
                          <Link href={home_menu.link}>{home_menu.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : menu.about_dropdown_menus ? (
            <ul
              className={`it-submenu submenu ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              {menu.about_dropdown_menus.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : menu.pages_mega_menu ? (
            <div
              className={`it-submenu submenu it-megamenu-wrapper p-relative ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              <div className="it-megamenu-thumb">
                <Image
                  className="image-height-auto"
                  src={megaMenuImg}
                  alt="menu-img"
                  width={300}
                  height={310}
                />
              </div>
              <div className="row">
                <div className="col-xl-9">
                  <div className="row">
                    <div className="col-xl-4">
                      <ul className="it-megamenu-list">
                        <li>
                          <h4 className="it-megamenu-title">
                            {menu.pages_mega_menu.first.title}
                          </h4>
                        </li>
                        {menu.pages_mega_menu.first.submenus.map((item, i) => (
                          <li key={i}>
                            <a href={item.link}>{item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="it-megamenu-list">
                        <li>
                          <h4 className="it-megamenu-title">
                            {menu.pages_mega_menu.second.title}
                          </h4>
                        </li>
                        {menu.pages_mega_menu.second.submenus.map((item, i) => (
                          <li key={i}>
                            <a href={item.link}>{item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-xl-4">
                      <ul className="it-megamenu-list">
                        <li>
                          <h4 className="it-megamenu-title">
                            {menu.pages_mega_menu.third.title}
                          </h4>
                        </li>
                        {menu.pages_mega_menu.third.submenus.map((item, i) => (
                          <li key={i}>
                            <a href={item.link}>{item.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3">
                  <div className="it-megamenu-text">
                    <h4>50+</h4>
                    <span>Pre-built demo page</span>
                  </div>
                </div>
              </div>
            </div>
          ) : menu.dropdown_menus ? (
            <ul
              className={`it-submenu submenu ${
                navTitle === menu.title ? 'd-block' : ''
              }`}
            >
              {menu.dropdown_menus?.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ul>
  );
};
export default MobileMenus;

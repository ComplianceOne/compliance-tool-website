import { StaticImageData } from 'next/image';

export interface IMenuDT {
  id: number;
  title: string;
  link: string;
  home_menus?: {
    title: string;
    link: string;
    img: StaticImageData;
    buttons?: { label: string; href: string }[];
  }[];
  pages_mega_menu?: {
    first: {
      title: string;
      submenus: {
        title: string;
        link: string;
      }[];
    };
    second: {
      title: string;
      submenus: {
        title: string;
        link: string;
      }[];
    };
    third: {
      title: string;
      submenus: {
        title: string;
        link: string;
      }[];
    };
  };
  about_dropdown_menus?: {
    title: string;
    link: string;
  }[];
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}

export interface IMenuOnePageDT {
  id: number;
  title: string;
  link: string;
  home_menus?: {
    title: string;
    link: string;
    img: StaticImageData;
    buttons?: { label: string; href: string }[];
  }[];
}

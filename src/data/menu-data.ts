import { IMenuDT, IMenuOnePageDT } from '@/types/menu-d-t';

export const menuData: IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '#',
  },
  {
    id: 2,
    title: 'About Us',
    link: '/about-v1',
    about_dropdown_menus: [
      { title: 'About Us V.1', link: '/about-v1' },
      { title: 'About Us V.2', link: '/about-v2' },
      { title: 'About Us V.3', link: '/about-v3' },
    ],
  },
  {
    id: 3,
    title: 'Pages',
    link: '#',
    pages_mega_menu: {
      first: {
        title: 'Menu Layout 01',
        submenus: [
          { title: 'Team', link: '/team' },
          { title: 'Team Details', link: '/team-details/1' },
          { title: 'Career', link: '/career' },
          { title: 'Career Details', link: '/career-details/1' },
          { title: 'Integration', link: '/integration' },
          { title: 'Integration Details', link: '/integration-details' },
        ],
      },
      second: {
        title: 'Menu Layout 02',
        submenus: [
          { title: 'Testimonial', link: '/testimonial' },
          { title: 'Video Template', link: '/video' },
          { title: 'Terms & Conditions', link: '/terms-conditions' },
          { title: 'Privacy & Policy', link: '/privacy-policy' },
          { title: 'Refund Policy', link: '/refund-policy' },
        ],
      },
      third: {
        title: 'Menu Layout 03',
        submenus: [
          { title: 'Pricing Plan', link: '/price' },
          { title: 'For FAQ', link: '/faq' },
          { title: 'For Signin', link: '/signin' },
          { title: 'For Signup', link: '/signup' },
          { title: 'Error', link: '/404' },
        ],
      },
    },
  },

  {
    id: 4,
    title: 'Services',
    link: '/service-classic',
    dropdown_menus: [
      { title: 'Service', link: '/service' },
      { title: 'Service Classic', link: '/service-classic' },
      { title: 'Service Details', link: '/service-details/1' },
    ],
  },
  {
    id: 5,
    title: 'Blog',
    link: '/blog-right-sidebar',
    dropdown_menus: [
      { title: 'Blog Two Column', link: '/blog-two-columns' },
      { title: 'Blog Three Column', link: '/blog-three-columns' },
      { title: 'Blog Sidebar V.1', link: '/blog-right-sidebar' },
      { title: 'Blog Sidebar V.2', link: '/blog-left-sidebar' },
      { title: 'Blog Details V.1', link: '/blog-details-right-sidebar/1' },
      { title: 'Blog Details V.2', link: '/blog-details-left-sidebar/1' },
      {
        title: 'Blog Details No Sidebar',
        link: '/blog-details-without-sidebar/1',
      },
    ],
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact-v1',
    dropdown_menus: [
      { title: 'Contact V.1', link: '/contact-v1' },
      { title: 'Contact V.2', link: '/contact-v2' },
    ],
  },
];

export const onePageMenuHomeData: IMenuOnePageDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
];

export const onePageDataSix: IMenuOnePageDT[] = [
  ...onePageMenuHomeData,
  {
    id: 2,
    title: 'Flow',
    link: '#service',
  },
  {
    id: 3,
    title: 'Core',
    link: '#core-capabilities',
  },
  // {
  //   id: 3,
  //   title: 'Automate',
  //   link: '#automation',
  // },
  {
    id: 3,
    title: 'Demo',
    link: '#video',
  },
  {
    id: 4,
    title: 'Price',
    link: '#price',
  },
  {
    id: 5,
    title: 'Partner',
    link: '#partners',
  },
  {
    id: 5,
    title: 'Invest',
    link: '#investors',
  },


  {
    id: 6,
    title: 'Faq',
    link: '#faq',
  },
];
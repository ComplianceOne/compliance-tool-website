import { ITestimonialDT } from '@/types/testimonial-d-t';

import avatarImg1 from '@/assets/img/testimonial/avatar.png';
import avatarImg2 from '@/assets/img/testimonial/avatar-3.png';
import avatarImg3 from '@/assets/img/testimonial/avatar-4.png';

export const testimonialDataTwo: ITestimonialDT[] = [
  {
    id: 1,
    description: ` “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat”`,
    author: 'Norman Jones',
    avatar: avatarImg1,
    designation: 'CEO at OrdainIt',
  },
  {
    id: 2,
    description: ` “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat”`,
    author: 'Francis Roman',
    avatar: avatarImg2,
    designation: 'Developer',
  },
  {
    id: 3,
    description: ` “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat”`,
    author: 'Isco Alarcon',
    avatar: avatarImg3,
    designation: 'Designer',
  },
];
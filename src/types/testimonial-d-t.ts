import { StaticImageData } from 'next/image';

export interface ITestimonialDT {
  id: number;
  title?: string;
  description: string;
  author: string;
  designation: string;
  avatar?: StaticImageData;
  iconImg?: StaticImageData;
}

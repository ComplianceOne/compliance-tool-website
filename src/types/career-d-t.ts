import { StaticImageData } from 'next/image';

export interface ICareerDT {
  id: number;
  title: string;
  jobType: string;
  postedTime: string;
  description: string;
  categories: string[];
  detailsImage: StaticImageData;
  btnText?: string;
}

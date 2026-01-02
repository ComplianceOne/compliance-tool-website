import { StaticImageData } from 'next/image';

export interface IServiceDT {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  detailsImage?: StaticImageData;
  icon?: React.ReactNode;
  serviceNumber?: string;
  btnText?: string;
  percentage?: string;
  subtitle?: string;
}

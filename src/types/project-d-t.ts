import { StaticImageData } from 'next/image';

export interface IProjectDT {
  id: number;
  image: StaticImageData;
  title: string;
  subtitle: string;
}

import { StaticImageData } from 'next/image';

export interface IBlogDT {
  id: number;
  image: StaticImageData;
  category?: string;
  title: string;
  publishedDate?: string;
  dateOfPublished?: string;
  monthOfPublished?: string;
  blogAuthor?: string;
  blogText?: string;
  detailsImage?: StaticImageData;
  description: string;
  btnText?: string;
}

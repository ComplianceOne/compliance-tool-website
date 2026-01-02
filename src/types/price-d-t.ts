import { StaticImageData } from 'next/image';
import React from 'react';

export interface IPriceDT {
  id: number;
  image?: StaticImageData;
  monthlyPrice?: string;
  yearlyPrice?: string;
  price?: string;
  pricePeriod?: string;
  title: string;
  description?: string;
  includesHeader?: string;
  services: {
    itemClass?: string;
    icon: React.ReactNode;
    service: string;
  }[];
  note?: string;

  btnText?: string;
  link?: string;
}

import { StaticImageData } from 'next/image';
import React from 'react';

export interface IFeatureDT {
  id: number;
  bgImage?: string;
  image?: StaticImageData;
  icon?: React.ReactNode;
  title: string;
  description: string;
  btnText?: string;
}

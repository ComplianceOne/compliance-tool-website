export interface FaqItem {
  uuid: string;
  title: string;
  description: string;
}

export interface IFaqCategoryDT {
  id: number;
  name: string;
  faqs: FaqItem[];
}

export type IFaqDT = FaqItem;

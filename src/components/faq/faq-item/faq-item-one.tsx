'use client';

import { IFaqDT } from '@/types/faq-d-t';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface FaqItemProps {
  faqs: IFaqDT[];
  preExpand: string;
}

const FaqItemOne = ({ faqs, preExpand }: FaqItemProps) => {
  return (
    <Accordion
      className="accordion"
      preExpanded={[preExpand]}
      allowZeroExpanded
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.uuid}
          className="accordion-items it-fade-anim"
          data-delay=".3"
          uuid={faq.uuid}
        >
          <AccordionItemHeading className="accordion-header" id="headingOne">
            <AccordionItemButton className="accordion-buttons ">
              {faq.title}
            </AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="accordion-body d-flex align-items-center">
              <p className="mb-0">{faq.description}</p>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
export default FaqItemOne;

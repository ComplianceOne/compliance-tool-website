import Image from 'next/image';
import { Document1, Document2, RightArrowFour } from '@/components/svg';

import sidebarImg from '@/assets/img/service/details-1.png';

const categoryData = [
  'Branding',
  'Web Design',
  'Mobile Application',
  'Development',
  'Illustration',
  'Digital Marketing',
];

const ServiceDetailsSidebar = () => {
  return (
    <div className="it-sv-sidebar-wrapper">
      <div className="it-sv-sidebar-widget-box mb-50">
        <h4 className="it-sv-sidebar-widget-title">Service Category</h4>
        <ul>
          {categoryData.map((item, i) => (
            <li key={i}>
              <div
                className={
                  i === 1
                    ? 'it-sv-sidebar-widget-list active'
                    : 'it-sv-sidebar-widget-list'
                }
              >
                {item}
                <span>
                  <RightArrowFour />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="it-sv-sidebar-widget-box mb-50">
        <h4 className="it-sv-sidebar-widget-title">Company Profile:</h4>
        <a href="#" className="mb-10 d-block">
          <div className="it-sv-sidebar-cv active">
            <span>Download File</span>
            <Document1 />
          </div>
        </a>
        <a href="#">
          <div className="it-sv-sidebar-cv">
            <span>Web Design</span>
            <Document2 />
          </div>
        </a>
      </div>
      <div className="it-sv-sidebar-analysis-box p-relative">
        <h4 className="it-sv-sidebar-widget-title text-white">
          Data Analysis <br />
          Tools & Methods
        </h4>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <a className="it-btn-sm" href="#">
          Get Started Now
        </a>
        <Image
          className="it-sv-sidebar-analysis-thumb image-height-auto"
          src={sidebarImg}
          alt="sidebar-img"
          width={282}
          height={258}
        />
      </div>
    </div>
  );
};
export default ServiceDetailsSidebar;

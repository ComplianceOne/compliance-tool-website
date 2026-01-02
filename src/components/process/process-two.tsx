import Image from 'next/image';

import iconImg1 from '@/assets/img/process/icon-3-1.png';
import iconImg2 from '@/assets/img/process/icon-3-2.png';
import iconImg3 from '@/assets/img/process/icon-3-3.png';
import iconImg4 from '@/assets/img/process/icon-3-4.png';

const processData = [
  {
    id: 1,
    icon: iconImg1,
    title: 'Intelligent Query Understanding',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
  },
  {
    id: 2,
    icon: iconImg2,
    title: 'Generate Humanized, Undetectable Content',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
  },
  {
    id: 3,
    icon: iconImg3,
    title: 'Intelligent Query Understanding',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
  },
  {
    id: 4,
    icon: iconImg4,
    title: 'Continuous Optimization and Improvement',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
  },
];

const ProcessTwo = () => {
  return (
    <div
      className="pg-process-area seo-process-style section-bg p-relative pt-160 pb-130"
      style={{ backgroundImage: `url('/assets/img/shape/process-bg-7-1.jpg')` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pg-section-title-box text-center mb-55">
              <span
                className="pg-section-subtitle white-style text-white it-fade-anim"
                data-fade-from="top"
                data-delay=".3"
              >
                Process
              </span>
              <div className="it_text_reveal_anim"></div>
              <h4 className="seo-section-title text-white it_text_reveal_anim">
                Gain deep insights into your <br />
                website traffic
              </h4>
            </div>
          </div>
        </div>
        <div className="pg-process-border">
          <div className="row">
            {processData.map((item) => (
              <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                <div className="pg-process-item text-center mb-30">
                  <div className="pg-process-icon">
                    <Image
                      className="image-height-auto"
                      src={item.icon}
                      alt="Icon Img"
                    />
                  </div>
                  <div className="pg-process-content">
                    <h4 className="pg-process-title text-white">
                      {item.title}
                    </h4>
                    <p className="text-white">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProcessTwo;

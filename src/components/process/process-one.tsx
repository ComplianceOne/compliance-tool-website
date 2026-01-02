import Image from 'next/image';

import iconImg1 from '@/assets/img/process/icon-3-1.png';
import iconImg2 from '@/assets/img/process/icon-3-2.png';
import iconImg3 from '@/assets/img/process/icon-3-3.png';
import iconImg4 from '@/assets/img/process/icon-3-4.png';

const processData = [
  {
    id: 1,
    icon: iconImg1,
    title: 'Download App',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
    btnText: 'Step 1',
  },
  {
    id: 2,
    icon: iconImg2,
    title: 'Register Account',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
    btnText: 'Step 2',
  },
  {
    id: 3,
    icon: iconImg3,
    title: 'Choose Payment',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
    btnText: 'Step 3',
  },
  {
    id: 4,
    icon: iconImg4,
    title: 'Enjoy Payment',
    description:
      'Lacinia eleifend letius parturient a aliquam ultrices interdum mollis ut. Interdum',
    btnText: 'Step 4',
  },
];

const ProcessOne = () => {
  return (
    <div className="pg-process-area pg-process-border mb-90">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="pg-section-title-box text-center mb-55">
              <h4 className="pg-section-title it-char-animation">
                Let’s Get Started
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {processData.map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="pg-process-item text-center mb-30">
                <div className="pg-process-icon">
                  <Image
                    className="image-height-auto"
                    src={item.icon}
                    alt="icon"
                  />
                </div>
                <div className="pg-process-content">
                  <h4 className="pg-process-title">{item.title}</h4>
                  <p>{item.description}</p>
                  <a className="pg-btn black-bg" href="#">
                    {item.btnText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProcessOne;

import Image from 'next/image';
import ContactFormOne from '../form/contact-form-one';

import shapeImg1 from '@/assets/img/shape/cta-shape-7-2.png';
import shapeImg2 from '@/assets/img/shape/cta-shape-7-1.png';
import seoImg from '@/assets/img/cta/cta-7-1.jpg';

const SeoOne = () => {
  return (
    <div
      className="seo-cta-area p-relative z-index-1 pt-160 pb-160 section-bg"
      style={{ backgroundImage: `url('/assets/img/shape/cta-bg-7-1.jpg')` }}
    >
      <Image
        className="seo-cta-shape-2 image-height-auto"
        src={shapeImg1}
        alt="Shape Img"
        width={87}
        height={97}
      />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="seo-cta-left-box">
              <div className="seo-section-title-box it-text-anim">
                <h4 className="seo-section-title text-white mb-15 it-split-text it-split-in-right">
                  Together, we can achieve <br /> impactful results and <br />{' '}
                  drive success forward.
                </h4>
                <p className="mb-40 text-white">
                  Get in touch today to receive a personalized proposal <br />{' '}
                  tailored specifically for your business.
                </p>
              </div>
              <div
                className="it-cta-input-box p-relative it-fade-anim"
                data-fade-from="bottom"
                data-delay=".7"
              >
                <ContactFormOne
                  placeholderText="Enter Your Website"
                  btnText="Get Start"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="seo-cta-right-box p-relative text-center text-lg-end">
              <Image
                className="seo-cta-shape-1 image-height-auto"
                src={shapeImg2}
                alt="Shape Img"
                width={57}
                height={51}
              />
              <div className="seo-cta-thumb">
                <Image
                  className="image-height-auto"
                  src={seoImg}
                  alt="Seo Img"
                  width={516}
                  height={457}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeoOne;

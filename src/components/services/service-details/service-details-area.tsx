import Image from 'next/image';
import { IServiceDT } from '@/types/service-d-t';
import ServiceDetailsSidebar from './service-details-sidebar';

import bannerImg1 from '@/assets/img/team/banner-1.jpg';
import bannerImg2 from '@/assets/img/team/banner-2.jpg';

import detailsImg from '@/assets/img/blog/details-1-1.png';
import ServiceList from './service-list';

interface IProps {
  service: IServiceDT;
}

const ServiceDetailsArea = ({ service }: IProps) => {
  return (
    <div className="it-sv-details-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            {/* Sidebar */}
            <ServiceDetailsSidebar />
            {/* Sidebar */}
          </div>
          <div className="col-xl-9 col-lg-8">
            <div className="it-sv-details-wrapper">
              <div className="postbox-thumb text-center mb-40">
                <Image
                  src={service?.detailsImage || detailsImg}
                  alt="service-img"
                  width={711}
                  height={399}
                  style={{ height: 'auto' }}
                />
              </div>
              <h4 className="it-section-title mb-20">
                {service?.title || 'Title Not Found'}
              </h4>
              <div className="it-sv-details-text mb-40">
                <p>
                  The digital landscape is vast and ever-changing, presenting
                  for businesses. From media platforms to search engine
                  algorithms, the channels through which brands can connect with
                  their audience are diverse and constantly evolving. However,
                  navigating this complex terrain requires more than just a
                  basic understanding of digital tools.In the digital realm,
                  content is king. Whether it’s a captivating blog post, an
                  engaging social media video, or an informative infographic,
                  compelling{' '}
                </p>
              </div>
              <h4 className="it-section-title mb-20">
                Benefits of our services
              </h4>
              <div className="it-sv-details-text mb-35">
                <p>
                  Dis posuere porta nisl aliquam quisque volutpat ornare. Urna
                  egestas in rhoncus etiam feugiat dolor. Sagittis cras
                  fringilla justo per at a. Convallis suspendisse pulvinar orci
                  vitae eget inceptos. Lacinia integer eu interdum nec praesent
                  potenti. Facilisis viverra dui primis condimentum fames
                  vulputate platea dui nullam. Cubilia rhoncus adipiscing
                  pretium; luctus ultricies diam.
                </p>
              </div>
              <div className="it-sv-details-list-box mb-10">
                {/* Service List */}
                <ServiceList />
                {/* Service List */}
              </div>
              <div className="row gx-35">
                <div className="col-sm-6 mb-30">
                  <div className="it-sv-details-banner">
                    <Image
                      className="w-100 image-height-auto"
                      src={bannerImg1}
                      alt="banner-img"
                      width={452}
                      height={300}
                    />
                  </div>
                </div>
                <div className="col-sm-6 mb-30">
                  <div className="it-sv-details-banner">
                    <Image
                      className="w-100 image-height-auto"
                      src={bannerImg2}
                      alt="banner-img"
                      width={452}
                      height={300}
                    />
                  </div>
                </div>
              </div>
              <h4 className="it-section-title mb-20">Solution And Results:</h4>
              <div className="it-sv-details-text">
                <p>
                  The digital landscape is vast and ever-changing, presenting
                  both challenges and opportunities for businesses. From social
                  media platforms to search engine algorithms, the channels
                  through which brands can connect with their audience are
                  diverse and constantly evolving. However, navigating complex
                  terrain requires more than just a basic understanding of
                  digital tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetailsArea;

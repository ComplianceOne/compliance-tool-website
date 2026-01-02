import Image from 'next/image';
import { StarTwo } from '../svg';

import iconImg1 from '@/assets/img/ratting/icon-1.png';
import iconImg2 from '@/assets/img/ratting/icon-2.png';
import iconImg3 from '@/assets/img/ratting/icon-3.png';

const ratingData = [
  {
    id: 1,
    starCount: 4,
    title: 'improvements in every release',
    image: iconImg1,
  },
  { id: 2, starCount: 5, title: 'the interface is excellent', image: iconImg2 },
  {
    id: 3,
    starCount: 5,
    title: 'it is my main workhorse now',
    image: iconImg3,
  },
];

const RatingOne = () => {
  return (
    <div className="cr-rating-area pt-160 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="cr-ttile-box text-center mb-60">
              <div className="it_text_reveal_anim">
                <h4 className="cr-section-title">
                  Saasty consistently earns <br /> 4.9/5 customer ratings
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row gx-35">
          {ratingData.map((item, i) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-4 col-md-6 it-fade-anim"
              data-fade-from="bottom"
              data-delay={`${0.3 + i * 0.2}`}
            >
              <div className="cr-rating-item text-center mb-30">
                <div className="cr-rating-box mb-20">
                  {Array.from({ length: item.starCount }).map(
                    (_, starIndex) => (
                      <span key={starIndex}>
                        <StarTwo />
                      </span>
                    )
                  )}
                </div>
                <span className="d-block mb-25">"{item.title}"</span>
                <Image
                  className="image-height-auto"
                  src={item.image}
                  alt="Icon Img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RatingOne;

'use client';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';

import { testimonialDataTwo } from '@/data/testimonial-data';

const SliderItemTwo = () => {
  const sliderOption: SwiperOptions = {
    speed: 1500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 60,
    autoplay: {
      delay: 3000,
    },
  };
  return (
    <div className="swiper-container it-testimonial-active">
      <Swiper
        modules={[Autoplay]}
        {...sliderOption}
        className="swiper-wrapper d-flex align-items-center"
      >
        {testimonialDataTwo.map((item) => (
          <SwiperSlide key={item.id} className="swiper-slide">
            <div className="dt-testimonial-wrap text-center">
              <div className="dt-testimonial-item">
                <div className="dt-testimonial-avatar mb-35">
                  {item.avatar && (
                    <Image
                      className="image-height-auto"
                      src={item.avatar}
                      alt={item.author}
                      width={72}
                      height={72}
                    />
                  )}
                </div>
                <div className="dt-testimonial-author-info mb-20">
                  <h5 className="mb-5">{item.author}</h5>
                  <span>{item.designation}</span>
                </div>
                <div className="dt-testimonial-text">
                  <p className="mb-0">{item.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SliderItemTwo;

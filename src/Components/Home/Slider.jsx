import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'


const Slider = () => {
  return (

    <Swiper className='border border-[#a6eff9] shadow-xl border-t-0 rounded-2xl mt-3'
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >
      
      <SwiperSlide><img src={banner1} alt="Slide 1" /></SwiperSlide>
      <SwiperSlide><img src={banner2} alt="Slide 2" /></SwiperSlide>
      <SwiperSlide><img src={banner3} alt="Slide 3" /></SwiperSlide>
    </Swiper>

  );
};

export default Slider;

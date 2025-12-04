import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from "framer-motion";

import slider1 from '../../assets/slider-img-1.jpg';
import slider2 from '../../assets/slider-img-2.jpg';
import slider3 from '../../assets/slider-img-3.jpg';
// import slider4 from '../../assets/slider-img-4.png';

const slideText = [
  {
    title: "Baby Gift Collection 2025",
    subtitle: "Soft, Safe & Quality Products for Your Little One",
  },
  {
    title: "Baby Toy For Birthday Gift",
    subtitle: "Everything your baby needs in one place",
  },
  {
    title: "Baby Gift Collection 2025",
    subtitle: "Soft, Safe & Quality Products for Your Little One",
  },
  {
    title: "Baby Toy For Birthday Gift",
    subtitle: "Everything your baby needs in one place",
  },
];

const Slider = () => {
  return (
    <Swiper
      className="border border-[#a6eff9] shadow-xl h-[50vh] border-t-0 mt-1 relative"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
    >

      {[slider1, slider2, slider3].map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} />

          {/* Text Animation Overlay */}
          <div className="absolute inset-0 bg-black/1 flex items-center pb-20 px-6 md:px-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#443f3f] max-w-lg "
            >
              <h2 className="text-3xl md:text-5xl slider-heading font-medium mb-3 drop-shadow-lg">
                {slideText[index].title}
              </h2>
              <p className="text-lg md:text-xl font-light drop-shadow">
                {slideText[index].subtitle}
              </p>
            </motion.div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
  );
};

export default Slider;

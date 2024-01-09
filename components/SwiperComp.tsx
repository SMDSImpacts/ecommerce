'use client'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from 'next/image';
import 'swiper/swiper-bundle.css'
import 'swiper'

const SwiperComp: React.FC = () => { 
   
  
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        style={{ zIndex: 0 }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        <SwiperSlide><Image src='/assets/img1.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img2.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img3.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img4.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img5.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img6.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img7.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img8.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
        <SwiperSlide><Image src='/assets/img9.jpg' alt='image 1' width={500} height={250} /></SwiperSlide>
      </Swiper>
    </>
  )
}
export default SwiperComp;
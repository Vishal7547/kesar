import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";




const OurProductRange = () => {
  return (
    <>
    
        <div className='container-fluid'>
    <div className="row">
        <div className="col-12">
         
          <h6>Our Product Range</h6>
       
    
            
          <Swiper 
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={true} modules={[Pagination]} className=" mt-4 mb-4">
        <SwiperSlide> <img src="https://kesarcraft.com/images/box3.jpg" alt="1" /> </SwiperSlide>
        <SwiperSlide><img src="https://kesarcraft.com/images/box4.jpg"  alt="2" /></SwiperSlide>
        <SwiperSlide><img src="https://kesarcraft.com/images/box5.jpg"  alt="3" /></SwiperSlide>
        <SwiperSlide><img src="https://kesarcraft.com/images/box6.jpg"  alt="4" /></SwiperSlide>
        <SwiperSlide><img src="https://kesarcraft.com/images/box1.jpg"  alt="5" /></SwiperSlide>
        <SwiperSlide><img src="https://kesarcraft.com/images/box2.jpg"  alt="6" /></SwiperSlide>

      </Swiper>
    
        </div>
    </div>
  
</div>
    </>

  )
}

export default OurProductRange;

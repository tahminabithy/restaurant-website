import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SecTitle from "../../../components/SecTitle/SecTitle";
const Categories = () => {
  return (
    <div>
      <SecTitle
        heading={"From 11:00am to 10:00pm"}
        subHeading={"ORDER ONLINE"}
      />
      <div className="p-6 md:p-12 my-8 flex justify-center items-center">
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              Salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              desserts
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              Salad
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              pizza
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <h1 className="uppercase text-white text-3xl -mt-20 text-center font-['Cinzel']">
              salad
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Categories;

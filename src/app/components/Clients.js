"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper styles

const Clients = () => {
  const client_logos = [
    "/clients/uew_064622.jpg",
    "/clients/gaec_064615.jpg",
    "/clients/getfund_064617.jpg",
    "/clients/gnpc1_064620.jpg",
    "/clients/kcl_064620.jpg",
    "/clients/moe_064621.jpg",
    "/clients/upsa.jpg"
  ];

  return (
    <div className="w-full p-[2em] md:p-[5em] bg-primary_color border-secondary_color">
      <div className="gap-5 items-start">
        <h1 className='text-white'>Our trused<br /> Partners Over The Years</h1>
      </div>
      <br />
      <p className="w-full text-white md:w-2/3 lg:w-1/2">
        We are proud to collaborate with trusted partners and serve clients across a variety of industries. Our success is founded on strong relationships with developers, architects, suppliers, and corporate clients, all of whom share a commitment to high standards.
      </p>



      {/* Swiper for client logos */}
      <Swiper
        slidesPerView={"auto"} // Adjust number of visible slides
        spaceBetween={1} // Space between slides
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Auto slide with a 1 second delay, continue on interaction
        loop={true} // Infinite loop
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper relative mt-[2em] md:mt-[5em]"
      >
        {client_logos.map((each_client, index) => (
          <SwiperSlide
            key={index}
            className=" w-auto md:mx-auto max-w-[200px]  object-cover h-auto max-h-[250px] md:w-[200px] flex items-center justify-around md:h-[200px] md:max-w-[100px] md:max-h-[100px] border-2 border-[rgba(186, 186, 186, 0.7)] flex items-center justify-center p-4"
          >
            <img
              src={each_client}
              className="h-full w-full object-cover "
              alt={`client-${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;

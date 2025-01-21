"use client";
import React from "react";
import AnimateUp from "./AnimateUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TheSolution = () => {
  const solutions = ["Rethink", "Refuse", "Reduce", "Reuse","Repair","Recycle"];

  return (
    <AnimateUp>
      <div className="bg-primary_color w-full h-auto  gap-2 flex flex-col  items-center lg:block lg:h-screen lg:max-h-[800px] lg:mt-20 p-10">
        <h5 className="text-regular_text">The Solution?</h5>
        <Swiper
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
          direction="vertical"
          pagination={{
            clickable: true,
          }}
        
          modules={[Pagination, Autoplay]}
          className="h-[8em] w-full md:h-full max-h-[200px]"
        >
          {solutions.map((one_sol, index) => (
            <SwiperSlide key={index}>
              <h1 className="text-regular_text text-[4em] text-center  lg:text-left  md:text-[4.5em] leading-[1em] lg:text-[150px]">
                {one_sol}
              </h1>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className= "lg:absolute md: border lg:bottom-[2em] lg:right-[2em] md:w-[30em] md:h-[30em] bg-regular_text w-[70vw] h-[70vw] lg:max-w-[400px] lg:max-h-[400px]"> hey</div>
      
      <p className="lg:absolute text-center lg:text-left  md:lg:bottom-[2em] lg:left-[2em] text-regular_text w-full md:w-1/2  lg:w-[30%]"> We met with the Chief of the Plastic Renewal Energy sources who contributed immensely to our projects who made our vision a reality and made it all work.We met with the Chief of the Plastic Renewal Energy sources who contributed immensely to our projects</p>
       
      </div>


  
    
    </AnimateUp>
  );
};

export default TheSolution;

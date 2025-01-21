"use client";
import React from "react";
import { tip, awareness_content } from "../Data/Data";
import Image from "next/image";
import { Button2 } from "./Buttons";
import Slider from "react-slick";
import YoutubeContent from "./YoutubeContent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DailyContent = () => {
  const isImage = (fileName) => {
    return /\.(jpg|jpeg|png|gif|webp|bmp|tiff)$/i.test(fileName);
  };

  const settings = {
    dots: true,
    
    infinite: false, // Prevent endless scrolling
    speed: 500,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
  };

  return (
    <div className="bg-primary_color py-[2em] md:py-[4em] m px-[1em] md:px-[3em] ">
      <p className="text-regular_text ml-[3em]">TIPS OF THE DAY</p>
      <br/>
      <div className=' mx-auto     '>
       {tip.slice(0,3).map((each_tip, index )=>{
            return  <div key={index} className='flex border-b-2 py-4  items-center  gap-6'>  
              <h5 className='text-regular_text'>{index + 1}</h5> 
            <h5 className='hidden md:block text-regular_text w-full md:w-2/3'>{each_tip}</h5 >
            <p className='md:hidden  text-regular_text w-full md:w-2/3'>{each_tip}</p >
      
            
            </div>
        })}
       </div>

      <h5 className="mt-[4em] md:w-2/3 text-regular_text">
        Have access to our awareness content designed to help fight against
        plastic pollution and awareness
      </h5>
      <div className="flex items-center">
        <Button2 link_address="/" title="More Awareness Content" />
        <img
          src="/arrow_right.svg"
          className="p-2 rounded-full w-[5em] h-[5em]"
          alt="Arrow Right"
        />
      </div>

      <Slider {...settings} className="mt-[4em] customDots">
        {awareness_content.data.awarenessMaterialsConnection.edges.map(
          (item, index) =>
            item.node.awarenessContent.map((content, idx) => (
              <div key={`${index}-${idx}`} className="flex">
                {isImage(content.fileName) ? (
                  // Render Image component for image files
                  <div className="space_margin relative w-[15em] h-[20em]">
                    <Image
                      src={content.url}
                      alt={content.fileName}
                      layout="fill"
                      objectFit="cover"
                      className="cover"
                    />
                  </div>
                ) : (
                  // Render a div for non-image files
                  <div className="space_margin content-item md:min-w-[300px]  border p-5 rounded-lg">
                    <p className="text-white">{content.fileName}</p>
                    <br />
                    <Button2
                      title="Download File"
                      link_address={content.url}
                    />
                  </div>
                )}
              </div>
            ))
        )}
      </Slider>




      {/* New Youtube inof */}
      <YoutubeContent></YoutubeContent>
    </div>
  );
};

export default DailyContent;

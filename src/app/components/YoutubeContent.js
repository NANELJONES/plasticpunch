"use client"
import React from 'react';
import Slider from "react-slick";


const YoutubeContent = () => {

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow-custom`}
        style={{
          ...style,
          display: "block",
         
          color: "#fff", // White arrow color
          borderRadius: "50%",
   
          right: "10px",
          zIndex: 10,
     
        }}
        onClick={onClick}
      >
       
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} slick-arrow-custom`}
        style={{
          ...style,
          padding:"10px",
         
          
       
          color: "#fff", // White arrow color
          borderRadius: "50%",
          
          left: "10px",
          zIndex: 10,
       
        }}
        onClick={onClick}
      >
       
      </div>
    );
  };

  const youtube_link = [
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
    "https://www.youtube.com/embed/5yIt1b7vKLA",
  ];

  
  const settings = {
    dots: true,
    infinite: false, // Set to false to prevent endless scrolling
    speed: 500,
    slidesToScroll: 1, // Scroll one slide at a time
    centerMode: false, // Disable center mode
    variableWidth: true, // Allow automatic width based on content
    
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom previous arrow
    

  };
  return (
    <div className=" w-full mt-[4em]">
      <h4 className='text-white w-full  md:w-[60%]'>Engage With Our YouTube Content To Get Our Latest Yotube content </h4>
      
    

 <br/>
      <Slider {...settings} className="w-full  ">
        {youtube_link.map((each_link, index) => {
          return (
            <iframe
              key={index}
              className="w-[20em]  h-[20em] p-4 max-h-[250px] md:max-w-[300px] md:max-h-[300px]"
              src={each_link}
              title="Plastic Punch Media Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          );
        })}
      </Slider>

      <br />
      <br />
      <div className="flex justify-center">
      <button className='  bg-none max-w-[500px] mx-auto bg-primary_color rounded-none  text-white'>Watch More Content</button>
      </div>
    </div>
  );
};

export default YoutubeContent;

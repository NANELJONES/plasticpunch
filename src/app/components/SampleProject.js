"use client";
import Link from 'next/link';
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import { getAllProjects } from '../projects/page';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getProjects } from '../lib';

const SampleProject = () => {

  const [all_projects, set_all_projects] = useState([]);
 
   const fetchProjects = async () => {
     try {
       const projects = await getProjects();
       set_all_projects(projects); // Set the state with fetched data
       console.log(projects)
     } catch (error) {
       console.error("Error fetching projects:", error);
     }
   };
 
   useEffect(() => {
     fetchProjects();
   }, []);
  
  
  
   const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Show 3 slides at a time
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false, // Disable variable width for consistent slide sizing
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode:false // Show 1 slide on small screens
          
          
        },
      },
    ],
  };
  

  return (
    <motion.div 
    initial={{ opacity: 0, y: 40, }}
          whileInView={{ opacity: 1, y: 0,}}
          transition={{duration:2  }}
    
    className='p-8 overflow-x-hidden flex flex-col gap-4 bg-primary_color shadow-md md:backdrop-blur-md lg:backdrop-none lg:shadow-none lg:bg-none w-full'>
      <div className='flex gap-2 items-end'>
      <h3 className='text-regular_text'>Our  </h3>
      <h1 className='text-regular_text'> Projects</h1>
      </div>
   
   
      <div className='w-full relative md:left-[30%] lg:left-[40%]      md:max-w-[1000px] '>
   
          <h5 className='text-regular_text  w-full md:w-2/3'>With over 45 tons, (40, 823 kg) of plastics managed and collected, with over 50,000+ participants, here are samples of our projects for your reference</h5>
            <br/>
        <Slider {...settings} className=' '>
          {all_projects.map((each_project, index) => (
        
            <div className=' md:p-10  md:ml-0 w-[20em] md:w-[18em] max-w-[400px] md:max-w-[450px]  lg:max-w-[600px]' key={index}>
              <div className='relative w-full h-[60vw] max-h-[300px]  transition duration-500 w-full   md:h-[18em]     md:max-h-[400px]'>
                <Image
                  alt='Project Image'
                  src={each_project?.node?.projectImages[0]?.url ? each_project?.node?.projectImages[0]?.url :"/gallery_bg.jpg"}
                  className='w-full object-cover'
                  fill={true}
                />
              </div>
              <Link key={index}  href= {`/projects/${each_project?.node?.slug}`} > <h6 className='w-full  text-white text-left'>{each_project?.node?.projectName}</h6>    </Link>
              <p className='w-full -l-4 -white px-2 text-white text-left font-italic'>{each_project?.node?.projectStatus}</p>
            </div>
        
          ))}
        </Slider>
        <br/>
        <Link href={"/projects"}>  <button className="text-regular_text -2  -regular_text  bg-none ">Explore Our Projects</button>    </Link>
   
      </div>
    </motion.div>
  );
};

export default SampleProject;
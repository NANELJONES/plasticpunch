"use client"
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import Layout1 from '../layout/Layout1';
import { AllLines } from './AllLines';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';




import SimpleData from './Data Stats/SimpleData';



const Intro = () => {
  return (
    <div className='w-full '>
      
  
    <div className='h-auto   lg:p-20 bg_blur p-6 gap-10 lg:gap-0  justify-between lg:flex-row items-start max-w-[1500px] mx-auto flex-col   max-h-fit flex items-center  '>
        {/* Texts */}
   
            
    
         <motion.div 
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2,  }}
     className='w-full lg:w-1/2 self-start   z-[2]  lg:sticky lg:top-[50px] lg:mt-[10em] '>
             <motion.h5 className='text-white  ' 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay:0.5 }}
             >We are</motion.h5>

            <motion.h1 className='text-white   ' 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay:0.5 }}
             >Plastic Punch</motion.h1>


              <br/>
            <motion.h6 
             initial={{ opacity: 0, y: 80 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, delay:0.8}}
            className='text-white    w-full'>An NGO based in Ghana promoting circular economy and environmental preservation, particularly marine conservation, to support sustainable development impacting future generations. 
</motion.h6>

<br/>
<motion.h6 
             initial={{ opacity: 0, y: 80 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 2, delay:0.8}}
            className='text-white    w-full'>An NGO based in Ghana promoting circular economy and environmental preservation, particularly marine conservation, to support sustainable development impacting future generations. 
</motion.h6>
            

         
            <br/>
            <Link href={"/aboutUs"}><button className='border-2 border-white w-2/3 max-w-[200px] bg-none bg-primary_color  text-white  rounded-full'>Learn More</button></Link>
            <br/>
            <br/>
            <h4 className='text-white'>Our Numbers</h4>
            <br/>

            <p className='text-white'>Waste Collected And Managed</p>
            <h2 className='text-white'>45 TONS +</h2>
            <div className='flex flex-wrap gap-2 '>
            <SimpleData  heading="Beach Clean Ups" data="42+"></SimpleData>
            <SimpleData  heading="Completed Projects" data="30+"></SimpleData>
            <SimpleData  heading="Communities" data="10+"></SimpleData>
            <SimpleData  heading="Stakeholders" data="250+"></SimpleData> 
            <SimpleData  heading="Participants" data="50,000+"></SimpleData>
            
            </div>
       </motion.div>

       
           
        {/* Display on Large devices */}
        <div className="w-full lg:w-1/2 hidden lg:flex  overflow-hidden">
  <div className="w-full">
    <motion.div
      initial={{ y: 80 }}
      transition={{ duration: 2 }}
      className="w-full overflow-x-hidden flex flex-wrap gap-2 justify-center items-center  p-2"
    >
      <img src="/Us/1.jpg" className="w-full rounded-xl h-auto object-cover md:max-h-[300px]" />
      <img src="/Us/2.jpg" className="w-full rounded-xl  h-auto object-cover md:max-h-[300px]" />
      <img src="/Us/3.jpg" className="w-full rounded-xl  h-auto object-cover  md:max-h-[300px]" />
      <img src="/Us/4.jpg" className="w-full rounded-xl  h-auto object-cover mmd:max-h-[300px]" />
      <img src="/Us/5.jpg" className="w-full rounded-xl  h-auto object-cover  md:max-h-[300px]" />
      <img src="/Us/6.jpg" className="w-full rounded-xl  h-auto object-cover  md:max-h-[300px]" />
    </motion.div>
  </div>
</div>



        
        {/* Display on small devices */}
        <div className='w-full flex lg:hidden lg:w-1/2 hide_scroll'>
      <div className='w-full'>
        <Swiper
          spaceBetween={2}
          slidesPerView={'auto'}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          centeredSlides={true}

          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className='w-full mySwiper flex flex-row lg:flex-col overflow-hidden p-2 gap-2'
        >
          <SwiperSlide><img src="/Us/1.jpg" className=' object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
           <SwiperSlide><img src="/Us/2.jpg" className=' object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
           <SwiperSlide><img src="/Us/3.jpg" className='object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
           <SwiperSlide><img src="/Us/4.jpg" className='object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
           <SwiperSlide><img src="/Us/5.jpg" className='object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
           <SwiperSlide><img src="/Us/6.jpg" className='object-cover h-full mx-auto w-full max-h-[300px] lg:max-w-full lg:max-h-full' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
        


    {/* Our Numbers */}
   

    </div>

  
</div>
  )
}

export default Intro
"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import SimpleData from './Data Stats/SimpleData'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { AllLines } from './AllLines'


const Header = () => {
  return (
  <div className='bg-primary_color h-full    relative bg-green-100 flex flex-col item-center justify-between gap-10    '>
  <AllLines ></AllLines>
  <Layout1>

  <div className=' text-white w-[100%] md:mt-[7em]   max-h-[1000px]  h-auto gap-10 justify-between  flex items-center flex-col-reverse md:flex-row   bg-primary_color'>
   

                    <motion.div 
                    initial={{ opacity: 0, y: 40, }}
    whileInView={{ opacity: 1, y: 0,}}
    transition={{ duration: 2, delay:0.2 }}
                    className='w-full md:w-[40%]'>
                                    <h4 className='text-white'>Welcome to</h4>
                                <h2 className='text-white'>Plastic Punch</h2>
                                
                                <h6 className='text-white'>{'We are a construction company committed to delivering innovative solutions with excellence, quality, and sustainability. Let’s build something extraordinary together!'}</h6>
                            <br/>
                               <Link href={"/contactUs"}> <motion.button 
                               initial={{ opacity: 0, x: -40, }}
                               whileInView={{ opacity: 1, x: 0,}}
                               transition={{ duration: 2, delay:0.5 }}
                               
                               className='flex min-w-[200px] p-2 md:w-1/3 lg:w-1/2 xl:w-1/3 justify-around items-center gap-2'>Get In Touch With Us  <img src="/circle_arrow.svg" className='w-[30px] h-[30px]'></img></motion.button></Link>
                    </motion.div>

                    <div className=' relative h-[30%]  md:h-[auto]  aspect-video  rounded-[20px] bg-[#383C76] overflow-hidden w-full md:w-[60%]'>
                                <video src="/temp_vid.mp4 "  className= "absolute top-0 left-0 w-full h-full object-cover"  loop  autoPlay muted/> 
                    </div >

 </div>

        {/* dat starts here */}
        <div className='w-full  mt-4 md:mt-5 h-auto  relative bottom-0 md:bottom-[1em]  lg:bottom-[2em] md:flex-row flex  flex-col  gap-5  md:items-center justify-between md:max-h-[200px]   '>
                    <SimpleData  heading="Completed Projects" data="200+"></SimpleData>
                    <SimpleData  heading="Clients Satisfied" data="250+"></SimpleData>
                    <SimpleData  heading="Total Employment Since 2004" data="597"></SimpleData>
                    <SimpleData  heading="Institutional Certification" data="25"></SimpleData>
                    

        </div>

        {/* nice */}

        <div className='w-full mt-2 md:mt-0 h-[10em]  md:w-[10em] md:h-[8em]  lg:w-[11em] lg:h-[11em] text-primary_color    p-[1em] justify-around flex flex-col items-center bg-third_gradient rounded-[20px]  md:absolute md:top-[6vw]  md:right-[5vw]'>
                    
                  
                    <h6 className='nice_text font-[300] hidden  md:block'> Building Excellence: Your Trusted Partner in Construction Consulting</h6>
                    <h5 className=' font-[300] md:hidden'>We Offer Outstanding Consulting Services And Precise Cost Engineering Solutions, Ensuring Your Success Through Comprehensive Civil Consulting And Meticulous Project Cost Management.</h5>
                    
                  <div className='flex flex-row  items-center justify-between w-full '>
                      <img src="/Geng.png" className='h-[2em] md:- lg:h-[2em] '></img>
                        <img src="/circle_arrow.svg" className='h-[1.5em]'></img>
                        
                   </div> 
        </div>

 </Layout1>





  </div>
   
  )
}

export default Header
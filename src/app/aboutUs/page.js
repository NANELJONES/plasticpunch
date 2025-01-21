"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'

import Image from 'next/image'
import Link from 'next/link'
import { motion ,useScroll, useTransform, useMotionValue} from 'framer-motion'
import { useRef } from 'react'
import { useState } from 'react'
import AnimateUp from '../components/AnimateUp'
import { useEffect } from 'react'
import { getTeam } from '../lib'
import SimpleData from '../components/Data Stats/SimpleData'

const Page = () => {


  const parent_div = useRef(null)
  const { scrollYProgress } = useScroll({
    target:parent_div
  }
  )

  const height = useTransform(
    scrollYProgress,
    [0,1],
    ["0%","100%"]

  )


    
  const [team, set_team] = useState([])



   const fetchTeam = async () => {
    try {
      const all_teams = await getTeam();
      console.log("Fetched Team:", all_teams); // Check if data is fetched
      set_team(all_teams); // Set the state with fetched data
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  
  
    useEffect(() => {
    
       fetchTeam()
    }, []);



  return (



    <div className='   transition ease-in-out duration-600 p-4 mx-auto max-w-[1500px] md:py-20  gap-6  flex items-start   relative  '>

      <div className='w-full   hidden md:block md:w-[30%] flex py-0 px-4  sticky top-[70px]'>
       <h1>Get to <br/>know us more</h1>
       <br/>
        <div className='relative'>
        <Link href={"/aboutUs/#history"}> <p className='hover:text-[1.5em] duration-500 '>Our History</p></Link>
        <Link href={"/aboutUs/#who_we_are"}> <p className='hover:text-[1.5em] duration-500 '>Who we are?</p></Link>

       <Link href={"/aboutUs/#mission&vision"}><p className='hover:text-[1.5em] duration-500 '>Mission & Vision</p></Link>
      
       <Link href={"/aboutUs/#our_numbers"}><p className='hover:text-[1.5em] duration-500 '>Our Numbers</p></Link>
       <Link href={"/aboutUs/#Message_From_Founders"}><p className='hover:text-[1.5em] duration-500 '>Message From Founders</p></Link>
       
       <Link href={"/aboutUs/#teammates"}><p className='hover:text-[1.5em] duration-500 '>Meet the Team</p></Link>
      
       <motion.div style={{height}}  className='w-[2px]  bg-secondary_color absolute left-[-10px] top-0'>  </motion.div>
        </div>

      {/*  */}
     






      </div>

 

    
      <div 
      ref={parent_div}
      className='w-full flex flex-col items-start justify-start gap-5 md:gap-[4em] md:w-[60%]   '>
        {/* history */}
        <div  id="history">
          <AnimateUp><h1>Our History?</h1></AnimateUp>
          <br/>
            
            <AnimateUp>
            <div className='w-full h-[15em] relative lg:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl'>
            <Image
              alt={`/gallery`}
              src={`/new_contact_bg.jpg`}
              className="w-full object-cover rounded-2xl"
              fill
            />


            </div>
            <br/>
            <h6 className='border-l-4 border-secondary_color px-6'>{`Created in January 2018 by a group of seven young international advocates, Plastic Punch (PP) aims at promoting circular economy and environmental preservation, particularly marine conservation, to support sustainable development impacting future generations. PP’s objective is also to inspire behavioural change through citizen science and awareness raising towards sustainable waste management practices with emphasis on reducing plastic pollution.`}</h6>
            <br/>
            </AnimateUp>


        </div>


       <AnimateUp> <h3 className='hidden md:block bg-primary_color text-white p-10' >Get in touch with our latest blogs, from all around the world regarding our various inputs and projects.</h3></AnimateUp>
       <AnimateUp> <h4 className='md:hidden block bg-primary_color text-white p-10' >Get in touch with our latest blogs, from all around the world regarding our various inputs and projects.</h4></AnimateUp>


     {/* who we are*/}
     <div id="who_we_are" >
            <AnimateUp><h1>Who We Are</h1> </AnimateUp> 
            <br/>
            <div className='w-full h-[15em] md:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl relative'>

            <Image
              alt={`/gallery`}
              src={`/our_culture.jpeg`}
              className="w-full object-cover grayscale rounded-2xl"
              fill
            />
            </div>
            <br/>
            <AnimateUp><h6 className='border-l-4 border-secondary_color px-6' >{` The NGO started its projects in Ghana, home to a rich flora and fauna, and more specifically marine turtles, a highly endangered species that come to its shores on an annual basis to lay their eggs. As evidenced during turtle monitoring sessions conducted by the PP team, the amount of waste on the beaches directly harms the turtles, which have to nest amidst considerable amounts of plastic waste, and can die by ingesting plastic floating in the water.`}</h6>
            <br/>
            </AnimateUp>
            <AnimateUp>
            <h6 className='border-l-4 border-secondary_color px-6'>{`The distinctive activity of the NGO are the beach cleanups: they are the most direct tool to be used to improve the turtle nesting environment and good sanitation of the beach but also act as an awareness raising strategy towards behavioural change. The educational activities of the NGO are implemented through entertainment (“edutainment”) and there is a strong engagement with the community, as they are the ones directly affected by the cleanliness of their environment.`}</h6>
</AnimateUp>
            <br/>

      </div>






        {/*mission and vision*/}
         <div  id="mission&vision">

          

         <AnimateUp> <h2 className='hidden md:block bg-primary_color text-white p-20' >Our Mission and Vision is to create an Eco-sustainable and recyclable environment that reduces plastic waste globally</h2></AnimateUp>
       <AnimateUp> <h2 className='md:hidden block bg-primary_color text-white p-10' >Our Mission and Vision is to create an Eco-sustainable and recyclable environment that reduces plastic waste globally</h2></AnimateUp>
      <br/>


        </div>


{/* Our Numbers */}
<div>
     <h1 id="our_numbers">Our Numbers</h1>
            <br/>

            <p>Waste Collected And Managed</p>
            <h2>45 TONS +</h2>
            <div className='flex flex-wrap gap-2 '>
            <SimpleData  heading="Beach Clean Ups" data="42+"></SimpleData>
            <SimpleData  heading="Completed Projects" data="30+"></SimpleData>
            <SimpleData  heading="Communities" data="10+"></SimpleData>
            <SimpleData  heading="Stakeholders" data="250+"></SimpleData> 
            <SimpleData  heading="Participants" data="50,000+"></SimpleData>
            </div>
</div>


{/* Message From Founders  */}
<div id="Message_From_Founders" className='flex flex-col gap-4'>
  <h2>Message From 
  <br/> Founders</h2>

    <div>
          <div className='w-full z-[-1] h-[15em]  md:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl relative'>

        <Image
          alt={`/gallery`}
          src={`/our_culture.jpeg`}
          className="w-full object-cover grayscale  "
          fill
        />
        </div>

        <div className='bg-primary_color md:ml-[3em] drop-shadow-lg    md:mt-[-10em] z-[20]    p-12 md:w-1/2'>
        <h4 className='text-white'>Legacy Nii Quanio</h4>
        <br/>
        <p className='text-white'>{`LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor `}</p>

        </div>

    </div>
    <br/>
    <div>
          <div className='w-full z-[-1] h-[15em]  md:h-[30em] max-h-[400px] bg-blue-600 rounded-2xl relative'>

        <Image
          alt={`/gallery`}
          src={`/our_culture.jpeg`}
          className="w-full object-cover grayscale  "
          fill
        />
        </div>

        <div className='bg-primary_color md:ml-[3em] drop-shadow-lg    md:mt-[-10em] z-[20]    p-12 md:w-1/2'>
        <h4 className='text-white'>Legacy Nii Quanio</h4>
        <br/>
        <p className='text-white'>{`LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lor `}</p>

        </div>

    </div>



</div>


<AnimateUp>
         
     <div  id="teammates">
            <h1>Meet our hardworking <br/> team</h1>
            <br/>
            <p>{`Meet the dedicated Team of Plastic Punch`}</p>
            <br/>
            <div className="flex items-center justify-center  md:justify-start gap-[1em] 2xl:gap-[3em] w-full  flex-wrap ">
          {team.map((each_team, index) => {
            return (
              <div
                key={index}
                className="w-[60vw]  md:w-[20em]   shadow-2xl max-w-[300px] "
              >
                <div className="relative w-full h-[70vw] md:h-[25vw] max-h-[300px]">
                  <Image
                    src={each_team?.node?.employeeImage?.url}
                    fill
                    unoptimized
                    className="object-cover"
                  ></Image>
                </div>
              
                <div className="w-full hover:text-amber-500 duration-500  bg-secondary_color  p-5 md:p-5  flex flex-col items-center justify-evenly ">
                  <h6 className=" text-center  text-white md:text-left w-full   ">
                    {each_team?.node?.employeeName}
                  </h6>

                  <p className="italic text-white  text-center md:text-left w-full    ">
                    {each_team?.node?.employeePosition}
                  </p>
                </div>
              </div>
            );
          })}
        </div>


      </div>

      </AnimateUp>

      </div>





    </div>

  )
}

export default Page
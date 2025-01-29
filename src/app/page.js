
import { SingleLine } from "./components/Lines";
import Image from "next/image";
import Donate from "./components/Donate";
import Header from "./components/Header";
import Intro from "./components/Intro";

import Layout1 from "./layout/Layout1";
import AbstractCube from "./components/3D/AbstractCube";
import EducationalContent from "./components/EducationalContent";
import SampleProject from "./components/SampleProject";
import TheSolution from "./components/TheSolution";
import SampleGallery from "./components/SampleGallery";
import Society from "./components/Society";
import Clients from "./components/Clients";
import Testimonials from "./components/Testimonials";
import {TextAnimation, WordAnimation, SmallWordAnimation} from "./components/TextAnimation";
import IntroStats from "./components/IntroStats";

import ChangeMakers from "./components/ChangeMakers";
import SiteMap from "./components/SiteMap";
import DailyContent from "./components/DailyContent";
import BlogSample from "./components/BlogSample";
import {SampleEvents3} from "./components/SampleEvents";
import HomeContent from "./components/HomeContent";
export default function Home() {
  return (
    <div className="bg-[#1E2D7D]">
    
{/*  
    <AbstractCube></AbstractCube> */}

    <Layout1>
    <div className="flex  flex-col lg:flex-row gap-4 relative h-auto bg-black-200 w-full  ">
    
      <div className="flex flex-col p-2 md:p-8  z-10 gap-10 w-full " >
      <HomeContent></HomeContent>
      <IntroStats></IntroStats>
      <TheSolution/>
      <Intro></Intro>

    
       
        {/* <div className=" p-8 bg-[rgba(256,256,256,0.6)] shadow-md md:backdrop-blur-md md::backdrop-none md:shadow-none md::bg-none">
       
        <TextAnimation text="Intergrity"></TextAnimation>
        <TextAnimation text="Innovation"></TextAnimation>
        <TextAnimation text="Sustainabliity"></TextAnimation>
        <SingleLine delay_time="1"/>
   
        </div> */}
                  
           
                  <Society></Society>
           <SampleProject/>
         <BlogSample></BlogSample>
         <SampleEvents3></SampleEvents3>
           
           <Donate></Donate>
           <DailyContent></DailyContent>
          
           <ChangeMakers></ChangeMakers>
       
       
   
         
         
         
  
           


       
           
         
           
          
          
       </div>



    </div>
 
    <Clients></Clients>
   
    {/* <Testimonials></Testimonials> */}
    <SiteMap></SiteMap>
    

    </Layout1>



    
    

    
    </div>
    
  );
}

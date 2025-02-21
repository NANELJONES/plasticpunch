"use client";
import React, { useState } from 'react';
import AnimateUp from './AnimateUp';

const Society = () => {
  const [showMore, setShowMore] = useState(null);

  const toggleDetails = (csrName) => {
    setShowMore(showMore === csrName ? null : csrName);
  };

  const csrData = [
    {
      Csr_Name: "SDG 14 – Life Below Water 🌊",
      Csr_Details: "By reducing plastic pollution and protecting marine biodiversity, particularly endangered marine turtles, Plastic Punch directly contributes to conserving ocean ecosystems",
      Csr_Icon: "/csr icons/carbon_sustainability.svg",
    },
    {
      Csr_Name: "SDG 12 – Responsible Consumption and Production 🔄",
      Csr_Details: "Promoting a circular economy and sustainable waste management practices aligns with this goal by encouraging responsible plastic use, recycling, and reducing waste.",
      Csr_Icon: "/csr icons/ri_user-community-line.svg",
    },
    {
      Csr_Name: "SDG 13 – Climate Action 🌍",
      Csr_Details: "Waste, especially plastic, contributes to greenhouse gas emissions when burned or improperly disposed of. By promoting waste reduction and sustainable practices, the NGO contributes to climate mitigation efforts.",
      Csr_Icon: "/csr icons/clarity_employee-line.svg",
    },
    {
      Csr_Name: "SDG 11 – Sustainable Cities and Communities 🏙️",
      Csr_Details: "Engaging communities in environmental education and beach cleanups fosters cleaner and more sustainable urban and coastal environments.",
      Csr_Icon: "/csr icons/ri_government-fill.svg",
    },
    {
      Csr_Name: "Life on Land 🌱",
      Csr_Details: "While focused on marine conservation, reducing plastic waste also benefits terrestrial wildlife and ecosystems by preventing land-based pollution from reaching water bodies.",
      Csr_Icon: "/csr icons/ri_government-fill.svg",
    },
    {
      Csr_Name: "SDG 17 – Partnerships for the Goals 🤝",
      Csr_Details: "Collaborations with local and international organizations, volunteers, and governments help drive impact and scale environmental efforts.",
      Csr_Icon: "/csr icons/ri_government-fill.svg",
    },
  ];

  return (
    <div className="relative md:p-[4em] shadow-md  bg_blur flex flex-col gap-10 p-4">
      <h1 className=" hidden  md:block leading-[1.5em]  md:w-[70%] text-white">
       <p className='text-white'>Our</p> Sustainable Development Goals (CSR)
      </h1>
   
      <h3 className=" md:hidden  md:block leading-[1.5em]  md:w-[70%] text-white">
       <p className='text-white'>Our</p> Sustainable Development Goals (CSR)
      </h3>
    

      <p className ="md:w-2/3 text-white">
      Plastic Punch's operations align with several United Nations Sustainable Development Goals (SDGs), including:

        <br />

      
      </p>

      <div className="flex flex-wrap items-center  justify-around gap-10 transition">
        {csrData.map((csr, index) => (
          <div key={index} className={`transition-all duration-500 w-full  bg-primary_color ${showMore === csr.Csr_Name ? ' w-full  md:w-[70%]  py-[3em] max-w-[500px] ' : 'max-w-[300px] min-w-[280px]'}`}>
            <AnimateUp> 
              <div 
                className=" p-4 h-[20em] flex shadow-xl flex-col justify-end relative"
              >
                <img
                  className={`w-[5em]  absolute top-4 right-4 max-w-[40px] ${showMore  === csr.Csr_Name ? 'top-[-20px]' : ''} `}
                  src={csr.Csr_Icon}
                  alt={csr.Csr_Name}
                />
                <div className="h-auto w-full self-end">
                  <h5 className={` text-[1em] text-white text-left font-medium leading-[1.4] md:text-[1.3em] md:w-full md:leading-[1.5] 2xl:text-[20px] 2xl:leading-[1.6] ${showMore === csr.Csr_Name ? 'md:w-1/2' :""}`}>
                    {csr.Csr_Name}
                  </h5>
                  <br/>
                  {showMore === csr.Csr_Name && (
                    <p className="text-white">{csr.Csr_Details}</p>
                  )}
                  <button
                    className="bg-none text-white border-none text-left border-b-2 border-white  p-2 w-2/3"
                    onClick={() => toggleDetails(csr.Csr_Name)}
                  >
                    {showMore === csr.Csr_Name ? "Show Less " : "Read More"}
                  </button>
                </div>
              </div>
            </AnimateUp>
          </div>
        ))}
      </div>

   
      <p className =" text-white border-l-8 border-primary_color px-2 md:w-1/3">
      We are committed to sustainable practices, focusing on reducing our carbon footprint, promoting recycling, and supporting environmental conservation initiatives.
    
      
      
      </p>
      <button className=' bg-none max-w-[200px] bg-primary_color rounded-none  text-white'>Read More</button>
     
    </div>
  );
};

export default Society;

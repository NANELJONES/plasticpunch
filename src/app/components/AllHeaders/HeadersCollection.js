import React from 'react'
import Image from 'next/image'

const HeadersCollection1 = ({heading,  sub_heading,second_heading, source}) => {
  return (
    <div className='normal_div'>
        <div>
                <h2>{heading}</h2>
                <h1>{second_heading}</h1> 
                <p>{sub_heading}</p>
               
        </div>
      {source ?  <div className='relative w-full h-[50vh] max-h-[600px] ' >
                     <Image src={source}  fill className='cover' ></Image>
        </div> : ""}

    </div>
  )
}

const HeadersCollection2 =  ({heading,  sub_heading,second_heading, source, bg_image})=>{
    const backgroundStyle = {
        backgroundImage:
          `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${bg_image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
      
    return (
        <div className="w-full" style={backgroundStyle}>
        <div className="layout flex flex-col md:flex-row md:p-20 max-h-[500px]">
          <div className="w-full md:w-1/2">
            <h1 className="text-white">
             {heading}
            </h1>
            <h1 className="text-white">
             {second_heading}
            </h1>
            <br/>
            <h6 className="text-white">
          {sub_heading}
            </h6>
          </div>
          <div className="relative flex w-full md:w-2/3">
            <Image
              alt="Gallery Banner"
              src={source}
              className="w-full object-contain"
              fill
            />
          </div>
        </div>
      </div>
    )
}


const HeadersCollection3 = ({heading,  sub_heading,second_heading, source}) => {
  return (
    <div className=''>
        <div>
                <h2>{heading}</h2>
                <h1>{second_heading}</h1> 
                <h6>{sub_heading}</h6>
               
        </div>
      {source ?  <div className='relative w-full h-[50vh] max-h-[600px] ' >
                     <Image src={source}  fill className='cover' ></Image>
        </div> : ""}

    </div>
  )
}


const HeadersCollection4 =  ({heading,  sub_heading,second_heading, source, bg_image})=>{
  const backgroundStyle = {
      backgroundImage:
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${bg_image}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
    
  return (
      <div className=" w-full bg-primary_color" >
      <div className="layout flex flex-col  md:p-10 max-h-[500px]">
        <div className="w-full ">
          <h1 className="text-white">
           {heading}
          </h1>
          <h1 className="text-white">
           {second_heading}
          </h1>
          <p className="text-white md:w-1/2" >
        {sub_heading}
          </p>
          <br/>
          <div className="relative border rounded-lg overflow-hidden flex w-full h-[25em]">
          <Image
            alt="Gallery Banner"
            src={source}
            className="w-full object-cover"
            fill
          />
        </div>
        </div>
      
      </div>
    </div>
  )
}


const HeadersCollection5 =  ({heading,  sub_heading,second_heading, source, bg_image})=>{
  
    
  return (
      <div className=" relative w-full p-[2em]  bg-primary_color" >
        <h1 className='hidden md:block  md:text-[9vw] leading-[1em] text-[rgba(256,256,256,0.3)] 2xl:text-[9em]'> {heading} </h1>
        <h1 className='hidden md:block md:text-[9vw] leading-[1em] text-[rgba(256,256,256,0.3)] 2xl:text-[9em]'> {second_heading} </h1>
    <div className="md:absolute  md:top-0 md:right-[-2px]  ">
          <div  className='flex gap-4 '>
          <h1 className="text-white">
           {heading}
          </h1>
          <h1 className="text-white">
           {second_heading}
          </h1>
          </div>
          <h6 className="text-white w-[80%]" >
        {sub_heading}
          </h6>
       
        </div>
        <div className="relative md:hidden mt-[1em] border rounded-lg overflow-hidden flex w-full h-[15em]">
          <Image
            alt="Gallery Banner"
            src={source}
            className="w-full object-cover"
            fill
          />
        </div>

    </div>
  )
}


const HeadersCollection6 = ({heading,  second_heading, sub_heading, text, source}) => {
  return (
    <div className='normal_div'>
        <div>
                <h1 className='font-semibold'>{heading}</h1>
                <h1  className='font-semibold'>{second_heading}</h1> 
                <h3>{sub_heading}</h3>
                <p className='md:mt-[1em] px-6 border-l-8 border-l-primary_color'>{text}</p>

               
        </div>
      {source ?  <div className='relative w-full h-[50vh] max-h-[600px] ' >
                     <Image src={source}  fill className='cover' ></Image>
        </div> : ""}

    </div>
  )
}


export  {HeadersCollection1, HeadersCollection2, HeadersCollection3, HeadersCollection4, HeadersCollection5,HeadersCollection6}
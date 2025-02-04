"use client"
import React from 'react'
import Layout1 from '@/app/layout/Layout1'
import { events } from '@/app/Data/Data'
import Image from 'next/image'
import {IconComponent, IconComponent1} from '@/app/components/IconComponent'

const page = () => {

  function separate_date_time(date_time){
    const date = date_time.split('T')[0]
    const time = date_time.split('T')[1].split('Z')[0]
    return {date, time}
  }
  const event = events.data.eventsConnection.edges[1].node

  return (
    <>
 <Layout1>
    <div className='flex flex-col lg:flex-row gap-[4em] py-8'>
    <img src={event.eventCoverImage.url} fill className='object-cover w-full  lg:sticky top-[5px] h-[30em] max-h-[700px]'></img>
            {/* <div className='w-full  relative h-[30em] max-h-[700px]'>
                <Image src={event.eventCoverImage.url} fill className='object-cover'></Image>
            </div> */}

            <div className='w-full lg:1/2 flex flex-col gap-[2em]'>
            <div>
                  <h2>{event.eventName}</h2>
                  <p className='italic'>{event.eventType}</p>
            </div>

            <h6>{event.eventIntro}</h6>
            {/* Date and Time  */}
              <div>
                <h5 className='font-bold'>Event Date and Time</h5>
                <br/>
              <div className='flex flex-wrap   items-center gap-[2em] '>
         
         {event.eventDatesAndTime.map((each_date, index)=>{
         return  <div  key={index} className='mt-4 md:mt-0 lg:w-1/2 ' > 
        
         
      <IconComponent1 img_src={`/Regular Icons/date_icon.svg`} info={separate_date_time(each_date).date}> </IconComponent1>  
   
          <div className='border-2 drop_shadow  mt-4 border-primary_color md:w-[20em] rounded-md p-6 flex flex-col gap-4'>
          <IconComponent img_src={`/Regular Icons/time_icon.svg`} info={separate_date_time(each_date).time}></IconComponent>
           <IconComponent img_src={`/Regular Icons/location_icon.svg`} info={event?.eventLocation?.[index] !== undefined ? event.eventLocation[index] : event.eventLocation?.[0]}> </IconComponent>
           <IconComponent img_src={`/Regular Icons/ticket_icon.svg`} info={ event.ticketPrice[index]}> </IconComponent>
     
       
          </div>
         </div>
         
       })}</div>
     
              </div>
            
      

          {/* Event Details */}
        <div>
        <h5 className=''>Event Details about  </h5>
        <h3 className=''>{event.eventName} </h3>
        <br/>
          <div
                        className=""
                        dangerouslySetInnerHTML={{
                          __html: event.eventDetails.html,
                        }}/>
            </div>
        </div>

    </div>


         <div  >
                <h4>Gallery  Media Of Our Project</h4>
              <br/>
                <div className={`flex items-center justify-center  md:justify-start gap-[1em] 2xl:gap-[3em] w-full  flex-wrap  `}>
                {event?.eventGallery && event.eventGallery.length > 0 ? (
      event.eventGallery.map((each_image, index) => (
        <div
          key={index}
          className={`w-[60vw] md:w-[20vw] shadow-2xl max-w-[300px] ${
            index % 2 === 0 ? '' : 'mt-0'
          }`}
          onClick={() => {
            set_show_modal(true);
            set_url(each_image.url);
          }}
        >
          <div className="relative w-full h-[70vw] md:h-[25vw] max-h-[300px]">
            <Image
              src={each_image?.url || ""}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      ))
    ) : (
      <p className="text-center w-full">No project images available.</p>
    )}
    
            </div>
              
    
          </div>

 
 </Layout1>
    </>

  )
}

export default page
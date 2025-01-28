
"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { events } from '../Data/Data'
import {EventCard,EventCard2} from './Event/EventCard'
import { Button1 } from './Buttons'

const SampleEvents = () => {

    const latest_event  = events.data.eventsConnection.edges[0].node
  return (
    <div className='h-auto'  >
        <h1>Events</h1>
        <div className='columns-[300px] overflow-visible '>
        {events.data.eventsConnection.edges.slice(1,5).map((each_event, index)=>{
          return <EventCard event_data={each_event.node}></EventCard>
        })}
        </div>
     
        

    </div>
  )
}




const SampleEvents2 = () => {
  return (
 <div className='flex flex-col gap-[2em] items-center'>
  <h1 className='self-start'>Let'sConnect At Our Latest Events and Contens  </h1>

     <div className='w-full px-4 flex flex-wrap gap-1 items-center justify-between'>
      {events.data.eventsConnection.edges.map((each_event, index) => {
        // Determine the size based on whether the index is even or odd
        const size = index % 2 === 0 ? '25em' : '20em';
        
        return (
          <div
            key={index}
            className='max-w-[500px] mx-auto flex border bg-primary_color relative
            '
            style={{
             
              backgroundImage: `url(${each_event.node.eventCoverImage.url}),linear-gradient(to top, black, transparent)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: size,
              height: size
            }}
          >
            <div className=' self-end z-[10] p-6'>
              <h5 className='text-white'>{each_event.node.eventName}</h5>
              <p className='text-white'>{each_event.node.eventLocation}</p>
              
              <p className="text-white font-thin ">
  <strong></strong> {new Date(each_event?.node?.eventDatesAndTime[0]).toLocaleDateString()} 
  {each_event.node?.eventDatesAndTime?.length > 1 && ` - ${new Date(each_event.node.eventDatesAndTime[1]).toLocaleDateString()}`}
</p>

            </div>

         
            <div className="w-full h-[40%] bg-gradient-to-t from-primary_color to-transparent duration-200 hover:bg-gradient-to-t hover:from-primary_color hover:to-transparent absolute bottom-0 transition-all"></div>

          </div>

       
        );
      })}
    </div>

    <Button1 link_address={"/events"} title="Load More Events"></Button1>
    
 </div>
  );
};

const SampleEvents3 = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scroll position
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col gap-[2em] items-center">
      <h1 className="self-start">Our Latest Events</h1>

      <div className="w-full flex flex-wrap gap-1 items-center justify-between">
        {events.data.eventsConnection.edges.map((each_event, index) => {
          // Determine the size based on whether the index is even or odd
          const size = index % 2 === 0 ? '25em' : '20em';

          return (
            <motion.div
              className="mx-auto event_parent hover:scale-[1.1] transition-all duration-[1000ms] hover:border-b-4 hover:border-b-primary_color"
              key={index}
              // Animate the vertical position based on scrollY
              initial={{ y:scrollY * 0.8, opacity:0 }}
              animate={{ y:0  ,opacity :1 }} // Adjust multiplier for movement speed
              transition={{ delay: (index / 10) * 0.4 }}
            >
              <div
                className="max-w-[500px] flex border bg-primary_color relative"
                style={{
                  backgroundImage: `url(${each_event.node.eventCoverImage.url}), linear-gradient(to top, black, transparent)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: size,
                  height: size,
                }}
              >
             
              </div>
              <div className="self-end z-[10] p-5">
                  <h5 className="">{each_event.node.eventName}</h5>
                  <p className="">{each_event.node.eventLocation}</p>
                  <p className="font-light ">
                    <strong></strong> {new Date(each_event?.node?.eventDatesAndTime[0]).toLocaleDateString()}
                    {each_event.node?.eventDatesAndTime?.length > 1 &&
                      ` - ${new Date(each_event.node.eventDatesAndTime[1]).toLocaleDateString()}`}
                  </p>
                </div>
            </motion.div>
          );
        })}
      </div>

      <Button1 link_address="/events" title="Load More Events" />
    </div>
  );
};
export   {SampleEvents,SampleEvents2 ,SampleEvents3};

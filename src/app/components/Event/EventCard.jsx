"use client"
import React from 'react'
import { Button2 } from '../Buttons';

const EventCard = ({ event_data }) => {
  // Destructure the required fields from the event data
  const {
    eventCoverImage: { url: coverImageUrl },
    eventName,
    eventIntro,
    eventLocation,
    eventDatesAndTime,
  } = event_data;

  return (
    <div className="border-2 mx-auto bg-[#F7F7F7]  border-primary_color p-4 m-2 rounded-lg max-w-sm shadow-lg">
      {/* Cover Image */}
      <img
        src={coverImageUrl}
        alt={eventName}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      
   <div className=''>
       {/* Event Name */}
       <h4 className=" mb-2">{eventName}</h4>
      
      {/* Event Intro (Excerpt) */}
      <p className=" mb-2">{eventIntro}</p>
      
      {/* Event Location */}
      <p className="font-medium mb-2">
        <strong>Location:</strong> <br/> {eventLocation}
      </p>
      
      {/* Event Date */}
      <p>Date:</p>
      <p className="">
        <strong></strong> {new Date(eventDatesAndTime[0]).toLocaleDateString()} 
        {eventDatesAndTime.length > 1 && ` - ${new Date(eventDatesAndTime[1]).toLocaleDateString()}`}
      </p>
   </div> 
   <br/>
   <div className='flex items-center justify-between gap-4'  >
    <button className='w-full md:w-1/2 bg-none text-white bg-primary_color'>Register</button>
    <button className=' w-full md:w-1/2 bg-none   border-primary_color'>Learn More</button>
   </div>
    </div>
  );
};

export default EventCard;

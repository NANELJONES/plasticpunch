"use client"
import React from 'react'
import {EventCard} from './EventCard'



const EventList = ({events_list}) => {
  return (
    <div className='grid_container'>
       
        {events_list.map((each_event,index)=>(  <EventCard key={index} event_data={each_event.node}></EventCard>)
            )}
        



     




    </div>

    
  )
}

export default EventList
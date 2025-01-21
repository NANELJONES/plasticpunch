"use client"
import React from 'react'
import { HeadersCollection5,HeadersCollection2, HeadersCollection1  } from '../components/AllHeaders/HeadersCollection'
import Layout1 from '../layout/Layout1'
import EventList from '../components/Event/EventList'
import { events } from '../Data/Data'
import DerivativeEvents from '../components/Event/DerivativeEvents'

const page = () => {
  return (
 <>

     <Layout1>
      
<HeadersCollection5 heading="Our" second_heading="Events" sub_heading="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects." source="/Gal.png"  bg_image="/Gal.png"></HeadersCollection5>

      <h4 className='mt-[2em] md:mt-[3em]'>Latest Events</h4>
      
      <div className='flex mt-[2em] md:mt-[3em] flex-col md:flex-row'>

<div className='w-full  '>
         <EventList events_list={events?.data?.eventsConnection?.edges} ></EventList>
</div>





</div>


</Layout1>

 
 
 </>
     
  )
}

export default page
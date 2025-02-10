"use client"
import React from 'react'
import Layout1 from '../layout/Layout1'
import { HeadersCollection6 } from '../components/AllHeaders/HeadersCollection'
import AvailablePositions from '../components/AvailablePositions'
import VolunteerPosition from '../components/VolunteerPosition'

const page = () => {
  return (
    <div>
      <Layout1>

      <HeadersCollection6 heading="Join" second_heading= "Our Team" sub_heading="Be Part of Us" text="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects." source="/Gallery Media Image.svg"></HeadersCollection6>
   
   <AvailablePositions></AvailablePositions>
   <VolunteerPosition></VolunteerPosition>
      </Layout1>
   

    </div>
  )
}

export default page
"use client"
import React from 'react'
import { job_positions } from '../Data/Data'
import Link from 'next/link'
import AnimateUp from './AnimateUp'
import { getAvailablePositions } from '../api/queries'
import { useEffect, useState } from 'react'

const AvailablePositions = () => {
 const [availbalePositions,  setAvailablePositions] =  useState([])

useEffect(()=>{

  if(availbalePositions){
    return;
  }

 
  const fetchAvailableJobs = async()=>{
    try{
      const data  = await getAvailablePositions()
      if (data){
        setAvailablePositions(data)
      }
   

    }catch(error){
      setAvailablePositions([])
      console.log("there was an error")

    }
    

  }
 
  fetchAvailableJobs()
 

}, [])

  return (
    <div  className='flex flex-col gap-6'>
     
        <h3>{availbalePositions.length == 0 ? "No Positions Available" :"AvailablePositions"}</h3>
        {availbalePositions.length == 0 ? "No job Positions have been posted. But we would post some if available here" :   availbalePositions.map((each_job_position, index)=>{
              return <AnimateUp key={index}><div className='flex md:items-center flex-col md:flex-row items-start gap-2 justify-between border-b-2 border-b-primary_color py-2' key={index}> 
              <h5  className='md:w-[20%] font-medium'>{each_job_position?.node?.jobName}</h5>
              <p className='md:w-1/2'>{each_job_position?.node?.jobExcerpt}</p>
              <p className='first_letter_capitalize font-bold'>{each_job_position.node?.jobStatus}</p>
             <Link href={`/careers/${each_job_position?.node?.slug}`}> <button className='md:hover:scale-[1.1] md:hover:bg-primary_color md:hover:text-white duration-700 border-primary_color rounded-none bg-none text-primary_color px-[3em]'>Apply</button></Link>
              
               </div>
      
      
               </AnimateUp> 
      
          })
          
        }
    
    
    
    </div>
  )
}

export default AvailablePositions
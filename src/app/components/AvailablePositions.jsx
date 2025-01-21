"use client"
import React from 'react'
import { job_positions } from '../Data/Data'
import Link from 'next/link'
import AnimateUp from './AnimateUp'

const AvailablePositions = () => {
  return (
    <div  className='flex flex-col gap-6'>
        <h3>AvailablePositions</h3>
    {job_positions.data.jobPostsConnection.edges.map((each_job_position, index)=>{
        return <AnimateUp><div className='flex md:items-center flex-col md:flex-row items-start gap-2 justify-between border-b-2 border-b-primary_color py-2' key={index}> 
        <h5  className='md:w-[20%] font-medium'>{each_job_position.node.jobName}</h5>
        <p className='md:w-1/2'>{each_job_position.node.jobExcerpt}</p>
        <p className='first_letter_capitalize font-bold'>{each_job_position.node.jobStatus}</p>
       <Link href={`/careers/${each_job_position.slug}`}> <button className='md:hover:scale-[1.1] md:hover:bg-primary_color md:hover:text-white duration-700 border-primary_color rounded-none bg-none text-primary_color px-[3em]'>Apply</button></Link>
        
         </div>


         </AnimateUp> 

    })}
    
    
    
    </div>
  )
}

export default AvailablePositions
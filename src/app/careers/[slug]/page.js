"use client"
import React from 'react'
import { job_positions } from '@/app/Data/Data'
import Layout1 from '@/app/layout/Layout1'

const page = () => {
  const job_info = job_positions.data.jobPostsConnection.edges[0].node
  return (

     <Layout1>
        <div className='w-full bg-primary_color p-4 h-[40vh] max-h-[500px] flex  items-center flex-col justify-center'>
                    <div>
                      <h1 className='text-white text-center'>{job_info.jobName}</h1>
                      <p className='font-bold text-white text-center'>{job_info.jobStatus}</p>
                      </div>
        
        </div>



        <div className='flex  flex-col md:flex-row justify-around  gap-[4em] items-center'>
          <div className='w-full md:w-[40%] flex flex-col gap-[2em]'>  
          {/* <div>
          <h1>{job_info.jobName}</h1>
          <p className='font-bold'>{job_info.jobStatus}</p>
          </div> */}
          <br/>
      
           <div>
           <p className='font-bold'>Excerpt</p>
           <h5>{job_info.jobExcerpt}</h5>
           </div>


           <div>
           <p  className='font-bold'>Deadline</p>
           <h5>{job_info.deadline}</h5>
           </div>


           <div className='w-full'>
           <p className='font-bold'>Details</p>
           <pre className='whitespace-pre-wrap text-[0.9em] break-words font-[Poppins]'>{job_info.jobDetails}</pre>
           </div>


          </div>

          <div className='w-full md:w-1/2  '>
              <form  className='lg:w-full md:mt-[5em] flex flex-col gap-[1em] '>
                  
                  <h1>Join <br/> Our Team</h1>
                  
                    {/* Name */}
                    <div className='flex w-full careers_input  flex-col md:md:gap-[1em]'>
                        <label className='text-primary_color'>Name</label>
                        <input className='w-full  p-2' type='name'/> 
                    </div>

                    {/* Name */}
                    <div className='flex w-full careers_input   flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Email</label>
                        <input type="email" className='    p-2' /> 
                    </div>

                    {/* Name */}
                    <div className='flex  w-full careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Phone Number</label>
                        <input className=' p-2' type='name'/> 
                    </div>

                    {/* Name */}
                    <div className='flex w-full careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Country</label>
                        <input className='' type='name'/> 
                    </div>

                    {/* Name */}
                    <div className='flex w-full careers_input   flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Location</label>
                        <input className=' p-2' type='name'/> 
                    </div>

                    {/* Name */}
                    <div className='flex w-full  careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Your CV</label>
                        <input type="file" className=' p-2' >
                           
                            </input> 
                    </div>
                    <br/>
                    <button className=' mt-[1em] mx-auto rounded-none text-primary_color  bg-none py-2 px-8 border-primary_color'>Submit</button>
                </form>
          </div>

        </div>

        

     </Layout1>
      

  )
}

export default page
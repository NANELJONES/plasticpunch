"use client"
import React from 'react'
import Image from 'next/image'
const VolunteerPosition = () => {
  return (
    <div className='mt-[5em]'>
        <h1>Volunteering <br/> Positions</h1>
         
        <div className='flex flex-col md:flex-row'>
            <div className='relative md:w-1/2  h-[70vw] md:h-[50vh]'>
              <Image fill className='cover' src={"/Volunteer Image.svg"} />
            </div>
            <form  className='md:w-1/2 flex gap-[1em] align-center  justify-between flex-wrap'>
                {/* Name */}
                <div className='flex input_div flex-col md:md:gap-[1em]'>
                    <label className='text-primary_color'>Name</label>
                    <input className=' text-white bg-primary_color  p-2' type='name'/> 
                </div>

                {/* Name */}
                <div className='flex input_div   flex-col md:gap-[1em]'>
                    <label className='text-primary_color'>Email</label>
                    <input type="email" className='  text-white bg-primary_color  p-2' /> 
                </div>

                {/* Name */}
                <div className='flex input_div  flex-col md:gap-[1em]'>
                    <label className='text-primary_color'>Phone Number</label>
                    <input className='bg-primary_color  text-white  p-2' type='name'/> 
                </div>

                {/* Name */}
                <div className='flex input_div  flex-col md:gap-[1em]'>
                    <label className='text-primary_color'>Country</label>
                    <input className='bg-primary_color  text-white p-2' type='name'/> 
                </div>

                {/* Name */}
                <div className='flex input_div  flex-col md:gap-[1em]'>
                    <label className='text-primary_color'>Location</label>
                    <input className='bg-primary_color  text-white p-2' type='name'/> 
                </div>

                {/* Name */}
                <div className='flex input_div  flex-col md:gap-[1em]'>
                    <label className='text-primary_color'>Volunteering Type</label>
                    <select className='bg-primary_color  text-white p-2' type='name'>
                        <option value="Animation">Animation</option>
                        <option Damn="Animation">Damn</option>
                        </select> 
                </div>
                <br/>
                <button className=' mt-[1em] mx-auto rounded-none text-primary_color  bg-none p-0  py-2 px-8 border-primary_color'>Submit</button>
            </form>
        </div>




    </div>
  )
}




export default VolunteerPosition
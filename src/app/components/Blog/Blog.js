"use client"
import React from 'react'
import { blog_info } from '@/app/Data/Data'
import Link from 'next/link'
import moment from 'moment'
import { motion } from 'framer-motion'
import Categories from './Categories'
import {BlogDerivative,HorizontalBlogDerivative} from './BlogDerivative'

const Blog = () => {

  const dateReturner =  (timestap)=>{
    const real_date = moment(timestap).format("YYYY-MM-DD");
    return  real_date
  }


  return (
    <>
    <h3 className='mt-10'>Our Latest Blogs</h3>
    <Categories></Categories>
  
    <div className='flex flex-col md:flex-row gap-4 xl:gap-[5em] '>
            <div className='md:w-[70%] flex flex-col gap-4 '>
                {blog_info.data.postsConnection.edges.map((each_blog,index)=>{
                   
                   return  <motion.div
                   initial ={{opacity:0, y:-20}}
whileInView={{opacity:1, y:0}}
transition={{duration:1}}


                    key={index}
                    className='flex border bg-primary_color rounded-[1em] p-[1.5em] items-center shadow-md  flex-col md:flex-row gap-2 md:gap-6  border-primary_color p-2'
                    > 
                    <img  src={each_blog?.node?.coverImage?.url} className='w-full  rounded-xl  md:w-[10em] md:h-[10em]'></img>
                    <div className='flex flex-col gap-2  md:gap-[1em]'>

                    <h4 className='text-white '> {each_blog?.node?.title}</h4>
                    <p className='text-white'> {each_blog?.node?.excerpt}</p>
                    <Link href={`/blog/${each_blog?.node?.slug}`}><button className='bg-none  p-2 px-4 text-white border-0 rounded-none border-b-2 border-white'>{'Read More >>>'}</button></Link>
                    <div className='flex items-center gap-4 flex-wrap'>
                          <img className='w-10 rounded-full '  src={each_blog?.node?.author?.picture?.url}></img>
                          <p className='text-white'>{each_blog?.node?.author?.name}</p>
                          <p c className='px-2 text-white border-l-8 border-l-primary_color'> {"Posted On: "} {dateReturner(each_blog?.node?.createdAt)} </p>
                    </div>


                    </div>
                   
                    
                    </motion.div>
                   
                    
                })}
                

            </div>
            <div className='w-full md:w-[30%]'>
                
             
                <BlogDerivative title="Similar Posts" blog_data={blog_info.data.postsConnection.edges}></BlogDerivative>

                
            </div>
    </div>
    
    <HorizontalBlogDerivative title="Featured Posts" blog_data={blog_info.data.postsConnection.edges}/>
    </>
  )
}


const GridBlogLayout = ()=>{

  return <div>
    <div className='flex flex-col-reverse gap-[3em]  lg:flex-row  '>
            <div className=' lg:w-[70%]  flex items-center md:justify-between md:items-start flex-wrap  '>
                {blog_info.data.postsConnection.edges.map((each_blog,index)=>{
                    return <div
                    key={index}
                    className='flex   flex-col w-full md:w-1/2   border-primary_color p-2'
                    > 
                    <img  src={each_blog?.node?.coverImage?.url} className='w-full  rounded-t-xl  w-full'></img>
                    <div className='flex flex-col gap-2  p-4  md:gap-[1em]'>

                    <h5> {each_blog?.node?.title}</h5>
                    <p> {each_blog?.node?.excerpt}</p>
                    <Link href={`/blog/${each_blog?.node?.slug}`}><button className='bg-none  p-2 px-4 text-primary_color border-0 rounded-none border-b-2 border-primary_color'>{'Read More >>>'}</button></Link>
                    <div className='flex fd  items-center gap-4'>
                          <img className='w-10 rounded-full '  src={each_blog?.node?.author?.picture?.url}></img>
                          <p>{each_blog?.node?.author?.name}</p>

                    </div>
                                       
                    <p className='border-l-primary_color'>Posted On: {each_blog?.node?.createdAt}</p>


                    </div>
                   
                    
                    </div>
                })}
                

            </div>
            <div className='w-full border-2 p-4 border-primary_color rounded-lg  md:w-[30%]'>
                <h6> Categories</h6>
            </div>
    </div>

  </div>
}






export {Blog, GridBlogLayout} 
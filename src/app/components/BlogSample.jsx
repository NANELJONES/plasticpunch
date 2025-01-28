import React from 'react'
import { blog_info } from '../Data/Data'
import Image from 'next/image'
import AnimateUp from './AnimateUp'
import { Button1 } from './Buttons'
const BlogSample = () => {
    const first_blog_data = blog_info.data.postsConnection.edges[0].node 

  return (
    <div className=' w-full flex flex-col gap-[2em]'>
        <h4>Blogs and Articles</h4>
        <div className='  flex flex-col gap-[1em] md:flex-row justify-between '>
      
                    <div className='md:w-[45%]    flex flex-col gap-[1em] '>
                        <img src={first_blog_data.coverImage.url} className='w-full h-full max-h-[400px]'></img>
                        <h5>{first_blog_data.title}</h5>
                        <p>{first_blog_data.excerpt}</p>
                        <p className='italic'>by: {first_blog_data.author.name} , {first_blog_data.createdAt} </p>

                    </div>

      
        
                    <div className='md:w-[45%]   flex flex-col items-start gap-4'>
                                
                    {blog_info.data.postsConnection.edges.slice(1,4).map((each_blog,index)=>{
                            return  <AnimateUp><div className='relative px-2 ' key={index}>
                            <h6>{each_blog.node.title} </h6> 
                            <p className='italic'>by:  {each_blog.node.author.name}</p>

                            <div className='w-[20px] h-[20px] bg-primary_color top-2 left-[-2em] absolute'></div>
                
                    
                    
                    </div></AnimateUp>
                        })}
                        

                     <AnimateUp>   <div className=''>  <Button1 link_address="/blog" title="Explore More"></Button1></div> </AnimateUp>
                      
                    </div>
                    

        </div>
        

    
    </div>
  )
}

export default BlogSample
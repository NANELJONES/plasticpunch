import React from 'react'
import { blog_info } from '@/app/Data/Data'
import moment from 'moment'
import Image from 'next/image'
import Layout1 from '@/app/layout/Layout1'
import { BlogDerivative, HorizontalBlogDerivative } from '@/app/components/Blog/BlogDerivative'
import ShareSocials from '@/app/components/ShareSocials'
const page = () => {
    const dateReturner =  (timestap)=>{
        const real_date = moment(timestap).format("YYYY-MM-DD");
        return  real_date
      }
  return (
    <Layout1>
        
    

  <div className=' flex flex-col gap-10  md:flex-row-reverse md:mt-[3em]'>
                <div className='md:w-[70%] flex flex-col gap-4'>
                    <h2 className='md:w-[70%]'>{blog_info.data.postsConnection.edges[1].node.title}</h2>
                    <div className='flex items-center gap-4 flex-wrap '>
                          <img className='w-10 rounded-full '  src={blog_info.data.postsConnection.edges[1].node.author.picture.url}></img>
                          <p className=''>{blog_info.data.postsConnection.edges[1].node.author.name}</p>
                          <p className='px-2 border-l-8 border-l-primary_color'> {"Posted On: "} {dateReturner(blog_info.data.postsConnection.edges[1].node.createdAt)} </p>
                    </div>
<div className='flex gap-10'>
    
{blog_info.data.postsConnection.edges[1].node.category.map((each_category, index)=>{
                        return <p className='text-white bg-primary_color p-4 rounded-lg' key={index}>{each_category.category}</p>
                    })}
</div>
<ShareSocials shareUrl="/" shareTitle="This is a blog from plastic puch" shareDescription="This is some description"></ShareSocials>
                    <div className='relative w-full  max-h-[350px] h-[25em]'>
                    <Image 
                    src={blog_info.data.postsConnection.edges[1].node.coverImage.url}
                    fill
                    className='object-cover'
                    ></Image>   

                    </div>
                   
                <div
                className=''
                    dangerouslySetInnerHTML={{__html: blog_info.data.postsConnection.edges[1].node.content.html}}
                    />
                </div>

            <div className='md:w-[30%]'>
                 <BlogDerivative title="Similar Posts" blog_data={blog_info.data.postsConnection.edges}></BlogDerivative>
            </div>
          
  </div>
 <div className='mt-[5em]'>
 <HorizontalBlogDerivative title="Featured Posts" blog_data={blog_info.data.postsConnection.edges}></HorizontalBlogDerivative>

 </div>
    </Layout1>
 
  )
}

export default page
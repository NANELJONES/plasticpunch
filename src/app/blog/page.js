"use client"
import React from 'react'
import { blog_info } from '../Data/Data'
import Layout1 from '../layout/Layout1'
import {Blog} from '../components/Blog/Blog'

import { HeadersCollection2 } from '../components/AllHeaders/HeadersCollection'


const page = () => {
  console.log(blog_info.data.postsConnection.edges)
  return (
    <>
    
    <Layout1>
       <HeadersCollection2 heading="Our" second_heading="Blogs" sub_heading="Get in touch with our latest blogs, from all around the world regarding our various inputs and projects." source="/Us/7.jpg"  bg_image="/Us/6.jpg"></HeadersCollection2>
      
      <Blog></Blog>

    </Layout1>
    </>
  )
}

export default page
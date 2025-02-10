"use client"
import React from 'react'
import Link from 'next/link'

const SocialIcons = ({icon_path,text, url}) => {
  return (
<Link href={url}>

<span className="flex flex-col   items-center gap-2 md:gap-2">
       <img src={icon_path} className="w-[30px]"></img>

       <span className="flex flex-col  items-center md:items-start">
         <h6 className="text-white ">{text}</h6>
       </span>
     </span>

</Link>
    
  )
}

export default SocialIcons

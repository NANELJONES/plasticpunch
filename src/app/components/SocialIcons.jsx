"use client"
import React from 'react'
import Link from 'next/link'

const SocialIcons = ({icon_path,text, url}) => {
  return (
<Link href={url}>

<span className="flex    items-center gap-2 md:gap-2">
       <img src={icon_path} className="w-[30px]"></img>

       <span className="flex flex-col  items-center md:items-start">
         <p className="text-white ">{text}</p>
       </span>
     </span>

</Link>
    
  )
}

export default SocialIcons

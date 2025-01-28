import React from 'react'
import Link from 'next/link'

const Button1 = ({title,link_address}) => {
  return (
    <div>

<Link href={link_address}>  <button className=" bg-none border-2 border-primary_color text-primary_color px-10 ">{title}</button>    </Link>



    </div>
  )
}


const Button2 = ({title,link_address}) => {
    return (
      <div>
          <Link href={link_address}>  <button className="text-regular_text -2  -regular_text  bg-none ">{title}</button>    </Link>
      </div>
   
    )
  }

export  {Button1, Button2}
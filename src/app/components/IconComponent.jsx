"use client"
import React from 'react'

const IconComponent = ({img_src, info}) => {
  return (
    <div className='flex gap-4 items-center'>
        <img src={img_src} alt="icon" className="w-4 h-4" />
        <p>{info}</p>     
    </div>
  )
}

const IconComponent1 = ({img_src, info}) => {
    return (
      <div className='flex gap-4 items-center'>
          <img src={img_src} alt="icon" className="w-8 h-8" />
          <h5 className='w-full'>{info}</h5>     
      </div>
    )
  }
  



export  {IconComponent, IconComponent1}

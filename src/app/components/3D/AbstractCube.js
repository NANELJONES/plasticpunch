
import React from 'react'
import Image from 'next/image'
import Spline from '@splinetool/react-spline/next';

const AbstractCube = () => {
  return (
    <div className='w-full h-[100vh]     sticky top-20'>

<main className=' h-full'>
      <Spline
        scene="https://prod.spline.design/TCmFCdGyXUuRS90I/scene.splinecode" 
      />
    </main>

    
      {/* <div className='w-full relative  h-[70vh]'> 
       
        <Image
        alt='this is herer'
        src="/conpro_3D.png"
        className='w-full object-contain'   
        fill={true}   >
       

        </Image>
      </div> */}

     

    </div>
  )
}

export default AbstractCube
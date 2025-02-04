import React from 'react'


const Layout1 = ( {children}) => {
  return (
    <div  className='md:relative lg:px-0 px-10 py-8 sm:py-10 md:py-0 w-full  md:w-[90%] mx-auto max-w-[1500px]'>
        {children}
       
    </div>
  )
}

export default Layout1
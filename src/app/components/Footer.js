import React from 'react'
import Layout1 from '../layout/Layout1'
import Link from 'next/link'

const Footer = () => {
  return (
    <div  className='w-full flex flex-col items-center justify-between  mt-2 md:mt-[20px]   md:max-h-[1000px] md:py-20 bg-primary_color'>

    <Layout1>
    <h1 className='text-white text-center w-full   md:text-left'>{`Let's`} <br/>Connect</h1>
      <br/>
      <div className='normal_div gap-10 '>
              <div className='w-full md:w-[50%]  '>
                        <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5670845350414!2d-0.09139822525436386!3d5.630735894350373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf853924552137%3A0xd763f04a6688616d!2sCONPRO%20LIMITED!5e0!3m2!1sen!2sgh!4v1729691436282!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: 0 ,borderRadius:20,maxHeight:350}} // Use an object for styles
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" ></iframe>
              </div>

              <div className='w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block'>
                <h2 className='text-white text-center md:text-left'>{`Our`} <br/>Contact</h2>
                

                  {/*Location  */}
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5 '>  <img src='/location.svg' className='w-[30px]'></img> <p className='text-white text-center md:text-left'>BAC 52, 3rd Street, Baatsonaa, Tema.</p> </span>
                <br/>
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5 '>  <img src='/location.svg' className='w-[30px]'></img> <p className='text-white text-center md:text-left'>   Plot 86 block E, Daban, Kumasi</p> </span>
   
                <br/>

                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5'>

                       <img src='/phone.svg' className='w-[30px]'></img>

                  <span className='flex flex-col  items-center md:items-start'>

                  <p className='text-white '>(233) 20 211 4432</p> 
                 <p className='text-white'>024 432 8880</p> 
                 {/* <p className='text-white'>024 858 5116</p>  */}

                  </span>
                
                
                </span>
                <br/> 
                <span  className='flex flex-col md:flex-row  items-center gap-2 md:gap-5'>  <img src='/email.svg' className='w-[30px]'></img> <p className='text-white'>info@plasticpunch.com</p> </span>
              
              </div>

              <div className=' w-full md:w-[20%]    h-full flex  flex-col items-center justify-center  '>
              <img
          src="/Logo.jpg"
          alt="Company Logo"
          
          className="w-full hidden max-w-[200px] md:block  md:w-[12em]"
        />

        <h5 className='text-white text-center'>Plastic Punch</h5>
        <h6 className='text-center text-white'>Less Plastics, Better Lives</h6>



              </div>


      </div>
      <br/>
      <div className='normal_div '>
  <Link href={"#"}> 
    <p className='text-white md:border-b-2 md:border-l-4 p-2'>Our Company</p>
  </Link>
  <Link href={"/services"}> 
    <p className='text-white md:border-b-2 md:border-l-4 p-2 w-full'>Our Services</p>
  </Link>
  <Link href={"/projects"}> 
    <p className='text-white md:border-b-2 md:border-l-4 p-2'>Projects</p>
  </Link>
  <Link href={"/aboutUs"}> 
    <p className='text-white md:border-b-2 md:border-l-4 p-2'>About Us</p>
  </Link>
  <Link href={"/contactUs"}> 
    <p className='text-white md:border-b-2 md:border-l-4 p-2'>Contact Us</p>
  </Link>
</div>


      <br/>

      <p className='text-white text-center'>© 2024 Plastic Punch All rights reserved</p>
      <br/>
    <Link href={"https://kr8tos.vercel.app/"}>  <p className='text-white text-center'>Developed by Kr8tos</p></Link>
   
   
    </Layout1>


    </div>
 
 
  )
}

export default Footer
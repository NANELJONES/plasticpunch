"use client"
import React from 'react'
import { job_positions } from '@/app/Data/Data'
import Layout1 from '@/app/layout/Layout1'
import { useEffect, useState } from 'react'
import { getSingleJobPost } from '@/app/api/queries'
import { usePathname } from "next/navigation";
import { handle_toast_notification } from '@/app/components/Toast'
import { useStateContext } from '@/app/Context/StateContext'

const page = () => {

    const {set_show_processing} =  useStateContext()
    const pathname  = usePathname()
    const slug  =  pathname.split("/").pop() 
    const [applicaint_info, setApplicant_Info] = useState({
        name:"",
        email:"",
        phoneNumber:"", 
        country:"",
        location:"",
        cv: {}
    })
    const [single_job_post, setJobPost] = useState({})


    useEffect(()=>{

   
        const fetchSingleJob = async()=>{
          try{
            const data  = await getSingleJobPost(slug)
            if (data){
                setJobPost(data)
            }
         
      
          }catch(error){
            setJobPost({})
            console.log("there was an error")
      
          }
          
      
        }
       
        fetchSingleJob()
       
      
      }, [])

      // Handle input changes
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setApplicant_Info((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(applicaint_info)
  };

  const onFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    console.log(file)
  
    if (!file) return; // No file selected, do nothing
  
    const maxSize = 10 * 1024 * 1024; // 10MB in bytes
    const allowedFormats = [
      "application/pdf", 
      "application/msword", 
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
      "application/vnd.oasis.opendocument.text"
    ]; // PDF, DOC, DOCX, ODT
  
    if (file.size > maxSize) {
      handle_toast_notification({message:"File size must be a maximum of 10MB", type:"error"});
      e.target.value = ""; // Reset file input
      return;
    }
  
    if (!allowedFormats.includes(file.type)) {
      handle_toast_notification({message:"Invalid file format. Only PDF, DOC, DOCX, and ODT are allowed.",type: "error"});
      e.target.value = ""; // Reset file input
      return;
    }
  
    // If the file is valid, set it to state
    setApplicant_Info((prevState) => ({
      ...prevState,
      cv: file, // Store the file object
    }));
  };
  
  

     const handlePostSubmission = async (e) => {
       e.preventDefault();
      
       setError(false);
       console.log(applicaint_info)
     
       const { name, email, phoneNumber, country, location, cv } = applicaint_info;
     
       // Validate required fields
       if (!name || !email || !phoneNumber || !country || !location || !cv) {
         setError(true);
         handle_toast_notification({message : "Please Fill All Fields", type: "error"})
         
         return;
       }
       
       
       
       // Submit the form data
    //    try {
    //      set_show_processing(true)
         
    //      const res = await submitVolunteerApplication(volunteerInfo);
     
        
    //      if (res.createVolunteer) {
    //        set_show_processing(false)
    //        handle_toast_notification({message : "Volunteering Successfully Sent ", type: "success"})
        
    //        set_volunteer_data({
    //          name: "",
    //          email: "",
    //          phoneNumber: "",
    //          country: "",
    //          location: "",
    //          cv: {}
    //        });
     
          
    //        setShowSuccessMessage(true);
    //        setTimeout(() => setShowSuccessMessage(false), 3000);
    //      }
    //    } catch (error) {
    //      console.error("Error submitting volunteer application:", error);
    //      set_show_processing(false)
    //      setError(true);
    //    }








     };

  return (

     <Layout1>
        <div className='w-full bg-primary_color p-4 h-[40vh] max-h-[500px] flex  items-center flex-col justify-center'>
                    <div>
                      <h1 className='text-white text-center'>{single_job_post.jobName}</h1>
                      <p className='font-bold text-white text-center'>{single_job_post.jobStatus}</p>
                      </div>
        
        </div>



        <div className='flex  flex-col md:flex-row justify-around  gap-[4em] items-center'>
          <div className='w-full md:w-[40%] flex flex-col gap-[2em]'>  
          {/* <div>
          <h1>{single_job_post.jobName}</h1>
          <p className='font-bold'>{single_job_post.jobStatus}</p>
          </div> */}
          <br/>
      
           <div>
           <p className='font-bold'>Excerpt</p>
           <h5>{single_job_post.jobExcerpt}</h5>
           </div>


           <div>
           <p  className='font-bold'>Deadline</p>
           <h5>{single_job_post.deadline}</h5>
           </div>


           <div className='w-full'>
           <p className='font-bold'>Details</p>
           <pre className='whitespace-pre-wrap text-[0.9em] break-words font-[Poppins]'>{single_job_post.jobDetails}</pre>
           </div>


          </div>

          <div className='w-full md:w-1/2  '>
              <form  className='lg:w-full md:mt-[5em] flex flex-col gap-[1em] '>
                  
                  <h1>Join <br/> Our Team</h1>
                  
                    {/* Name */}
                    <div className='flex w-full careers_input  flex-col md:md:gap-[1em]'>
                        <label className='text-primary_color'>Name</label>
                        <input name="name" 
                        
                        value={applicaint_info.name}  
                        onChange={onInputChange}
                        className='w-full  p-2' type='name'/> 
                    </div>

                    {/* email */}
                    <div className='flex w-full careers_input   flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Email</label>
                        <input type="email" 
                        
                        
                        value={applicaint_info.emauk}  onChange={onInputChange} name="email" className='    p-2' /> 
                    </div>

                    {/* pHONE */}
                    <div className='flex  w-full careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Phone Number</label>
                        <input
                         name="phoneNumber" 
                         className='  p-2' 
                         type='name'
                                                
                        value={applicaint_info.phoneNumber}  
                        onChange={onInputChange} 
                         
                         
                         /> 

                    </div>

                    {/* CIOUNTRY */}
                    <div className='flex w-full careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Country</label>
                        <input  
                        
                        value={applicaint_info.country}  
                        onChange={onInputChange}
                        
                        name="country" className='p-2'  type='name'/> 
                    </div>

                    {/* LOCATION */}
                    <div className='flex w-full careers_input   flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Location</label>
                        <input  
                                                
                        value={applicaint_info.location}  
                        onChange={onInputChange}
                        
                        name="location" className=' p-2' type='name'/> 
                    </div>

                    {/* CV */}
                    <div className='flex w-full  careers_input  flex-col md:gap-[1em]'>
                        <label className='text-primary_color'>Your CV</label>
                        <input 
                                name="cv" 
                                type="file" 
                                className='p-2' 
                                onChange={onFileChange} 
                                accept=".pdf,.doc,.docx,.odt" // Restricts file selection
                            />
                    </div>
                    <br/>
                    <button className=' mt-[1em] mx-auto rounded-none text-primary_color  bg-none py-2 px-8 border-primary_color' onClick={()=>{handlePostSubmission()}}>Submit</button>
                </form>
          </div>

        </div>

        

     </Layout1>
      

  )
}

export default page
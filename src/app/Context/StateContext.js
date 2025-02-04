"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getBlogs } from "../api/blog"; // Import the modified data-fetching function
import Toast from "../components/Toast";
import { getAwarenessMaterials, getTips } from "../api/queries";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [show_modal, set_show_modal] = useState(false);
  const [img_url, set_url] = useState("");
  const [processing, set_show_processing] = useState(false)

  const [blog, setblog] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
  });



  const [tips, setTips] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
  });


  const [awarenessMaterial, setAwarenessMaterial] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
  });


  const [events, getEvents] = useState({
    data: [],
    pageInfo: { hasNextPage: true, endCursor: null },
    isLoading: false,
  });











  const fetchblog = useCallback(async () => {

    
    if (blog.isLoading || !blog.pageInfo.hasNextPage) return; // Prevent multiple fetches
  
    setblog((prev) => ({
      ...prev,
      isLoading: true, // Set loading to true
    }));
  
    try {
      // Ensure that the pagination params are properly set
      const { data, pageInfo } = await getBlogs(10, blog.pageInfo.endCursor); // Ensure this returns the correct structure
  
      // console.log("These are the Fetched blogs:", data);
  
      setblog((prev) => ({
        ...prev,
        data: [...prev.data, ...data], // Append new blog posts to the existing data
        pageInfo: {
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor,
        },
        isLoading: false, // Set loading to false after fetching
      }));
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setblog((prev) => ({
        ...prev,
        isLoading: false, // Set loading to false in case of an error
      }));
    }
  }, [blog.isLoading, blog.pageInfo.hasNextPage, blog.pageInfo.endCursor]);
  

  const fetchAwarenessMaterial = useCallback(async () => {

    // Prevent multiple fetches if already loading or no more pages
    if (awarenessMaterial.isLoading || !awarenessMaterial.pageInfo.hasNextPage) return;
  
    // Set loading to true
    setAwarenessMaterial((prev) => ({
      ...prev,
      isLoading: true,
    }));
  
    try {
      // Fetch awareness materials with pagination
      const { data, pageInfo } = await getAwarenessMaterials(10, awarenessMaterial.pageInfo.endCursor);
  
      // Update state with new data and pagination info
      setAwarenessMaterial((prev) => ({
        ...prev,
        data: [...prev.data, ...data], // Append new materials to the existing data
        pageInfo: {
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor,
        },
        isLoading: false, // Set loading to false after fetching
      }));
    } catch (error) {
      console.error("Error fetching awareness materials:", error);
      // Set loading to false in case of an error
      setAwarenessMaterial((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, [awarenessMaterial.isLoading, awarenessMaterial.pageInfo.hasNextPage, awarenessMaterial.pageInfo.endCursor]);

  const fetchTips = useCallback(async () => {
    // Prevent multiple fetches if already loading or no more pages
    if (tips.isLoading || !tips.pageInfo.hasNextPage) return;

    // Set loading to true
    setTips((prev) => ({
      ...prev,
      isLoading: true,
    }));

    try {
      // Fetch tips with pagination
      const { data, pageInfo } = await getTips(10, tips.pageInfo.endCursor);
    
      // Update state with new data and pagination info
      setTips((prev) => ({
        ...prev,
        data: [...prev.data, ...data], // Append new tips to the existing data
        pageInfo: {
          hasNextPage: pageInfo.hasNextPage,
          endCursor: pageInfo.endCursor,
        },
        isLoading: false, // Set loading to false after fetching
      }));
    } catch (error) {
      console.error("Error fetching tips:", error);
      // Set loading to false in case of an error
      setTips((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }
  }, [tips.isLoading, tips.pageInfo.hasNextPage, tips.pageInfo.endCursor]);



  useEffect(() => {
    // fetchAwarenessMaterial()
    fetchTips()
    // fetchblog(); // Initial fetch
  }, []);



  return (
    <Context.Provider
      value={{
        show_modal,
        set_show_modal,
        set_show_processing,
        img_url,
        set_url,
      
        blog, // Expose blog state
        fetchblog, // Expose fetchblog function
        setblog,
        fetchTips,
        fetchAwarenessMaterial,
  
        tips,
        awarenessMaterial,
      }}
    >
      <Toast>     </Toast>

     {processing &&  <div className="bg-[rgba(0,0,0,0.7)] h-screen w-full z-[30] top-0 fixed flex items-center justify-around">
<div className="flex  items-center gap-2">
<h5 className="text-white">Processing</h5>
<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white" ></div>
</div>
       
       
       </div>}
      {children}
  
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
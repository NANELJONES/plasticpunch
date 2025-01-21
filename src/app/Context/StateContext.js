"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getGallery } from "../lib"; // Import the modified data-fetching function
import { getProjects,getServices,getTeam, getTestimonials } from "../lib"; // Import your data-fetching function

const Context = createContext();

export const StateContext = ({ children }) => {

 
  

 

  // --------------------------------------------------------------
  const [show_modal, set_show_modal ] = useState(false)
  const [img_url, set_url] = useState("")
  // --------------------------------------------------------------

  // const [hasNextPage, setHasNextPage] = useState(true);
  // const [endCursor, setEndCursor] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  // const fetchGallery = useCallback(async () => {
  //   if (isLoading || !hasNextPage) return; // Prevent multiple fetches

  //   setIsLoading(true);
  //   try {
  //     const { edges, pageInfo } = await getGallery(10, endCursor);
  //     setGallery((prev) => [...prev, ...edges]); // Append new images
  //     setHasNextPage(pageInfo.hasNextPage);
  //     setEndCursor(pageInfo.endCursor);
  //   } catch (error) {
  //     console.error("Error fetching gallery images:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }, [endCursor, hasNextPage, isLoading]);

  // const fetchProjects = async () => {
  //   try {
  //     const projects = await getProjects();
  //     // console.log("Fetched projects:", projects); // Check if data is fetched
  //     set_all_projects(projects); // Set the state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching projects:", error);
  //   }
  // };
  // const fetchServices = async () => {
  //   try {
  //     const temp_services = await getServices();
  //     // console.log("Fetched Services:", temp_services); // Check if data is fetched
  //     set_services(temp_services); // Set the state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching projects:", error);
  //   }
  // };

  // const fetchTeam = async () => {
  //   try {
  //     const all_teams = await getTeam();
  //     // console.log("Fetched Team:", all_teams); // Check if data is fetched
  //     set_team(all_teams); // Set the state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching projects:", error);
  //   }
  // };


  // const fetchTestimonials  = async () => {
  //   try {
  //     const all_testimonials = await getTestimonials();
  //     // console.log("Fetched Team:", all_testimonials); // Check if data is fetched
  //     set_testimonials(all_testimonials); // Set the state with fetched data
  //   } catch (error) {
  //     console.error("Error fetching projects:", error);
  //   }
  // };



  useEffect(() => {
    // fetchGallery(); // Initial fetch
    // fetchProjects()
    // fetchServices()
    // fetchTestimonials()
    // fetchTeam()
  }, []);

  return (
    <Context.Provider value={{show_modal, set_show_modal ,  img_url, set_url}}>
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);

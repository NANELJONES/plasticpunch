"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout1 from "../layout/Layout1";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { getProjects } from "../lib";

let exportedProjects = []; // Variable to hold the exported projects

const Page = () => {
  const [all_projects, set_all_projects] = useState([]);

  const fetchProjects = async () => {
    try {
      const projects = await getProjects();
      set_all_projects(projects); // Set the state with fetched data
      exportedProjects = projects; // Update the exported variable
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="relative">
      <div className="w-full bg-primary_color">
        <div className="layout flex flex-col md:flex-row md:p-20 max-h-[500px] bg-primary_color">
          <div className="w-full md:w-1/2">
            <h1 className="text-white">Our <br /> Projects</h1>
            <p className="text-white">
              Our Projects section highlights the journey from concept to
              completion across multiple sectors, including housing developments,
              office complexes, retail spaces, and infrastructure.
            </p>
          </div>

          {/* <div className="relative flex w-full md:w-1/2">
            <Image
              alt="this is here"
              src={"/Us/1.jpg"}
              className="w-full object-contain"
              fill
            />
          </div> */}
        </div>
      </div>

      <Layout1>
        <div className="flex md:p-10 items-center justify-around lg:justify-between xl:gap-20 flex-wrap gap-4 relative">
          {all_projects.map((each_project, index) => {
            return (
              <Link key={index} href={`/projects/${each_project?.node?.slug}`}>
                <motion.div
                  className="w-auto h-auto"
                  initial={{ opacity: 0, y: -70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div
                    className={`relative    
                    ${
                      index % 2 === 0
                        ? "mt-0 w-[30em] h-[20em] md:w-[20em] lg:w-[35em] lg:h-[30em] max-w-[350px] max-h-[250px] md:max-h-[400px] md:max-w-[800px]"
                        : "xl:mt-[10em]  w-[20em]  h-[30em] md:w-[15em] 2xl:w-[25em] md:h-[45em] max-w-[350px] max-h-[250px] 2xl:max-w-[500px] "
                    }`}
                  >
                    <Image
                      alt="this is here"
                      src={
                        each_project?.node?.projectImages[0]?.url
                          ? each_project?.node?.projectImages[0]?.url
                          : "/gallery_bg.jpg"
                      }
                      className="w-full h-full object-cover"
                      fill
                    />
                  </div>

                  <div className="flex items-center flex-col">
                    <h6 className="text w-full text-left">
                      <strong>{each_project?.node?.projectName}</strong>
                    </h6>
                    <p className="font-italic text-left w-full">
                      {each_project?.node?.projectStatus}
                    </p>
                    <p className="text-left w-full">
                      {each_project?.node?.projectField}
                    </p>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </Layout1>
    </div>
  );
};

export default Page;

// Export a getter function to access all_projects
export const getAllProjects = () => exportedProjects;

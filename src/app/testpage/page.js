"use client";
import React from "react";

import Layout1 from "../layout/Layout1";
import { SampleEvents4 } from "../components/SampleEvents";
import { usePathname } from "next/navigation";
import AbstractCube from "../components/3D/AbstractCube";
import BlogSample from "../components/BlogSample";
import { Blog } from "../components/Blog/Blog";
import { getVolunteeringOptions } from "../api/queries";
import { handle_toast_notification } from "../components/Toast";
import { getAvailablePositions, getSingleJobPost, getAwarenessMaterials, getTips } from "../api/queries";
import { getEvents } from "../api/queries";
import FeaturePosts from "../components/Blog/FeaturePosts";
import { useStateContext } from "../Context/StateContext";


import Categories from "../components/Blog/Categories";
const page = () => {
  // The URL and title you'd like to share
  const router  =  usePathname()

  const {fetchEvent}  = useStateContext()
  


  

  return (
    <div className="bg-primary_color">
      <Layout1>
    <SampleEvents4></SampleEvents4>
      
       </Layout1>
    </div>
  );
};

export default page;

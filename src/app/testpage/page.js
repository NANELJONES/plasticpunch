"use client";
import React from "react";

import Layout1 from "../layout/Layout1";

import { usePathname } from "next/navigation";
import BlogSample from "../components/BlogSample";
import { Blog } from "../components/Blog/Blog";
import { getVolunteeringOptions } from "../api/queries";
import { handle_toast_notification } from "../components/Toast";
import { getAvailablePositions, getSingleJobPost, getAwarenessMaterials, getTips } from "../api/queries";
import DailyContent from "../components/DailyContent";

const page = () => {
  // The URL and title you'd like to share
  const router  =  usePathname()
  


  return (
    <div>
      <Layout1>

          <DailyContent/>

        // <button onClick={()=>{ getTips()}}>Try me</button>
      
       </Layout1>
    </div>
  );
};

export default page;

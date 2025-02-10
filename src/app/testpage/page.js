"use client";
import React from "react";

import Layout1 from "../layout/Layout1";

import { usePathname } from "next/navigation";
import BlogSample from "../components/BlogSample";
import { Blog } from "../components/Blog/Blog";
import { getVolunteeringOptions } from "../api/queries";
import { handle_toast_notification } from "../components/Toast";
import { getAvailablePositions, getSingleJobPost, getAwarenessMaterials, getTips } from "../api/queries";
import { getEvents } from "../api/queries";
import { useStateContext } from "../Context/StateContext";
import { SampleEvents } from "../components/SampleEvents";
import { SampleEvents2 } from "../components/SampleEvents";
import { SampleEvents3 ,SampleEvents4} from "../components/SampleEvents";
import OnlineContent from "../components/OnlineContent";
import { getSingleEvent } from "../api/queries";
import SampleProject from "../components/SampleProject";
import IntroStats from "../components/IntroStats";
import HomeContent from "../components/HomeContent";

const page = () => {
  // The URL and title you'd like to share
  const router  =  usePathname()

  const {fetchEvent}  = useStateContext()
  


  

  return (
    <div className="bg-primary_color">
      <Layout1>

    <HomeContent></HomeContent>
      
       </Layout1>
    </div>
  );
};

export default page;

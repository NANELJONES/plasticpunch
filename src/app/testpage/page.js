"use client";
import React from "react";
import Donate from "../components/Donate";
import BlogSample from "../components/BlogSample";
import Layout1 from "../layout/Layout1";
import {SampleEvents2,SampleEvents3} from "../components/SampleEvents";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import SampleProject from "../components/SampleProject";

const page = () => {
  // The URL and title you'd like to share
  const shareUrl = "https://your-website.com";
  const shareTitle = "Check out this awesome content!";
  const shareDescription = "Discover amazing projects, updates, and more!";

  return (
    <div>
      <Layout1>
        <SampleEvents3></SampleEvents3>
       </Layout1>
    </div>
  );
};

export default page;

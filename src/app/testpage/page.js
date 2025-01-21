"use client";
import React from "react";
import Donate from "../components/Donate";
import Layout1 from "../layout/Layout1";
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

const page = () => {
  // The URL and title you'd like to share
  const shareUrl = "https://your-website.com";
  const shareTitle = "Check out this awesome content!";
  const shareDescription = "Discover amazing projects, updates, and more!";

  return (
    <div>
      <Layout1>
        <p>Share on all social media</p>
        <div className="flex gap-4 mt-4">
          {/* Facebook Share Button */}
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <FacebookIcon size={30} round={true} />
          </FacebookShareButton>

          {/* Twitter Share Button */}
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <TwitterIcon size={30} round={true} />
          </TwitterShareButton>

          {/* LinkedIn Share Button */}
          <LinkedinShareButton url={shareUrl} title={shareTitle} summary={shareDescription}>
            <LinkedinIcon size={30} round={true} />
          </LinkedinShareButton>

          {/* WhatsApp Share Button */}
          <WhatsappShareButton url={shareUrl} title={shareTitle}>
            <WhatsappIcon size={30} round={true} />
          </WhatsappShareButton>

          {/* Email Share Button */}
          <EmailShareButton url={shareUrl} subject={shareTitle} body={shareDescription}>
            <EmailIcon size={30} round={true} />
          </EmailShareButton>
        </div>
      </Layout1>
    </div>
  );
};

export default page;

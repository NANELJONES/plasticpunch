import React from "react";
import Layout2 from "../layout/Layout2";
import Link from "next/link";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  const SocialIcon = (image, text) => {
    {
      /* Instagram */
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-between  mt-2 md:mt-[20px] gap-[2em]  md:max-h-[1000px] md:py-20 bg-primary_color">
      <Layout2>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-center w-full   md:text-left">
            {`Let's`} <br />
            Connect
          </h1>
          <br />
          <div className="normal_div  gap-10 ">
            {/* <div className="w-full md:w-[50%]  ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.5670845350414!2d-0.09139822525436386!3d5.630735894350373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf853924552137%3A0xd763f04a6688616d!2sCONPRO%20LIMITED!5e0!3m2!1sen!2sgh!4v1729691436282!5m2!1sen!2sgh"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: 20, maxHeight: 350 }} // Use an object for styles
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}
            {/* This is the Socials  */}
            <div className="w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block">
              <h2 className="text-white text-center md:text-left">
                {`Our`} <br />
                Socials
              </h2>
              <div className="flex w-full flex-col mt-[2em] items-center  gap-4 md:items-start flex-wrap">
                <SocialIcons
                  icon_path="/socialIcons/facebook.svg"
                  text="Plastic Punch"
                  url="https://web.facebook.com/plasticpunch"
                ></SocialIcons>
                <SocialIcons
                  icon_path="/socialIcons/twitter.svg"
                  text="@plastic_punch"
                  url="https://web.facebook.com/plasticpunch"
                ></SocialIcons>
                <SocialIcons
                  icon_path="/socialIcons/instagram.svg"
                  text="Plastic_Punch"
                  url="https://web.facebook.com/plasticpunch"
                ></SocialIcons>
                <SocialIcons
                  icon_path="/socialIcons/youtube.svg"
                  text=" Plastic Punch Ghana"
                  url="https://web.facebook.com/plasticpunch"
                ></SocialIcons>
              </div>
            </div>

            {/* this is the contact details */}
            <div className="w-full md:w-[30%] md:w-flex flex-col items-center gap-4 md:block">
              <h2 className="text-white text-center md:text-left">
                {`Our`} <br />
                Contact
              </h2>

              {/*Location  */}
              <span className="flex flex-col md:flex-row  items-center gap-2 md:gap-5 ">
                {" "}
                <img src="/location.svg" className="w-[30px]"></img>{" "}
                <p className="text-white text-center md:text-left">
                  Tse Addo, Greater Accra - Ghana, West Africa
                </p>{" "}
              </span>

              <br />
              {/* Phone */}
              <span className="flex flex-col md:flex-row  items-center gap-2 md:gap-5">
                <img src="/phone.svg" className="w-[30px]"></img>

                <span className="flex flex-col  items-center md:items-start">
                  <p className="text-white ">+233(0)244 988 412</p>
                  <p className="text-white">+233(0)50 722 5676</p>
                  <p className="text-white">0302972403</p>
                </span>
              </span>

              <br />

              {/* Email */}
              <span className="flex flex-col md:flex-row  items-center gap-2 md:gap-5">
                <img src="/email.svg" className="w-[30px]"></img>

                <span className="flex flex-col  items-center md:items-start">
                  <p className="text-white">info@plasticpunch.com</p>
                  <p className="text-white">info@plasticpunch.com</p>
                </span>
              </span>
            </div>
            {/* this is the logo */}
            <div className=" w-full md:w-[20%]    h-full flex  flex-col items-center justify-center  ">
              <img
                src="/Logo.jpg"
                alt="Company Logo"
                className="w-full  max-w-[200px] md:block  md:w-[12em]"
              />

              <h5 className="text-white text-center">Plastic Punch</h5>
              <h6 className="text-center text-white">
                Less Plastics, Better Lives
              </h6>
            </div>
          </div>
          <br />
          {/* Socials */}

          <div className="normal_div ">
            <Link href={"#"}>
              <p className="text-white md:border-b-2  p-2">Home</p>
            </Link>
            <Link href={"/blog"}>
              <p className="text-white md:border-b-2  p-2 w-full">
                News & Blog
              </p>
            </Link>
            <Link href={"/projects"}>
              <p className="text-white md:border-b-2  p-2">Projects</p>
            </Link>
            <Link href={"/events"}>
              <p className="text-white md:border-b-2  p-2">Events</p>
            </Link>
            <Link href={"/contactUs"}>
              <p className="text-white md:border-b-2 p-2">Contact Us</p>
            </Link>
          </div>

          <br />

          <p className="text-white text-center">
            © 2024 Plastic Punch All rights reserved
          </p>
          <br />
          <Link href={"https://kr8tos.vercel.app/"}>
            {" "}
            <p className="text-white text-center">Developed by Kr8tos</p>
          </Link>
        </div>
      </Layout2>
    </div>
  );
};

export default Footer;

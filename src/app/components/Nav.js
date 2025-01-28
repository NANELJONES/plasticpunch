"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [show_nav, set_show_nav] = useState(false);
  const [sub_menu, set_sub_menu] =  useState("")

  const nav_options = [
    { nav_name: "Home", nav_icon: "./menu.svg", nav_link: "/" },
    { nav_name: "Services", nav_icon: "./menu.svg", nav_link: "/services" },
    { nav_name: "Content", nav_icon: "./menu.svg", nav_link: "/", sub_menu:[
      {"sub_link_name":"Tips", "sub_link_link":"/"  },
      {"sub_link_name":"Blog", "sub_link_link":"/blog"  },
      {"sub_link_name":"News", "sub_link_link":"/blog"  },
      {"sub_link_name":"Awareness Content", "sub_link_link":"/awareness_material"  },
      {"sub_link_name":"YouTube", "sub_link_link":"/https://www.youtube.com/@plasticpunchGH"  },
    
    ] },

    { nav_name: "Projects", nav_icon: "./menu.svg", nav_link: "/projects" },
    { nav_name: "Gallery", nav_icon: "./menu.svg", nav_link: "/gallery" },
    { nav_name: "About Us", nav_icon: "./menu.svg", nav_link: "/aboutUs" },
    { nav_name: "Community", nav_icon: "./menu.svg", nav_link: "/", sub_menu:[
      {"sub_link_name":"Facebook Community", "sub_link_link":"/"  },
      {"sub_link_name":"Telegram", "sub_link_link":"/"  },
      {"sub_link_name":"Discord", "sub_link_link":"/"  },
      {"sub_link_name":"Facebook", "sub_link_link":"/"  },
    
    ] },
    { nav_name: "Donations", nav_icon: "./menu.svg", nav_link: "/" },
    { nav_name: "Merch", nav_icon: "./menu.svg", nav_link: "/" },
    { nav_name: "Contact Us", nav_icon: "./menu.svg", nav_link: "/contactUs" },
  ];

  return (
    <div className="sticky w-full font-thin z-[20] backdrop-blur-md">
      {/* Toggle button for small screens */}
      <Image
        src={show_nav ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={30}
        height={30}
        className="absolute top-4 left-4 md:hidden bg-secondary_color p-2 rounded-sm z-[200] cursor-pointer"
        onClick={() => set_show_nav(!show_nav)}
      />

      {/* Navigation menu */}
      <div
        className={`${
          show_nav ? "block pt-20" : "hidden"
        } md:flex flex-col-reverse items-start  md:flex-row md:gap-10 md:items-center p-4 md:p-2 w-[80%] md:w-full h-[100vh] max-h- min-h-[400px] md:min-h-[15px] md:h-auto justify-around    shadow-md bg-primary_color`}
      >
       <img
          src="/Logo.jpg"
          alt="Company Logo"
          
          className="w-full hidden max-w-[50px] md:block  md:w-[12em]"
        />

        <div className="flex flex-col md:flex-row gap-4  h-auto items-start justify-start md:items-center">
          {nav_options.map((each_value) => (
            <div key={each_value.nav_name} className="relative  " onMouseEnter={()=>{each_value?.sub_menu ? set_sub_menu( each_value.nav_name) :set_sub_menu ("") }}  onMouseLeave={()=>{ set_sub_menu ("") }}  > 
                <Link href={each_value.nav_link} >
             <p 
              onClick={()=>{ set_show_nav(false)}}
             
             className="text-white  text-left md:hover:text-[1.3em] md:hover:font-semibold transition-all duration-500 md:text-center text-[2em] md:text-[0.8em]  cursor-pointer">

                {each_value.nav_name}
              </p>
            </Link>  

            {each_value?.sub_menu && sub_menu ===  each_value.nav_name  ? <div className="px-10 md:absolute  md:shadow-xl md:rounded-sm md:top-[1em] md:bg-primary_color  md:w-[15em] md:h-[14em] flex flex-col justify-around items-start px-4   " >
              {each_value?.sub_menu.map((each_sublink, index)=> {
               return <Link href={each_sublink.sub_link_link} key={index}> <p className="text-white md:hover:text-[1.1em] md:hover:font-semibold transition-all duration-500  text-[1.5em] md:text-[0.8em]  cursor-pointer">{each_sublink.sub_link_name} </p> </Link>
              })}
              


            </div> : "" }
             </div>
            
          ))}
        </div>
        
        {show_nav ? <img
          src="/Logo.jpeg"
          alt="Company Logo"
          
          className="w-[15em] mt-2 md:hidden md:w-[12em]"
        />:""}
      </div>
    </div>
  );
};

export default Nav;

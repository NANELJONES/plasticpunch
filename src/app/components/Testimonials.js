"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { getTestimonials } from '../lib';
import "/node_modules/swiper/swiper-bundle.min.css";
import "/node_modules/swiper/swiper.min.css";

const Testimonials = () => {
  const testimonials_data = [
    {
      "Client_Name": "Areon Marques",
      "Client_Image": "/man.jpg",
      "Client_Position": "Head of IT",
      "Client_Testimony": "This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    {
      "Client_Name": "Areon Marques",
      "Client_Image": "/man.jpg",
      "Client_Position": "Head of IT",
      "Client_Testimony": "This question was asked when Tailwind 1.2 was in use. Since version 1.7 Tailwind supports pseudo classes in @apply directive. In first it was experimental feature that had to be turned on manually in config, but currently it is normal functionality."
    },
    // Add more testimonials as needed
  ];

  const [testimonials, setTestimonials] = useState([]);
  
  const fetchTestimonials = async () => {
    try {
      const all_testimonials = await getTestimonials();
      setTestimonials(all_testimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Helper function to get the first 20 words
  const getExcerpt = (text, limit = 20) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + "...";
  };

  // State to track expanded status
  const [expandedTestimonial, setExpandedTestimonial] = useState(null);

  const toggleTestimonial = (index) => {
    if (expandedTestimonial === index) {
      setExpandedTestimonial(null);  // Collapse the testimonial if clicked again
    } else {
      setExpandedTestimonial(index);  // Expand the clicked testimonial
    }
  };

  return (
    <div className="w-full border p-8 border-secondary_color">
      <div className="gap-8">
        <h1>Our <br /> Testimonials</h1>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper mt-[2em]"
        modules={[Pagination, Navigation]}
      >
        {testimonials.map((each_client, index) => (
          <SwiperSlide
            key={index}
            className={`border-t-4 bg-primary_color h-[30em] max-h-[600px] items-center border-secondary_color justify-around p-10 max-w-[600px] flex flex-col transition-all duration-300 ease-in-out ${
              expandedTestimonial === index ? "h-auto" : "h-[30em]"
            }`}
            onClick={() => toggleTestimonial(index)}
          >
            <div className="flex gap-4 h-full">
              <img
                src={each_client?.node?.personImage?.url}
                className="w-[3em] h-[3em] object-cover rounded-full"
                alt="Client"
              />
              <h5 className="text-white">
                <strong>{each_client?.node?.personName}</strong><br />
                <p className="text-white">{each_client?.node?.personPosition}</p>
              </h5>
            </div>

            <br />
            <p className="text-white border-t p-2">
              {expandedTestimonial === index
                ? each_client.node?.testimony
                : getExcerpt(each_client.node?.testimony)}
            </p>

            {expandedTestimonial !== index && (
              <button
                className="text-white mt-2 bg-none rounded-none border-0 p-1 border border-b-2 "
                onClick={(e) => {
                  e.stopPropagation(); // Prevent swiper slide click event
                  toggleTestimonial(index);
                }}
              >
                Show More
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;

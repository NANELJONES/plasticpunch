"use client";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  const form = useRef();
  const [contact, setContact] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const resetter = () => {
    setContact({ user_name: "", user_email: "", message: "" });
  };

  const successToast = () => {
    toast.success("Message Successfully Sent", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const failedToast = (errorMessage = "Message Could Not Be Sent.") => {
    toast.error(errorMessage, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      theme: "dark",
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_P_KEY
      );
      console.log("Email sent successfully:", result);
      successToast();
      resetter();
    } catch (error) {
      console.error("Email sending error:", error);
      failedToast("Failed to send message. Try again later.");
    }
  };

  return (
    <div className="bg-primary_color min-h-screen">
      {/* Toast Container (only one instance needed) */}
      <ToastContainer />

      <div className="relative layout  md:p-20">
        {/* Background Image */}
        <div className=" hidden md:block md:absolute md:top-[10em] w-[40em] max-w-[400px] max-h-[500px] h-[60em] z-0">
          <Image
            alt="background"
            src="/new_contact_bg.jpg"
            className="w-full h-full object-cover"
            fill={true}
          />
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="relative z-10 border-t-8 w-full md:w-[80%] shadow-2xl bg-primary_color p-10 md:p-20 max-w-[600px] mx-auto flex flex-col gap-[1em]"
        >
          <h2 className="text-white">Send Us A Message</h2>

          <div className="flex flex-col gap-2">
            <p className="font-light text-white">Name:</p>
            <input
              value={contact.user_name}
              onChange={(e) =>
                setContact({ ...contact, user_name: e.target.value })
              }
              name="user_name"
              className="bg-transparent border text-[0.8em] text-white p-2"
              placeholder="Please Enter Your Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-light text-white">Email:</p>
            <input
              value={contact.user_email}
              onChange={(e) =>
                setContact({ ...contact, user_email: e.target.value })
              }
              name="user_email"
              type="email"
              className="bg-transparent border text-white p-2 text-[0.8em]"
              placeholder="Please Enter Your Email"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-white">Message:</p>
            <textarea
              value={contact.message}
              onChange={(e) =>
                setContact({ ...contact, message: e.target.value })
              }
              name="message"
              rows="5"
              className="bg-transparent border text-white p-2 text-[0.8em]"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="border w-2/3 lg:w-2/5  mx-auto text-white bg-none hover:bg-[orange] duration-300 hover:border-0"
          >
            SEND MESSAGE
          </button>

          <Link href="mailto:info@atlanticcrest.org">
            <p className="text-white text-center">
              To Join Us, Send Your Resume/CV
            </p>
          </Link>
        </form>
      </div>

      <div className="w-full bg-white h-[10px]"></div>
    </div>
  );
};

export default ContactPage;

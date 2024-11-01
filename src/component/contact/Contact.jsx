import { BorderColor } from "@mui/icons-material";
import { Box, OutlinedInput, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 px-20  gap-10 py-10 items-center ">
      <div className="flex flex-col items-center col-span-2">
        <div>
          <div className="uppercase text-3xl text-white font-semibold">
            Get in Touch
          </div>
          <div className="flex items-center justify-start gap-3 ">
            <div className="h-[2px] w-[50%] bg-white"></div>
            <div className="uppercase text-sky-500 text-sm font-semibold ">
            Contact Me
            </div>
          </div>
        </div>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-2  gap-5">
            <div className="text-blue-500 text-xl font-semibold tracking-wide uppercase col-span-2">
              how can I help you?
            </div>
            <div className="text-white flex flex-col gap-2">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="bg-transparent border-2 rounded outline-none px-4 py-2"
              />
            </div>
            <div className="text-white flex flex-col gap-2">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="bg-transparent border-2 rounded outline-none px-4 py-2"
              />
            </div>
            <div className="text-white flex flex-col gap-2 col-span-2">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                required
                className="bg-transparent border-2 rounded  outline-none px-4 py-2"
              />
            </div>
            <div className="text-white flex flex-col gap-2 col-span-2">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-transparent border-2 rounded  outline-none px-4 py-2"
              />
            </div>
            <div className="flex justify-end w-full">
              <button
                type="submit"
                className="bg-blue-500 w-full px-4 py-2 rounded text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center py-5 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d883.2520665041391!2d83.45852516958065!3d27.686139398512186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDQxJzEwLjEiTiA4M8KwMjcnMzMuMCJF!5e0!3m2!1sen!2snp!4v1730479653147!5m2!1sen!2snp"
          width="400"
          height="300"
          style={{
            border: 0,
            width: "90%",
            height: "90%",
            frameborder: 0,
            scrolling: "no",
            marginheight: 0,
            marginwidth: 0,
          }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;

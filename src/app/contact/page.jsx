import ContactForm from "@/components/form/contactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="lg:px-20 px-10">
      <div className="w-full text-center text-xl font-bold underline decoration-accent decoration-4 decoration-dotted py-10">
        Contact Me
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;

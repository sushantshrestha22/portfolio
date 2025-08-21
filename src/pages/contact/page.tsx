import React from "react";
// import WhiteLogo from "@/assets/images/white-logo.png";

import { CreateForm } from "@/common/form/create";
// import { contactSchema } from "@/schema/conatct";
// import { contactFields } from "@/common/field/contact/fields";
// import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import toast from "react-hot-toast";
import axios from "axios";
// import { Link } from "react-router-dom";
import { contactSchema } from "@/schema/contact";
import { contactFields } from "@/common/fields/contact/field";
import { Mail, MapPinHouse, Phone } from "lucide-react";
import { typo } from "@/constant/typography";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact = () => {
  const defaultValues: ContactFormData = {
    name: " ",
    phone: " ",
    email: " ",
    message: " ",
  };
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const contactInfo = [
    {
      title: "Contact",
      icon: <Phone className="h-6 w-6" />,
      description: "+977 9840967031",
    },
    {
      title: "Email",
      icon: <Mail className="h-6 w-6" />,
      description: "newasushant.ns16@gmail.com",
    },
    {
      title: "Address",
      icon: <MapPinHouse className="h-6 w-6" />,
      description: "Butwal-11, Rupandehi, Nepal",
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);
      const object = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        access_key: "15fb7f6e-838f-4df6-b662-db4c4d66d978",
      };

      const json = JSON.stringify(object);
      console.log("Submitting form data:", json);

      const res = await axios.post("https://api.web3forms.com/submit", json, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (res.data.success) {
        console.log("Success", res);
        toast.success("Contact form submitted successfully!");
        window.location.href = "/"; // Redirect to home page after successful submission
        // Form will be reset automatically by CreateForm component
      } else {
        console.log("Failed", res);
        toast.error("Failed to submit contact form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false); // Reset submitting state
      // Reset form or handle final state
    }
  };

  return (
    <>
      <div className="relative place-content-center h-[100vh] w-full ">
        {/* <section className="flex flex-col gap-4 max-sm:place-items-center relative">
          <section className="mx-auto place-content-center h-[80%] space-y-4 z-30">
            <img
              src={WhiteLogo}
              alt="Logo"
              className=" aspect-square h-20 w-20"
            />
            <p className="text-secondary ">
              Open for new collaborations, freelance work, and creative
              partnerships.
            </p>
            <ul className="flex gap-4 relative ">
              {contactInfo.map((info, idx) => (
                <Link key={idx} to={info.link} target="_blank">
                  <li className="text-accent">{info.icon}</li>
                </Link>
              ))}
            </ul>
          </section>
          <section className="absolute bottom-0 left-0 right-0 z-20">
            <TextHoverEffect text="Contact" />
          </section>
        </section> */}
        <section className="xl:w-[75%] border border-accent p-20 xl:pr-40 mx-auto relative space-y-4">
          <h2 className={`${typo.display} text-secondary`}>Contact Me</h2>
          <div className="xl:w-[75%]">
            <CreateForm
              fields={contactFields}
              defaultValues={defaultValues}
              onSubmit={onSubmit}
              validationSchema={contactSchema}
              title1="User"
              titleLink1="/users"
              titleLink2="/users/create"
              isSubmitting={isSubmitting}
            />
          </div>
        </section>
        <div className="w-[20rem] max-xl:hidden 2xl:w-[25rem] h-[20rem] mt-8 bg-accent absolute right-0 top-[50%] -translate-y-2/3 rounded-xs shadow-lg animate-contact place-items-center place-content-center ">
          <div className="">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 p-4 ">
                <div className="">{info.icon}</div>
                <div>
                  <h3 className={typo.h3}>{info.title}</h3>
                  <p className={typo.body}>{info.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center py-2 lg:col-span-2 text-xs">
          @2025 Sushant Shrestha. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Contact;

"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { Textarea } from "../ui/textarea";
import { contactSchema } from "@/schema/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "68609b0f-79b6-4275-8302-46ce6a62666f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success("Contact form submitted successfully");
    } else {
      console.log("Failed", res);
      toast.error("Failed to submit contact form");
    }

    
  };

  return (
    <div className="w-full bg-black bg-opacity-10 rounded-lg">
      <hr />
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-1 max-md:px-10 gap-4 w-full p-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              className="w-full border border-accent decoration"
              {...register("name")}
              required
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className="w-full border border-accent decoration"
              {...register("email")}
              required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              className="w-full border border-accent decoration"
              {...register("phone")}
              required
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              className="w-full border border-accent decoration"
              {...register("subject")}
              required
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              className="w-full border border-accent decoration"
              {...register("message")}
              required
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
          </div>
          <Button
            variant="ghost"
            type="submit"
            className="md:col-span-2 bg-accent text-primary-foreground"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

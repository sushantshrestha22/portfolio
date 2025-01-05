"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { postDataa } from "@/utils/query/query";
import toast from "react-hot-toast";
import { Textarea } from "../ui/textarea";
import { contactSchema } from "@/schema/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    const postData = await postDataa("api/contact", data);
    if (postData) {
      toast.success("Message sent successfully");
    } else {
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="w-full bg-[#DCDBFF] rounded-lg">
      <h1 className="text-2xl font-bold text-center p-2">
        We’re Just a Message Away!
      </h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-1 max-md:px-10 gap-4 w-full p-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              className="w-full border border-primary"
              {...register("name")}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              className="w-full border border-primary"
              {...register("email")}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              type="text"
              id="phone"
              className="w-full border border-primary"
              {...register("phone")}
            />
            {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
          </div>
          <div>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              className="w-full border border-primary"
              {...register("subject")}
            />
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              className="w-full border border-primary"
              {...register("message")}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
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
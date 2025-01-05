"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { postDataa } from "@/utils/query/query";
import toast from "react-hot-toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { admissionSchema } from "@/schema/admissionSchema";

const AdmissionForm = ({programsData}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(admissionSchema),
  });

  const onSubmit = async (data) => {
    const postData = await postDataa("api/admission-form", data);
    if (postData) {
      toast.success("Admission form submitted successfully");
      reset();
    } else {
      toast.error("Failed to submit admission form");
    }
  };

  return (
    <div className="w-full bg-[#DCDBFF] rounded-lg">
      <h1 className="text-xl font-bold text-center p-2">
        Admission Open
      </h1>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 max-sm:grid-cols-1 max-md:px-10 gap-4 w-full p-4">
          <div>
            <Label htmlFor="fname">First Name</Label>
            <Input
              type="text"
              id="fname"
              className="w-full border border-primary"
              {...register("fname")}
            />
            {errors.fname && <p className="text-red-500">{errors.fname.message}</p>}
          </div>
          <div>
            <Label htmlFor="lname">Last Name</Label>
            <Input
              type="text"
              id="lname"
              className="w-full border border-primary"
              {...register("lname")}
            />
            {errors.lname && <p className="text-red-500">{errors.lname.message}</p>}
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
            <Label htmlFor="address">Address</Label>
            <Input
              type="text"
              id="address"
              className="w-full border border-primary"
              {...register("address")}
            />
            {errors.address && <p className="text-red-500">{errors.address.message}</p>}
          </div>
          <div>
            <Label htmlFor="contact">Contact Number</Label>
            <Input
              type="text"
              id="contact"
              className="w-full border border-primary"
              {...register("contact")}
            />
            {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="subject">Subject</Label>
            <select name="course" id="course" className="w-full border border-primary bg-transparent px-4 py-2 rounded-lg" {...register("course")}>
              {
                programsData.map((program) => {
                  return (

                    <option value={program.title}>{program.title}</option>
                  );
                })
              }
            </select>
            {errors.subject && <p className="text-red-500">{errors.subject.message}</p>}
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

export default AdmissionForm;
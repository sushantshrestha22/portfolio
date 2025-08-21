import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@/components/ui/button";
// import dynamic from "next/dynamic";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useRef } from "react";
// import Loading from "../loading";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import Loading from "../loading";
import { typo } from "@/constant/typography";

// Dynamically import JoditEditor to prevent SSR issues
// const JoditEditor = dynamic(() => import("jodit-react"), {
//   ssr: false,
//   loading: () => <div>Loading editor...</div>,
// });

export function CreateForm({
  fields,
  defaultValue,
  onSubmit,
  validationSchema,
  // title1,
  // title2,
  // titleLink1,
  // titleLink2,

  isSubmitting,
}: any) {
  const form = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValue,
  });

  // ...
  // const fileInputRefs = useRef({});

  const handleFileChange = (e: any, name: any) => {
    const file = e.target.files[0];
    form.setValue(name, file);
  };

  const handleSubmit = (data: any) => {
    try {
      onSubmit(data);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
      // Optionally, handle error state
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className={`grid grid-cols-1 gap-6 ${
            fields?.length >= 4 ? "lg:grid-cols-2" : ""
          } `}
        >
          {fields.map((item: any) => (
            <FormField
              control={form.control}
              name={item.name}
              key={item.name}
              render={({ field, fieldState }) => (
                <FormItem
                  className={`${
                    item.type === "email" || item.type === "textarea"
                      ? "lg:col-span-2"
                      : ""
                  }`}
                >
                  <FormLabel className={`${typo.h4} font-semibold`}>
                    {item.label}
                    {item.required ? " *" : ""}
                  </FormLabel>
                  <FormControl>
                    {item.type === "select" ? (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Choose your option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel className="capitalize">
                              {item.name}
                            </SelectLabel>
                            {item.options.map((option: any) => (
                              <SelectItem
                                value={option.value}
                                key={option.value}
                              >
                                <div></div>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    ) : item.type === "file" ? (
                      <Input
                        type="file"
                        accept={item.accept || "image/*"}
                        name={item.name}
                        key={field.value || "empty"} // Force re-render when value changes
                        onChange={(e) => handleFileChange(e, item.name)}
                      />
                    ) : item.type === "textarea" ? (
                      <Textarea
                        placeholder={item.label}
                        {...field}
                        className="lg:col-span-2"
                      />
                    ) : item.type === "number" ? (
                      <Input
                        type={item.type}
                        placeholder={item.label}
                        {...field}
                        min={0}
                      />
                    ) : (
                      <Input
                        type={item.type}
                        placeholder={item.label}
                        {...field}
                        className={`${
                          item.type === "email" ? "lg:col-span-2" : ""
                        }`}
                      />
                    )}
                  </FormControl>
                  <FormMessage>
                    {fieldState.error ? fieldState.error.message : null}
                  </FormMessage>
                </FormItem>
              )}
            />
          ))}
          {isSubmitting ? (
            <Button
              type="button"
              disabled
              className={`${fields?.length >= 4 ? "lg:col-span-2" : ""}`}
            >
              <Loading login="true" />
            </Button>
          ) : (
            <Button
              type="submit"
              className={`${fields?.length >= 4 ? "lg:col-span-2" : ""}`}
            >
              Submit
            </Button>
          )}
        </form>
      </Form>
    </>
  );
}

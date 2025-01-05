import * as yup from "yup";

export const admissionSchema = yup.object({
  fname: yup.string().required("First Name should not be empty"),
  lname: yup.string().required("Last Name should not be empty"),
  email: yup
    .string()
    .email("Email must be a valid email")
    .required("Email should not be empty"),
  contact: yup.string().required("Contact should not be empty"),
  address: yup.string().required("Address should not be empty"),
  course: yup.string().required("Course should not be empty"),
});

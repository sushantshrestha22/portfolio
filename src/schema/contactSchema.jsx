import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Name should not be empty"),
  email: yup.string().email("Email must be a valid email").required("Email should not be empty"),
  phone: yup.string().required("Phone should not be empty"),
  subject: yup.string().required("Subject should not be empty"),
  message: yup.string().required("Message should not be empty"),
});
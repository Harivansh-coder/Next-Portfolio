import * as yup from "yup";

export const validationSchema = yup.object({
  message: yup.string().required("Message is required").min(10),
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid email address"
    ),
  name: yup.string().required("Name is required").min(1),
});

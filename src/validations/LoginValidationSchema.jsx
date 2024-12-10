import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be of minimum 6 characters")
    .max(12, "Password must be of maximum 12 characters")
    .required("Password is required"),
});

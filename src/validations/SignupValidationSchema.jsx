import * as Yup from "yup";

export const SignupValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "First name must of at least 1 character")
    .max(15, "First name must be at most 15 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(1, "Last name must of at least 1 character")
    .max(12, "Last name must be at most 12 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

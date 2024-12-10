import * as Yup from "yup";

export const ChangePasswordSchema = Yup.object().shape({
  oldpassword: Yup.string()
    .min(6, "Old password must be at least 6 characters")
    .max(12, "Old Password must be at most 12 characters")
    .required("Old Password is required"),
  newpassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Password must be at most 12 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    )
    .required("Password is required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});

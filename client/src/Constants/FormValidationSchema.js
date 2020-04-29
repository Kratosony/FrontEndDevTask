import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is Required"),
  email: Yup.string()
    .email()
    .required("Email is Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/(?=.*[0-9])/, "Password must contain a number."),
})
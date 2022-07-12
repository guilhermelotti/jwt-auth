import * as yup from "yup";

export const signInFormSchema = yup.object().shape({
  email: yup.string().required("No email provided"),
  password: yup.string().required("No password provided."),
});

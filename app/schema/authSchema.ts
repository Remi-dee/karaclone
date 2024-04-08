import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is Required!")
    .matches(passwordRules, {
      message:
        "Please add at least number, special character and uppercase to your password,",
    }),
});

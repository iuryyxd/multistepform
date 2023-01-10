import * as yup from "yup";

const phoneRegExp =
  /\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})? ?(\w{1,10}\s?\d{1,6})?/;
const nameRegExp = /^[aA-zZ\s]+$/;

export const FormSchema = yup.object({
  name: yup
    .string()
    .required("This field is required")
    .matches(nameRegExp, "Invalid name"),
  email: yup.string().email("Invalid email").required("This field is required"),
  phone: yup
    .string()
    .required("This field is required")
    .matches(phoneRegExp, "Invalid phone number"),
});

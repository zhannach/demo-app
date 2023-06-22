import * as yup from "yup"

export const schema = yup
  .object().shape({
    fullName: yup.string().required('Please enter your full name.').min(2, 'Enter at least 2 letters').max(120, 'You reached max length'),
    userName: yup.string().required('Please enter user name.').min(2, 'Enter at least 2 letters').max(120, 'You reached max length'),
    password: yup.string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
});

export const signInSchema = yup
  .object().shape({
    userName: yup.string().required('Please enter user name.').min(2, 'Enter at least 2 letters').max(120, 'You reached max length'),
    password: yup.string()
    .required('Please enter your password.')
    .min(8, 'Your password is too short.')
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
});


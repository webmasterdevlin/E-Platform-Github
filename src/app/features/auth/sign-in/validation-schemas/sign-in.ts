/* Validation for each input */
import * as Yup from 'yup';

const signInYupObject = Yup.object({
  email: Yup.string().label('Email').email().required(),
  password: Yup.string().label('Password').required(),
  rememberMe: Yup.string().label('Remember Me').optional(),
});

export type SignInModel = {
  email: string;
  password: string;
  rememberMe: false;
};

export { signInYupObject };

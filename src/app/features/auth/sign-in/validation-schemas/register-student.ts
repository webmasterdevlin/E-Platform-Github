/* Validation for each input */
import * as Yup from 'yup';

const registerStudentYupObject = Yup.object({
  email: Yup.string().label('Email').email().required(),
  password: Yup.string()
    .label('Password')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.')
    .required('No password provided.'),
  repeatPassword: Yup.string().label('Repeat Password'),
});

export type RegisterStudentModel = {
  email: string;
  password: string;
  repeatPassword: string;
  roles: Array<string>;
};

export { registerStudentYupObject };

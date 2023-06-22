import { FieldValues } from 'react-hook-form';

export type SignUpForm = SignInForm & {
  fullName: string;
  confirmPassword: string;
};

export type SignInForm = FieldValues & {
  userName: string;
  password: string;
};

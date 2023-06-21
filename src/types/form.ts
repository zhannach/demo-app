export interface FormValues {
  [key: string]: string;
}

export interface FormData {
  userName: string;
  password: string;
  fullName?: string;
  confirmPassword?: string;
}

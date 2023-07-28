export type SignUpState = {
  email: string;
  password: string;
  confirmPassword: string;
  hasErrors: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  errorMessage: string;
};

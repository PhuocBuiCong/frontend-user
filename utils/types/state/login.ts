export type LoginState = {
  email: string;
  password: string;
  isRememberMe: boolean;
  hasErrors: {
    email: string;
    password: string;
  };
  errorMessage: string;
};

export interface ISignUpForm {
  fullName: string
  password: string
  confirmPassword: string
}

export interface IFormStatus {
  message: string
  type: string
}

export interface IFormStatusProps {
  [key: string]: IFormStatus,
}

export const formStatusProps: IFormStatusProps = {
  success: {
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

type InitialValues = {
  fullName: string,
  password: string,
  confirmPassword: string,
}

export const initialValues:InitialValues = {
  fullName: '',
  password: '',
  confirmPassword: '',
} 
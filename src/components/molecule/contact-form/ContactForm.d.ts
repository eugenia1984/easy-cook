export interface IContactForm {
  email: string
  reason: string
  message: string
}

export interface IContactFormStatus {
  message: string
  type: string
}

export interface IContactFormStatusProps {
  [key: string]: IContactFormStatus,
}

export const contactFormStatusProps: IContactFormStatusProps = {
  success: {
    message: 'Your message has been send!',
    type: 'success',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

type InitialValues = {
  email: string,
  reason: string,
  message: string,
}

export const initialValues: InitialValues = {
  email: '',
  reason: '',
  message: '',
} 
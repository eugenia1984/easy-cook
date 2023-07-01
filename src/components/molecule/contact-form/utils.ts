import * as Yup from 'yup'

export enum CONTACT_REQUIRED {
  EMAIL = 'Plase enter an e-mail, it is required',
  REASON = 'Plase enter a reason, it is required',
  MESSAGE = 'Plase enter a message, it is required'
}

export const validateData = () => {
  Yup.object().shape({
    email: Yup.string().required(CONTACT_REQUIRED.EMAIL),
    reason: Yup.string().required(CONTACT_REQUIRED.REASON),
    message: Yup.string().required(CONTACT_REQUIRED.MESSAGE)
  })
}

export const setValueAndTouch = (setFieldValue, setTouched) => {
  setFieldValue('email', '')
  setFieldValue('reason', '')
  setFieldValue('message', '')
  setTouched('email', false)
  setTouched('reason', false)
  setTouched('message', false)
}
import * as Yup from 'yup'

export enum REQUIRED {
  FULL_NAME = 'Please enter full name, it is required.',
  PASSWORD = 'Please enter a valid password(one uppercase, one lowercase, one special character, one number and no spaces and between 8 to 20 characters), it is required.'
}

export enum VALID {
  PASSWORD = 'Please valid password. One uppercase, one lowercase, one special character, one number and no spaces. Between 8 to 20 characters'
}

const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/

export const validateData = Yup.object().shape({
  fullName: Yup.string().required(REQUIRED.FULL_NAME),
  password: Yup.string().matches(regExpPass).required(REQUIRED.PASSWORD),
  confirmPassword: Yup.string()
    .required('Required')
    .test(
      'password-match',
      'Password musth match',
      function (value) {
        return this.parent.password === value
      }
    ),
})
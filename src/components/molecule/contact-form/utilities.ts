import * as Yup from 'yup'

const regExpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
const FULL_NAME_REQUIRED = 'Please enter full name'
const PASSWORD_REQUIRED = 'Please valid password. One uppercase, one lowercase, one special character, one number and no spaces. Between 8 to 20 characters'

export const validationSchema = () => {
  Yup.object().shape({
    fullName: Yup.string().required(FULL_NAME_REQUIRED),
    password: Yup.string().matches(regExpPass).required(PASSWORD_REQUIRED),
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
}

export const setValueAndTouch = (setFieldValue, setTouched) => {
  setFieldValue('fullname', '')
  setFieldValue('password', '')
  setFieldValue('confirmPassword', '')
  setTouched('fullname', false)
  setTouched('password', false)
  setTouched('confirmPassword', false)
}
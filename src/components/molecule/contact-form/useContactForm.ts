import { useFormik } from 'formik'
import { validationSchema, setValueAndTouch } from './utilities'
import { useState } from 'react'
import { initialData } from '../login/LoginForm.d'

export const useContact = () => {
  const [loading, setLoading] = useState(false)
  const initialValues = initialData

  const sendMessage = async (body) => {
    const confirm = await alert('¿Are you sure?')
    if (confirm) {
      const res = body
      console.log('res: ',res)
      if (res.success) {
        setLoading(false);
        alert('Message send')
        setValueAndTouch(setFieldValue, setTouched)
      } else {
        alert('Error')
      }
    }
    setLoading(false)
  };

  const onSubmit = () => {
    setLoading(true)
    sendMessage(values)
  }

  const formik = useFormik({ 
    initialValues, 
    onSubmit, 
    validationSchema 
  })

  const { 
    handleChange, 
    handleSubmit, 
    values, 
    errors, 
    handleBlur, 
    touched, 
    setFieldValue, 
    setTouched 
  } = formik

  return {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    loading,
  }
}
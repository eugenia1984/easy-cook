import React, { useState } from 'react'
import { Box, Button, Grid, TextField } from '@mui/material'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Headline } from '../../atom/Headline'
import './LoginForm.styles.css'
import { IFormStatus, ISignUpForm, formStatusProps, initialValues } from './LoginForm.d'

interface LoginFormProps {
  title: string
}

export const LoginForm: React.FC<LoginFormProps> = ({ title }) => {
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: '',
    type: '',
  })

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
        // TODO: hay que pasar de User LogOut a User LogIn
      }
    } catch (error) {
      const response = error.response
      if (
        response.data === 'user already exist' &&
        response.status === 400
      ) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div className="container-content">
      <div className="root" >
        <Formik
          initialValues={ initialValues }
          onSubmit={ (values: ISignUpForm, actions) => {
            createNewUser(values, actions.resetForm)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          } }
          validationSchema={ Yup.object().shape({
            fullName: Yup.string().required('Please enter full name'),
            password: Yup.string()
              .matches(
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
              )
              .required(
                'Please valid password. One uppercase, one lowercase, one special character and no spaces'
              ),
            confirmPassword: Yup.string()
              .required('Required')
              .test(
                'password-match',
                'Password musth match',
                function (value) {
                  return this.parent.password === value
                }
              ),
          }) }
        >
          { (props: FormikProps<ISignUpForm>) => {
            const {
              values,
              touched,
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
            } = props
            return (
              <Box
                sx={ {
                  backgroundColor: 'white',
                  padding: '1rem 0.75rem 2rem',
                  borderRadius: '14px',
                } }

              >
                <Form>
                  <Headline title={ title } />
                  <Grid
                    container
                    sx={ { justify: 'space-around', direction: 'row' } }
                  >
                    <Grid
                      item
                      sx={ { width: '90%', marginBottom: '0.75rem' } }
                    >
                      <TextField
                        name="fullName"
                        id="fullName"
                        label="Full Name"
                        value={ values.fullName }
                        type="text"
                        helperText={
                          errors.fullName && touched.fullName
                            ? errors.fullName
                            : 'Enter your full name.'
                        }
                        error={
                          errors.fullName && touched.fullName
                            ? true
                            : false
                        }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        sx={ { width: '100%', marginBottom: '0.75rem' } }
                      />
                    </Grid>
                    <Grid
                      item
                      sx={ { width: '90%', marginBottom: '0.75rem' } }
                    >
                      <TextField
                        name="password"
                        id="password"
                        label="Password"
                        value={ values.password }
                        type="password"
                        helperText={
                          errors.password && touched.password
                            ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                            : 'One uppercase, one lowercase, one special character and no spaces'
                        }
                        error={
                          errors.password && touched.password
                            ? true
                            : false
                        }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        sx={ { width: '100%', marginBottom: '0.75rem' } }
                      />
                    </Grid>
                    <Grid
                      item
                      sx={ { width: '90%', marginBottom: '0.75rem' } }
                    >
                      <TextField
                        name="confirmPassword"
                        id="confirmPassword"
                        label="Confirm password"
                        value={ values.confirmPassword }
                        type="password"
                        helperText={
                          errors.confirmPassword &&
                            touched.confirmPassword
                            ? errors.confirmPassword
                            : 'Re-enter password to confirm'
                        }
                        error={
                          errors.confirmPassword &&
                            touched.confirmPassword
                            ? true
                            : false
                        }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                        sx={ { width: '100%', marginBottom: '0.75rem' } }
                      />
                    </Grid>
                    <Grid
                      item
                      className="submitButton"
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={ isSubmitting }
                      >
                        SIGN IN
                      </Button>
                      { displayFormStatus && (
                        <div className="formStatus">
                          { formStatus.type === 'error' ? (
                            <p className="errorMessage"                     >
                              { formStatus.message }
                            </p>
                          ) : formStatus.type ===
                            'success' ? (
                            <p
                              className="successMessage"
                            >
                              { formStatus.message }
                            </p>
                          ) : null }
                        </div>
                      ) }
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            )
          } }
        </Formik>
      </div>
    </div>
  )
}

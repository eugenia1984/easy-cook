import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Grid,
  TextField,
} from '@mui/material'
import { Form, Formik, FormikProps } from 'formik'
import { Headline } from '../../atom/Headline'
import { IContactFormStatus, IContactForm, contactFormStatusProps, initialValues } from './ContactForm.d'
import './ContactForm.css'
import { CONTACT_REQUIRED, validateData } from './utils'
interface ContactFormProps {
  title: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const navigate = useNavigate()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<IContactFormStatus>({
    message: '',
    type: '',
  })

  const createNewMessage = async (data: IContactForm, resetForm: Function) => {
    try {
      if (data) {
        setFormStatus(contactFormStatusProps.success)
        alert(`Message send to EasyCook!`)
        resetForm({})
      }
    } catch (error) {
      console.warn(error)
      setFormStatus(contactFormStatusProps.error)
    } finally {
      setDisplayFormStatus(true)
    }
  }


  return (
    <section className="contact-form">
      <Formik
          initialValues={ initialValues }
          onSubmit={ (values: IContactForm, actions) => {
            createNewMessage(values, actions.resetForm)
            setTimeout(() => {
              actions.setSubmitting(false)
            }, 500)
          } }
          validationSchema={ validateData }
        >
          { (props: FormikProps<IContactForm>) => {
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
                        name="email"
                        id="email"
                        label="E-mail"
                        value={ values.email }
                        type="text"
                        helperText={ errors.email && touched.email ?
                          errors.email : 'Enter your email.'
                        }
                        error={ errors.email && touched.email ?
                          true : false
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
                        name="reason"
                        id="reason"
                        label="reason"
                        value={ values.reason }
                        type="text"
                        helperText={ errors.reason && touched.reason ?
                          CONTACT_REQUIRED.REASON : CONTACT_REQUIRED.REASON
                        }
                        error={ errors.reason && touched.reason ?
                          true : false
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
                        name="message"
                        id="message"
                        label="Message"
                        value={ values.message }
                        type="text"
                        helperText={ errors.message && touched.message ?
                          CONTACT_REQUIRED.MESSAGE  : CONTACT_REQUIRED.MESSAGE
                        }
                        error={ errors.message && touched.message ?
                          true : false
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
                        SEND
                      </Button>
                      { displayFormStatus && (
                        <div className="formStatus">
                          {
                            formStatus.type === 'error' ?
                              (<p className="errorMessage">{ formStatus.message }</p>)
                              : formStatus.type === 'success' ?
                                (<p className="successMessage">{ formStatus.message }</p>)
                                :
                                null
                          }
                        </div>
                      ) }
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            )
          } }
        </Formik>
    </section>
  )
}
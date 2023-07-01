import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import { Headline } from '../../atom/Headline'
import { ContactFormType } from './ContactForm.d'
import { FormValidate } from '../../../utils/validateForm'
import { useNotification } from '../../../context/notification.context'
import './ContactForm.css'
interface ContactFormProps {
  title: string
}

export const ContactForm: React.FC<ContactFormProps> = ({ title }) => {
  const navigate = useNavigate()
  const { getSuccess } = useNotification()

  const formik = useFormik<ContactFormType>({
    initialValues: {
      email: '',
      reason: '',
      message: ''
    },
    validationSchema: FormValidate,
    onSubmit: (values: ContactFormType) => {
      getSuccess(JSON.stringify(values));
    },
  })

  return (
    <section className="contact-form">
      <Headline title={ title } />
      <Container maxWidth="sm">
        <Grid container>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={ { mt: 5, mb: 3 } }
            onClick={ () => navigate(`/`) }
          >
            Back to Home
          </Button>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={ { minHeight: '90vh' } }
        >
          <Grid item>
            <Paper sx={ { padding: '1.2em', borderRadius: '0.5em' } }>
              <Typography sx={ { mt: 1, mb: 1 } } variant="h4">
                Login
              </Typography>
              <Box component="form" onSubmit={ formik.handleSubmit }>
                <TextField
                  name="email"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Email"
                  sx={ { mt: 2, mb: 1.5 } }
                  value={ formik.values.email }
                  onChange={ formik.handleChange }
                  error={
                    formik.touched.email && Boolean(formik.errors.email)
                  }
                  helperText={ formik.touched.email && formik.errors.email }
                />
                <TextField
                  name="reason"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="Reason"
                  sx={ { mt: 1.5, mb: 1.5 } }
                  value={ formik.values.reason }
                  onChange={ formik.handleChange }
                  error={
                    formik.touched.reason && Boolean(formik.errors.reason)
                  }
                  helperText={ formik.touched.reason && formik.errors.reason }
                />
                <TextField
                  name="message"
                  margin="normal"
                  type="text"
                  fullWidth
                  label="message"
                  sx={ { mt: 1.5, mb: 1.5 } }
                  value={ formik.values.message }
                  onChange={ formik.handleChange }
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={ formik.touched.message && formik.errors.message }
                />
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  sx={ { mt: 1.5, mb: 3 } }
                >
                  Login
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
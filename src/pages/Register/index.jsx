import React, { useState } from 'react'
import Teach_logo from '../../assets/teach_logo.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useTheme } from '@mui/material/styles'
import {
  TextField,
  Button,
  FormControl,
  Alert,
  Select,
  MenuItem,
  FormHelperText,
  FormLabel,
  FormGroup,
  Box,
  Typography,
  IconButton,
  Snackbar,
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  role: Yup.string().required('Role is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
})

function Register() {
  const [open, setOpen] = useState(false)
  const handleSnackbar = () => {
    setOpen(true)
  }
  const navigate = useNavigate()
  const theme = useTheme()
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      role: '',
      dateOfBirth: '',
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      //Display a notification with MUI components of success
      handleSnackbar()
      //   navigate to / if successful
      navigate('/')
    },
  })
  const handleFileChange = (event) => {
    formik.setFieldValue('profilePicture', event.currentTarget.files[0])
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* For alerts */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
      >
        <Alert onClose={() => setOpen(false)} severity="success">
          Registration successful!
        </Alert>
      </Snackbar>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          
        }}
      >
        {/* <Box
          sx={{
            mt: '5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40%',
            background:
              'linear-gradient(180deg, #BBE1EF 0%, rgba(187, 225, 239, 0) 100%)',
            height: '100vh',
            // borderRadius: '5%',
          }}
        ></Box> */}
        {/* Form */}
        <Box>
          <Typography
            component={'h1'}
            sx={{
              margin: '3rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#545971',
              textAlign: 'center',
            }}
          >
            <img
              src={Teach_logo}
              style={{
                margin: '0 20px',
              }}
              alt="Teach Logo"
            />
            Registration
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              // height: '100vh',
              //   border: '2px solid green',
            }}
          >
            <FormControl
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              fullWidth
              error={
                formik.touched.profilePicture &&
                Boolean(formik.errors.profilePicture)
              }
            >
              <FormLabel>Upload a photo</FormLabel>
              <FormGroup>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  {formik.values.profilePicture && (
                    <Box
                      component="img"
                      src={URL.createObjectURL(formik.values.profilePicture)}
                      width={150}
                      height={150}
                      borderRadius="50%"
                    />
                  )}
                  <label htmlFor="profilePicture">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      sx={{
                        margin: '10px',
                        bgcolor: 'primary.main',
                        color: 'white',
                        borderRadius: '50%',
                        p: '10px',
                        '&:hover': {
                          bgcolor: 'primary.dark',
                        },
                      }}
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <input
                    id="profilePicture"
                    name="profilePicture"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </Box>
                <FormHelperText error>
                  {formik.touched.profilePicture &&
                    formik.errors.profilePicture}
                </FormHelperText>
              </FormGroup>
            </FormControl>
            {/* Name and Surname */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                mt: '1rem',
                '@media (max-width: 600px)': {
                  flexDirection: 'column',
                  width: '100%',
                  '& > *': {
                    width: '95%',
                    mt: '1rem',
                  },
                },
              }}
            >
              <TextField
                sx={{
                  width: '45%',
                }}
                id="name"
                name="name"
                label="Name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />

              <TextField
                sx={{
                  width: '45%',
                }}
                id="surname"
                name="surname"
                label="Surname"
                type="text"
                value={formik.values.surname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.surname && Boolean(formik.errors.surname)}
                helperText={formik.touched.surname && formik.errors.surname}
              />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                width: '100%',
                mt: '1rem',
                // on small screens display the fields one below the other with a full width and the inputs with a width of 100% having space between them
                '@media (max-width: 600px)': {
                  flexDirection: 'column',
                  width: '100%',
                  '& > *': {
                    width: '95%',
                    mt: '1rem',
                  },
                },
              }}
            >
              <TextField
                sx={{
                  width: '45%',
                }}
                id="email"
                name="email"
                label="Email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                sx={{
                  width: '45%',
                }}
                id="dateOfBirth"
                name="dateOfBirth"
                label="Date of birth"
                type="date"
                value={formik.values.dateOfBirth}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.dateOfBirth &&
                  Boolean(formik.errors.dateOfBirth)
                }
                helperText={
                  formik.touched.dateOfBirth && formik.errors.dateOfBirth
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

            <FormControl
              sx={{
                width: '95%',
                mt: '1rem',
              }}
              error={formik.touched.role && Boolean(formik.errors.role)}
            >
              {/* <InputLabel id="role-label">Role</InputLabel> */}
              <Select
                //a place holder for the select input
                displayEmpty
                renderValue={(value) => {
                  return value
                    ? value[0].toUpperCase() + value.substring(1)
                    : 'Role'
                }}
                labelId="role-label"
                id="role"
                name="role"
                value={formik.values.role}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <MenuItem value="lecturer">Lecturer</MenuItem>
                <MenuItem value="Senior Lecturer">Senior Lecturer</MenuItem>
                <MenuItem value="Associate Professor">
                  Associate Professor
                </MenuItem>
                <MenuItem value="Professor">Professor</MenuItem>
              </Select>
              {formik.touched.role && formik.errors.role && (
                <div className="error">{formik.errors.role}</div>
              )}
            </FormControl>

            <Button
              type="submit"
              sx={{
                margin: '1.2em',
                width: '50%',
                textTransform: 'capitalize',
              }}
              variant="contained"
            >
              Register
            </Button>
            {/* {formik.submitCount > 0 && (
              <Alert severity="success">Registration successful!</Alert>
            )} */}
          </form>
          {/* New to TEACH create an account here */}
          <Typography
            component={'h3'}
            sx={{
              margin: '1rem',
              fontSize: '1rem',
              color: '#545971',
              textAlign: 'center',
            }}
          >
            Already have an account ?{' '}
            <a
              style={{
                color: theme.palette.primary.main,
              }}
              href="/Login"
            >
              Login here
            </a>
          </Typography>
        </Box>
      </section>
      {/* footer */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '10vh',
          background: '#fff',
          color: '#000',
        }}
      >
        <Typography
          component={'h3'}
          sx={{
            fontSize: '1rem',
            color: '#545971',
            textAlign: 'center',
            height: '10vh',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          ©T.E.A.C.H - University of Johannesburg™ 2023
        </Typography>
      </Box>
    </Box>
  )
}

export default Register

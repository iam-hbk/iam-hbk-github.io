import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Teach_logo from '../../assets/teach_logo.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { TextField, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
})

function Login() {
  const theme = useTheme()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      navigate('/')
    },
  })
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        background:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, #fff 0%, rgba(0,212,255,.1) 100%)',
        alignItems: 'center',
      }}
    >
      <Typography
        component={'h1'}
        sx={{
          margin: '3rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#000',
          textAlign: 'center',
        }}
      >
        Welcome back to the{' '}
        <img
          src={Teach_logo}
          style={{
            margin: '0 20px',
          }}
          alt="Teach Logo"
        />
        Academic Competency Tool
      </Typography>
      {/* A divider from MUI */}
      <Divider
        sx={{
          width: '60%',
          height: '.1px',
          borderColor: '#ddd',
          margin: '1rem 0',
        }}
      />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '40%',
          background:
            'linear-gradient(180deg, #BBE1EF 0%, rgba(187, 225, 239, 0) 100%)',
          height: '100vh',
          borderRadius: '5%',
        }}
      >
        <Typography
          component={'h2'}
          sx={{
            margin: '3rem',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#545971',
            textAlign: 'center',
          }}
        >
          Sign in
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '80%',
          }}
        >
          <TextField
            sx={{
              width: '100%',
              borderRadius: '15%',
              marginTop: '1.2em',
            }}
            inputProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
            variant="filled"
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
              width: '100%',
              borderRadius: '15%',
              marginTop: '1.2em',
            }}
            inputProps={{
              style: {
                backgroundColor: 'white',
              },
            }}
            variant="filled"
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button
            type="submit"
            sx={{
              margin: '1.2em',
              width: '50%',
              textTransform: 'capitalize',
            }}
            variant="contained"
          >
            Login
          </Button>
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
          New to TEACH?{' '}
          <a
            style={{
              color: theme.palette.primary.main,
            }}
            href="/Register"
          >
            Create an account here
          </a>
        </Typography>
      </Box>
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

export default Login

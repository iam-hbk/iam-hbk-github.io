import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  Email: Yup.string().email('Invalid email').required('Email is required'),
  StaffNumber: Yup.string().required('Staff number is required'),
  FullNames: Yup.string().required('Full names are required'),
  Phone: Yup.string().required('Phone number is required'),
})

function Profile() {
  const isLessThan600px = useMediaQuery('(max-width:600px)')
  const formik = useFormik({
    initialValues: {
      FullNames: 'Heritier Kaumbu',
      StaffNumber: '123456789',
      Email: 'heritierk@uj.ac.za',
      Phone: '+27 82 123 4567',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      alert('Details updated successfully')
      //   navigate('/')
    },
  })

  return (
    <Box
      style={{
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        position: 'relative',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // border: '2px solid yellow',
        boxSizing: 'border-box',
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
            padding: '1rem',
        //   border: '2px solid orange',
        }}
      >
        Account Information
      </Typography>
      <Paper
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        //   border: '2px solid purple',
          flexDirection: isLessThan600px ? 'column' : 'row',
          //   fill the entire width of the parent
          width: '92%',
          padding: '1.5rem',
          flexGrow: 1,
          backgroundColor: '#dddddd5',
          //   direction becomes column when screen size is less than 600px
          //   '@media (max-width: 600px)': {
          //     flexDirection: 'column',
          //   },
        }}
      >
        {/* left section  */}
        <Box
          width={isLessThan600px ? '100%' : '50%'}
          sx={{
            borderRight: isLessThan600px ? 'none' : '1px solid #ddd',
            // border: '1px solid red',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
            //   border: '2px solid #000',
              width: '100%',
            }}
          >
            <Box
              sx={{
                justifyContent: 'center',
                marginLeft: '3rem',
                alignItems: 'center',
                display: 'flex',
                width: '110px',
                height: '110px',
                borderRadius: '100%',
                backgroundColor: '#ddd',
              }}
            >
              <Typography variant="h3" color={'GrayText'}>
                HK
              </Typography>
            </Box>
            <Typography
              variant="h4"
              sx={{
                marginLeft: '3rem',
                color: 'GrayText',
              }}
            >
              Hey Heritier
            </Typography>
          </Box>
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
              disabled
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
              id="fullNames"
              name="fullNames"
              label="Full Names"
              type="fullNames"
              value={formik.values.FullNames}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.FullNames && Boolean(formik.errors.FullNames)
              }
              helperText={formik.touched.FullNames && formik.errors.FullNames}
            />
            <TextField
              disabled
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
              id="StaffNumber"
              name="StaffNumber"
              label="Staff Number"
              value={formik.values.StaffNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.StaffNumber && Boolean(formik.errors.StaffNumber)
              }
              helperText={
                formik.touched.StaffNumber && formik.errors.StaffNumber
              }
            />
            <TextField
              disabled
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
              id="Email"
              name="Email"
              label="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
            />
            <TextField
              disabled
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
              id="Phone"
              name="Phone"
              label="Phone"
              value={formik.values.Phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
            />
          </form>
        </Box>
        {/* right section  */}
        <Box
          width={isLessThan600px ? '100%' : '50%'}
          sx={{
            // border: '1px solid red',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
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
              id="fullNames"
              name="fullNames"
              label="Full Names"
              type="fullNames"
              value={formik.values.FullNames}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.FullNames && Boolean(formik.errors.FullNames)
              }
              helperText={formik.touched.FullNames && formik.errors.FullNames}
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
              id="StaffNumber"
              name="StaffNumber"
              label="Staff Number"
              value={formik.values.StaffNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.StaffNumber && Boolean(formik.errors.StaffNumber)
              }
              helperText={
                formik.touched.StaffNumber && formik.errors.StaffNumber
              }
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
              id="Email"
              name="Email"
              label="Email"
              type="email"
              value={formik.values.Email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Email && Boolean(formik.errors.Email)}
              helperText={formik.touched.Email && formik.errors.Email}
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
              id="Phone"
              name="Phone"
              label="Phone"
              value={formik.values.Phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.Phone && Boolean(formik.errors.Phone)}
              helperText={formik.touched.Phone && formik.errors.Phone}
            />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                width: '100%',
                marginTop: '1.2em',
              }}
            >
              {['Update Details', 'Delete Account', 'Logout'].map((item) => {
                return (
                  <Button
                    key={item}
                    variant="contained"
                    sx={{
                      backgroundColor: item === 'Logout' && 'error.dark',
                      display: 'inline-flex',
                      textTransform: 'capitalize',
                      margin: '0.5em',
                    }}
                  >
                    {item}
                  </Button>
                )
              })}
            </Box>
          </form>
        </Box>
      </Paper>
    </Box>
  )
}

export default Profile

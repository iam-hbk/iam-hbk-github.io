import { Box, Button } from '@mui/material'
import { Link, useRouteError } from 'react-router-dom'
import Logo from './assets/uj_logo.svg'
export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <Box
      sx={{
        fontFamily: 'Poppins',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
      }}
    >
      <img
        src={Logo}
        alt="error"
        style={{
          width: '300px',
          height: '300px',
        }}
      />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button>
        <Link to="/">Go back to home</Link>
      </Button>
    </Box>
  )
}

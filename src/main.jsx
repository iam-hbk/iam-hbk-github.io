import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './assets/theme'
import { ThemeProvider } from '@mui/material'
import '@fontsource/poppins'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Resources from './pages/Resources'
import Forum from './pages/Forum'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/resources', element: <Resources /> },
      { path: '/forum', element: <Forum /> },
      { path: '/contact', element: <ContactUs /> },
    ],
  },
  {
    path: 'Login',
    element: <Login />,
  },
  {
    path: 'Register',
    element: <Register />,
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)

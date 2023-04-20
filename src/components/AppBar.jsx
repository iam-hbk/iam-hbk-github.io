import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import Logo from '../assets/uj_logo.svg'
import { Link } from 'react-router-dom'

const pages = [
  { text: 'Home', link: '/' },
  { text: 'Profile', link: '/profile' },
  { text: 'Dashboard', link: '/dashboard' },
  { text: 'Resources', link: '/resources' },
  { text: 'Discussion forum', link: '/forum' },
  { text: 'Contact Us', link: '/contact' },
]

export default function MyAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="a"
            href=""
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <img
              src={Logo}
              alt="UJ LOGO"
              style={{
                width: '150px',
                height: '90px',
              }}
            />
            <div
              style={{
                padding: '0 10px',
              }}
            >
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'block',
                }}
              >
                Department of
              </Typography>
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'block',
                }}
              >
                Industrial Psychology
              </Typography>
              <Typography
                style={{
                  fontWeight: 'bold',
                  display: 'block',
                }}
              >
                and People Management
              </Typography>
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,

              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  sx={{
                    ':hover': {
                      color: 'primary.main',
                    },
                  }}
                  onClick={handleCloseNavMenu}
                >
                  <Typography
                    component={'a'}
                    href={page.link}
                    textAlign="center"
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    {page.text}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            <img
              src={Logo}
              alt="UJ LOGO"
              style={{
                width: '150px',
                height: '90px',
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            {pages.map((page, index) => (
              <Button
                component={'a'}
                href={page.link}
                variant="text"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                  marginRight: '15px',
                  fontSize: '1rem',
                  my: 2,
                  color: 'black',
                  display: 'block',
                  textTransform: 'capitalize',
                  ':hover': {
                    color: 'primary.main',
                  },
                }}
              >
                {page.text}
              </Button>
            ))}
            <Button
              onClick={() => {
                window.location.href = 'Login'
              }}
              variant="outlined"
              sx={{ my: 2, display: 'block' }}
            >
              Login
            </Button>
            <Button
              onClick={() => {
                window.location.href = 'Register'
              }}
              variant="contained"
              sx={{ boxShadow: 'none', m: 2, display: 'block' }}
            >
              Register
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

import * as React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import AdbIcon from '@mui/icons-material/Adb'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined'
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
const pages = ['Shop Service']
const settings = [
  {
    title: 'Helpers',
    icon: <SupervisorAccountOutlinedIcon />,
    tab: '/helpers',
  },

  {
    title: 'Autos',
    icon: <AirportShuttleOutlinedIcon />,
    tab: '/autos',
  },
  {
    title: 'Boxes',
    icon: <LuggageOutlinedIcon />,
    tab: '/boxes',
  },
]

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const navigate = useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    navigate('/sign-in')
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const handleMenuItemClick = (tab) => {
    navigate(tab)
    setAnchorElUser(null)
  }

  return (
    <AppBar position='static' sx={{ background: '#fff' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src='https://www.imoving.com/img/imoving_colored_logo.png' />
          </Typography>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'flex',
              },
            }}
          >
            <Tooltip>
              <Typography
                onClick={handleOpenUserMenu}
                sx={{
                  color: '#222',
                  marginLeft: '20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                Shop Service
              </Typography>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
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
              {settings.map((setting, index) => (
                <MenuItem
                  key={index}
                  onClick={() => handleMenuItemClick(setting.tab)}
                >
                  <Box display='flex' alignItems='center'>
                    {setting.icon}
                    <Typography
                      textAlign='center'
                      sx={{ color: '#222', marginLeft: '20px' }}
                    >
                      {setting.title}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: '#222',
                display: 'block',
                textTransform: 'capitalize',
              }}
            >
              Sign In
            </Button>
            {/* {settings.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#222', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header

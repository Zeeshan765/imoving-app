import React, { useState } from 'react'
import {
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  IconButton,
  InputAdornment,
  Link,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import {
  ArrowBack,
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  return (
    <Box
      sx={{
        maxWidth: 440,
        mx: 'auto',
        mt: {
          lg: 10,
        },
        px: 3,
        py: 5,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 3,cursor:'pointer' }} onClick={() => navigate('/')}>
        <img
          src='https://www.imoving.com/img/iMovingLogo.png'
          alt='iMoving Logo'
          style={{ width: '100px' }}
        />
      </Box>
      <Button
        variant='outlined'
        fullWidth
        sx={{
          mb: 2,
          borderColor: '#DCDFE6',
          color: '#202948',
          textTransform: 'none',
          fontWeight: 'bold',
          borderRadius: '5px',
          padding: '20px',
          fontSize: '16px',
        }}
        startIcon={
          <img
            style={{
              width: '20px',
              height: '20px',
              marginRight: '10px',
            }}
            src='./google.jpeg'
            alt='Google Icon'
          />
        }
      >
        Continue with Google
      </Button>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 1,
          mb: 4,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: '1px',
            bgcolor: '#DCDFE6',
          }}
        />
        <Typography
          sx={{
            mx: 2,
            // color: '#202948',
            // fontSize: '14px',
            // fontWeight: 'bold',
          }}
          variant='body1'
        >
          or
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            height: '1px',
            bgcolor: '#DCDFE6',
          }}
        />
      </Box>

      <Box
        sx={{
          paddingX: {
            lg: '50px',
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ paddingBottom: '25px' }}>
            <TextField
              fullWidth
              label='Email Address'
              variant='outlined'
              required
              type='email'
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#DCDFE6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00b4f6',
                  },
                  '&.Mui-focused fieldset': {
                    border: '3px solid #00b4f6 ',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailOutlined
                      sx={{
                        color: '#00b4f652',
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: '#222' },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                mt: 1.5,
              }}
            >
              <Link
                href='/forgot-password'
                sx={{ color: '#00b4f6', textDecoration: 'none' }}
              >
                <span
                  sx={{
                    fontSize: '1rem',
                  }}
                >
                  Forgot your password?
                </span>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ paddingBottom: '25px' }}>
            <TextField
              fullWidth
              label='Password'
              variant='outlined'
              required
              type={showPassword ? 'text' : 'password'}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#DCDFE6',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00b4f6',
                  },
                  '&.Mui-focused fieldset': {
                    border: '3px solid #00b4f6 ',
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <LockOutlined
                      sx={{
                        color: '#00b4f652',
                      }}
                    />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleClickShowPassword} edge='end'>
                      {showPassword ? (
                        <VisibilityOffOutlined
                          sx={{
                            color: '#00b4f652',
                          }}
                        />
                      ) : (
                        <VisibilityOutlined
                          sx={{
                            color: '#00b4f652',
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              InputLabelProps={{
                sx: { color: '#222' },
              }}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1,
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label='Remember me'
                sx={{
                  color: '#222',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant='contained'
              sx={{
                padding: 2,
                bgcolor: '#00b4f6',
                fontSize: '16px',
                border: '1px solid transparent',
                '&:hover': {
                  color: '#00b4f6',
                  bgcolor: 'transparent',
                  border: '1px solid #00b4f6',
                },
              }}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: 'center',
            mt: 3,
            color: '#222',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='body2'
            sx={{
              mr: 1,
              fontSize: '1rem',
            }}
          >
            New to iMoving ?
          </Typography>
          <Link
            href='/sign-up'
            sx={{
              color: '#00b4f6',
              textDecoration: 'none',
              marginRight: '5px',
            }}
          >
            <span
              sx={{
                fontSize: '1rem',
              }}
            >
              Create an account.
            </span>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SignInForm

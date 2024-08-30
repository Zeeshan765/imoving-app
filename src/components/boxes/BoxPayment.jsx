import {
  Box,
  Checkbox,
  Divider,
  Grid,
  Paper,
  styled,
  Tab,
  Tabs,
  Typography,
  MenuItem,
} from '@mui/material'
import { InputAdornment, TextField, IconButton, Button } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import React, { useState } from 'react'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const BoxPayment = ({handleNext}) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const currentYear = new Date().getFullYear()
  const [showRestrictions, setShowRestrictions] = useState(false)

  const toggleRestrictions = () => {
    setShowRestrictions((prev) => !prev)
  }

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value)
  }

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value)
  }
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={1} justifyContent='center'>
          <Grid item xs={12} md={7}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{
                marginTop: '20px',
              }}
            >
              <Grid item xs={12} md={8}>
                <Paper elevation={1}>
                  <Item sx={{ bgcolor: 'background.paper' }}>
                    <Box
                      sx={{
                        padding: {
                          lg: '50px',
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ padding: '25px' }}>
                          <Typography
                            variant='h5'
                            sx={{
                              color: 'black',
                              fontWeight: 'bold',
                              textAlign: 'left',
                            }}
                          >
                            Contact Information
                          </Typography>
                          <Divider
                            sx={{
                              marginTop: '15px',
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ paddingBottom: '25px' }}
                        >
                          <TextField
                            fullWidth
                            label='First Name'
                            variant='outlined'
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ paddingBottom: '25px' }}
                        >
                          <TextField
                            fullWidth
                            label='Last Name'
                            variant='outlined'
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                              },
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sx={{ padding: '25px' }}>
                          <Typography
                            variant='h5'
                            sx={{
                              color: 'black',
                              fontWeight: 'bold',
                              textAlign: 'left',
                            }}
                          >
                            Manage Your Booking
                          </Typography>
                          <Divider
                            sx={{
                              marginTop: '15px',
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sx={{ paddingX: '25px' }}>
                          <Typography
                            variant='body1'
                            sx={{
                              textAlign: 'left',
                            }}
                          >
                            Enter email and phone number for login details and
                            order confirmation.
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ paddingBottom: '25px' }}
                        >
                          <TextField
                            fullWidth
                            label='Email Address'
                            placeholder='Email for conformation'
                            variant='outlined'
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                              },
                            }}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={6}
                          sx={{ paddingBottom: '25px' }}
                        >
                          <TextField
                            fullWidth
                            label='Phone Number'
                            variant='outlined'
                            placeholder='In case we need to reach you'
                            required
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&:hover fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: '#DCDFE6',
                                },
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Paper>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={1}
              justifyContent='center'
              sx={{
                marginTop: '20px',
              }}
            >
              <Grid item xs={12} md={8}>
                <Paper elevation={1}>
                  <Item sx={{ bgcolor: 'background.paper' }}>
                    <Box
                      sx={{
                        padding: {
                          lg: '50px',
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        {/* Payment Method Header */}
                        <Grid item xs={12}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            <Box>
                              <Typography
                                variant='h5'
                                sx={{
                                  color: 'black',
                                  fontWeight: 'bold',
                                  textAlign: 'left',
                                }}
                              >
                                How would you like to pay?
                              </Typography>
                            </Box>
                            <Box>
                              <img
                                src='https://www.imoving.com/img/payment-logo.png'
                                alt='Secure'
                              />
                            </Box>
                          </Box>
                        </Grid>

                        {/* Tabs for Payment Method */}
                        <Grid item xs={12}>
                          <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            indicatorColor='primary'
                            textColor='primary'
                            sx={{
                              borderBottom: 1,
                              borderColor: 'divider',
                            }}
                          >
                            <Tab label='Debit/Credit Card' />
                            <Tab label='Split Payment' />
                          </Tabs>
                        </Grid>

                        {/* Payment Details */}
                        <Grid item xs={12} sx={{ padding: '25px' }}>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}
                          >
                            {/* Accepted Cards */}
                            <Box>
                              <img
                                src='https://www.imoving.com/img/credit-cards-new.png'
                                alt='Visa'
                              />
                            </Box>
                          </Box>
                        </Grid>

                        {/* Name on Card and Card Number */}
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label='Name on Card'
                            placeholder='Enter Name on Card'
                            variant='outlined'
                            required
                            sx={{ marginBottom: '20px' }}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            label='Card Number'
                            placeholder='XXXX XXXX XXXX XXXX'
                            variant='outlined'
                            required
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position='end'>
                                  <CreditCardOutlinedIcon />
                                </InputAdornment>
                              ),
                            }}
                            sx={{ marginBottom: '20px' }}
                          />
                        </Grid>

                        {/* Expiration Date and Security Code */}
                        <Grid item xs={6} md={3}>
                          <TextField
                            select
                            fullWidth
                            label='Month'
                            value={selectedMonth}
                            onChange={handleMonthChange}
                            variant='outlined'
                            required
                            sx={{ marginBottom: '20px' }}
                          >
                            {[...Array(12).keys()].map((m) => (
                              <MenuItem key={m + 1} value={m + 1}>
                                {String(m + 1).padStart(2, '0')}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            select
                            fullWidth
                            label='Year'
                            value={selectedYear}
                            onChange={handleYearChange}
                            variant='outlined'
                            required
                            sx={{ marginBottom: '20px' }}
                          >
                            {Array.from(new Array(20), (v, i) => (
                              <MenuItem key={i} value={currentYear + i}>
                                {currentYear + i}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={6} md={3}>
                          <TextField
                            fullWidth
                            label='Security Code'
                            placeholder='CVV'
                            variant='outlined'
                            required
                            sx={{ marginBottom: '20px' }}
                          />
                        </Grid>

                        {/* Billing Address Section */}
                        <Grid item xs={12}>
                          <Typography
                            variant='h6'
                            sx={{
                              color: 'black',
                              fontWeight: 'bold',
                              textAlign: 'left',
                            }}
                          >
                            Billing Address
                          </Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ display: 'flex', alignItems: 'center' }}
                        >
                          <Checkbox />
                          <Typography variant='body1'>
                            Same as pickup address
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          {/* <Typography
                            variant='body2'
                            sx={{
                              color: '#0096D7',
                              fontWeight: 'bold',
                              textAlign: 'left',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
                          >
                            Update Billing Address
                          </Typography> */}
                          <Typography
                            variant='h6'
                            sx={{
                              color: '#0096D7',
                              fontWeight: 'bold',
                              textAlign: 'left',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
                            onClick={toggleRestrictions}
                          >
                            Update Billing Address
                            <IconButton size='small'>
                              {showRestrictions ? (
                                <ExpandLessOutlinedIcon
                                  sx={{
                                    color: '#0096D7',
                                  }}
                                />
                              ) : (
                                <ExpandMoreOutlinedIcon
                                  sx={{
                                    color: '#0096D7',
                                  }}
                                />
                              )}
                            </IconButton>
                          </Typography>
                        </Grid>
                        {showRestrictions && (
                          <Box
                            sx={{
                              marginTop: '25px',
                            }}
                          >
                            <Grid container spacing={2}>
                              <Grid item xs={12} sx={{ padding: '25px' }}>
                                <TextField
                                  fullWidth
                                  label='Full Address'
                                  placeholder='Enter Zip Code or Full Address'
                                  variant='outlined'
                                  required
                                  type='text'
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&:hover fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                    },
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <LocationOnOutlinedIcon
                                          sx={{
                                            color: '#00b4f652',
                                          }}
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                  InputLabelProps={{
                                    sx: { color: '#222' }, // Adjust the color as needed
                                  }}
                                />
                              </Grid>
                              <Grid item xs={12} sx={{ padding: '25px' }}>
                                <TextField
                                  fullWidth
                                  label='Full Address'
                                  placeholder='Enter Zip Code or Full Address'
                                  variant='outlined'
                                  required
                                  type='text'
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&:hover fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                    },
                                  }}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <LocationOnOutlinedIcon
                                          sx={{
                                            color: '#00b4f652',
                                          }}
                                        />
                                      </InputAdornment>
                                    ),
                                  }}
                                  InputLabelProps={{
                                    sx: { color: '#222' }, // Adjust the color as needed
                                  }}
                                />
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                sm={4}
                                sx={{ paddingBottom: '25px' }}
                              >
                                <TextField
                                  fullWidth
                                  label='Email Address'
                                  placeholder='Email for conformation'
                                  variant='outlined'
                                  required
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&:hover fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={4}
                                sx={{ paddingBottom: '25px' }}
                              >
                                <TextField
                                  fullWidth
                                  label='Phone Number'
                                  variant='outlined'
                                  placeholder='In case we need to reach you'
                                  required
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&:hover fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                    },
                                  }}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                sm={4}
                                sx={{ paddingBottom: '25px' }}
                              >
                                <TextField
                                  fullWidth
                                  label='Phone Number'
                                  variant='outlined'
                                  placeholder='In case we need to reach you'
                                  required
                                  sx={{
                                    '& .MuiOutlinedInput-root': {
                                      '& fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&:hover fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                      '&.Mui-focused fieldset': {
                                        borderColor: '#DCDFE6',
                                      },
                                    },
                                  }}
                                />
                              </Grid>

                              <Grid
                                item
                                xs={12}
                                md={6}
                                sx={{ paddingBottom: '25px' }}
                              >
                                <Button
                                  variant='contained'
                                  sx={{
                                    padding: '16px 20px 15px 20px',
                                    background: '#00B4F6',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    width: '100%',
                                  }}
                                >
                                  Update Address
                                </Button>
                              </Grid>
                            </Grid>
                          </Box>
                        )}
                      </Grid>
                    </Box>
                  </Item>
                </Paper>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{
                marginTop: '20px',
              }}
            >
              <Grid item xs={12} md={8}>
                <Paper elevation={1}>
                  <Item sx={{ bgcolor: 'background.paper' }}>
                    <Box
                      sx={{
                        padding: {
                          lg: '50px',
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          sx={{ paddingBottom: '25px' }}
                        >
                          <Button
                            variant='contained'
                            sx={{
                              padding: '16px 20px 15px 20px',
                              background: '#00B4F6',
                              color: '#fff',
                              fontWeight: 'bold',
                              fontSize: '1rem',
                              width: '100%',
                            }}
                          >
                            Complete Booking
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{
                marginTop: '20px',
              }}
            >
              <Grid item xs={12} md={11}>
                <Paper elevation={1}>
                  <Item sx={{ bgcolor: 'background.paper' }}>
                    <Box
                      sx={{
                        padding: {
                          lg: '50px',
                        },
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sx={{ padding: '25px' }}>
                          <Typography
                            variant='h5'
                            sx={{
                              color: 'black',
                              fontWeight: 'bold',
                              textAlign: 'left',
                              padding: '10px',
                              borderRadius: '4px',
                            }}
                          >
                            Order Summary
                          </Typography>
                          <Divider
                            sx={{
                              marginTop: '15px',
                            }}
                          />
                        </Grid>

                        <Grid item xs={12} sx={{ padding: '10px 25px' }}>
                          <Grid container justifyContent='space-between'>
                            <Typography
                              variant='body1'
                              sx={{
                                color: 'black',
                                textAlign: 'left',
                              }}
                            >
                              Order price
                            </Typography>
                            <Typography
                              variant='body1'
                              sx={{
                                color: 'black',
                                fontWeight: 'bold',
                              }}
                            >
                              $76
                            </Typography>
                          </Grid>

                          <Grid
                            container
                            justifyContent='space-between'
                            sx={{ marginTop: '10px' }}
                          >
                            <Typography
                              variant='body1'
                              sx={{
                                color: 'black',
                                textAlign: 'left',
                              }}
                            >
                              Service Fee
                            </Typography>
                            <Typography
                              variant='body1'
                              sx={{
                                color: 'black',
                                fontWeight: 'bold',
                              }}
                            >
                              $4
                            </Typography>
                          </Grid>

                          <Grid container justifyContent='space-between'>
                            <Typography
                              variant='h6'
                              sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                marginTop: '10px',
                              }}
                            >
                              Total Price
                            </Typography>
                            <Typography
                              variant='h6'
                              sx={{
                                color: 'black',
                                fontWeight: 'bold',
                              }}
                            >
                              $80
                            </Typography>
                          </Grid>
                          <Divider
                            sx={{ marginTop: '20px', marginBottom: '10px' }}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Item>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BoxPayment

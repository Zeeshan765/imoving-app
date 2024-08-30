import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from '../boxes/BoxQuoteTab'
import ShippingQuoteTab from './ShippingQuoteTab'
import { InputAdornment, TextField, IconButton, Button } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import { Add, Remove } from '@mui/icons-material'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const ShippingAddress = ({ handleNext }) => {
  const [showRestrictions, setShowRestrictions] = useState(false)

  const toggleRestrictions = () => {
    setShowRestrictions((prev) => !prev)
  }

  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{
            marginTop: '20px',
          }}
        >
          <Grid item xs={12} md={5}>
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
                        variant='h6'
                        sx={{
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'left', // Align the text to the left
                        }}
                      >
                        Shipping Address
                      </Typography>
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
                    <Grid item xs={12} sx={{ padding: '25px' }}>
                      <TextField
                        fullWidth
                        label='Remarks (optional)'
                        placeholder='Apartment, Suite, etc..'
                        variant='outlined'
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
                              <EditOutlinedIcon
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

                    <Grid item xs={12}>
                      <Typography
                        variant='h6'
                        sx={{
                          color: 'black',
                          fontWeight: 'bold',
                          textAlign: 'left',
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                        }}
                        onClick={toggleRestrictions}
                      >
                        Any Restrictions?{' '}
                        <IconButton size='small'>
                          {showRestrictions ? (
                            <ExpandLessOutlinedIcon />
                          ) : (
                            <ExpandMoreOutlinedIcon />
                          )}
                        </IconButton>
                      </Typography>
                    </Grid>
                    {showRestrictions && (
                      <Grid item xs={12}>
                        <Box
                          sx={{
                            padding: '20px',
                            border: '1px solid #DCDFE6',
                            borderRadius: '4px',
                          }}
                        >
                          <Typography
                            variant='h6'
                            sx={{
                              marginBottom: '10px',
                              marginTop: '10px',
                              fontWeight: 'bold',
                              color: 'black',
                              textAlign: 'left',
                            }}
                          >
                            Restrictions
                          </Typography>
                          <Typography
                            sx={{
                              marginBottom: '10px',
                              marginTop: '10px',

                              textAlign: 'left',
                            }}
                          >
                            Please add restriction if any to make sure your
                            moving day will go smoothly.
                          </Typography>

                          {[
                            { label: 'Flight of stairs', unit: '0' },
                            { label: 'Long Carry', unit: "0'" },
                          ].map((item, index) => (
                            <Grid container key={index} spacing={1}>
                              <Grid item xs={8}>
                                <Typography variant='body1'>
                                  {item.label}
                                </Typography>
                              </Grid>
                              <Grid item xs={4}>
                                <Grid container justifyContent='space-between'>
                                  <IconButton size='small'>
                                    <Remove />
                                  </IconButton>
                                  <Typography>{item.unit}</Typography>
                                  <IconButton size='small'>
                                    <Add />
                                  </IconButton>
                                </Grid>
                              </Grid>
                            </Grid>
                          ))}

                          {[
                            { label: 'Elevator' },
                            { label: 'Need shuttle' },
                            { label: 'Building Insurance' },
                          ].map((item, index) => (
                            <Grid item xs={12} key={index}>
                              <Grid container alignItems='center' spacing={1}>
                                <Grid item xs={8}>
                                  <Typography variant='body1'>
                                    {item.label}
                                  </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                  <Button variant='outlined' size='small'>
                                    Yes
                                  </Button>
                                  <Button
                                    variant='contained'
                                    size='small'
                                    sx={{ ml: 1 }}
                                  >
                                    No
                                  </Button>
                                </Grid>
                              </Grid>
                            </Grid>
                          ))}
                        </Box>
                      </Grid>
                    )}
                  </Grid>
                </Box>
              </Item>
            </Paper>
          </Grid>
        </Grid>
        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleNext}
            variant='contained'
            sx={{
              padding: '16px 20px 15px 20px',
              background: '#00B4F6',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default ShippingAddress

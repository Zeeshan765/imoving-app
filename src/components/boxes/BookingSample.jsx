import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const BookingSample = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Typography
              variant='h3'
              align='center'
              sx={{
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              iMoving Makes Booking Simple
            </Typography>
          </Grid>
        </Grid>

        {/* <Grid container spacing={1} justifyContent='center'>
          <Grid item xs={12} md={4}>
            <img src='https://imoving.com/img/choose-moving-kit.png' alt='' />
          </Grid>
          <Grid item xs={12} md={4}>
          <img src='https://imoving.com/img/choose-moving-kit.png' alt='' />
          </Grid>
          <Grid item xs={12} md={4}>
          <img src='https://imoving.com/img/choose-moving-kit.png' alt='' />
          </Grid>
          <Grid item xs={12} md={4}>
          <img src='https://imoving.com/img/choose-moving-kit.png' alt='' />
          </Grid>
        </Grid> */}

        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{ marginTop: '30px' }}
        >
          <Grid item xs={8}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{ position: 'relative' }}
            >
              <Paper></Paper>
              <Grid item xs={12} lg={4}>
                <img
                  src='https://imoving.com/img/choose-moving-kit.png'
                  alt=''
                />
                <Box
                  sx={{
                    mt: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',

                      border: '1px solid #E5E3E3',
                      borderRadius: '50%',
                    }}
                  >
                    1
                  </Typography>
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Choose a Moving Kit
                  </Typography>
                  <Typography
                    variant='body1'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                    }}
                  >
                    No phone calls, no house calls. Here’s how  <br/> we do inventory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <img
                  src='https://imoving.com/img/choose-moving-kit.png'
                  alt=''
                />
                <Box
                  sx={{
                    mt: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',

                      border: '1px solid #E5E3E3',
                      borderRadius: '50%',
                    }}
                  >
                    1
                  </Typography>
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Choose a Moving Kit
                  </Typography>
                  <Typography
                    variant='body1'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                    }}
                  >
                    No phone calls, no house calls. Here’s how  <br/> we do inventory
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={4}>
                <img
                  src='https://imoving.com/img/choose-moving-kit.png'
                  alt=''
                />
                <Box
                  sx={{
                    mt: '20px',
                    alignItems: 'center',
                  }}
                >
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '20px',

                      border: '1px solid #E5E3E3',
                      borderRadius: '50%',
                    }}
                  >
                    1
                  </Typography>
                  <Typography
                    variant='h5'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    Choose a Moving Kit
                  </Typography>
                  <Typography
                    variant='body1'
                    align='center'
                    sx={{
                      marginBottom: '20px',
                    }}
                  >
                    No phone calls, no house calls. Here’s how  <br/> we do inventory
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BookingSample

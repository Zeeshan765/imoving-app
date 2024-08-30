import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'
import BoxTable from './BoxTable'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const BoxKits = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Inventory2OutlinedIcon
                sx={{ fontSize: '40px', marginRight: '10px', color: '#00b4f6' }}
              />{' '}
              <Typography
                variant='h4'
                align='center'
                sx={{
                  marginBottom: '20px',
                  fontWeight: 'bold',
                }}
              >
                Moving Kits
              </Typography>
            </Box>

            <Typography variant='h6' align='center'>
              Moving isn’t always an exact science, but it can be pretty close.
              Use our moving Box calculator to see how many boxes you’ll need,
              and what kind of boxes will be best for your move:
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{ marginTop: '30px' }}
        >
          <Grid item xs={8} lg={9} xl={8}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{ position: 'relative' }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Grid item xs={12} md={6} lg={3} xl={3}>
                  <Card sx={{ borderRadius: '5px' }}>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                          marginTop: '10px',
                          fontSize: '4rem',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textAlign: 'center',
                          fontWeight: 'bold',
                        }}
                      >
                        1-2
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                          marginTop: '-10px',
                          fontSize: '3rem',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textAlign: 'center',
                          fontWeight: 'semibold',
                        }}
                      >
                        Bedrooms
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <Button
                        variant='contained'
                        sx={{
                          width: '100%',
                          padding: '15px',
                          background: '#00B4F6',
                          color: '#fff',
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                        }}
                      >
                        Shop Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BoxKits

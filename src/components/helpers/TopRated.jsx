import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
)

const TopRated = () => {
  return (
    <>
      <Box sx={{ padding: '30px 0px' }}>
        <Grid container spacing={2} justifyContent='center'>
          <Grid
            item
            xs={8}
            sx={{
              textAlign: 'center',
              marginBottom: '40px',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                fontWeight: 'bold',
              }}
            >
              Top Rated Moving Labor Companies
            </Typography>
            <Typography variant='body1' sx={{ marginTop: '30px' }}>
              As of August 2024
            </Typography>
            <Typography variant='body1' sx={{ marginTop: '30px' }}>
              We grade our moving teams based on professionalism, respect,
              reliability, transparency and honest pricing. It’s how we grade
              ourselves as well.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={8} lg={9} xl={8}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{ position: 'relative' }}
            >
              {[1, 2, 3].map((item) => (
                <Grid item xs={12} md={6} lg={3} xl={3}>
                  <Card
                    sx={{ borderRadius: '10px', boxShadow: 3, maxWidth: 345 }}
                  >
                    <CardContent sx={{ padding: '16px' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          backgroundColor: '#E0F4FE',
                          borderRadius: '8px',
                          padding: '8px 16px',
                          marginBottom: '16px',
                        }}
                      >
                        <Typography
                          variant='h6'
                          component='div'
                          sx={{
                            fontWeight: 'bold',
                            fontSize: '16px',
                            color: '#333',
                          }}
                        >
                          Razorback Moving & St...
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          backgroundColor: '#E0F4FE',
                          borderRadius: '8px',
                          padding: '8px 16px',
                          marginBottom: '16px',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '24px',
                            fontWeight: 'bold',
                            color: '#0096D7',
                            marginRight: '8px',
                          }}
                        >
                          10.0
                        </Typography>
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 'bold',
                              color: '#0096D7',
                            }}
                          >
                            Exceptional
                          </Typography>
                          <Typography sx={{ fontSize: '12px', color: '#666' }}>
                            1 Reviews
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#333',
                          marginBottom: '8px',
                        }}
                      >
                        ✔️ Miami,FL
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#333',
                          marginBottom: '8px',
                        }}
                      >
                        ✔️ Job Serviced: 0
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: '14px',
                          color: '#333',
                          marginBottom: '16px',
                        }}
                      >
                        ✔️ Discount Offer: 0%
                      </Typography>
                      <Button
                        variant='contained'
                        sx={{
                          backgroundColor: '#3F618A',
                          borderRadius: '24px',
                          textTransform: 'none',
                          fontWeight: 'bold',
                          width: '100%',
                        }}
                      >
                        Book a Move &rarr;
                      </Button>
                      <Typography
                        sx={{
                          marginTop: '16px',
                          textAlign: 'center',
                          fontSize: '14px',
                          color: '#3867D6',
                          cursor: 'pointer',
                        }}
                      >
                        More details
                      </Typography>
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

export default TopRated

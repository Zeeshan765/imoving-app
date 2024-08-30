import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

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

function AutoChoice() {
  return (
    <Box sx={{ padding: '30px 0px', mt:'30px' }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid
          item
          xs={8}
          sx={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <Typography variant='h4' fontWeight={'bold'}>
            Why iMoving is the Go-To Choice for Car Shipping
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <Grid item xs={10} lg={8}>
          <Grid
            container
            spacing={4}
            justifyContent='center'
            sx={{ position: 'relative' }}
          >
            <Paper></Paper>

            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              {[1, 2, 3].map((item) => (
                <Paper key={item}>
                  <Card
                    sx={{
                      position: 'relative',
                      overflow: 'inherit',
                      mb: '45px',
                    }}
                  >
                    <CardContent
                      sx={{
                        position: 'relative',
                        padding: '30px 10px 40px 20px',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Typography
                          variant='h6'
                          sx={{ marginBottom: '20px', fontWeight: 'bold' }}
                        >
                          One-Stop Solution
                        </Typography>
                        <QueryBuilderIcon
                          sx={{
                            fontSize: '40px',
                            color: '#00b4f6',
                          }}
                        />
                      </Box>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        Enter your shipping details once and get instant access
                        to a range of quotes from top car shipping companies.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ))}
            </Grid>

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <Box sx={{ height: 'auto', overflow: 'hidden' }}>
                <img
                  src='https://www.imoving.com/media/p0cl4kus/car-shipping-imoving.png'
                  alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AutoChoice

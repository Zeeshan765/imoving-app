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

function AutoGuide() {
  return (
    <Box sx={{ padding: '30px 0px' }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <Grid item xs={10} lg={8}>
          <Grid
            container
            spacing={5}
            justifyContent='center'
            sx={{ position: 'relative' }}
          >
            <Paper></Paper>

            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <Box
                sx={{
                  mt: '5px',
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight={'bold'}
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  What is Car Shipping? A Quick <br /> Guide
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  Car shipping, or auto transport, is a service for moving
                  vehicles via specialized trucks. It's ideal for long-distance
                  relocations, car purchases from afar, or transporting vehicles
                  to shows.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  The process involves loading your car onto either an open-air
                  or enclosed carrier, depending on your preference and budget.
                  This service is a boon for convenience, safety, and
                  flexibility, catering to individuals, car dealers, collectors,
                  and businesses.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  With iMoving, you get easy access to reliable car shipping
                  companies, ensuring a hassle-free and secure transportation
                  experience for your vehicle, regardless of the distance or
                  destination.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <Box sx={{ height: 'auto', overflow: 'hidden' }}>
                <img
                  src='https://www.imoving.com/media/vafjmmbm/what-is-car-shipping-imoving-com-1.png'
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

export default AutoGuide

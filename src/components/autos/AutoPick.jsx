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

function AutoPick() {
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
              <Box sx={{ height: 'auto', overflow: 'hidden' }}>
                <img
                  src='https://www.imoving.com/media/wukdoity/car-shipping-companies-imoving-com.png'
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

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
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
                  Pick the Right Car Shipping <br /> Company with iMoving
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  Choosing the right company to ship your car can seem like a
                  daunting task amid a sea of options, each claiming to be the
                  best. This is where iMoving steps in to clear the confusion
                  and streamline your decision-making process.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  By simply providing the specifics of your car to us, you gain
                  access to our carefully curated network of top-tier car
                  shipping companies. These providers are not only reliable but
                  have been handpicked for their unparalleled commitment to
                  quality and customer satisfaction.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  At iMoving, we pride ourselves on the thorough vetting we
                  conduct to ensure that every company in our network upholds
                  the highest standards in car shipping. This meticulous
                  approach provides you with peace of mind and a completely
                  hassle-free experience.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AutoPick

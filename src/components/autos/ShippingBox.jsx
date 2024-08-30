import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from '../boxes/BoxQuoteTab'
import ShippingQuoteTab from './ShippingQuoteTab'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const ShippingBox = () => {
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
              variant='h4'
              align='center'
              sx={{
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Car Shipping Companies
            </Typography>

            <Typography variant='h6' align='center'>
              Need to move your car a long way? We've got you. iMoving connects
              you to the top car shipping companies around. Just a few clicks,
              and you're all set to ship your car with the best in the business.
            </Typography>
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
            <Paper elevation={3}>
              <Item sx={{ bgcolor: 'background.paper' }}>
                <Box
                  sx={{
                    width: '100%',
                    typography: 'body1',
                    alignContent: 'center',
                    padding: {
                      lg: '30px',
                    },
                  }}
                >

                  <ShippingQuoteTab/>
                </Box>
              </Item>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ShippingBox

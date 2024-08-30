import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import LabourQuoteTab from './LabourQuoteTab'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const ShippingLabour = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={6}>
            <Typography
              variant='h4'
              align='center'
              sx={{
                marginBottom: '20px',
                fontWeight: 'bold',
              }}
            >
              Moving Labor
            </Typography>

            <Typography variant='h6' align='center'>
              Need an extra hand? Book the best moving labor in the business
              with iMoving.
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
          <Grid item xs={12} md={6}>
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
                  <LabourQuoteTab />
                </Box>
              </Item>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ShippingLabour

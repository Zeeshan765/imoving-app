import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'

function JoinOurNetwork() {
  return (
    <Box
      sx={{
        backgroundColor: '#E0F4FE', // Adjust to match the background color
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            component='h2'
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
          >
            Are you a Mover? Join Our Network!
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography
            variant='body1'
            sx={{ marginBottom: '30px', color: '#333' }}
          >
            Start getting booked jobs in moments. Fill up your details now.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#00AEEF',
              textTransform: 'none',
              fontWeight: 'bold',
              padding: '10px 40px',
              '&:hover': {
                backgroundColor: '#008FDC',
              },
            }}
          >
            Join Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default JoinOurNetwork

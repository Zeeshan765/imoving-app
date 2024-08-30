import React from 'react'
import { Grid, Typography, Button, Box } from '@mui/material'

function BookMovingLabor() {
  return (
    <Box sx={{ padding: '40px 20px', textAlign: 'center' }}>
      <Grid container justifyContent='center'>
        <Grid item xs={12}>
          <Typography
            variant='h4'
            component='h2'
            sx={{ fontWeight: 'bold', marginBottom: '20px' }}
          >
            Book Moving Labor with iMoving
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Typography
            variant='body1'
            sx={{ marginBottom: '30px', color: '#333' }}
          >
            If you’re ready to get moving, book some moving labor to help with
            the heavy lifting. iMoving can connect you with vetted and verified
            professionals in 10 seconds flat:
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            sx={{
              backgroundColor: '#00AEEF',

              textTransform: 'none',
              fontWeight: 'bold',
              padding: '10px 20px',
              '&:hover': {
                backgroundColor: '#008FDC',
              },
            }}
          >
            Book Moving Labor
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default BookMovingLabor

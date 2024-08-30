import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'
import BoxTable from './BoxTable'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const BoxSpectrum = () => {
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
              Your Spectrum of Moving Services at a Glance
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
              {[1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12].map((item) => (
                <Grid item xs={12} md={6} lg={3} xl={3}>
                  <Card sx={{ borderRadius: '5px' }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        <QueryBuilderIcon
                          sx={{
                            fontSize: '60px',
                            color: '#00b4f6',
                          }}
                        />
                      </Box>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='div'
                        sx={{
                          marginTop: '10px',
                          fontSize: '1rem',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textAlign: 'center',
                        }}
                      >
                        Local Moving
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

export default BoxSpectrum

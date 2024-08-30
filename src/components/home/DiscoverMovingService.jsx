import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
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

function DiscoverMovingService() {
  return (
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
          <Typography variant='h5'>Discover Your Moving Services</Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <Grid item xs={8}>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            sx={{ position: 'relative' }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={12} lg={4}>
                <Card sx={{ position: 'relative', overflow: 'inherit' }}>
                  <CardContent
                    sx={{
                      position: 'relative',
                      padding: '30px 20px 30px 20px',
                    }}
                  >
                    <Box>
                      <QueryBuilderIcon
                        sx={{
                          fontSize: '40px',
                          marginBottom: '20px',
                          color: '#00b4f6',
                        }}
                      />
                    </Box>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }}>
                      Local Moving
                    </Typography>
                    <Typography
                      sx={{
                        mb: 1.5,
                        color: '#718096',
                        fontWeight: 400,
                        fontSize: '16px',
                        height: '112px',
                        lineHeight: 1.4,
                        overflow: 'hidden',
                      }}
                      color='text.secondary'
                    >
                      The moving company you pick to handle your upcoming move
                      will depend heavily on whether you are moving locally or
                      long distance. While some movers are equipped to handle
                      both types of moves, many companies only offer local
                      moving services. They are unable to handle a move over a
                      certain distance. Movers within the iMoving network will
                      specify whether they offer local and/or long-distance
                      moving services.
                    </Typography>
                    <Button size='small'>Read More</Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default DiscoverMovingService

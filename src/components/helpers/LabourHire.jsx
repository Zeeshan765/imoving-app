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

function LabourHire() {
  return (
    <Box sx={{ padding: '30px 0px', mt: '30px' }}>
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
            Why Hire Moving Labor?
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

            <Grid item xs={12} lg={5} order={{ xs: 2, lg: 1 }}>
              {[1, 2].map((item) => (
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
                          Convenience
                        </Typography>
                        <QueryBuilderIcon
                          sx={{
                            fontSize: '40px',
                            color: '#00b4f6',
                          }}
                        />
                      </Box>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        Hiring professional moving labor with iMoving is way
                        easier than trying to DIY your move. You’ll get
                        professional help for the hardest parts of your move so
                        you can handle the rest solo.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ))}
            </Grid>

            <Grid item xs={12} lg={5} order={{ xs: 1, lg: 2 }}>
              {[1, 2].map((item) => (
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
                          Convenience
                        </Typography>
                        <QueryBuilderIcon
                          sx={{
                            fontSize: '40px',
                            color: '#00b4f6',
                          }}
                        />
                      </Box>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        Hiring professional moving labor with iMoving is way
                        easier than trying to DIY your move. You’ll get
                        professional help for the hardest parts of your move so
                        you can handle the rest solo.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LabourHire

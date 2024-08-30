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

export default function EmpoweringSuccess() {
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
          <Typography variant='h5'>Empowering Your Success</Typography>
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
            <Paper></Paper>

            {[1, 2, 3, 4, 5].map((item) => (
              <Grid item xs={12} lg={4}>
                <Paper>
                  <Card sx={{ position: 'relative', overflow: 'inherit' }}>
                    <CardContent
                      sx={{
                        position: 'relative',
                        textAlign: 'center',
                        padding: '60px 10px 30px 10px',
                        marginBottom:'35px'
                      }}
                    >
                      <Box
                        justifyContent='center'
                        sx={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50px',
                          backgroundColor: '#FFF',
                          position: 'absolute',
                          border: '1px solid #E5E3E3',
                          fontSize: '56px',
                          top: '-30px',
                          left: 0,
                          right: 0,
                          margin: 'auto',
                        }}
                      >
                        <QueryBuilderIcon
                          sx={{
                            fontSize: '40px',
                            color: '#00b4f6',
                          }}
                        />
                      </Box>
                      <Typography
                        variant='h5'
                        align='center'
                        sx={{ marginBottom: '20px' }}
                      >
                        1000+ Network
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color='text.secondary'>
                        Best carriers selections, fully licensed, insured,
                        vetted and reviewed.
                      </Typography>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

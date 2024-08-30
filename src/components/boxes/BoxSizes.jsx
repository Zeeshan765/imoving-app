import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'
import BoxTable from './BoxTable'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const BoxSizes = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '40px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Inventory2OutlinedIcon
                sx={{ fontSize: '40px', marginRight: '10px', color: '#00b4f6' }}
              />{' '}
              {/* Adjust icon size and margin */}
              <Typography
                variant='h4'
                align='center'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Box Sizes
              </Typography>
            </Box>
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
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
                <Grid item xs={12} lg={6}>
                  <Card sx={{ borderRadius: '10px', padding: '20px' }}>
                    <CardContent>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        <Typography variant='h6' fontWeight='bold'>
                          SMALL CARDBOARD BOX
                        </Typography>
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '50%',
                            border: '1px solid #e0e0e0',
                          }}
                        >
                          <img
                            src='https://www.imoving.com/media/bibc1d0z/medium-cardboard-box.svg'
                            alt=''
                          />
                        </Box>
                      </Box>

                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '10px',
                        }}
                      >
                        <Inventory2OutlinedIcon
                          sx={{ marginRight: '10px', color: '#00b4f6' }}
                        />
                        <strong>Dimensions:</strong> 12 - 14 inches long, or 1.5
                        cubic feet
                      </Typography>
                      <Typography
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          marginBottom: '20px',
                        }}
                      >
                        <ThumbUpOffAltOutlinedIcon
                          sx={{ marginRight: '10px', color: '#00b4f6' }}
                        />
                        <strong>Best for:</strong> Cans, jars, books,
                        silverware, and other small-size, high-volume stuff
                      </Typography>
                      <hr />

                      <Typography variant='body2' color='text.secondary'>
                        Out of all the boxes you’ll need, you’ll probably need
                        the most small cardboard boxes. These are a pretty
                        useful option for all those small items you have a lot
                        of, whether it’s books, silverware, or canned food.
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

export default BoxSizes

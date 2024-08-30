import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from '../boxes/BoxQuoteTab'
import BoxTable from '../boxes/BoxTable'
import { Button, Card, CardContent, CardMedia } from '@mui/material'
import BoxAccordian from '../BoxAccordian'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const AutoFaq = () => {
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
              Car Shipping FAQ
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
              <Box
                sx={{
                  // width: '97%',
                  // padding: '20px',
                }}
              >
                {[1, 2, 3, 4, 5].map((item) => (
                  <BoxAccordian key={item} />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AutoFaq

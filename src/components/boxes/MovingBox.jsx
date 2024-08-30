import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const MovingBox = () => {
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
              Moving Boxes
            </Typography>

            <Typography variant='body1' align='center'>
              A successful move means getting all the right supplies beforehand.
              Buy a moving kit with iMoving and get everything you need in one
              easy package.
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
                  <BoxQuoteTab />
                </Box>
              </Item>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MovingBox

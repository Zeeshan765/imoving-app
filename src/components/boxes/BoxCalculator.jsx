import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import BoxQuoteTab from './BoxQuoteTab'
import BoxTable from './BoxTable'
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const BoxCalculator = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={8}>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <CalculateOutlinedIcon
                sx={{ fontSize: '60px', marginRight: '10px', color: '#00b4f6' }}
              />{' '}
              <Typography
                variant='h4'
                // align='center'
                sx={{
                  marginBottom: '20px',
                  fontWeight: 'bold',
                }}
              >
                Moving Box Calculator
              </Typography>
            </Box>

            <Typography variant='body1' align='center'>
              Moving isn’t always an exact science, but it can be pretty close.
              Use our moving Box calculator to see how many boxes you’ll need,
              and what kind of boxes will be best for your move:
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
            <BoxTable />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default BoxCalculator

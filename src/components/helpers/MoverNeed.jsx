import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined'
import CostTable from './CostTable'
import MoverTable from './MoverTable'

// import MoverTab from "../MoverTab";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const MoverNeed = () => {
  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} md={7}>
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
                How Many Movers Do you Need?
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
          <Grid item xs={12} md={6}>
            <MoverTable />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MoverNeed

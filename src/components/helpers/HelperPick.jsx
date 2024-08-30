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

function HelperPick() {
  return (
    <Box sx={{ padding: '30px 0px' }}>
      <Grid
        container
        spacing={2}
        justifyContent='center'
        sx={{ marginTop: '30px' }}
      >
        <Grid item xs={10} lg={8}>
          <Grid
            container
            spacing={5}
            justifyContent='center'
            sx={{ position: 'relative' }}
          >
            <Paper></Paper>

            <Grid item xs={12} lg={6} order={{ xs: 2, lg: 1 }}>
              <Box sx={{ height: 'auto', overflow: 'hidden' }}>
                <img
                  src='https://www.imoving.com/media/a11bdxlz/moving-labor-1.png'
                  alt=''
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '5px',
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 2 }}>
              <Box
                sx={{
                  mt: '5px',
                }}
              >
                <Typography
                  variant='h4'
                  fontWeight={'bold'}
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  Moving Labor with iMoving
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  Sometimes you can handle most of your move, and sometimes you
                  just need help with the really big stuff. That’s why iMoving
                  makes it easy to book moving labor you can trust.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  At iMoving, we make sure our carriers are vetted, verified,
                  and backed up by positive reviews.
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  When you book moving labor with us, you’re getting the best of
                  the best, and you can shop entirely online.
                </Typography>

                <Typography
                  variant='body1'
                  sx={{
                    marginBottom: '20px',
                  }}
                >
                  When you need a few extra hands, hiring moving labor for the
                  heavy lifting can make a huge difference. Use iMoving and book
                  your movers in 3 easy steps.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default HelperPick

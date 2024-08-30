import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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

const MovingCard = ({ handleNext }) => {
  const movingKits = [
    {
      title: 'Basic Moving Boxes Kit #1',
      description: '18 Boxes & Packing Supplies',
      items: [
        '9 Small Moving Boxes',
        '9 Medium Moving Boxes',
        '2"x55 yards of Packing Tape',
        '1 Clamshell Tape Dispenser',
        // "24' of Bubble Roll",
        // '3 lbs of Wrapping Paper',
        // '1 Marker',
      ],
      price: '$79.76',
      image: 'https://www.imoving.com/img/box2.png',
      link: '#',
    },
    {
      title: 'Economy Moving Box Kit #1',
      description: '15 Boxes, Fewer Supplies',
      items: [
        '9 Small Moving Boxes',
        '9 Medium Moving Boxes',
        '2"x55 yards of Packing Tape',
        '1 Clamshell Tape Dispenser',
        // "24' of Bubble Roll",
        // '3 lbs of Wrapping Paper',
        // '1 Marker',
      ],
      price: '$67.97',
      image: 'https://www.imoving.com/img/box2.png',
      link: '#',
    },
    {
      title: 'Wardrobe Moving Boxes Kit',
      description: '9 Boxes, 1 Wardrobe & Supplies',
      items: [
        '9 Small Moving Boxes',
        '9 Medium Moving Boxes',
        '2"x55 yards of Packing Tape',
        '1 Clamshell Tape Dispenser',
        // "24' of Bubble Roll",
        // '3 lbs of Wrapping Paper',
        // '1 Marker',
      ],
      price: '$83.23',
      image: 'https://www.imoving.com/img/box2.png',
      link: '#',
    },
  ]

  return (
    <>
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
            <Typography variant='h5'>
              Select the Moving Kits that Best Fit Your Needs.
            </Typography>
            <Typography variant='body1' sx={{ marginTop: '30px' }}>
              Here is your recommended moving kits that matches your move size
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          justifyContent='center'
          sx={{ marginTop: '30px' }}
        >
          <Grid item xs={8} lg={8} xl={6}>
            <Grid
              container
              spacing={2}
              justifyContent='center'
              sx={{ position: 'relative' }}
            >
              {movingKits.map((kit, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Card
                    sx={{
                      borderRadius: '5px',
                      position: 'relative',
                      textAlign: 'left',
                      paddingY: '30px',
                      paddingX: '10px',
                    }}
                  >
                    <CardMedia
                      component='img'
                      sx={{
                        height: 160,
                        objectFit: 'contain',
                        margin: '0 auto', // Centers the image horizontally
                        display: 'block', // Ensures the image is treated as a block element
                        maxWidth: '60%', // Prevents the image from exceeding the card width
                      }}
                      image={kit.image}
                      title={kit.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h6' component='div'>
                        {kit.title}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='text.secondary'
                        gutterBottom
                      >
                        {kit.description}
                      </Typography>
                      <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                        {kit.items.map((item, idx) => (
                          <li
                            key={idx}
                            style={{
                              marginBottom: '5px',
                              fontSize: '17px',
                              color: 'black',
                              fontWeight: 'bold',
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Typography
                        variant='h6'
                        sx={{ marginTop: '10px', color: '#0096D7' }}
                      >
                        {kit.price}
                      </Typography>
                      <Button
                        size='small'
                        sx={{ marginTop: '10px', color: '#0096D7' }}
                      >
                        View more
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleNext}
            variant='contained'
            sx={{
              padding: '16px 20px 15px 20px',
              background: '#00B4F6',
              width: '200px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1rem',
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default MovingCard

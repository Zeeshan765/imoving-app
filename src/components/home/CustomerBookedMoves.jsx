import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import Divider from '@mui/material/Divider';
import Carousel from 'react-material-ui-carousel';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CustomerBookedMoves = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const cards = [
    {
      movingFrom: 'Elkhart, IN 46514',
      moveSize: '4 Bedroom',
      img: 'map.png',
    },
    {
      movingFrom: 'Chicago, IL 60616',
      moveSize: '3 Bedroom',
      img: 'map.png',
    },
    {
      movingFrom: 'Dallas, TX 75201',
      moveSize: '2 Bedroom',
      img: 'map.png',
    },
    {
      movingFrom: 'New York, NY 10001',
      moveSize: '5 Bedroom',
      img: 'map.png',
    },
    {
      movingFrom: 'Los Angeles, CA 90001',
      moveSize: '3 Bedroom',
      img: 'map.png',
    },
    {
      movingFrom: 'Miami, FL 33101',
      moveSize: '2 Bedroom',
      img: 'map.png',
    },
  ];

  return (
    <Box sx={{ padding: '30px 0px' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid
          item
          xs={8}
          sx={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <Typography variant="h5">
            Customers Just Booked These Moves
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: '30px' }}
      >
        <Grid item xs={12} lg={8}>
          <Carousel
            indicators={true}
            navButtonsAlwaysVisible={!isSmallScreen}
            autoPlay={false}
            animation="slide"
            navButtonsProps={{
              style: {
                backgroundColor: '#00b4f6',
                color: 'white',
                marginX: '40px',
              },
            }}
          >
            {cards.map((card, index) => (
              <Grid container spacing={2} key={index}>
                {cards
                  .slice(index, index + (isSmallScreen ? 1 : 3)) // Show 1 card on small screens, 3 on larger screens
                  .map((cardData, i) => (
                    <Grid item xs={12} lg={4} key={i}>
                      <Paper>
                        <Card sx={{ position: 'relative', overflow: 'inherit' }}>
                          <CardContent
                            sx={{
                              position: 'relative',
                              padding: '30px 30px 30px 30px',
                            }}
                          >
                            <Grid container spacing={1}>
                              <Grid
                                item
                                xs={12}
                                lg={6}
                                sx={{ position: 'relative' }}
                              >
                                <Box
                                  sx={{
                                    position: 'relative',
                                    paddingLeft: '20px',
                                  }}
                                >
                                  <QueryBuilderIcon
                                    sx={{
                                      position: 'absolute',
                                      left: '-10px',
                                      fontSize: '20px',
                                      color: '#00b4f6',
                                    }}
                                  />
                                  <Typography
                                    sx={{
                                      color: '#686868',
                                      fontSize: '16px',
                                      lineHeight: '22px',
                                    }}
                                  >
                                    Moving from
                                  </Typography>
                                  <Typography
                                    variant="h5"
                                    sx={{
                                      fontSize: '16px',
                                      whiteSpace: 'nowrap',
                                      textOverflow: 'ellipsis',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {cardData.movingFrom}
                                  </Typography>
                                </Box>
                              </Grid>
                            </Grid>
                            <Divider sx={{ marginY: '20px' }} />
                            <Typography
                              sx={{
                                color: '#686868',
                                fontSize: '14px',
                                lineHeight: '22px',
                              }}
                            >
                              Move Size:
                              <span style={{ color: '#222', fontWeight: '600' }}>
                                {' '}
                                {cardData.moveSize}
                              </span>
                            </Typography>
                            <img
                              src={cardData.img}
                              width="100%"
                              style={{ marginTop: '20px' }}
                              alt="map"
                            />
                          </CardContent>
                        </Card>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerBookedMoves;

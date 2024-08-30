import React from 'react';
import { Container, Grid, Typography, Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { AttachMoney, Favorite, CheckCircle, AccessTime, Build, Star } from '@mui/icons-material';

const ratingData = [
  { icon: <AttachMoney fontSize="large" />, title: 'Pricing', description: 'We believe that our clients deserve to get the best prices for the best service.' },
  { icon: <Favorite fontSize="large" />, title: 'Kindness', description: 'Courtesy is a key factor and value here at imoving. Expect nothing less.' },
  { icon: <CheckCircle fontSize="large" />, title: 'Reliability', description: 'Things should run as agreed; This is what imoving is all about.' },
  { icon: <AccessTime fontSize="large" />, title: 'Precision time', description: 'We value your time and your move should be right on time and as agreed.' },
  { icon: <Build fontSize="large" />, title: 'Problem-solving', description: 'When things don’t go smoothly, resilience and professionalism are key factors.' },
  { icon: <Star fontSize="large" />, title: 'Professionalism', description: 'It all comes down to that: the best way to handle your next move.' },
];

const RatingComponent = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
        How Do We Rate Our Movers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {ratingData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'center',
                p: 2,
                // borderRadius: 2,
                // backgroundColor: '#f5f7fa',
                // boxShadow: 3,
                height: '100%',
              }}
            >
              <Box sx={{ mb: 2,borderRadius: 2 , padding:'10px',width:'10%',boxShadow: 3, color: '#00bcd4' ,textAlign:'left'}}>
                {item.icon}
              </Box>
              <Typography variant="h6" sx={{ mb: 1,textAlign:'left' }}>
                {item.title}
              </Typography>
              <Typography variant="body2"  sx={{ mb: 1,textAlign:'left' }}>
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RatingComponent;

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ServiceCard = ({ icon: Icon, title }) => {
  return (
    <Card
      sx={{
        minWidth: 150,
        textAlign: 'center',
        boxShadow: 2,
        borderRadius: 2,
        p: 2,
        '&:hover': {
          boxShadow: 4,
        },
      }}
    >
      <CardContent>
        <Icon style={{ fontSize: 40, color: '#00bcd4' }} />
        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;

import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping'; // Import the required icons
import StorageIcon from '@mui/icons-material/Storage';
// Add more icon imports as needed
import ServiceCard from './ServiceCard';

const services = [
  { title: 'Local Moving', icon: LocalShippingIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  { title: 'Storage Services', icon: StorageIcon },
  // Add more services as needed
];

const ServicesGrid = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 4 }}>
        Services & Handling
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ServiceCard title={service.title} icon={service.icon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ServicesGrid;

import React from 'react'
import { Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'

function OurMoversSection() {
  return (
    <Grid container spacing={4} sx={{ padding: '2rem', backgroundColor: '#f8f9fc' }}>
    {/* Left Side */}
    <Grid item xs={12} md={6}>
      <Typography variant="h4" gutterBottom>
        Our Movers
      </Typography>
      <Typography variant="h6" gutterBottom>
        Movers are Screened and Handpicked by Us
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <VerifiedUserIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Interviewed and vetted by iMoving team" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VerifiedUserIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Have been in the moving business for at least 2 years" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VerifiedUserIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Hold a Certificate of Insurance (COI)" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VerifiedUserIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Authenticated with the department of transportation or local state government" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <VerifiedUserIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Are held accountable and removed by us if they violate any of our" />
          <Link href="#" sx={{ ml: 1 }}>
            community standards
          </Link>
        </ListItem>
      </List>
    </Grid>

    {/* Right Side */}
    <Grid item xs={12} md={6}>
      <img
        src="https://www.imoving.com/img/our-movers-process.png"
        alt="Our Movers Process"
        
      />
    </Grid>
  </Grid>
  )
}

export default OurMoversSection

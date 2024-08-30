import React from 'react';
import { Container, Grid, Typography, MenuItem, FormControl, Select, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'District of Columbia', 'Florida', 'Georgia', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
  'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming'
];

const StateList = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
        Look for our movers by state:
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center', mb: 4 }}>
        iMoving was born to fix the outrageous problem most people face on moving day - sudden price increases
        on moving quotes, bad service including rude staff, showing up late, damage to your belongings.
      </Typography>

      {isMediumScreen ? (
        <FormControl fullWidth variant="outlined">
          <Select defaultValue="" displayEmpty>
            <MenuItem value="" disabled>
              Select a state
            </MenuItem>
            {states.map((state, index) => (
              <MenuItem key={index} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {states.map((state, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="body1" component="div" sx={{ textAlign: 'center' }}>
                {state}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default StateList;

import React from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Grid from '@mui/material/Grid'
import { Box, Tab, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const LabourQuoteTab = () => {
  const [value, setValue] = React.useState('1')
  const [age, setAge] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const handleChangeTabs = (event) => {
    setAge(event.target.value)
  }

  return (
    <>
      <Typography variant='h6' align='center' padding='20px' mb={'20px'}>
        Want to get Moving Labor?
      </Typography>
      <Grid container justifyContent='center' spacing={3}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Zip Code
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={age}
                    label='Age'
                    onChange={handleChangeTabs}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Box>
                <FormControl fullWidth>
                  <InputLabel id='demo-simple-select-label'>
                    Move Date
                  </InputLabel>
                  <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={age}
                    label='Age'
                    onChange={handleChangeTabs}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Button
                variant='contained'
                sx={{
                  width: '100%',
                  padding: '13px',
                  background: '#00B4F6',
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  textTransform: 'capitalize',
                }}
              >
                Get Moving Labour
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default LabourQuoteTab

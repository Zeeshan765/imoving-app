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
import { Box, Tab } from '@mui/material'
import Button from '@mui/material/Button'
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const MoverQuoteTab = (props) => {
  console.log('value={value}', props.value)
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
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Move From</InputLabel>
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
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>Move Size</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={age}
                label='Age'
                onChange={handleChange}
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
              padding: '15px',
              backgroundColor: '#00B4F6',
              textTransform:'capitalize',
              color: '#fff',
              '&:hover': {
                backgroundColor: 'transparent',
                color: '#00B4F6',
                border: '1px solid #00B4F6',
              },
            }}
          >
          {
            props.value === '1' ? 'Continue' : 'Add Items'
          }
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default MoverQuoteTab

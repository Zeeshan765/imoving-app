import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'

import MoverQuoteTab from './home/MoverQuoteTab'
import MoverSingle from './MoverSingle'
import BoxQuoteTab from './boxes/BoxQuoteTab'
import LabourQuoteTab from './helpers/LabourQuoteTab'
import ShippingQuoteTab from './autos/ShippingQuoteTab'

const MoverTab = () => {
  const [value, setValue] = React.useState('1')
  const [age, setAge] = React.useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeTabs = (event) => {
    setAge(event.target.value)
  }
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabList
          onChange={handleChange}
          aria-label='lab API tabs example'
          centered
        >
          <Tab
            sx={{
              // color: '#00B4F6',
              textTransform: 'capitalize',
            }}
            label='Movers'
            value='1'
          />
          <Tab
            sx={{
              textTransform: 'capitalize',
            }}
            label='Helpers'
            value='2'
          />
          <Tab
            sx={{
              textTransform: 'capitalize',
            }}
            label='Boxes'
            value='3'
          />
          <Tab
            sx={{
              textTransform: 'capitalize',
            }}
            label='Cars'
            value='4'
          />
        </TabList>
      </Box>

      <TabPanel value='1'>
        <MoverSingle />
      </TabPanel>
      <TabPanel value='2'>
        <LabourQuoteTab />
      </TabPanel>
      <TabPanel value='3'>
        <BoxQuoteTab />
      </TabPanel>
      <TabPanel value='4'>
        <ShippingQuoteTab />
      </TabPanel>
    </TabContext>
  )
}

export default MoverTab

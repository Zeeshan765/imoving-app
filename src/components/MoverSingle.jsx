import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'

import MoverQuoteTab from './home/MoverQuoteTab'

const MoverSingle = () => {
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
        <TabList onChange={handleChange} aria-label='lab API tabs example'>
          <Tab
            sx={{
              textTransform: 'capitalize',
            }}
            label='Quick Quote '
            value='1'
          />
          <Tab
            sx={{
              textTransform: 'capitalize',
            }}
            label='Itemized Quote'
            value='2'
          />
        </TabList>
      </Box>

      <TabPanel value='1'>
        <MoverQuoteTab value={value} />
      </TabPanel>
      <TabPanel value='2'>
        <MoverQuoteTab value={value} />
      </TabPanel>
    </TabContext>
  )
}

export default MoverSingle

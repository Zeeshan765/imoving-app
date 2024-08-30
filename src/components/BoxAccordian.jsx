import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

function BoxAccordian() {
  return (
    <div>
    
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              padding: '20px',
            }}
          >
            What types of moving boxes are available?
          </AccordionSummary>
          <AccordionDetails
            sx={{
              fontSize: '1.2rem',
              fontFamily: 'sans-serif',
            }}
          >
            Moving boxes come in all shapes and sizes to fit your belongings!
            Standard options include small (books), medium (kitchenware), and
            large (blankets). But there's more! Specialized boxes like wardrobes
            for clothes, dishpacks for plates, mirror boxes, mattress boxes, TV
            crates, and even extra-large boxes offer extra protection for your
            special items.
          </AccordionDetails>
        </Accordion>
     
    </div>
  )
}

export default BoxAccordian

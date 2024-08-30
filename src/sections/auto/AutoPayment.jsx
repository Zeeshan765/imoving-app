import {
  Box,
  Button,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  styled,
} from '@mui/material'
import StepIcon from '@mui/material/StepIcon'
import React, { useState } from 'react'
import ShippingAddress from '../../components/autos/ShippingAddress'
import MovingCard from '../../components/boxes/MovingCard'
import BoxPayment from '../../components/boxes/BoxPayment'

const steps = ['Inventory', 'Details', 'Payment']
const CustomStepIcon = styled(StepIcon)(({ theme, active, completed }) => ({
  color: '#00B4F6',
  '&.MuiStepIcon-root.Mui-completed': {
    color: '#00B4F6',
  },
  '&.MuiStepIcon-root.Mui-active': {
    color: '#00B4F6',
  },
  '& .MuiStepIcon-text': {
    fill: '#fff',
  },
}))

const AutoPayment = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())

  const isStepOptional = (step) => {
    return step === 1
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <>
      <Box
        sx={{
          paddingY: '30px',
        }}
      >
        <Grid container spacing={2} justifyContent='center'>
          <Grid item xs={12} lg={5} md={6}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps = {}
                const labelProps = {}

                if (isStepSkipped(index)) {
                  stepProps.completed = false
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel
                      {...labelProps}
                      sx={{
                        '& .MuiStepLabel-label': {
                          fontSize: '1rem',
                          color:
                            activeStep === index
                              ? 'primary.main'
                              : 'text.secondary',
                        },
                      }}
                      StepIconComponent={(props) => (
                        <CustomStepIcon {...props} />
                      )}
                    >
                      {label}
                    </StepLabel>
                  </Step>
                )
              })}
            </Stepper>

            {/* <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment> */}
            {/* {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleReset}>Reset</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  Step {activeStep + 1}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color='inherit'
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}

                  <Button onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )} */}
          </Grid>
        </Grid>

        {activeStep === 0 && <MovingCard handleNext={handleNext} />}
        {activeStep === 1 && <ShippingAddress handleNext={handleNext} />}
        {activeStep === 2 && <BoxPayment handleNext={handleNext} />}
        {/* <ShippingAddress/> */}
        {/* <MovingCard/> */}

        {activeStep === steps.length && (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={() => setActiveStep(0)}>Reset</Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default AutoPayment

import React from 'react'
import MovingBox from '../../components/boxes/MovingBox'
import BookingSample from '../../components/boxes/BookingSample'
import BoxSizes from '../../components/boxes/BoxSizes'
import BoxCalculator from '../../components/boxes/BoxCalculator'
import BoxKits from '../../components/boxes/BoxKits'
import BoxFaq from '../../components/boxes/BoxFaq'
import BoxSpectrum from '../../components/boxes/BoxSpectrum'

const Boxes = () => {
  return (
    <>
      <MovingBox />
      {/* <BookingSample /> */}
      <BoxSizes />
      <BoxCalculator />
      <BoxKits />
      <BoxFaq />
      <BoxSpectrum />
    </>
  )
}

export default Boxes

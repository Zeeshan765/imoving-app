import { useState } from 'react'

import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import MovingBox from './components/boxes/MovingBox'
import BookingSample from './components/boxes/BookingSample'
import BoxCalculator from './components/boxes/BoxCalculator'
import BoxKits from './components/boxes/BoxKits'
import BoxFaq from './components/boxes/BoxFaq'
import BoxSpectrum from './components/boxes/BoxSpectrum'
import BoxSizes from './components/boxes/BoxSizes'
import ShippingBox from './components/autos/ShippingBox'
import AutoFaq from './components/autos/AutoFaq'
import ShippingSolutions from './components/autos/ShippingSolutions'
import AutoChoice from './components/autos/AutoChoice'
import AutoGuide from './components/autos/AutoGuide'
import AutoPick from './components/autos/AutoPick'
import AutoPayment from './sections/auto/AutoPayment'
import BoxPayment from './components/boxes/BoxPayment'
import HelperPick from './components/helpers/HelperPick'
import BookLabour from './components/helpers/BookLabour'
import LabourCost from './components/helpers/LabourCost'
import MoverNeed from './components/helpers/MoverNeed'
import LabourHire from './components/helpers/LabourHire'
import HelperFaq from './components/helpers/HelperFaq'
import ShippingLabour from './components/helpers/ShippingLabour'
import TopRated from './components/helpers/TopRated'
import BookMovingLabor from './components/helpers/BookMovingLabour'
import JoinOurNetwork from './components/movers/JoinOurNetwork'
import OurMoversSection from './components/movers/OurMoverSection'
import ServicesGrid from './components/movers/ServicesGrid'
import StateList from './components/movers/StateList'
import RatingComponent from './components/movers/RatingComponent'
import SignupForm from './components/auth/SignupForm'
import SignInForm from './components/auth/SignInFom'
import ForgotPassword from './components/auth/ForgotPassword'
import SignUpPage from './pages/authentication/SignUpPage'
import { Route, Routes } from 'react-router-dom'
import SignInPage from './pages/authentication/SignInPage'
import ForgotPage from './pages/authentication/ForgotPage'
import Boxes from './pages/Boxes'
import Helpers from './pages/Helpers'
import Autos from './pages/Autos'
import Home from './pages/Home'
import LandingLayout from './layout/LandingLayout'

function App() {
  return (
    <>
      <Routes>
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPage />} />
        <Route path='/sign-in' element={<SignInPage />} />

        <Route element={<LandingLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/boxes' element={<Boxes />} />
          <Route path='/helpers' element={<Helpers />} />
          <Route path='/autos' element={<Autos />} />
          <Route path='/auto-payment' element={<AutoPayment />} />
        </Route>
      </Routes>
      {/* <Header /> */}
      {/* <ForgotPassword/> */}
      {/* <SignupForm/> */}
      {/* <SignInForm/> */}

      {/* <AutoPayment/> */}
      {/* <OurMoversSection/>
     <JoinOurNetwork/>
     <StateList/>
     <RatingComponent/>
     <ServicesGrid/> */}
      {/* <Footer /> */}

      {/* helper page */}

      {/*
       <ShippingLabour />
      <HelperPick />
      <BookLabour />
      <TopRated />
      <LabourHire />
      <LabourCost />
      <MoverNeed />
      <HelperFaq />
      <BookMovingLabor /> 
      */}

      {/* box payments */}

      {/* <AutoPayment/> */}

      {/* For Autos */}
      {/*
       <ShippingBox/>
      <AutoPick/>
      <ShippingSolutions/>
      <AutoGuide/>
      <AutoChoice/>
      <AutoFaq/>
       */}

      {/* For Boxes Pages */}
      {/* 
      <MovingBox />
      <BookingSample/>
      <BoxSizes/>
      <BoxCalculator/>
      <BoxKits/>
      <BoxFaq/>
      <BoxSpectrum/>
       */}
    </>
  )
}

export default App

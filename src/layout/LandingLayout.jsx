import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default LandingLayout

import React from 'react'
import MovieBook from '../../components/home/MovieBook'
import CustomerBookedMoves from '../../components/home/CustomerBookedMoves'
import DiscoverMovingService from '../../components/home/DiscoverMovingService'
import EmpoweringSuccess from '../../components/home/EmpoweringSuccess'
import MovingBlog from '../../components/home/MovingBlog'

const Home = () => {
  return (
   <>
    <MovieBook/>
      <EmpoweringSuccess/>
      <CustomerBookedMoves/>
      <DiscoverMovingService/>
      <MovingBlog/>
   </>
  )
}

export default Home
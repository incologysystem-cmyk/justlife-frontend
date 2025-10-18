import React from 'react'

import HeroSection from './Components/HeroSection'
import ServiceSection from './Components/ServiceSection'
import ReasonsToLove from './Components/ReasonsToLove'
import Rating from './Components/Rating'
import PromiseSection from './Components/PromiseSection'

const page = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ReasonsToLove />
      <Rating />
      <PromiseSection />
    </>
  )
}

export default page
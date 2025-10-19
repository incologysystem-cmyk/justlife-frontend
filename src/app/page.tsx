import React from 'react'

import HeroSection from './Components/HeroSection'
import ServiceSection from './Components/ServiceSection'
import ReasonsToLove from './Components/ReasonsToLove'
import Rating from './Components/Rating'
import PromiseSection from './Components/PromiseSection'

// qirat

import Scrollimg from './Components/Scroll-img'
import PCRTestPage from './Components/PCR-athome'
import Womenspa from './Components/Women-spa'
import HomeCleaning from './Components/Homecleaning'
import WomenSalon from './Components/Women-salon'
import FurnitureClean from './Components/Furniture-clean'

const page = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ReasonsToLove />
      <Rating />
      <PromiseSection />

      {/* qirat */}

      {/* <HomeCleaning/> */}
      {/* <Scrollimg/>
      <PCRTestPage/>
      <WomenSalon/>
      <Womenspa/>
      <FurnitureClean/> */}
    </>
  )
}

export default page












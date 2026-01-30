import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import PeopleMake from '../Components/Home/PeopleMake'
import WhatWe from '../Components/Home/WhatWe'
import HomeMainF from '../Components/Home/HomeMainF'
import HomeCard from '../Components/Home/HomeCard'
import HomeTrusted from '../Components/Home/HomeTrusted'
import Weretrustedby from '../Components/Home/Weretrustedby'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <>
     <Helmet>
      <title>Raviel – Digital Services Platform</title>
      <meta
        name="description"
        content="Raviel offers modern digital services, learning resources, listings and secure payments."
      />
    </Helmet>

      <HeroSection/>
      <PeopleMake/>
      <WhatWe/>
      <HomeCard/>
      <HomeTrusted/>
      <Weretrustedby/>
    </>
  )
}

export default Home

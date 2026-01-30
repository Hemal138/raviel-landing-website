import React from 'react'
import OurServicase from '../Components/Servicase/OurServicase'
import HorizontalCards from '../Components/Servicase/HorizontalScroll'
import MainServicase from '../Components/Servicase/MainServicase'
import { Helmet } from 'react-helmet-async'
const Services = () => {
  return (
    <>
     <Helmet>
      <title>Services – Raviel</title>
      <meta
        name="description"
        content="Explore Raviel services including listings, payments and digital tools."
      />
    </Helmet>
      <OurServicase/> 
      <HorizontalCards/>
      <MainServicase/>
    </>
  )
}

export default Services

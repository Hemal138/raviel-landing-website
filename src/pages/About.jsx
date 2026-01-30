import React from 'react'
import HeartAbout from '../Components/About/HeartAbout'
import WhatWeStandFor from '../Components/About/WhatWeStandFor'
import OurVisionAbout from '../Components/About/OurVisionAbout'
import OurMission from '../Components/About/OurMission'
import OurStory from '../Components/About/OurStory'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
      <title>About Us – Raviel</title>
      <meta
        name="description"
        content="Learn more about Raviel, our mission and our digital solutions."
      />
    </Helmet>
      <HeartAbout/>
      <OurStory/>
      <WhatWeStandFor/>
      <OurMission/>
      <OurVisionAbout/>
    </>
  )
}

export default About

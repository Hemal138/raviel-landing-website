import React from 'react'
import SliderLearn from '../Components/Learn/SliderLearn'
import { Helmet } from 'react-helmet-async'

const Learn = () => {
  return (
    <>
    <Helmet>
  <title>Learn – Raviel</title>
  <meta
    name="description"
    content="Educational and learning resources provided by Raviel."
  />
</Helmet>

      <SliderLearn/>
    </>
  )
}

export default Learn

import React from 'react'
import ContactForm from '../Components/Contact/ContactForm'
import MailContact from '../Components/Contact/MailContact'
import WorkTogether from '../Components/Contact/WorkTogether'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
    <Helmet>
  <title>Contact – Raviel</title>
  <meta
    name="description"
    content="Contact Raviel for digital services and support."
  />
</Helmet>

      <ContactForm/>
      <WorkTogether/>
      <MailContact/>
    </>
  )
}

export default Contact

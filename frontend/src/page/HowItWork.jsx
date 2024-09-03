import React from 'react'
import DonationMethod from '../components/DonationMethod'
import { Helmet } from 'react-helmet'

const HowItWork = () => {
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>How It Work - DonateFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <DonationMethod />
  </>
}

export default HowItWork

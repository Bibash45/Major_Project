import React from 'react'
import WhoWeAre from '../components/WhoWeAre'
import WhatWeDo from '../components/WhatWeDo'
import VideoPlayer from '../components/VideoPlayer'
import { Helmet } from 'react-helmet'

const About = () => {
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>About - DonateFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <WhoWeAre />
  <WhatWeDo />
  <VideoPlayer />
  </>
}

export default About

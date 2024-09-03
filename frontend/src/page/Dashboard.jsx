import React from 'react'
import ProfileIcon from '../components/ProfileIcon'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard - DonateFood</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
  <ProfileIcon />
  </>
}

export default Dashboard

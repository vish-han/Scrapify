import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import WhoWeAre from '../components/WhoWeAre'

export default function Home() {
  document.title = 'SCRAPIFY | HOME'
  return (
    <div>
      <Navbar/>
      <Hero/>
      <WhoWeAre/>
      <Services/>
      <Footer/>
    </div>
  )
}

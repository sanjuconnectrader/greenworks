import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Service from '../components/Home/Service'
import Work from '../components/Home/Work'
import PetOdorHero from '../components/Home/PetOdorHero'
import Location from '../components/Home/Location'
import Footer from '../components/Footer/Footer'

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Service/>
        <Work/>
        <PetOdorHero/>
        <Location/>
        <Footer/>
      
    </div>
  )
}

export default Homepage
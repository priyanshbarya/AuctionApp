import React from 'react'
import NavBar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ContentSection from '../components/ContentSection.jsx'
import Footer from '../components/Footer.jsx'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <hr />
    <ContentSection  operator={"live"}/>
    <ContentSection  operator={"upcoming"}/>
    <Footer/>
    </>
  )
}

export default Home;
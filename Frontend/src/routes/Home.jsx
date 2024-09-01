import React from 'react'
import NavBar from '../components/NavBar.jsx'
import HeroSection from '../components/HeroSection.jsx'
import ContentSection from '../components/ContentSection.jsx'

const Home = () => {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <hr />
    <ContentSection  operator={"live"}/>
    <ContentSection  operator={"upcoming"}/>

    </>
  )
}

export default Home
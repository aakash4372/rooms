import React from 'react'
import Header from './Pages/Header'
import MyCarousel from './Pages/Home'
import AboutUs from './Pages/About'
import Masterpieces from './Pages/Masterpieces'
import Footer from './Pages/Footer'
import OurMission from './Pages/Mission'
import Imagesection from './Pages/Imagecompare'
import BackToTop from './Pages/Backtotop'

export default function App() {
  return (
    <div>
      <Header/>
      <MyCarousel/>
      <AboutUs/>
      <OurMission/>
      <BackToTop/>
      <Masterpieces/>
      <Imagesection/>
      <Footer/>
    </div>
  )
}

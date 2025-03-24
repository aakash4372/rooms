import React from 'react'
import Header from './Pages/Header'
import MyCarousel from './Pages/Home'
import AboutUs from './Pages/About'
import Masterpieces from './Pages/Masterpieces'
import Imagecompare from './Pages/Imagecompare'
import Footer from './Pages/Footer'
import OurMission from './Pages/Mission'

export default function App() {
  return (
    <div>
      <Header/>
      <MyCarousel/>
      <AboutUs/>
      <OurMission/>
      <Masterpieces/>
      <Imagecompare/>
      <Footer/>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'

function Home() {
  return (
    <>
        <Navbar/>
        <Banner/> 
        <Freebook/>
        <Footer/>

    </>
  )
}

export default Home
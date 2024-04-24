import React from 'react'
import KittenBanner from '../Components/KittenBanner'
import Appbar1 from '../Components/Appbar1'
import Appbar2 from '../Components/Appbar2'
import KittenCards from '../Components/KittenCards'
import Footer from '../Components/Footer'

const KittenPage = () => {
  return (
    <>
    <Appbar1/>
    <Appbar2/>
    <KittenBanner/>
    <KittenCards/>
    <Footer/>
    </>
  )
}

export default KittenPage

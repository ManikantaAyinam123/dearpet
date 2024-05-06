import React from 'react'
import Appbar1 from './Appbar1'
import Appbar2 from './Appbar2'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
    <Appbar1/>
    <Appbar2/>
    <div>{children}</div>
    <Footer/>
    </>

  )
}

export default Layout

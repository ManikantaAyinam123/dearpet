import React from 'react'
import KittenBanner from '../Components/KittenBanner'
import KittenCards from '../Components/KittenCards'
import Layout from '../Components/Layout'

const KittenPage = () => {
  return (
    <Layout>
      <div>
        <KittenBanner />
        <KittenCards />
      </div>
    </Layout>


  )
}

export default KittenPage

import React from 'react'
import PuppyPedia from '../Components/PuppyPedia'
import PuppyLifeStages from '../Components/PuppyLifeStages'
import PuppyCart from '../Components/PuppyCart'
import PuppyCare from '../Components/PuppyCare'
import PuppyMoreProducts from '../Components/PuppyMoreProducts'
import Layout from '../Components/Layout'

const PuppyPage = () => {
  return (

    <Layout>
      <div>
        <PuppyPedia />
        <PuppyLifeStages />
        <PuppyCart />
        <PuppyCare />
        <PuppyMoreProducts />
      </div>
    </Layout>



  )
}

export default PuppyPage

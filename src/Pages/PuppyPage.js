import React from 'react'
import PuppyPedia from '../Components/PuppyPedia'
import Appbar1 from '../Components/Appbar1'
import Appbar2 from '../Components/Appbar2'
import PuppyLifeStages from '../Components/PuppyLifeStages'
import PuppyCart from '../Components/PuppyCart'
import PuppyCare from '../Components/PuppyCare'
import PuppyMoreProducts from '../Components/PuppyMoreProducts'

const PuppyPage = () => {
  return (
   <>
   <Appbar1/>
   <Appbar2/>
   <PuppyPedia/>
   <PuppyLifeStages/>
   <PuppyCart/>
   <PuppyCare/>
   <PuppyMoreProducts/>
   </>
  )
}

export default PuppyPage

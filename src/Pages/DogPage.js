import React from 'react'
import DogCards from '../Components/DogCards'
import Layout from '../Components/Layout'


const DogPage = () => {
  return (
    <>
      <Layout>
        <div>
          <DogCards />
          {/* <NoDataFound/> */}
        </div>
      </Layout>
    </>



  )
}

export default DogPage

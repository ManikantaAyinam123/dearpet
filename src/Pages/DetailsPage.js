import React from 'react'
import DetailsMagnifier from '../Components/DetailsMagnifier'
import DetailsCustomerReveiws from '../Components/DetailsCustomerReveiws'
import DetailsTopPicks from '../Components/DetailsTopPicks'
import Layout from '../Components/Layout'

const DetailsPage = () => {
  return (
    <Layout>
      <div>
        <DetailsMagnifier />
        <DetailsCustomerReveiws />
        <DetailsTopPicks />
      </div>
    </Layout>

  )
}

export default DetailsPage

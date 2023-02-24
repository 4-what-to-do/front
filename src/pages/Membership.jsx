import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import MembershipWrappert from '../components/membership/MembershipWrappert'
import MembershipFormWrapper from '../components/membership/MembershipFormWrapper'
import MembershipButtonWrapper from '../components/membership/MembershipButtonWrapper'


function Membership() {
  return (
    <Layout>
      <Header />
      <MembershipWrappert>
        <MembershipFormWrapper />
        <MembershipButtonWrapper />
      </MembershipWrappert>
    </Layout>
  )
}

export default Membership

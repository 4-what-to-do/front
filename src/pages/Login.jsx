import React from 'react'
import Header from '../components/Header'
import Layout from '../components/Layout'
import LoginButtonWrapper from '../components/login/LoginButtonWrapper'
import LoginFormWrapper from '../components/login/LoginFormWrapper'
import InputWrapper from '../components/login/InputWrapper'



function Login() {
  return (
    <Layout>
      < Header />
      <LoginFormWrapper>
        <InputWrapper />
        <LoginButtonWrapper />
      </LoginFormWrapper>
    </Layout>
  )
}

export default Login

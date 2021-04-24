import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Content>
        <BgImg />
      </Content>
    </Container>
  )
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`
const Content = styled.div`
  margin-bottom: 10vh;
  width: 100%;
  min-height: 100vh;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%
`
const BgImg = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-size: cover;
  background-position: top;
  background-repeat: non-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

export default Login
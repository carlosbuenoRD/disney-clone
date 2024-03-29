import React from 'react'
import styled from 'styled-components'

const Login = () => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src='/images/cta-logo-one.svg' alt='brand logo'/>
          <SignUp>Get All There</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
            subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src='/images/cta-logo-two.png' alt='brand logo'/>
        </CTA>
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

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 1px
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  margin-top: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px; 
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
  max-width: 600px;
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`

export default Login
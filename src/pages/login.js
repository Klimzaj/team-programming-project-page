import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

import loginImage from '../images/login.jpeg'

const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align:center;
    font-size: 3rem;
    padding: 1rem 1rem 0.1rem 1rem;
    
    @media (min-width: 425px) {
      
    }
    @media (min-width: 500px) {
      
    }
    @media (min-width: 768px) {
      font-size: 48px;  
      padding: 10px;
    
    }
    @media (min-width: 1024px) {
      font-size: 54px;
    }
    @media (min-width: 1200px) {
      
    }
    @media (min-width: 1400px) {
      font-size: 74px;
    }
  } 
`

const MainImage = styled.div`
  width: 100%;
  height: 435px;
  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
`

const SubmitButton = styled.input`
  padding: 13px 29px;
  line-height: 17px;
  font-size: 14px;
  border: none;
  font-family: 'Source Sans Pro', sans-serif;
  background: #ffe600;
  border-radius: 20px;
  &:hover {
    background: linear-gradient(#ffe600, #ffe611);
  }
`
const Form = styled.form`
`
const BorderInput = styled.input`
  border: 1px solid #000;
  border-radius: 20px;
  padding: 5px 5px 5px 15px;
`

const LoginInput = styled(BorderInput)`
`
const PasswordInput = styled(BorderInput)`
`
const FormP = styled.p`
  /* font-weight: 700; */
  font-size: inherit;
  /* line-height: 1.3; */
  margin-bottom: 10px;
  margin-top: 10px;
  /* color: #B1B1B1; */
`
const SmallP = styled.p`
  font-size: 13px;
  margin-right: 5px;
`
const SmallDiv = styled.div`
  display: flex;
  margin-top: 5px;
`
const RegisterLink = styled(Link) `
  text-decoration: none;
  color: #737373;
  &:hover {
    text-decoration: underline;
  }
`

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  handleSubmit = e => {

  }

  render() {
    const {login, password} = this.state
    return (
      <Layout>
        <MainImage source = {loginImage}/>
        <MainWrapper>
          <h2>Logowanie</h2>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FormP>Login</FormP>
            <LoginInput
              type='text'
              name='login'
              value={login}
              onChange={this.onChangeInput}
              required
            />
            <FormP>Hasło</FormP>
            <PasswordInput
              type='password'
              name='password'
              value={password}
              onChange={this.onChangeInput}
              required
            />
            <SmallDiv><SmallP>Nie masz konta?</SmallP><RegisterLink to='register'>Zarejestruj się!</RegisterLink></SmallDiv>
            <SubmitButton
              type='submit'
              value='Login'
            />
          </Form>
        </MainWrapper>
      </Layout>    
    )
  }
}

export default Login

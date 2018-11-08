import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
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
  font-weight: 700;
  font-size: inherit;
  line-height: 1.3;
  margin-bottom: 10px;
  margin-top: 10px;
`
const SmallP = styled.p`
  font-size: 13px;
  margin-right: 5px;
`
const SmallDiv = styled.div`
  display: flex;
  margin-top: 5px;
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
            <SmallDiv><SmallP>Nie masz konta?</SmallP><Link to='register'>Zarejestruj</Link></SmallDiv>
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

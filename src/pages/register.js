import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import registerImage from '../images/register.jpeg'
import * as AxiosRequests from '../backend-data/Requests/' 

const MainWrapper = styled.div`

  width: 100%;
  height: 100%;
  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-position-y: top;
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align:center;
    color: white;
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
  display: block;
  margin: 0 auto;
  padding: 13px 29px;
  line-height: 17px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  background: #ffe600;

  border-radius: 20px;

  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

  &:hover {
    background: linear-gradient(#ffe600, #ffe611);
    cursor: pointer;
  }
`
const Form = styled.form`
`
const BorderInput = styled.input`
  all: initial;
  background-color: white;
  
  border-radius: 20px;
  padding: 5px 5px 5px 10px;
`

const LoginInput = styled(BorderInput)`
`
const PasswordInput = styled(BorderInput)`
`
const EmailInput = styled(BorderInput)`
`
const FormP = styled.p`
  color: white;
  margin-bottom: 10px;
  margin-top: 10px;
  opacity: .75;
`
const SmallP = styled.p`
  font-size: 13px;
  color: white;
  margin-right: 5px;
`
const SmallDiv = styled.div`
  display: flex;
  margin-top: 5px;
`
const LinkToLogin = styled(Link)`
  color: 'white'; 
  font-style: italic;
  font-size: 0.8rem; 
  text-decoration: none;
  ${this}:visited{
    color: white;
  }
  ${this}:hover{
    text-decoration: underline;
  }
  ${this}:active{
    text-decoration: underline;
  }
`
class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      email: '',
      password: '',
      repassword: ''
    }
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  handleSubmit = e => {
    
    let data = JSON.stringify({
      password: this.state.password,
      username: this.state.login,
      email: this.state.email
    })
    //axios register post request invocation
    AxiosRequests.registerPostRequest(data)
  }

  render() {
    const {login, password, email, repassword} = this.state
    return (
      <Layout>
        {/* <MainImage source = {registerImage}/> */}
        <MainWrapper source = {registerImage}>
          <h2>Rejestracja</h2>
          <Form
            onSubmit={this.handleSubmit}
          >
            <FormP>Login</FormP>
            <LoginInput
              type='text'
              name='login'
              value={login}
              placeholder="Login"
              onChange={this.onChangeInput}
              required
            />
            <FormP>Email</FormP>
            <EmailInput
              type='email'
              name='email'
              value={email}
              onChange={this.onChangeInput}
              placeholder="Email"              
              required
            />
            <FormP>Hasło</FormP>
            <PasswordInput
              type='password'
              name='password'
              value={password}
              onChange={this.onChangeInput}
              placeholder="Password"              
              required
            />
            <FormP>Powtórz hasło</FormP>
            <PasswordInput
              type='password'
              name='repassword'
              value={repassword}
              onChange={this.onChangeInput}
              placeholder="Password"
              required
            />
            <SmallDiv>
              <SmallP>Masz już konto?</SmallP>
              <LinkToLogin to='/login'>Zaloguj się!</LinkToLogin>
            </SmallDiv>

            <SubmitButton
              type='submit'
              onClick = {this.handleSubmit}
              value='Zarejestruj'
            />
          </Form>
        </MainWrapper>
      </Layout>    
    )
  }
}

export default Register

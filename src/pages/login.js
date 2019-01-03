import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import axios from 'axios'
import loginImage from '../images/login.jpeg'
import * as Cookie from '../components/Cookie/'

//change to image from gatsby-image!!!
const windowGlobal = typeof window !== 'undefined' && window
const loginPath = '/auth/token/obtain/'



const MainWrapper = styled.div`
  width: 100%;

  background-image: url(${props => props.source});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: center;
  background-position-x: center;

  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: white;
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
  display: block;
  
  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);


  margin: 0 auto;
  padding: 13px 29px;
  line-height: 17px;
  font-size: 14px;
  border: none;
  /* font-family: 'Source Sans Pro', sans-serif; */
  background: #ffe600;
  border-radius: 20px;
  
 
  &:hover {
    background: linear-gradient(#ffe600, #ffe611);
  }
`
const Form = styled.form`
`
const BorderInput = styled.input`
  display: block;
  all: initial;
  background-color: white;

  border-radius: 20px;
  padding: 5px 5px 5px 10px;
`

const LoginInput = styled(BorderInput)`
  width: 100%;
`
const PasswordInput = styled(BorderInput)`
  width: 100%;
`
const FormP = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  color: white;
  opacity: 0.9;
`
const SmallP = styled.p`
  font-size: 13px;
  margin-right: 5px;
  color: white;
`
const SmallDiv = styled.div`
  display: flex;
  margin-top: 5px;
`
const RegisterLink = styled(Link) `
  color: 'white'; 
  font-size: 0.8rem; 
  text-decoration: none;
  font-style: italic;
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
    e.preventDefault();
    const mData = JSON.stringify({
      password: this.state.password,
      username: this.state.login
    })
      
    axios.post(loginPath, mData, {
      headers: {
        'Content-Type':'application/json',},
      }).then(function (response) {
      //handle success
        Cookie.setCookie('access', response.data.access, 600000)//10minutes
        // localStorage.setItem('access', response.access)
        Cookie.setCookie('refresh', response.data.refresh, 600000)//10minutes

          // localStorage.setItem('refresh', response.refresh)
          //redirect
          if(windowGlobal){
            window.location.replace("http://localhost:8000/myprofile");
          }
          
      })
      .catch(function (response, error) {
    //handle error
        console.log(error)
        console.log('error: ', response);
      });
  }


  render() {
    const {login, password} = this.state
    return (
      <Layout>
        <MainWrapper source = {loginImage}>
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
              placeholder='E-mail'
              required
            />
            <FormP>Hasło</FormP>
            <PasswordInput
              type='password'
              name='password'
              value={password}
              onChange={this.onChangeInput}
              placeholder='Password'
              required
            />
            <SmallDiv>
              <SmallP>Nie masz konta?</SmallP>
              <RegisterLink to='/register'>Zarejestruj się!</RegisterLink>
            </SmallDiv>

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

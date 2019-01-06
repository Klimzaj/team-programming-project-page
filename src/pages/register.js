import React from 'react'
import Layout from '../components/Layout'
import registerImage from '../images/register.jpeg'
import axios from 'axios'
import * as El from './../components/Register/style'

const windowGlobal = typeof window !== 'undefined' && window
const registerPath = '/auth/register/';

class Register extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      loginFieldActive: false,
      email: '',
      emailFieldActive: false,
      password: '',
      passwordFieldActive: false,
      repassword: '',
      repasswordFieldActive: false,
    }
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))

    this.activateField(e);
    e.preventDefault();
  }

  activateField = e => {
    if(e.target.name === 'login'){
      this.setState({
        loginFieldActive: true
      })
    }else if(e.target.name === 'password'){
      this.setState({
          passwordFieldActive: true
      })
    }else if(e.target.name === 'email'){
      this.setState({
          emailFieldActive: true
      }) 
    } else if(e.target.name === 'repassword'){
      this.setState({
          repasswordFieldActive: true
      })  
    }
  }

  disableField = e => {
    if(e.target.name === 'login'){
      if (e.target.value === '') {
        this.setState({
            loginFieldActive: false
        })
      }
    }else if(e.target.name === 'password'){
      if (e.target.value === '') {
        this.setState({
            passwordFieldActive: false
        })
      }
    } else if(e.target.name === 'email'){
      if (e.target.value === '') {
        this.setState({
            emailFieldActive: false
        })
      }
    } else if(e.target.name === 'repassword'){
      if (e.target.value === '') {
        this.setState({
            repasswordFieldActive: false
        })
      }
    } 
  }

  handleSubmit = e => {
    e.preventDefault();
    let data = JSON.stringify({
      password: this.state.password,
      username: this.state.login,
      email: this.state.email
    })

  axios.post(registerPath, data, {
    headers: {
      'Content-Type': 'application/json',
    }}).then(function (response) {
        //handle success

        console.log('You will be redirected in few seconds.')
        if(windowGlobal){
          window.location.replace("http://localhost:8000/login");
        }
        console.log(response);

    }).catch(function (response) {
        //handle error
        console.log(response);
    });
  }

  render() {
    return (
      <Layout>
        <El.MainWrapper source = {registerImage}>
          <h2>Rejestracja</h2>
          <El.Form
            onSubmit={this.handleSubmit}
          >
  
            <label htmlFor='login' className={this.state.loginFieldActive ? "field-active" : ""}>Login</label>    
            <input
              type='text'
              name='login'
              value={this.state.login}
              placeholder="Login"
              onChange={this.onChangeInput}
              onBlur={this.disableField}   
              onFocus={this.activateField}
              required
            />

            <label htmlFor='email' className={this.state.emailFieldActive ? "field-active" : ""}>E-mail</label>      
            <input
              type='email'
              name='email'
              value={this.state.email}
              placeholder="E-mail"              
              onChange={this.onChangeInput}
              onBlur={this.disableField}   
              onFocus={this.activateField}
              required
            />

            <label htmlFor='password' className={this.state.passwordFieldActive ? "field-active" : ""}>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              placeholder="Password"              
              onChange={this.onChangeInput}
              onBlur={this.disableField}   
              onFocus={this.activateField}
              required
            />

            <label htmlFor='repassword' className={this.state.repasswordFieldActive ? "field-active" : ""}>Repeat password</label>  
            <input
              type='password'
              name='repassword'
              value={this.state.repassword}
              placeholder="Repeat password"
              onChange={this.onChangeInput}
              onBlur={this.disableField}   
              onFocus={this.activateField}
              required
            />

            <El.SmallDiv>
              <El.SmallP>Masz już konto?</El.SmallP>
              <El.LinkToLogin to='/login'>Zaloguj się!</El.LinkToLogin>
            </El.SmallDiv>

            <El.SubmitButton
              type='submit'
              value='Create Account'
            />
          </El.Form>
        </El.MainWrapper>
      </Layout>    
    )
  }
}

export default Register

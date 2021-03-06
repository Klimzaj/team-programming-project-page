import React from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import loginImage from '../images/login.jpeg'
import * as El from '../components/Login/style'
import * as paths from './../data/ApiPaths'
const windowGlobal = typeof window !== 'undefined' && window





class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      loginFieldActive: false,
      password: '',
      passwordFieldActive: false,
    }
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))

    this.activateField(e);
    e.preventDefault();
  }

  activateField = (e) => {
    if(e.target.name === 'login'){
      this.setState({
        loginFieldActive: true
      })
    }else if(e.target.name === 'password'){
      this.setState({
          passwordFieldActive: true
      })
    }
  }

  disableFocus = e => {
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
    } 
  }



  handleSubmit = e => {
    e.preventDefault()
    const mData = JSON.stringify({
      password: this.state.password,
      username: this.state.login
    })
    // console.log('windowGlobal: ', windowGlobal)
    if(windowGlobal){
      axios.post(paths.domainName + paths.loginPath, mData, {
        headers: {
          'Content-Type':'application/json',},
        }).then(function (response) {
          //handle success
          console.log('success: ', response)
  
          localStorage.setItem('access', response.data.access)
          localStorage.setItem('refresh', response.data.refresh)
          console.log('get access: ', localStorage.getItem('access'))
          console.log('get refresh: ', localStorage.getItem('refresh'))
        
          //redirect    
          if(windowGlobal)
     

            window.location.replace("https://kitchenhelper.netlify.com/")
          //props.history.push('/myprofile')

        })
        .catch((error) => {
          console.log(error)
        });
    }
  }


  render() {
    return (
      <Layout>
        <El.MainWrapper source = {loginImage}>
          <h2>Logowanie</h2>
          <El.Form
            onSubmit={this.handleSubmit}
          >

            <label htmlFor='login' className={this.state.loginFieldActive ? "field-active" : ""}>Login</label>
            <input
              type='text'
              name='login'
              value={this.state.login}
              placeholder='E-mail'
              onFocus={this.activateField}
              onBlur={this.disableFocus}   
              onChange={this.onChangeInput}
              required
            />

            <label htmlFor='password' className={this.state.passwordFieldActive ? "field-active" : ""}>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              placeholder='Password'
              value={this.state.password}
              onFocus={this.activateField}
              onBlur={this.disableFocus}   
              onChange={this.onChangeInput}
              required
            />

            <El.SmallDiv>
              <El.SmallP>Nie masz konta?</El.SmallP>
              <El.RegisterLink to='/register'>Zarejestruj się!</El.RegisterLink>
            </El.SmallDiv>

            <El.SubmitButton
              type='submit'
              value='Login'
            />
          </El.Form>
        </El.MainWrapper>
      </Layout>    
    )
  }
}

export default Login

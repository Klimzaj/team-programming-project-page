import React, {Component} from 'react'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/Layout'
import * as El from './../components/Contact/style'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      messageWasSent: null,//for animation if message was sended
      submitMessage: '',
      firstname: '',
      firstNameFieldActive: false,
      lastname: '',
      lastNameFieldActive: false,
      email: '',
      emailFieldActive: false,
      message: '',
      messageFieldActive: false,
    }
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
    
    this.activateField(e)
    e.preventDefault()
  }


  activateField = e => {
    if(e.target.name === 'firstname'){
      this.setState({
        firstNameFieldActive: true
      })
    }else if(e.target.name === 'lastname'){
      this.setState({
          lastNameFieldActive: true
      })
    }else if(e.target.name === 'email'){
      this.setState({
          emailFieldActive: true
      })
    }else if(e.target.name === 'message'){
      this.setState({
          messageFieldActive: true
      })
    }
  }

  disableFocus = e => {
    if(e.target.name === 'firstname'){
      if (e.target.value === '') {
        this.setState({
            firstNameFieldActive: false
        })
      }
    }else if(e.target.name === 'lastname'){
      if (e.target.value === '') {
        this.setState({
            lastNameFieldActive: false
        })
      }
    }else if(e.target.name === 'email'){
      if (e.target.value === '') {
        this.setState({
            emailFieldActive: false
        })
      }
    }else if(e.target.name === 'message'){
      if (e.target.value === '') {
        this.setState({
            messageFieldActive: false
        })
      }
    }   

  }


  

  handleSubmit = e => {
    if(this.grecaptcha.getResponse() !== 0 && this.grecaptcha.getResponse() !== '' )
    {

      const myPayload = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        message: this.state.message,
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({ "form-name": "contact", ...myPayload })
      })
      .then(()=>{
        this.setState({
          messageWasSent: true,
          submitMessage: 'Message was succesfully sent.',
          firstname: '',
          lastname: '',
          email: '',
          message: '',
        })
      }
      )
      .catch(error => console.log(error))

      e.preventDefault()

    } else {
      e.preventDefault()
      this.setState({
        messageWasSent: false,
        submitMessage: 'Please complete the recaptcha validation to continue.'
      })
    }
  }



  render() {
    return (
      <Layout>
        <El.ContactWrapper>
          <div id='formSubmitMessage' style = {{display: 'flex', jusitfyContent: 'center'}} className={this.state.messageWasSent !== null?'showSubmitMessage':'hideSubmitMessage'}>
            <p>
              {this.state.submitMessage}
              {/* {setTimeout(()=>{this.setState({messageWasSent: null})}, 5000)} */}
              
            </p>
          </div>
          <h1>Contact</h1>
          <El.Form 
            name="contact"
            method="POST"
            onSubmit={this.handleSubmit}
            data-netlify="true" 

          >
            <input type="hidden" name="form-name" value="contact" />

            <label htmlFor="firstname" className={this.state.firstNameFieldActive ? "field-active" : ""} >Name: </label>
            <input
              type='text'
              name='firstname'
              value={this.state.firstname}
              placeholder="Firstname"

              onChange={this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
            />

            <label htmlFor = "lastname" className={this.state.lastNameFieldActive ? "field-active" : ""}>Lastname: </label>
            <input
              type='text'
              name='lastname'
              value={this.state.lastname}
              placeholder="Lastname"

              onChange={this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
            />

            <label htmlFor="email" className={this.state.emailFieldActive ? "field-active" : ""}>E-mail: </label>
            <input
              type='email'
              name='email'
              value={this.state.email}
              placeholder="E-mail"
              
              onChange={this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
            />

            <label htmlFor="message" className={this.state.messageFieldActive ? "field-active" : ""}>Message: </label>
            <textarea
              type='text'
              name='message'
              value={this.state.message}
              placeholder="Your message"
              
              rows="4"   
              onChange={this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
            />
            <Recaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              required
            />
            <button
              type='submit'
              value='Submit'
            >
            Send 
            </button>
          </El.Form>
        </El.ContactWrapper>
      </Layout>
    )
  }
}

export default Contact

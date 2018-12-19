import React from 'react'
// import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/Layout'
import styled from 'styled-components'

//const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

const ContactWrapper = styled.div`
  color: #737373;
  font-size: 1rem;
  
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
  h1{
    
    color:#333333;
  }
  
`
const Form = styled.form`

  display: flex;
  flex-direction: column;
  input{
    all: initial;
    /* display: block; */
    background-color: white;
    border-radius: 10px;
    border: 1px solid grey;
    width: 100%;
    height: 25px;
    padding-left: 0.5rem;
    margin: 0.5rem 0;  
    
    ${this}::placeholder{
      color: grey;
    
    }    
  }
  textarea{
    all: initial;
    background-color: white;
    border-radius: 10px;
    border: 1px solid grey;
    width: 100%;
    height: 100px;
    margin: 0.5rem 0;  
    padding: 0.5rem;
    overflow: hidden;
    ${this}::placeholder{
      color: grey;
    }    
  }
  label{
    display: block;
  }

  button{
    /* margin: auto; */
    /* flex: 0.5; */
    /* align-self:center; */
    /* align: center; */
    /* align-items: center; */
    padding: 0 ;
    all: initial;
    display: block;
    width: 100px;
    height: 50px;
    margin: 0 auto;
    margin: 1rem auto;
    background-color: #ffe600;
    border-radius: 10px;
    text-align: center;
    ${this}:active{
      text-decoration: none;
      color: white;
      background-color: #C6B305;
      text-decoration: none !important;
    }
    ${this}:hover{
      text-decoration: underline;
      cursor: pointer;
      /* color: white; */
    }
    

  }
`
class Contact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  }
  
  // encode = (data) => {
  //   return Object.keys(data)
  //       .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //       .join("&");
  // }
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }
  handleSubmit = e => {
    // if(this.grecaptcha.getResponse() !== 0 && this.grecaptcha.getResponse() !== '' )
    // {
    //   fetch("/", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: this.encode({ "form-name": "contact", ...this.state })
    //   })
    //   .then(() => alert("Success!"))
    //   .catch(error => alert(error))

    //   e.preventDefault()

    // } else {
    //   alert("Please complete the recaptcha validation to continue.")
    //   e.preventDefault()
    // }
  }
  render() {
    const {firstname, lastname, email, message} = this.state
    return (
      <Layout>
        <ContactWrapper>
          <h1>Contact</h1>
          <Form 
            name="contact"
            method="POST"
            onSubmit={this.handleSubmit}
            //data-netlify="true" 
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* <FormP>Imię</FormP> */}
            <label htmlFor="firstname">Name: </label>
            <input
              type='text'
              name='firstname'
              placeholder="Firstname"
              value={firstname}
              onChange={this.onChangeInput}
              // required
            />
            {/* <FormP>Nazwisko</FormP> */}
            <label htmlFor = "lastname">Lastname: </label>
            <input
              type='text'
              name='lastname'
              placeholder="Lastname"

              value={lastname}
              onChange={this.onChangeInput}
              //required
            />
            {/* <FormP>Email</FormP> */}
            <label htmlFor="email">E-mail: </label>
            <input
              type='email'
              name='email'
              placeholder="E-mail"
              
              value={email}
              onChange={this.onChangeInput}
              //required
            />
            {/* <FormP>Wiadomość</FormP> */
            }
            <label htmlFor="message">Message: </label>
            <textarea
              type='text'
              name='message'
              placeholder="Message"
              
              rows="4"   
              value={message}
              onChange={this.onChangeInput}
              //required
            />
            {/* <StyledRecaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              required
            /> */}
            <button
              type='submit'
              value='Submit'
            >
            Send 
            </button>
          </Form>
        </ContactWrapper>
      </Layout>
    )
  }
}

export default Contact

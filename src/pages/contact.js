import React from 'react'
import Recaptcha from 'react-google-recaptcha'
import Layout from '../components/Layout'
import styled from 'styled-components'

//const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

const ContactWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  color: #737373;
  font-size: 1rem;
  width: 80%;
  @media (min-width: 768px) {
    width: 75%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`
const Form = styled.form`
`
const FormP = styled.p`
  /* font-weight: 400; */
  /* font-size: inherit; */
  /* line-height: 1.3; */
  margin-bottom: 10px;
`
const BorderInput = styled.input`
  border: 1px solid #000;
  border-radius: 20px;
  padding: 5px 5px 5px 15px;
`

const FirstNameInput = styled(BorderInput)`
  width: 47%;
`
const LastNameInput = styled(BorderInput)`
  width: 47%;
`
const EmailInput = styled(BorderInput)`
  width: 100%;
  margin-bottom: 27px;
`
const MessageInput = styled.textarea`
  width: 100%;
  border: 1px solid #000;
  border-radius: 20px;
  height: 160px;
  padding: 5px 5px 5px 15px;
`
const SubmitButton = styled.input`
  margin-left: auto;
  margin-right: auto;
  padding: 13px 29px;
  /* line-height: 17px; */
  /* font-size: 14px; */
  border: none;
  /* font-family: 'Source Sans Pro', sans-serif; */
  background: #ffe600;
  margin-top: 33px;
  border-radius: 20px;
  &:hover {
    background: linear-gradient(#fff, #000);
  }
`
const StyledRecaptcha = styled(Recaptcha)`
  margin-top: 15px;
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
  // onChangeInput = e => {
  //   const { name, value } = e.target
  //   this.setState(prevState => ({ ...prevState, [name]: value }))
  // }
  // handleSubmit = e => {
  //   if(this.grecaptcha.getResponse() !== 0 && this.grecaptcha.getResponse() !== '' )
  //   {
  //     fetch("/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //       body: this.encode({ "form-name": "contact", ...this.state })
  //     })
  //     .then(() => alert("Success!"))
  //     .catch(error => alert(error))

  //     e.preventDefault()

  //   } else {
  //     alert("Please complete the recaptcha validation to continue.")
  //     e.preventDefault()
  //   }
  // }
  render() {
    const {firstname, lastname, email, message} = this.state
    return (
      <Layout>
        <ContactWrapper>
          <h2>Contact</h2>
          <Form 
            name="contact"
            method="POST"
            //onSubmit={this.handleSubmit}
            //data-netlify="true" 
          >
            <input type="hidden" name="form-name" value="contact" />
            <FormP>Imię</FormP>
            <FirstNameInput
              type='text'
              name='firstname'
              value={firstname}
              //onChange={this.onChangeInput}
              //required
            />
            <FormP>Nazwisko</FormP>
            <LastNameInput
              type='text'
              name='lastname'
              value={lastname}
              //onChange={this.onChangeInput}
              //required
            />
            <FormP>Email</FormP>
            <EmailInput
              type='email'
              name='email'
              value={email}
              //onChange={this.onChangeInput}
              //required
            />
            <FormP>Wiadomość</FormP>
            <MessageInput
              type='text'
              name='message'
              rows="4"   
              value={message}
              //onChange={this.onChangeInput}
              //required
            />
            {/* <StyledRecaptcha
              ref="recaptcha"
              sitekey={RECAPTCHA_KEY}
              required
            /> */}
            <SubmitButton
              type='submit'
              value='Submit'
            />
          </Form>
        </ContactWrapper>
      </Layout>
    )
  }
}

export default Contact

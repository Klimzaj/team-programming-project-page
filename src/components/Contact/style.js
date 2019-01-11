import styled from 'styled-components'
import Link from 'gatsby-link'


export const ContactWrapper = styled.div`
  color: #737373;
  font-size: 1rem;
  z-index: 0;
  display: flex;
  flex-direction: column;
    align-items: center;
    justify-content: center;
  h1{
    color:#333333;
  }
  
`
export const Form = styled.form`

  display: flex;
  flex-direction: column;

    textarea, input {
        /* width: 300px; */
        border: 1px solid grey !important;
    }

  textarea[type="text"]:focus::-webkit-input-placeholder,input[type="text"]:focus::-webkit-input-placeholder,input[type="email"]:focus::-webkit-input-placeholder{
      opacity: 0;
      transition: opacity 0.5s 0.5s ease; 
      
  }

  textarea[type="text"]:not(:focus)::-webkit-input-placeholder,input[type="text"]:not(:focus)::-webkit-input-placeholder, input[type="email"]:focus::-webkit-input-placeholder{
      opacity: 1;
      transition: opacity 0.5s 0.5s ease; 
  }

  textarea[type='text'], input[type='text'],input[type='password'],input[type='email'] {
        all: initial;
        background-color: white;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;

        z-index: 2;
        /* opacity: 0.8; */
        /* color: white; */
        outline: none;
        border-bottom: 2px solid #ffe600;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }

    label {
        z-index: 1;
        display: inline-block;
        display: block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
        /* color: #ffffff; */
          color: #737373;

        /* color: #000000; */
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }

    textarea[type="text"]:focus::-webkit-input-placeholder, input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }

    textarea[type="text"]:not(:focus)::-webkit-input-placeholder, input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }


 
  button{
    display: block;

    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

    margin-top: 25px;
    cursor: pointer;
    outline: none;
    padding: 13px 29px;
    line-height: 17px;
    font-size: 14px;
    border: none;
    background: #ffe600;
    border-radius: 20px;
    
    ${this}:active{
        background-color: #C6B305;
        color: white;
        text-decoration: none !important;
        transition: all 0.25s ease;
    }
    ${this}:hover{
        cursor: pointer;
        text-decoration: underline;
    }
  }
`
import styled from 'styled-components'
import Link from 'gatsby-link'

export const MainWrapper = styled.div`
    z-index: 0;
    height: 611px;
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
      padding: 1rem 1rem 0 1rem;
    } 
`

export const SubmitButton = styled.input`
  display: block;

  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

  cursor: pointer;
  outline: none;
  margin: 0 auto;
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

`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  
  input[type='text'],input[type='password'],input[type='email'] {
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
        color: #ffffff;
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }

    input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }

    input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }

`
export const SmallP = styled.p`
  font-size: 13px;
  margin-right: 5px;
  color: white;
`
export const SmallDiv = styled.div`
  display: flex;
  margin-top: 5px;
`
export const RegisterLink = styled(Link) `
  color: 'white'; 
  font-size: 0.8rem; 
  text-decoration: none;
  font-style: italic;
  ${this}:visited{
    color: white;
  }
  ${this}:hover, ${this}:active{
    text-decoration: underline;
  }
`
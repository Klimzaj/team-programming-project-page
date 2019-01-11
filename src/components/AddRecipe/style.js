import styled from 'styled-components'



export const Wrapper = styled.div`
 
  z-index: 0;
  background-color: khaki;
  width: 100%;
  height: auto;
  margin: auto;
  padding: 0 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }
` 

  export const NewIngredientButton = styled.button`
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center; 
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: #FFE600;
    &::before{
      content: '+';
    }
    position: relative;
    top: 3px;
    left: 10px;
        
    ${this}:hover{
      cursor: pointer;
    }
    ${this}:active{
      background-color: #C6B305;
      color: white;
      transition: all 0.25s ease;
    }
  `
  export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
    /* change max-width if you need widther inputs */
    /* max-width: 300px; */
    @media(min-width: 320px){
      width: 300px;
    }
    @media(min-width: 500px){
      width: 400px;
    }
    @media(min-width: 768px){
      width: 500px;
    }


    textarea[type='text'],input[type='text'],input[type='password'],input[type='email'] {
        all: initial;
        background-color: white;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;

        z-index: 2;

        outline: none;
        border-bottom: 2px solid #ffe600;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }

    label {
        z-index: 1;
        display: inline-block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
        color: #ffffff;
        color: black;
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
  export const SubmitButtonInput = styled.button`
    all: initial;
    background-color: #ffe600;
    border-radius: 10px;
    display: block;
    width: 100px;
    height: 25px;
    text-align: center;

    padding: 13px 29px;
    
    margin: 1rem auto;
    ${this}:active{
      background-color: #C6B305;
      color: white;
      text-decoration: none !important;
      transition: all 0.5s ease;
    }
    ${this}:hover{
      cursor: pointer;
      text-decoration: underline;
      transition: all 0.5s ease;
    }
  `
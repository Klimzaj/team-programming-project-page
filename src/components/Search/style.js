import styled from 'styled-components'

export const AddintionalWrapper = styled.div`
    width: 100%;
`
export const MainElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    z-index:-1;

`

export const ShowNewRecipesButton = styled.button`
    all: initial;
    background-color: #ffe600;
    border-radius: 10px;
    display: block;
    width: 100px;
    height: 25px;
    text-align: center;

    padding: 13px 29px;
    
    position: relative;
    top: -10px;
    left: 200px;

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


export const Image = styled.div`
    width: 100%;
    height: 435px;
    z-index: 0;
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media(min-width: 1024px){
        height: 600px;
    }
`

export const MainText = styled.h2 `
    position: relative;
    top: 100px;
    color: white;
    font-size: 2rem;
    margin-left: 20px;
    display: flex;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    position: relative;
    top: 75px;
    margin-left: 20px;
    justify-content: center;
    align-items: flex-start;
    textarea, label, input {
        width: 300px;
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

    textarea[type="text"]:focus::-webkit-input-placeholder, input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }

    textarea[type="text"]:not(:focus)::-webkit-input-placeholder, input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }

    button{
        all:initial;
        display: block;
        cursor: pointer;
        outline: none;
        background-image: url(${props => props.src});
        width: 20px;
        height: 20px;
        position: relative;
        top: -26px;
        left:145px;
        z-index: 5;
    }

    img{
        position: relative;
        right: 10px;
    }

`
export const Magnifier = styled.button`
    all: initial;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    z-index: 5;

    position: relative;
    left: 380px;
    top: 137px;
    /* @media(max-width: 500px){
        left: 190px;
    } */
`


export const RecipesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`


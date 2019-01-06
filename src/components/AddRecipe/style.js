import styled from 'styled-components'



export const Wrapper = styled.div`
 
  width: 100%;
  height: auto;
  margin: auto;
  padding: 0 1rem 0 1rem;


  display: flex;
  flex-direction: column;
  form{
    margin: auto;
    @media(max-width: 320px){
        max-width: 250px;
        
    }
    @media(max-width: 768px){
      max-width: 384px;
    }
    @media(max-width: 1024px){
      max-width: 512px;
    }
    
  }
  h1 {
    text-align: center;
  }
  input {
    all: initial;
    display: block;
    background-color: white;
    
    height: 30px;
    width: 100%; 
    
    border: 1px solid grey;
    border-radius: 30px;
    margin: 0.5rem 0 0.5rem 0; 
    padding-left: 0.5rem;
    
  } 
  textarea{ 
    all: initial;
    display: block;
    background-color: white;
    margin: 0.5rem 0 0.5rem 0; 
    padding: 0.5rem;

    border: 1px solid grey;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    ${this}::placeholder{
      /* padding: 0.5rem; */
    }
    
    /* background-color: red; */
  }

  label{
    display: block;
  } 
` 
  export const InputIngredient = styled.input`
    display: block;
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
    position: relative;
    top: -20px;
    float: right;
    ${this}:hover{
      cursor: pointer;
    }
    ${this}:active{
      background-color: #C6B305;
      color: white;
    }

  `

  export const NameInput = styled.input`

  `
 export  const DescriptionInput = styled.input`
    
  `
  export const RecipeInput = styled.textarea`

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
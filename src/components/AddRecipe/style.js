import styled from 'styled-components'



export const Wrapper = styled.div`
 
  z-index: 0;
  /* background-color: khaki; */
  /* height: 611px; */
  width: 100%;
  margin: auto;
  padding: 0 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
  }

  .custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover, .same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
` 

  export const NewIngredientButton = styled.button`
    all: initial;
    display: flex;
    justify-content: center;
    align-items: center; 
    font-weight: bold;
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
    position: relative;
    background-color: lightblue;
    
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
        background-color: #fffcef;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;

        z-index: 2;

        outline: none;
        border-bottom: 2px solid #ffe600;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }
    select{
      margin-left: 1rem;
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
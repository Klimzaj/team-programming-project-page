import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import * as Cookie from '../backend-data/Cookie/'

const windowGlobal = (typeof window !== 'undefined' && window)



const Wrapper = styled.div`
 
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
  const InputIngredient = styled.input`
    display: block;
  `
  
  const NewIngredientButton = styled.button`
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

  const TitleInput = styled.input`

  `
  const DescriptionInput = styled.input`
    
  `
  const RecipeInput = styled.textarea`

  ` 
  const SubmitButtonInput = styled.button`
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
    }
    ${this}:hover{
      cursor: pointer;
      text-decoration: underline;
    }
  `

class AddRecipe extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      ingredientsList: [
        {
          name: 'Ingredient_0',
          value: '',
        },{
          name: 'Ingredient_1',
          value: '',
        },
      ],
      recipe: ''
    }
  }

  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  newIngredient  = e => {
    
    let newName = `Ingredient_${(this.state.ingredientsList.length).toString()}`
    // console.log("newName: ", newName)
    // console.log(...this.state.ingredientsList)
    // console.log(typeof newStateData)
    // console.log(newStateData)
    // console.log("newName typeof: ", typeof newName)
    let newStateData = [...this.state.ingredientsList]
    newStateData.push({name: newName, value: ''})

    this.setState(() => {
      return {ingredientsList: newStateData};
    });
  }
  
  render(){
    
    let content = (
      <Layout>
        <Wrapper>
          <h1>Add a Recipe</h1>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <TitleInput type = 'text' name = 'title' placeholder = 'Title' onChange={this.onChangeInput} value={this.state.title}/>
            
            <label htmlFor="title">Short description.</label>
            <DescriptionInput type='text' name = 'description' placeholder = 'Description' onChange = {this.onChangeInput} value={this.state.description}/>
            
            <label htmlFor ='component'>Lista składników: </label>


            <NewIngredientButton 
                type="button"
                onClick= {this.newIngredient} 
                >
                +
            </NewIngredientButton>            

            <ul style={{margin: '0', padding: '0'}}>
              {
                this.state.ingredientsList.map((item, i)=>{
                  return(<InputIngredient
                    key = {`Ingredient_${i}`} 
                    type = "text" 
                    name = {`Ingredient_${i}`}
                    placeholder= {`Ingredient ${i}`}
                    onChange = {this.onChangeInput}
                    
                    >

                  </InputIngredient>)
                })
              }
            </ul>
      
            <label htmlFor = 'recipe'>Sposób przygotowania: </label>
            <RecipeInput 
              name = 'recipe' 
              type='text'
              onChange = {this.onChangeInput} 
              placeholder = "Steps to prepare this recipe.." 
              value={this.state.recipe}
              />
            
            <SubmitButtonInput type='button'>Add a Recipe</SubmitButtonInput>

          </form>

        </Wrapper>
      </Layout>
    )
    if(Cookie.getCookie('access')){

      return (content)
    }else{//axios request

      if(windowGlobal){
        // console.log()
        window.location.replace("http://localhost:8000/");
      }

    }


    } 

  }
// }



export default AddRecipe

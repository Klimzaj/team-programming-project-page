import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  background-color: grey;
  height: auto;
  margin: auto;
  padding: 0 1rem 0 1rem;

  /* min-width: 500px; */


  display: flex;
  flex-direction: column;
  form{
    margin: auto;
  }
  h1 {
    text-align: center;
  }
  input {
    all: initial;
    display: block;
    background-color: white;
    
    height: 50px;
    width: 100%;
    
    border-radius: 30px;
    margin: 0.5rem 0 0.5rem 0; 
    ${this}::placeholder {
      padding-left: 2rem; 
    }
  } 

  label{
    /* width: 100%; */
    display: block;
  }  
  `

  const TitleInput = styled.input`

  `
  const DescriptionInput = styled.input`
    
  `
  const RecipeInput = styled.input`

  ` 
  const SubmitButtonInput = styled.input`
    max-width: 100px !important;
    margin-top: 2rem !important;
    margin: auto !important; 
    background-color: blue !important;
    /* width: 50%; */
  `


class AddRecipe extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      ingredientsList: [],
      recipe: ''
    }
  }

  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))
  }

  render(){
    
    return (
      <Layout>
        <Wrapper>
          <h1>Add a Recipe</h1>
          <form onSubmit={this.handleSubmit}>
            <TitleInput type = 'text' name = 'title' placeholder = 'Title' onChange={this.onChangeInput} value={this.state.title}/>
            <DescriptionInput type='text' name = 'description' placeholder = 'Description' onChange = {this.onChangeInput} value={this.state.description}/>
            <label to ='component'>Lista składników: </label>

      
            <label to = 'recipe'>Sposób przygotowania: </label>
            <RecipeInput name = 'recipe' type='text' onChange = {this.onChangeInput} placeholder = "Steps to prepare this recipe.." value={this.state.recipe}/>

            <SubmitButtonInput type='button'/>

          </form>

        </Wrapper>
      </Layout>
    )
  }
}



export default AddRecipe

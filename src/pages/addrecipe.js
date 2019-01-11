import React from 'react'
import Layout from '../components/Layout'
import * as El from './../components/AddRecipe/style'
import axios from 'axios'
// import IngredientInput from '../components/IngredientInput.js'


const addRecipePath ='/api/recipes/'
const windowGlobal = typeof window !== 'undefined' && window

class AddRecipe extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
      name: '',
      nameFieldActive: false,
      image: 'http://placehold.it/150x150?text=foodporn',
      description: '',
      descriptionFieldActive: false,
      votes: 10,
      recipes_ingredients: [
        {
          quantity: "ingredient's quantity",
          ingredient: {
            image: "http://placehold.it/150x150?text=foodporn",
            name: "ingredient's name",
            description: "ingredient's description",
            price: 1,
            unit_price: 1,
            unit_quantity: "150G"
          }
        }
      ],
      ingredientsList: [
        {
          // ingredientFieldActive: false,
          image: 'http://placehold.it/150x150text=foodporn',
          name: 'Ingredient_1',
          // value: '',
          unit_price: 1,
          price: 1,
          unit_quantity: "150G",
          description: 'sample ingredient description'
        },
      ],
      recipe: '',
      recipeFieldActive: false,
      
    }
  }
  
  UNSAFE_componentWillMount = () => {
    // if(windowGlobal && !localStorage.getItem('access'))
    //   window.location.replace("http://localhost:8000/login");
    
  }
  
  onChangeInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({ ...prevState, [name]: value }))

    this.activateField(e)
    e.preventDefault()
  }


  activateField = (e) => {
    if(e.target.name === 'name'){
      this.setState({
        nameFieldActive: true
      })
    }else if(e.target.name === 'description'){
      this.setState({
          descriptionFieldActive: true
      })
    }else if(e.target.name === 'recipe'){ 
      this.setState({
          recipeFieldActive: true
      })
    }
  }

  disableFocus = e => {
    if(e.target.name === 'name'){
      if (e.target.value === '') {
        this.setState({
            nameFieldActive: false
        })
      }
    }else if(e.target.name === 'description'){
      if (e.target.value === '') {
        this.setState({
            descriptionFieldActive: false
        })
      }
    }else if(e.target.name === 'recipe'){
      if (e.target.value === '') {
        this.setState({
            recipeFieldActive: false
        })
      }
    } 
  }

  handleSubmit = e => {
    e.preventDefault()

    let mData = JSON.stringify({
      image: 'http://placehold.it/150x150?text=foodporn',
      name: 'Sample recipe',
      description: 'sample recipe description',
      votes: 10,
      recipes_ingredients: [...this.state.recipes_ingredients]

    })
    console.log(mData)

    if(windowGlobal)
      axios.post(addRecipePath,  mData, {
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access'),
        },
        }).then((response) => {
        //handle success
          console.log('success response: ', response)
          //redirect
            // if(windowGlobal){
            //   window.location.replace("http://localhost:8000/myprofile");
            // }
            
        })
        .catch(( error) => {//handle error
          console.log(error)
        });

  }
  newIngredient  = e => {

    let newName = `Ingredient_${(this.state.ingredientsList.length).toString()}`
    let newStateData = [...this.state.ingredientsList]
    newStateData.push({name: newName, value: ''})

    this.setState(() => {
      return {ingredientsList: newStateData};
    });

  }
  
  render(){
    return(
      <Layout>
        <El.Wrapper>
          <h1>Add a Recipe</h1>

          <El.Form name='add_recipe' onSubmit={this.handleSubmit}>

            <label htmlFor="name" className={this.state.nameFieldActive ? "field-active" : ""}>Recipe name</label>
            <input 
              type = 'text' 
              name = 'name' 
              value={this.state.name}
              placeholder = 'Recipe name' 
              onChange={this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus}  
              required
              
              />
            
            <label htmlFor="description" className={this.state.descriptionFieldActive ? "field-active" : ""}>Short description</label>
            <input 
              type='text' 
              name = 'description'
              value={this.state.description}
              placeholder = 'Description' 
              onChange = {this.onChangeInput} 
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
              />
            

            <div style={{display: 'flex',}}>
              <p style={{ color: 'black'}} htmlFor ='component'>Ingredients list: </p>
              
              <El.NewIngredientButton
                  type="button"
                  onClick= {this.newIngredient} 
                  />
            </div>
            {
              this.state.ingredientsList.map((item, i)=>{
                return(
                  <div key={`div_ingredient_${i}`}>
                      <label
                        key = {`label_ingredient_${i}`} 
                        htmlFor = {`ingredient_${i}}`}
                        className = {item.ingredientFieldActive ? 'field-active': ''}
                        >
                        
                      </label>
                      <input
                        key = {`Ingredient_${i}`} 
                        type = "text" 
                        name = {`ingredient_${i}`}
                        placeholder= {`New ingredient`}
                        onChange = {this.onChangeInput}
                        onFocus={this.activateField}
                        onBlur={this.disableFocus} 
                        />
                    </div>
                )})
              }

            <label htmlFor = 'recipe' className={this.state.recipeFieldActive ? "field-active" : ""}>Recipe's steps </label>
            <textarea
              type='text'
              name = 'recipe' 
              value={this.state.recipe}
              rows = "4"
              placeholder = "Recipe's steps" 
              onChange = {this.onChangeInput} 
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              required
              
              />
            
            <El.SubmitButtonInput 
              type='submit'
              >
              Add a Recipe
            </El.SubmitButtonInput>

          </El.Form>
          {/* <IngredientInput></IngredientInput> */}

        </El.Wrapper>
      </Layout>
    )
  }
}



export default AddRecipe

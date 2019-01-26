import React from 'react'
import Layout from '../components/Layout'
import * as El from './../components/AddRecipe/style'
import axios from 'axios'
// import IngredientInput from '../components/IngredientInput.js'
import * as paths from './../data/ApiPaths'


const windowGlobal = typeof window !== 'undefined' && window

class AddRecipe extends React.Component{
  constructor(props){
    super(props)

    this.delta = this.delta.bind(this)


    this.state = {
      
      nameFieldActive: false,
      descriptionFieldActive: false,
      imageFieldActive: false,
      
      // optionItems: [{name: 'asd1'}, {name: 'asd2'}],

      optionItems: [],

      name: '',
      image: '',
      description: '',
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
    if(windowGlobal && localStorage.getItem('access') === null){
      window.location.replace('https://kitchenhelper.netlify.com/login')      
    }
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
    }else if(e.target.name === 'image'){ 
      this.setState({
          imageFieldActive: true
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
    }else if(e.target.name === 'image'){
      if (e.target.value === '') {
        this.setState({
            imageFieldActive: false
        })
      }
    }else if(e.target.name.includes('ingredient')){
//ingredient field disableFocus
// should be recognizing from which input is it coming from, eg. ingredient1,ingredient2,..3,..4
      
      console.log('hello from input ingredient field onBlur!')
      console.log('my value: ', e.target.value)

      let mData = JSON.stringify({
        query: e.target.value
      })

//axios post method

      if(windowGlobal){
        console.log('thats my acces token: ', localStorage.getItem('access'))
        

        console.log('setting up the state with another empty array. ')

        this.setState({optionItems: []});
        console.log('displaying setted up state to the console, as well as its type(in brackets): ', this.state.optionItems, ', (', typeof this.state.optionItems,')')


        // axios.post('http://localhost:8000/tesco-api/grocery-search/', mData, {      
        axios.post(paths.domainName+paths.getProductPath, mData, {
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access'),
        }
        }).then(function (response) {
        //handle success

            console.log('the whole response from input ingredient post: '+response.data)
            console.log('first element of response array:  '+response.data[0])
            console.log('first element of response array name:  '+response.data[0].name)
            console.log('after dot operator (...response.data): ', ...response.data);
            console.log('typeof response.data: ', typeof(response.data))
            delta = () => {
              setState({
                optionItems: response
              });
            }
        
            console.log('and this is my state: ', this.state.optionItems)
        })
        .catch(function (error) {
      //handle error
          console.log('error: ', error);
        });
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    let mData = JSON.stringify({
      image: this.state.image,
      name: this.state.name,
      description: this.state.recipe,
      votes: this.state.votes,
      recipes_ingredients: [...this.state.recipes_ingredients]

    })

    if(windowGlobal)
      axios.post(paths.domainName + paths.addRecipePath,  mData, {
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access'),
        },
        }).then((response) => {
        //handle success
          console.log('success response: ', response)
          //redirect
            if(windowGlobal){
              window.location.replace("https://kitchenhelper.netlify.com/myprofile");
            }
            
        })
        .catch((response, error) => {//handle error

          console.log('just error data: ', error.response.data)
          console.log('response error status: ', response.response.status)
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
{/* select component */}
                        <select name = {`selectInput_${i}`} onChange={this.handleOnChange}>
                            {this.state.optionItems?(this.state.optionItems.map((item, i)=>{
                              return(
                                <option
                                  value={item.name?(item.name):'__mError'}
                                  name={`option_${i}`}
                                  key={`option_${i}`}
                                >
                                  lol
                                  {item.name}
                                </option>
                              )
                            })):(<option> test </option>)}
                        </select>
                    </div>
                )})
              }
            <label htmlFor = 'image' className={this.state.imageFieldActive ? "field-active" : ""}>Image's URL</label>
            <input
              type = "text" 
              name = 'image'
              value = {this.state.image}
              placeholder= 'https://www.somename.com'
              onChange = {this.onChangeInput}
              onFocus={this.activateField}
              onBlur={this.disableFocus} 
              />
            {this.state.image.includes('.jpg')?(<img src={this.state.image} width='50px' height='50px'></img>):('')}


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

        </El.Wrapper>
      </Layout>
    )
  }
}



export default AddRecipe

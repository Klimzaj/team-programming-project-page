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

    // this.delta = this.delta.bind(this)


    this.state = {
      
      nameFieldActive: false,
      descriptionFieldActive: false,
      imageFieldActive: false,
      
      // optionItems: [{name: 'asd1'}, {name: 'asd2'}],


      optionItems: [],

      image: [],
      name: [],
      description: [],
      price: [],
      unit_price: [],
      unit_quantity: [],

      votes: 0,
      
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

      // ingredientsList: [
      //   {
      //     // ingredientFieldActive: false,
      //     image: 'http://placehold.it/150x150text=foodporn',
      //     name: 'Ingredient_1',
      //     // value: '',
      //     unit_price: 1,
      //     price: 1,
      //     unit_quantity: "150G",
      //     description: 'sample ingredient description'
      //   },
      // ],

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

  ingredientsToState = (data) => {
    

    this.setState({
      optionItems: [...data]
    });
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
    }
  }

  disableFocus2 = e => {

      
      console.log('hello from input ingredient field onBlur!')
      console.log('my value: ', e.target.value)

      let mData = JSON.stringify({
        query: e.target.value
      })

      if(windowGlobal){
        console.log('thats my acces token: ', localStorage.getItem('access'))
        
        console.log('displaying setted up state to the console, as well as its type(in brackets): ', this.state.optionItems, ', (', typeof this.state.optionItems,')')

        const thisBinded = this;

        axios.post(paths.domainName+paths.getProductPath, mData, {
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access'),
        }
        }).then(function (response) {


            thisBinded.ingredientsToState(response.data) //10 miodow!!!!!!!!!!
            //AAAA


        })
        .catch(function (error) {
      //handle error
          console.log('catched an error: ', error);
        });
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
  saveProduct = e => {
    console.log(e);

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
            </div>






            {/* lista produktow */}
                <input
                  key = {`Ingredient_a`} 
                  type = "text" 
                  name = {`ingredient_a`}
                  placeholder= {`New ingredient`}
                  onChange = {this.onChangeInput}
                  onFocus={this.activateField}
                  onBlur={this.disableFocus2} 
                />
              {/* <div/> */}
              <select name = {`selectInput_a`} onChange={this.saveProduct}>
                  {
                    this.state.optionItems?(this.state.optionItems.map((item, i)=>{
                    return(
                      <option
                      value={item.name?(item.name):'__mError'}
                      name={`option_${i}`}
                      key={`${i}`}
                      > 
                        {item.name}
                      </option>
                    )}))
                  :(<option> test </option>)
                  }
              </select>







            <label htmlFor = 'image' className={this.state.imageFieldActive ? "field-active" : ""}>Image's URL</label>
            <input
              type = "text" 
              name = 'image'
              value = {this.state.image}
              placeholder= 'https://placehold.it/150x150?text=lolz.jpg'
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

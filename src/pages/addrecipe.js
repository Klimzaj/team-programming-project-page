import React from 'react'
import Layout from '../components/Layout'
import * as El from './../components/AddRecipe/style'
import axios from 'axios'
// import IngredientInput from '../components/IngredientInput.js'
import * as paths from './../data/ApiPaths'
import { array } from 'prop-types';


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

      name: '',
      image: '',
      description: '',
      recipe: '',


      r_image: [],
      r_name: [],
      r_description: [],
      r_price: [],
      r_unit_price: [],
      r_unit_quantity: [],

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

    let products = []
   
    for (let i = 0; i < this.state.r_name.length; i++) {
      let obj = {
        quantity: 1,
        ingredient: {
          image: this.state.r_image[i],
          name: this.state.r_name[i],
          description: this.state.r_description[i],
          price: this.state.r_price[i],
          unit_price: this.state.r_unit_price[i],
          unit_quantity: this.state.r_unit_quantity[i]
        }
      }
      products.push(obj)
    }
    console.log(products)


    let mData = JSON.stringify({
      image: this.state.image,
      name: this.state.name,
      description: this.state.recipe,
      votes: this.state.votes,
      recipes_ingredients: products

    })

    if(windowGlobal)
      axios.post(paths.domainName + paths.addRecipePath,  mData, {
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('access'),
        },
        }).then(response => {
        //handle success
          console.log('success response: ', response)
          //redirect
            if(windowGlobal){
              window.location.replace("https://kitchenhelper.netlify.com/");
            }
            
        })
        .catch((response, error) => {//handle error

          console.log('just error data: ', error.response.data)
          console.log('response error status: ', response.response.status)
        });

  }
  saveProduct = e => {
    // console.log(e.target.value);
    let el = this.state.optionItems.find(a => a.name == e.target.value)
    // console.log(el);

    let _name = this.state.r_name
    let _image = this.state.r_image
    let _description = this.state.r_description
    let _price = this.state.r_price
    let _unit_price = this.state.r_unit_price
    let _unit_quantity = this.state.r_unit_quantity
    
    console.log(el)

    _name.push(el.name)
    _image.push(el.image)
    _price.push(el.price)
    _unit_price.push(el.unitprice)
    _unit_quantity.push(el.UnitQuantity)
    if(el.description.constructor === Array)
    {
      let a = el.description[0]
      _description.push(a)
    }
    else
    {
      _description.push(el.description)
    }

    this.setState({r_name: _name})
    this.setState({r_image: _image})
    this.setState({r_description: _description})
    this.setState({r_price: _price})
    this.setState({r_unit_price: _unit_price})
    this.setState({r_unit_quantity: _unit_quantity})
  }
  removeProduct = e => {
    console.log("usuwam")
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
    console.log(e.target.key)
  }
  render(){
    const {r_name} = this.state
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
              <ul>
                {
                  r_name.length != 0 ? r_name.map((el,i )=> {
                    // console.log(el)
                    return (
                      <li><h3>{el}</h3><a key={i} onclick={this.removeProduct}>X</a></li> // dodac usuniecie
                      )})
                      : ''
                    }
              </ul>


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

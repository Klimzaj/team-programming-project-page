import React, { Component } from 'react'
// import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import axios from 'axios'
import * as paths from './../data/ApiPaths'
import * as El from './../components/Search/style'
import Recipe from './../components/Recipe/'
import magnifier from '../images/magnifier.png'
import MainImage from '../images/findRecipeImage.jpg'


const windowGlobal = typeof window !== 'undefined' && window




class Search extends Component{ 
  constructor(props){
    super(props)
    this.state = {
        searchInput: '',
        searchInputFieldActive: false,
        recipes: [],
        isDownload: false
    }

  }
  UNSAFE_componentDidMount = () => {
    
  }

  showNewest = (e) => {
    // e.preventDefault();
    // console.log('test msg show newest button: ')
    if(windowGlobal)
    axios.get(paths.domainName+paths.searchRecipePath, 
    {
        'headers':  
        {
            'Content-Type':'application/json',
        },
    }).then((response) => {
      // console.log('response.data: ',response.data);
      this.setState({recipes: response.data})
    }).catch((err)=>{
      console.log('error: ', err)
    })          

  }
  

  handleSubmit = e => {
    e.preventDefault()
    //here request for a specific recipe
  if(windowGlobal)
    axios.get(paths.domainName+paths.searchRecipePath, 
    {
        'headers':  
        {
            'Content-Type':'application/json',
        },
    }).then((response) => {
      // console.log('response.data: ',response.data);
      this.setState({recipes: response.data})
    }).catch((err)=>{
      console.log('error: ', err)
    })          

  // console.log("that's my state to ugh: ", this.state)
  
} 
        

  render(){
    if(this.state.isDownload === false)
    {
      this.showNewest()
      this.setState({isDownload: true})
    }
    return(

      <Layout>
        <El.Image source = {MainImage}>
          <El.MainText>
              Find idea for a dinner!
          </El.MainText> 
          
          <El.Form onSubmit={this.handleSubmit}>
              
              <label htmlFor='searchInput' className={this.state.searchInputFieldActive?'field-active':''}>Recipe name</label>
              <input
                  type = 'text' 
                  name = 'searchInput' 
                  placeholder = 'Recipe name' 
                  onChange = {this.onChangeInput}
                  onFocus={this.activateField}
                  onBlur={this.disableFocus} 
                  required 
              />

              <button
                  type='submit'
                  name='submitButton'
                  value='Submit'
                  src = {magnifier} 
              >
                  <img 
                      src= {magnifier}
                      alt="search button image"
                      onClick = {this.handleSubmit}
                  />
              </button> 

                
            </El.Form>
            
            {/* <El.ShowNewRecipesButton
              onClick = {this.showNewest}
            >
              show newest
            </El.ShowNewRecipesButton> */}

                
        </El.Image>


        <El.RecipesWrapper>

          {this.state.recipes ?  (this.state.recipes.reverse().map((item, i)=>
          {
            // console.log(item)

            let data2
            axios.get(item.url, 
              {
                  headers:  
                  {
                      'Content-Type':'application/json',
                  },
              }).then((response) => {
                // console.log('response.data: ',response.data);
                // this.setState({recipes: response.data})
                console.log(typeof response.data.recipes_ingredients)
                console.log(typeof response.data)

                data2 = response.data
                // data2 = response.data.recipes_ingredients
              }).catch((err)=>{
                console.log('error: ', err)
              }) 
              console.log(data2)
            return(
              <Recipe 
                // key = {`recipe_id_${i}`}
                // author = {item.author}
                name = {item.name}
                description = {item.description}
                image = {item.image}
                // votes = {item.votes}
                data2 = {data2}
              />          
            )})
          ):(
            <div>
              <p> 
                Something went wrong. 
              </p>
            </div>
            )
          }
        </El.RecipesWrapper>
        
      </Layout>
    )}
}

export default Search


export const indexQuery = graphql`
query SearchQuery {
  
  image0: file(relativePath: { eq: "findRecipeImage.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 4096) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



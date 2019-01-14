import React, {Component} from 'react'
import * as El from './style'
import MainImage from '../../images/findRecipeImage.jpg'
import magnifier from '../../images/magnifier.png'
import axios from 'axios'
import Img from 'gatsby-image'
import * as paths from '../../data/ApiPaths'
// import Cookies from 'universal-cookie'


const searchRecipePath = '/api/recipes/'

class FindRecipe extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            searchInputFieldActive: false,
            recipes: null,
        }
    }

    onChangeInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))
      
        this.activateField(e)
        e.preventDefault()
    }

    activateField = e => {
        if(e.target.name === 'searchInput'){
          this.setState({
            searchInputFieldActive: true
          })
        }
      }
    
      disableFocus = e => {
        if(e.target.name === 'searchInput'){
          if (e.target.value === '') {
            this.setState({
                searchInputFieldActive: false
            })
          }
        }  
      }

    handleSubmit = e => {
        e.preventDefault()
        // const cookies = new Cookies()

        console.log(' searchInput clicked! searching for: ', this.state.searchInput);
        console.log('reqest will be send onto: ', paths.domainName + searchRecipePath)
        // +this.state.searchInput
        axios.get(paths.domainName+searchRecipePath, 
        {
            'headers':  
            {
                'Content-Type':'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('access'),
            },
        })
        .then((response) => {
            console.log('response: ',response); // ex.: { user: 'Your User'}
            console.log('response.data: ',response.data); // ex.: { user: 'Your User'}
            this.setState({recipes: response.data})
            console.log('response.status',response.status); // ex.: 200
        }).then((err)=>{
            console.log('error: ', err)
        })        
    }

    render(){
        return(
            <El.Wrapper>
                {console.log(this.props.dataImage)}
                <Img fluid={this.props.dataImage}/>
                <El.Image source = {MainImage}>
                    <El.MainText>
                        Znajdź pomysł na obiad!
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
                            />
                        </button> 


                        {/* printing recipes if fetched succesfully */}
                        {this.state.recipes?(
                            <div style={{display: 'block', height: '500px', backgroundColor: 'red'}}>
                                {this.state.recipes}
                            </div>
                        ):(
                            <div style={{display: 'block', height: '500px', backgroundColor: 'red'}}>
                                nothing fetched
                            </div>
                        )}
                    </El.Form>
                
                </El.Image>
            </El.Wrapper>
        )
    }
}

export default FindRecipe
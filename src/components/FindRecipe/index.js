import React, {Component} from 'react'
import * as El from './style'
import MainImage from '../../images/findRecipeImage.jpg'
import magnifier from '../../images/magnifier.png'
import axios from 'axios'

const searchRecipePath = '/api/recipes/'

class FindRecipe extends Component{

    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
        }
    }

    onChangeInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({ ...prevState, [name]: value }))

    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(' searchInput clicked! searching for: ', this.state.searchInput);

        axios.get('http://localhost:8007'+searchRecipePath+this.state.searchInput, {'headers':  {'Content-Type':'application/json'}})
        .then(function(response){
            console.log(response.data); // ex.: { user: 'Your User'}
            console.log(response.status); // ex.: 200
        });        
    }

    render(){
        return(
            <El.Wrapper>
                <El.Image source = {MainImage}>
                    <El.MainText>
                        Znajdź pomysł na obiad!
                    </El.MainText> 
                    
                    <form onSubmit={this.handleSubmit}>
                        <El.Magnifier 
                            src = {magnifier} 
                            onClick = {this.handleSubmit}
                        /> 
                        
                        <El.SearchInput 
                            type = 'text' 
                            name = 'searchInput' 
                            placeholder = 'Recipe Name' 
                            onChange = {this.onChangeInput}
                            required 
                        />
                    </form>
                
                </El.Image>
            </El.Wrapper>
        )
    }
}

export default FindRecipe
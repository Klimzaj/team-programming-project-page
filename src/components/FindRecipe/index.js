import React from 'react'
import * as El from './style'
import MainImage from '../../images/findRecipeImage.jpg'
 


const FindRecipe = () => {
    return(
        <El.Wrapper>
            <El.Image source = {MainImage}>
                <El.MainText>
                    Znajdź pomysł na obiad!
                </El.MainText> 
                <El.SearchInput placeholder = 'Recipe Name'/>
            </El.Image>
        </El.Wrapper>
    )
}

export default FindRecipe
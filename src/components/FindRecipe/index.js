import React from 'react'
import * as El from './style'
import MainImage from '../../images/findRecipeImage.jpg'
import magnifier from '../../images/magnifier.png'


const FindRecipe = () => {
    return(
        <El.Wrapper>
            <El.Image source = {MainImage}>
                <El.MainText>
                    Znajdź pomysł na obiad!
                </El.MainText> 
                <El.Magnifier src = {magnifier}/> 
                <El.SearchInput placeholder = 'Recipe Name'>
                </El.SearchInput>
            </El.Image>
        </El.Wrapper>
    )
}

export default FindRecipe
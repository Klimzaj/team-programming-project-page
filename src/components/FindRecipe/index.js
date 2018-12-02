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
                    <El.Magnifier src = {magnifier}/> 
                </El.MainText> 
                <El.SearchInput placeholder = 'Recipe Name'/>
            </El.Image>
        </El.Wrapper>
    )
}

export default FindRecipe
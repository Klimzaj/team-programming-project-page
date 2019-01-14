import React from 'react'
// import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import FindRecipe from '../components/FindRecipe/'
import Recipe from '../components/Recipe/'

import tempImg from '../images/lachs.png'

//http://127.0.0.1:8007/api/ingredients/




const RecipesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`
const data = 
  {
    img: tempImg,
    title: 'Łosoś w sosie Harrisa',
    description: 'Pyszny łosoś w paście wytwarzanej z papryki chili, czosnku oraz kmninku.',
    price: '30 zł',
    quantity: 2,
    components: [
      '400g łososia',
      '2 łyżeczki czerownej pasty harrisa',
      '4 łyżki jogurtu greckiego',
      '1 łyżeczka oliwy extra vergine',
      '1 łyżeczka syropu klonowego',
      '125g pomidorków koktajlowych' 
  ],
  steps: 'Odciąć skórkę z łososia, wymieszać pastę harissa z połową jogurtu greckiego (2 łyżki), oliwą, syropem klonowym, solą i pieprzem. Odłożyć łyżkę marynaty i wymieszać ją z pozostałymi 2 łyżkami jogurtu - w ten sposób otrzymamy sos do polania łososia.  Resztą marynaty natrzeć łososia i odłożyć na godzinę do lodówki (można na dłużej jeśli mamy czas). Piekarnik nagrzać do 230 stopni C. W piekarniku nagrzewać też żaroodporną blaszkę. Gdy blaszka i piekarnik będą gorące, włożyć łososia, wsypać pokrojone na połówki pomidorki koktajlowe i piec przez ok. 5 minut, przewrócić na drugą stronę i powtórzyć pieczenie przez ok. 5 minut.',
  }


const someData = [data, data, data, data]

// const Search = () => (
const Search = ({data}) => (
  <Layout>
    <FindRecipe dataImage={data.image0.childImageSharp.fluid}/>
    {/* <FindRecipe dataImage={tempImg}/> */}

    <RecipesWrapper>
      {someData.map((item, i)=>(
          <Recipe 
            key = {`recipe_id_${i}`}
            image = {item.img}
            title = {item.title}
            description = {item.description}
            price = {item.price}
            quantity = {item.quantity}
            components = {item.components}
            recipe = {item.steps}
          />          
        )
      )}
    </RecipesWrapper>
    
  </Layout>
)

export default Search


export const indexQuery = graphql`
query SearchQuery {
  
  image0: file(relativePath: { eq: "findRecipeImage.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`



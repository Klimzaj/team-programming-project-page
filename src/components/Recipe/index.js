import React from 'react'
import axios from 'axios'
import * as El from './style'

let allDetails

const getDetails = async (e) => {
    try {
      return await axios.get(e,
        {
            headers:  
            {
            'Content-Type':'application/json',
            },
        })
    } catch (error) {
      console.error(error)
    }
  }
  
  const useDetails = async (e) => {
    const details = await getDetails(e)
  
    if (details.data.recipes_ingredients) {
    //   console.log(details.data.recipes_ingredients)
      return details.data.recipes_ingredients
    }
  }
  

const Recipe = ({name, description, image, url}) => 
{
    let price = 0
    let nameArray = []
    allDetails = useDetails(url)
    // let myThis = this
    // console.log(url)
    // axios.get(url,
    // {
    //     headers:  
    //     {
    //     'Content-Type':'application/json',
    //     },
    // })
    // .then( response => {
    //     console.log(response.data.recipes_ingredients)
    //     // myThis.takeDetails(response.data.recipes_ingredients)
    // })
    // .catch( err =>{
    //     console.log('error: ', err)
    // })


    // console.log(`jest cos? ${allDetails}`)
    allDetails.then( r => {
        r.map((el) => {
            console.log(el.ingredient_name)
            nameArray.push(el.ingredient_name)
        })
        // console.log(r)
        // console.log(r[0].ingredient_name)
    })
    console.log(nameArray)
return(
    <El.Wrapper>
        <El.AddintionalWrapper>
            <El.Top>
                <El.Left>
                    <El.Image src={image} alt='here should be an image of recipe'/>
                    {/* <El.Image image = {image}/> */}
                </El.Left>
                <El.Right>
                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <p>
                        {/* <b>Price: </b> */}
                        {/* {price} */}
                    </p>
                    <p>
                    <b>
                        Steps to reproduce:
                    </b>
                        {description}
                </p>
                </El.Right>

            </El.Top>

            <El.Components>
                <p>
                    <b>
                        Components:
                    </b>
                </p>    
                {/* {
                    allDetails.then( r => {
                        return (
                            <b>{r[0].ingredient_name}</b>
                        )
                        console.log(r[0].ingredient_name)
                })} */}
                {/* <ul>
                {nameArray.map((item, i)=>{
                    return(
                        <li>{item}</li>
                    )
                    })}
                </ul> */}
            </El.Components>
            {/* <El.ToDo>
                <p>
                    <b>
                        Steps to reproduce:
                    </b>
                        {description}
                </p>
            </El.ToDo> */}
        </El.AddintionalWrapper>
    </El.Wrapper>
)}

export default Recipe
import React from 'react'
import axios from 'axios'
import * as El from './style'
let a 
takeDetails = (e) => {
    a = e
}
const Recipe = ({name, description, image, url}) => 
{
    let price = 0
    let nameArray = []
    
    // console.log(url)
    axios.get(url,
    {
        headers:  
        {
        'Content-Type':'application/json',
        },
    })
    .then( response => {
        console.log(response.data.recipes_ingredients)
        takeDetails(response.data.recipes_ingredients)
    })
    .catch( err =>{
        console.log('error: ', err)
    })
    console.log(a)
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
                    {/* <b>
                        Components:
                    </b> */}

                </p>    
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
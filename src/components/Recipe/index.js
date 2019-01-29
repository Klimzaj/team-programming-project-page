import React from 'react'

import * as El from './style'

// key = {`recipe_id_${i}`}
// author = {item.author}
// description = {item.description}
// image = {item.img}
// votes = {item.votes}
// url = {item.url}

const Recipe = ({name, description, image, data2, data4a, data5a}) => 
{
    let price = 0
    let nameArray = []
    // console.log(typeof data2)
    // console.log(data2)
    console.log(data2)
    console.log(data4a)
    console.log(data5a)
    // console.log(data2[0])
    // if(data2)
    // {
    //     for (let i = 0; i < data2["0"].length; i++) {
    //         const el = data2[i]
    //         console.log(el)
    //         // price += el.price
    //         // nameArray.push(el.name)
    //     }
    // }
    // if(data2)
    // {
    //     data2["0"].map((el,i ) => {
    //         console.log(el)
    //     })
    // }
    
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
                        <b>Price: </b>
                        {/* {price} */}
                    </p>
                </El.Right>

            </El.Top>

            <El.Components>
                <p>
                    <b>
                        Components:
                    </b>

                </p>    
                {/* <ul>
                {nameArray.map((item, i)=>{
                    return(
                        <li>{item}</li>
                    )
                    })}
                </ul> */}
            </El.Components>
            <El.ToDo>
                <p>
                    <b>
                        Steps to reproduce:
                    </b>
                        {description}
                </p>
            </El.ToDo>
        </El.AddintionalWrapper>
    </El.Wrapper>
)}

export default Recipe
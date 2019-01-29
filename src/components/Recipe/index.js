import React from 'react'

import * as El from './style'

// key = {`recipe_id_${i}`}
// author = {item.author}
// description = {item.description}
// image = {item.img}
// votes = {item.votes}
// url = {item.url}

const Recipe = ({name, description, image, data2}) => 
{
    let price = 0
    let nameArray = []
    console.log(data2)
    console.log(typeof data2)
    console.log(data2[0])
    console.log(data2.o)
    if(data2)
    {
        for (let i = 0; i < data2.length; i++) {
            const el = data2[i]
            console.log(el)
            // price += el.price
            // nameArray.push(el.name)
        }
    }
    
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

                    
                    {/* {components.map((item, i)=>{
                        return(
                            (item[i+1])?<span key={`recipe_component_${i}`}>{`${item}, `}</span>:<span >{`${item}`}</span>
                            )
                        })} */}
                </p>

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
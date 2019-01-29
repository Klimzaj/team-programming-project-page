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
    
    data2.map((el) => 
    {
        console.log(el)
    })
    
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
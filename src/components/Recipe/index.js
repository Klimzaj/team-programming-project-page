import React from 'react'

import * as El from './style'

// key = {`recipe_id_${i}`}
// author = {item.author}
// description = {item.description}
// image = {item.img}
// votes = {item.votes}
// url = {item.url}

const Recipe = ({name, description, image, url}) => 
{
    let price = 0
    let nameArray = []

    console.log(url)
    axios.get(url,
    {
        headers:  
        {
        'Content-Type':'application/json',
        },
    })
    .then( response => {
        console.log(response)
    })
    .catch( err =>{
        console.log('error: ', err)
    })
    // if(data5)
    // {
    //     for (let i = 0; i < data5.length; i++) {
    //         const el = data5[i]
    //         console.log(el)
    //         // price += el.price
    //         // nameArray.push(el.name)
    //     }
    // }
    // if(data5a)
    // {
    //     data5a.map((el,i ) => {
    //         console.log(el)
    //                 price += el.price
    //         nameArray.push(el.name)
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
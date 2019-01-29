import React from 'react'
import axios from 'axios'
import * as El from './style'

let allDetails
let price = 0


class Recipe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: []
        }
    }

    getDetails = async (e) => {
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
      
    useDetails = async (e) => {
        const details = await getDetails(e)
      
        if (details.data.recipes_ingredients) {
        //   console.log(details.data.recipes_ingredients)
          return details.data.recipes_ingredients
        }
    }

    
    


    render()
    {
        allDetails = useDetails(this.props.url)
    
        allDetails.then( r => {
            let nameArray = []
            r.map((el) => {
                // console.log(el.ingredient_name)
                nameArray.push(el.ingredient_name)
            })
            this.setState({name: nameArray})
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
                                {this.props.name}
                            </h3>
                            <p>
                                {this.props.description}
                            </p>
                            <p>
                                {/* <b>Price: </b> */}
                                {/* {price} */}
                            </p>
                            <p>
                            <b>
                                Steps to reproduce:
                            </b>
                                {this.props.description}
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
                        <ul>
                        {this.state.name.map((item, i)=>{
                            console.log(item)
                            return(
                                <li>{item}</li>
                            )
                            })}
                        </ul>
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
        )        
    }
}  

export default Recipe
import React from 'react'
import axios from 'axios'
import * as El from './style'

let allDetails


class Recipe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: [],
            price: null,
            isLoaded: false
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
        const details = await this.getDetails(e)
      
        if (details.data.recipes_ingredients) {
          return details.data.recipes_ingredients
        }
    }

    render()
    {
        if(!this.state.isLoaded)
        {
            allDetails = this.useDetails(this.props.url)
            allDetails.then( r => {
                console.log(r)
                let nameArray = []
                let price = 0
                r.map((el) => {
                    nameArray.push(el.ingredient_name)
                    price += ingredient_price
                })
                this.setState({name: nameArray})
                this.setState({price: price})
            })
            this.setState({isLoaded: true})
        }
        return(
            <El.Wrapper>
                <El.AddintionalWrapper>
                    <El.Top>
                        <El.Left>
                            <El.Image src={this.props.image} alt='here should be an image of recipe'/>
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
                                <b>Price: </b>
                                {this.state.price} $
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
                        <ul>
                        {this.state.name.map((item, i)=>{
                            return(
                                <li>{item}</li>
                            )
                            })}
                        </ul>
                    </El.Components>
                </El.AddintionalWrapper>
            </El.Wrapper>
        )        
    }
}  

export default Recipe
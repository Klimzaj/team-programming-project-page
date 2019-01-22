import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios'
// import Cookies from './Cookie/'
// import Cookies from 'universal-cookie';

const getProductPath = '/tesco-api/grocery-search/'


// const fuckingTest = {
// 	"image": "http://placehold.it/150x150a",
// 	"name": "first recipe test",
// 	"description": "first recipe ever",
// 	"votes": 10,
// 	"recipes_ingredients": [
// 		{
// 			"quantity": "1",
// 			"ingredient": {
// 				"image": "http://placehold.it/150x150",
// 				"name": "first",
// 				"description": "description",
// 				"price": 1500,
// 				"unit_price": 100,
// 				"unit_quantity": 12
// 			}
// 		},
// 			{
// 			"quantity": "1",
// 			"ingredient": {
// 				"image": "http://placehold.it/150x150",
// 				"name": "first",
// 				"description": "description",
// 				"price": 1500,
// 				"unit_price": 100,
// 				"unit_quantity": 12
// 			}
// 		},
// 	]
// }


const Wrapper = styled.div`
    height: 300px;
    width: 100%;
    background-color: red;
`

class IngredientInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectInput: ''
        }

            
    }
    handleOnChange = e => {
        const {name, value} = e.target
        this.setState(prevState => ({...prevState, [name]:value}))
    }

    handleSubmit = e => {
        e.preventDefault()
        // const cookies = new Cookies();
        
        let mData = JSON.stringify({
            query: this.state.selectInput,
        })


        // console.log(mData)
    
        console.log('access: ', localStorage.getItem('access'))
        console.log('quering for: ', this.state.selectInput)
        axios.post('http://localhost:8007'+getProductPath, mData, {
            headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + test,
            }
            }).then(function (response) {
            //handle success
                console.log('response: '+response.data)
                //redirect
                 
            })
            .catch(function (error) {
          //handle error
            //   console.log(error)
              console.log('error: ', error);
            });
    }
    render() {
        return (
            <Wrapper>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Pick your favorite flavor:
                        <select name = "selectInput" onChange={this.handleOnChange}>
                            <option value="eggs">eggs</option>
                            <option value="ketchup">ketchup</option>
                            <option value="honey">honey</option>
                            <option value="chicken">chicken</option>
                        </select>
                    </label>
                    
                    <input type="submit" value="Submit" />

                </form>
            </Wrapper>
        );
    }
}

export default IngredientInput;   
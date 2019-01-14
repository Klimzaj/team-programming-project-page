import React, { Component } from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 100%;
    height: 500px;
    /* background-color: khaki; */

    display: flex;
    justify-content: center;
    align-items: flex-start;

    input[type='text'], input[type='password'] {
        z-index: 2;
        border: none;
        border-bottom: 2px solid blue;
        ${this}::placeholder {
            color: grey;
        }
    }

    label {
        z-index:-1;
        display: inline-block;
        display: block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
        color: #676767;
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
        color: grey;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }

    input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }

    input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }
`

const Button = styled.button`
    all: initial;
    /* margin-top: 100px; */
    margin: 100px 0;
    display: block;
    text-align: center;
    vertical-align: center;
    /* align-items: center; */
    
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    width: 200px;

    height: 50px;
    text-align: center;
    
    border-radius: 20px;
    background-color: orange;
    ${this}:hover{
        background-color: red;  
        transition: background-color 0.5s ease-in;        
    }  
    ${this}:not(:hover){
        transition: background-color 0.5s ease-out;
    }
`

class test extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputValue: '',
            fieldActive: false,
            inputValue2: '',
            fieldActive2: false,
        }
    }
    onUpdateInput = e => {
        const { name, value } = e.target
        this.setState(prevState => ({...prevState, [name]:value }))

        this.activateField(e);
        e.preventDefault();
    }

    activateField = () => {
        this.setState({
            fieldActive: true
        })
        console.log('activation(true?): ', this.state.fieldActive)
    }

    disableFocus = e => {
        if (e.target.value === '') {
            this.setState({
                fieldActive: false
            })
        }
        console.log('deactivation(false?): ', this.state.fieldActive)
    }

    render() {
        return (
            <Wrapper>
                <form>
                    <div className="field-group">

                        <Button> click me </Button>
                        <label htmlFor="inputValue" className={this.state.fieldActive ? "field-active" : ""}>
                            Name
                        </label>
                        <input 
                            name="inputValue" 
                            placeholder="Name" 
                            className="floating-label"
                            type="text"
                            value={this.state.inputValue}
                            onFocus={this.activateField}
                            onBlur={this.disableFocus}    
                            onChange={this.onUpdateInput}
                            >
                        </input>
                    </div>
                </form>
            </Wrapper>
        );
    }
}

export default test;
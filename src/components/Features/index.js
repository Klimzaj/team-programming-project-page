import React from 'react'
import * as El from './styles'

const Features = ({item}) => (
    <El.MainWrapper>
        <El.Title>Czas to pieniądz</El.Title>
        <El.Underline></El.Underline>
        
        <div styles={{width: '250px', height: '10px', backgroundColor: 'red'}} ></div>

        {item.map((el, i) => (
            <El.FeatureWrapper>
                <img key = {i} src={el.img} width='100px' height='100px' alt='FeatureImg'/>
                <p >{el.text}</p>
            </El.FeatureWrapper>
        ))}
    </El.MainWrapper>
  )
  
  export default Features
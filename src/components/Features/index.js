import React from 'react'
import * as El from './styles'

const Features = ({item}) => (
    <El.MainWrapper>
        <El.Title>Time is priceless</El.Title>
        <El.Underline></El.Underline>
        
        <div styles={{width: '250px', height: '10px', backgroundColor: 'red'}} ></div>
        <El.FeatureList>
            {item.map((el, i) => (
                <El.FeatureWrapper key = {`feature_wrapper${i}`}>
                    <img key = {`feature_img${i}`} src={el.img} width='100px' height='100px' alt='FeatureImg'/>
                    <p key = {`feature_text${i}`} >{el.text}</p>
                </El.FeatureWrapper>
            ))}
        </El.FeatureList>
    </El.MainWrapper>
  )
  
  export default Features
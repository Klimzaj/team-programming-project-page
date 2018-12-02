import React from 'react'

import * as El from './style'

const Recipe = ({image, title, description, price, quantity, components, recipe}) => (
    <El.Wrapper>
        <El.AddintionalWrapper>
            <El.Top>
                <El.Left>
                    <El.Image image = {image}/>
                </El.Left>
                <El.Right>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <p>
                        <b>Kwota: </b>
                        {price}
                    </p>
                    <p>
                        <b> Ilość porcji: </b>
                        {quantity}
                    </p>
                </El.Right>

            </El.Top>

            <El.Components>
                <p>
                    <b>
                        Składniki:
                    </b>

                    
                    {components.map((item, i)=>{
                        return(
                            (item[i+1])?<span key={`recipe_component_${i}`}>{`${item}, `}</span>:<span >{`${item}`}</span>
                            )
                        })}
                </p>

            </El.Components>
            <El.ToDo>
                <p>
                    <b>
                        Sposób przygotowania:
                    </b>
                        {recipe}
                </p>
            </El.ToDo>
        </El.AddintionalWrapper>
    </El.Wrapper>
)

export default Recipe
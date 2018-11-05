import React from 'react'
import * as El from './styles'

const ImgText = ({TextOrder, Text, ImgEl}) => (
  <El.MainWrapper>
    <El.Image ImgBg={ImgEl} />
    <El.Text Order={TextOrder}>
      {Text.map((el, i) => (
        <div>
          <h2>{el.title}</h2>
          <El.StyledLine />
          <p>{el.text}</p>
        </div>
      ))}
    </El.Text>
  </El.MainWrapper>
)

export default ImgText
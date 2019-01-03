import React from 'react'
import * as El from './styles'

const ImgText = ({TextOrder, Text, ImgEl}) => (
  <El.MainWrapper>
    <El.Image ImgBg={ImgEl} />
    <El.Text order={TextOrder}>
      {Text.map((el, i) => (
        <div key={`div_${i}`}>
          <h2 key={`h2_${i}`} >{el.title}</h2>
          <El.StyledLine key={`styledLine_${i}`} />
          <p key={`p_${i}`}>{el.text}</p>
        </div>
      ))}
    </El.Text>
  </El.MainWrapper>
)

export default ImgText
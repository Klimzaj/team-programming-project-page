import React from 'react'
import * as El from './styles'

const Partner = () => (
    <El.MainWrapper>
        <El.Title>Zostań twórcą</El.Title>
        <El.Underline></El.Underline>

        <El.MainText>
            Załóż konto w naszym serwisie i pochwal się przepisami.
            Razem stworzymy idealne miejsce dla kulinarnych miłośników.
        </El.MainText>
        
        <El.Button to='/login'>Dodaj własny przepis</El.Button>
    </El.MainWrapper>
  )
  
  export default Partner
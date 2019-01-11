import React from 'react'
import * as El from './styles'

import { Link } from 'gatsby'

const Partner = () => (
    <El.MainWrapper>
        <El.Title>Zostań twórcą</El.Title>
        <El.Underline></El.Underline>

        <El.MainText>
            Załóż konto w naszym serwisie i pochwal się przepisami.
            Razem stworzymy idealne miejsce dla kulinarnych miłośników.
        </El.MainText>
        
        <Link to='/login' style={{textDecoration: 'none'}}>
            <El.Button>Dodaj własny przepis</El.Button>
        </Link>
    </El.MainWrapper>
  )
  
  export default Partner
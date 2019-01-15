import React from 'react'
import * as El from './styles'

import { Link } from 'gatsby'

const windowGlobal = typeof window !== 'undefined' && window

const Partner = () => (
    <El.MainWrapper>
        <El.Title>Zostań twórcą</El.Title>
        <El.Underline></El.Underline>

        <El.MainText>
            Załóż konto w naszym serwisie i pochwal się przepisami.
            Razem stworzymy idealne miejsce dla kulinarnych miłośników.
        </El.MainText>
        
        {windowGlobal && localStorage.getItem('access') !== 'undefined'?(
            <Link to='/addrecipe' style={{textDecoration: 'none'}}>
                <El.Button>Dodaj własny przepis</El.Button>
            </Link>
        ):(
            <Link to='/login' style={{textDecoration: 'none'}}>
                <El.Button>Dodaj własny przepis</El.Button>
            </Link>
        )}
    </El.MainWrapper>
  )
  
  export default Partner
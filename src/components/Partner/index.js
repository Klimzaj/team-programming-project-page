import React from 'react'
import * as El from './styles'

import { Link } from 'gatsby'

const windowGlobal = typeof window !== 'undefined' && window

const Partner = () => (
    <El.MainWrapper>
        <El.Title>Become a Partner</El.Title>
        <El.Underline></El.Underline>

        <El.MainText>
            Create an account in our service and show your recipes ideas.
            Together we're gona create ideal place for culinar lovers.
        </El.MainText>
        
        {windowGlobal && localStorage.getItem('access') !== 'undefined'?(
            <Link to='/addrecipe' style={{textDecoration: 'none'}}>
                <El.Button>Add your own recipe</El.Button>
            </Link>
        ):(
            <Link to='/login' style={{textDecoration: 'none'}}>
                <El.Button>Add your own recipe</El.Button>
            </Link>
        )}
    </El.MainWrapper>
  )
  
  export default Partner
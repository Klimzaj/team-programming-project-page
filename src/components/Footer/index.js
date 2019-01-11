import React from 'react'
import * as El from './styles'

const firstContent = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Search recipe',
    path: '/search'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]
const lastContent = [
  {
    name: 'Login',
    path: '/login'
  },
  {
    name: 'Register',
    path: '/register'
  }
]

const Footer = () => (
  <El.MainWrapper>
    <El.TopDiv>
      <El.TopEls>
        {firstContent.map((el, i) => {
          return (
            <El.PDiv key={`footer_top__${i}`}>
              <El.StyledLink to={el.path}>{el.name}</El.StyledLink>
              {firstContent.length-1 === i ? <p /> : <El.StyledSpan>|</El.StyledSpan> }
            </El.PDiv>
          )
        })}
      </El.TopEls>
      <El.BottomEls>
        {lastContent.map((el, i) => {
          return (
            <El.PDiv key={`footer-bottom__${i}`}>
              <El.StyledLink to={el.path}>{el.name}</El.StyledLink>
              {lastContent.length-1 === i ? <p /> : <El.StyledSpan>|</El.StyledSpan> }
            </El.PDiv>
          )
        })}
      </El.BottomEls>
    </El.TopDiv>
    <El.BottomDiv>
      <El.BottomP>
        © {(typeof window)? `Kitchen Helper ${new Date().getFullYear()}`:''}
      </El.BottomP>
    </El.BottomDiv>
  </El.MainWrapper>
)

export default Footer

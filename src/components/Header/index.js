import React from 'react'
import * as El from './styles'

import logoImg from './../../assets/kitchenHelperLogo.svg'

const windowGlobal = typeof window !== 'undefined' && window

const Menu = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Search Recipe',
    path: '/search'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

const Header = ({ siteTitle }) => {
  return (
    <El.MainWrapper>
      <El.LeftDiv >
        <El.DarkLine />
      </El.LeftDiv>
      <El.IconDiv>
        <El.Logo src={logoImg} />
      </El.IconDiv>
      <El.RightDiv >
        <El.MenuDiv>
          <El.StyledUl>
            {
              Menu.map((el, i) => (
                <El.StyledLi key={`menu_element__${i}`}>
                  <El.StyledLink to={el.path} className={windowGlobal.document.location.pathname===`${el.path}` ?'active':''}>
                    {el.name}
                  </El.StyledLink>
                </El.StyledLi>
              ))
            }
          </El.StyledUl>
        </El.MenuDiv>
        <El.DarkLine />
      </El.RightDiv>
    </El.MainWrapper>
)
}
export default Header

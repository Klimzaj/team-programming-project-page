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
    name: 'Contact',
    path: '/contact'
  },
  {
    name: 'Login',
    path: '/login'
  }
]

//zamykac hover menu przy skalowaniu !!
// search recipe jesli zalogowany
class Header extends React.Component {
  state = {
    collapsed: false,
    path: false
  }
  
  UNSAFE_componentWillMount() {
    const path =  windowGlobal ? windowGlobal.location.pathname : false
    this.setState(prevState => ({ path: path }))
  }
  handleCollapseMenu = () =>
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))

  render () {
    const { collapsed } = this.state
    
    return (
      <div>
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
                      <El.StyledLink to={el.path} className={this.state.path === `${el.path}` ?'active':''}>
                        {el.name}
                      </El.StyledLink>
                    </El.StyledLi>
                  ))
                }
              </El.StyledUl>
            </El.MenuDiv>
            <El.DarkLine />
          </El.RightDiv>
          <El.HamburgerMenu
            className={collapsed ? 'isOpen' : ''}
            onClick={this.handleCollapseMenu}
          >
            <div />
            <div />
            <div />
          </El.HamburgerMenu>
        </El.MainWrapper>
        <El.HoverMenu isVisible={collapsed} >
          {Menu.map((el, i) => (
              <El.HoverLink to={el.path} key={`menu_element__${i}`}>
                  {el.name}
              </El.HoverLink>
            ))}
        </El.HoverMenu>
      </div>
    )
  }
}
export default Header

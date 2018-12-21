import React from 'react'
import * as El from './styles'
import {Link} from 'gatsby'
import logoImg from './../../assets/kitchenHelperLogo.svg'
import * as Cookie from '../../backend-data/Cookie/'
const windowGlobal = typeof window !== 'undefined' && window

let Menu = [];

// zamykac hover menu przy skalowaniu !!
// search recipe jesli zalogowany !!
// dodać active dla login przy register
class Header extends React.Component {
  state = {
    collapsed: false,
    path: '/'
  }
  
  UNSAFE_componentWillMount() {
    const path =  windowGlobal ? windowGlobal.location.pathname : '/'
//was change in here from false to '/'
    this.setState(prevState => ({ path: path }))
    console.log(path)

    if(windowGlobal){
      if(Cookie.getCookie('access')){//if logged in
        Menu = [
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
            name: 'Add a Recipe',
            path: '/addrecipe'
          },
          {
            name: 'My Profile',
            path: '/myprofile',
            hoverNames: ['My recipes', 'Favorites', 'Settings'],
            hoverPaths: ['/myprofile/myrecipes', '/myprofile/favorites','/myprofile/settings']
          },
          {
            name: 'Logout',
            path: '/logout'
          }
        ]
      }else{//else(if not logged in)
        Menu = [
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
          },
          {
            name: 'Register',
            path: '/register'
          }
        ]
      }
    }


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
            <Link to='/'><El.Logo src={logoImg} /></Link>
          </El.IconDiv>
          <El.RightDiv >
            <El.MenuDiv>
              <El.StyledUl>
                {
                  Menu.map((el, i) => {
                    if(windowGlobal && '/' + window.location.href.split('/').pop()   === el.path){
                      return(
                        <El.StyledLi key={`menu_element__${i}`}>
                          <El.StyledLink style = {{paddingLeft: '5px', borderBottom: '#FFE600 solid 4px'}} to={el.path} className={this.state.path === `${el.path}` ?'active':''}>
                            {el.name}
                          </El.StyledLink>
                        </El.StyledLi>
                      )
                    } else {
                      return(
                        <El.StyledLi key={`menu_element__${i}`}>
                          <El.StyledLink to={el.path} className={this.state.path === `${el.path}` ?'active':''}>
                            {el.name}
                          </El.StyledLink>
                        </El.StyledLi>
                      )
                    }
                  }
                  )
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
          {
            Menu.map((el, i) => {
              if(windowGlobal && '/'+window.location.href.split('/').pop()   === el.path){
                return(
                  <El.HoverLink style = {{ paddingLeft: '5px', borderLeft: '#FFE600 solid 4px'}} to={el.path} key={`menu_element__${i}`}>
                        {el.name}
                    </El.HoverLink>
                )
              }else{
                return(
                  <El.HoverLink to={el.path} key={`menu_element__${i}`}>
                    {el.name}
                  </El.HoverLink>
                )
              } 
            }
            )
          }
        </El.HoverMenu>
      </div>
    )
  }
}
export default Header

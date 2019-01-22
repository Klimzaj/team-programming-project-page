import React from 'react'
import * as El from './styles'
import {Link} from 'gatsby'
import logoImg from './../../assets/kitchenHelperLogo.svg'
import triangleDown from './../../images/triangle_down.png'
const windowGlobal = typeof window !== 'undefined' && window

let Menu = [];

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
      menuMyProfileHoverOrActive: false,
      expandHeader: false,
    }
  }
  
  UNSAFE_componentWillMount() {
    if(windowGlobal){
      if(localStorage.getItem('access'))
      {
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
            path: '/myprofile'
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
            path: 'register'
          }
        ]
      }
    }
  }

  handleCollapseMenu = () => this.setState(prevState => ({ collapsed: !prevState.collapsed }))

  handleOpenMenuMyProfile = (e) => {
    this.setState({expandHeader: true})
    this.setState({menuMyProfileHoverOrActive: true})
    console.log('menu profile active?: ', this.state.menuMyProfileHoverOrActive)

  }


  handleCloseMenuMyProfile = (e) => {
    this.setState({expandHeader: false})
    this.setState({menuMyProfileHoverOrActive: false})
    console.log('menu profile active?: ', this.state.menuMyProfileHoverOrActive)

  }

  render () {
    const { collapsed } = this.state
    
    return (
      <div>
        <El.MainWrapper heightExpand={this.state.expandHeader}>
          <El.LeftDiv >
          </El.LeftDiv>
          <El.IconDiv>
            <Link to='/'><El.Logo src={logoImg} /></Link>
          </El.IconDiv>
          <El.RightDiv >
            <El.MenuDiv>
              <El.StyledUl>
                {
                  Menu.map((el, i) => {
                    const subMenu = [{name: 'Favorite', path:'/favorite'}, {name: 'My recipes', path:'/myrecipes'}, {name: 'Settings', path:'/settings'}]
                    if(el.name === 'My Profile'){
                      return(
                        
                        <El.StyledLi style={this.state.menuMyProfileHoverOrActive?{position: 'relative',minWidth: '100px', top: '0px', height: '180px'}:{}}key={`menu_element__${i}`} onMouseEnter={this.handleOpenMenuMyProfile} onMouseLeave = {this.handleCloseMenuMyProfile}>
                            {this.state.menuMyProfileHoverOrActive?(
                              <ul style={{width: 'inherit',margin: '0', padding: '0', fontSize: '0.8rem',listStyle: 'none'}}>
                                {subMenu.map((item, i)=>{return(

                                  <li key={`li_sub_menu_${i}`}>
                                    <El.SubMenuLink key = {`link_sub_menu_${i}`} to = {item.path}>
                                      {item.name}
                                    </El.SubMenuLink>
                                  </li>
                                )
                                })}
                              </ul>):( 
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                {/* to={el.path} */}
                                  <El.StyledLink  activeStyle = {{fontWeight: 'bold', paddingLeft: '5px', borderBottom: '#FFE600 solid 4px'}}  to = {el.path} className={this.state.path === `${el.path}` ?'active':''}>
                                     {el.name}
                                  </El.StyledLink>
                                  <img src={triangleDown} alt='' width='25px' height = '25px'/>
                                </div>
                              )}
                        </El.StyledLi>
                      )
                    }else{
                      return(
                          <El.StyledLi key={`menu_element__${i}`}>
                            <El.StyledLink  activeStyle = {{fontWeight: 'bold', paddingLeft: '5px', borderBottom: '#FFE600 solid 4px'}} to={el.path} className={this.state.path === `${el.path}` ?'active':''}>
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
        {/* {console.log('length of menu: ', Menu.length)} */}
        <El.HoverMenu isVisible={collapsed} menuItems = {Menu.length}>
          {
            Menu.map((el, i) => {
                if(collapsed)
                return(
                  <El.HoverLink activeStyle = {{fontWeight: 'bold', paddingLeft: '5px', borderLeft: '#FFE600 solid 4px'}} to={el.path} key={`menu_element__${i}`}>
                        {el.name}
                    </El.HoverLink>
                )
            }
            )
          }
        </El.HoverMenu>
      </div>
    )
  }
}
export default Header

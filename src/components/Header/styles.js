import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainWrapper = styled.div`
  display: flex;
  background: #fff;
  height: ${props => props.heightExpand ? '210px':'150px'}; 
  /* height: auto; */
  max-height: 300px;
  position: relative;
  /* transition: all 0.5s ease; */
  transition: all 0.2s ease-in-out; 

`
export const LeftDiv = styled.div`
  position: relative;
  display: none;
  background-color: #fff;

  @media (min-width: 768px) {
    display: initial;
    width: 10%;  
  }
`
export const IconDiv = styled.div`
  width: 30%;
  margin-left: 15px;
  padding: 15px 0.5%;
  @media (min-width: 425px) {
    width: 20%;
  }
  @media (min-width: 500px) {
    
  }
  @media (min-width: 768px) {
    width: 10%;
    padding: 15px 0.5%;
 
  }
  @media (min-width: 1024px) {
  
  }
  @media (min-width: 1200px) {
    
  }
  @media (min-width: 1400px) {
  }
`
export const RightDiv = styled.div`
  display:none;
  @media (min-width: 425px) {
      
  }
  @media (min-width: 500px) {
    
  }
  @media (min-width: 768px) {
    position: relative;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    width: 80%;
    background-color: #fff;
  }
  @media (min-width: 1024px) {
  
  }
  @media (min-width: 1200px) {
    
  }
  @media (min-width: 1400px) {

  }
`
export const Logo = styled.img`
  margin: 0;
  padding: 0;
`
export const DarkLine = styled.div`
  position: absolute;
  bottom: 30px;
  height: 4px;
  width: 100%;
  background-color: #bbb;
  opacity: 0.4;
`
export const MenuDiv = styled.div`
  margin-right: 50px;
`
export const StyledUl = styled.ul`
  display: flex;
`
export const StyledLi = styled.li`
  list-style-type: none;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #483E37;
  
  .active {
    padding-bottom: 12px;
    border-bottom: 5px solid #ffe600;
    /* #ffe600 */
  }

  ${this}:hover{
    background-color: #846f5f;
    color: white;

  }  
    transition: color 0.5s ease-in;
    transition: background-color 0.5s ease-in-out;
  
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  /* color: #483E37; */
  margin-right: 5px;
  margin-left: 5px;
  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 799px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.25em;
  }  
  @media(min-width: 1440px) {
    font-size: 1.5rem;
  }
`
export const SubMenuLink = styled(Link)`
  text-decoration: none;
  color: white;
  
  margin-right: 5px;
  margin-left: 5px;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 799px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.25em;
  }  
  @media(min-width: 1440px) {
    font-size: 1.5rem;
  }
  padding-left: 5px;
  &:hover{
    /* background-color: red; */
    border-bottom: 4px solid #FFE600;
    transition: all 0.15s ease-in-out;
  }
`
export const SpecialP = styled.span`
  text-decoration: none;
  color: white;
  
  /* margin-right: 5px;
  margin-left: 5px; */

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
  @media (min-width: 790px) {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 1.25em;
  }  
  @media(min-width: 1440px) {
    font-size: 1.5rem;
  }
`
export const HamburgerMenu = styled.div`
  position: absolute;
  cursor: pointer;
  top: 53px;
  right: 40px;
  & > div {
    width: 30px;
    height: 5px;
    border-radius: 5px;
    transition: 0.4s;
    background-color: #000;

    &:first-child,
    &:last-child {
      margin: 4px 0;
    }
  }

  &.isOpen {
    div:nth-child(2) {
      margin-top: -9px;
      transform: rotate(135deg);
    }
    div:first-child {
      transform: rotate(45deg);
    }
    div:last-child {
      display: none;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`
export const HoverMenu = styled.div`
  width: 100%;
  display: flex;
  /* display: ${props => props.isVisible ? 'flex':'none'}; */
  opacity: ${props => props.isVisible ? '1'  : '0'};
  flex-direction: column;
  visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
  height: ${props => props.isVisible?'280px':'0'};
  /* height: ${props => props.menuItems > 5 ? '280px'  : '250px'}; */
  transition: height 0.5s ease, visibility 1s;

`
export const HoverLink = styled(Link)`
  font-size: 23px;
  width: 100%;
  padding: 10px;
  color: #483E37;
  margin-left: 10px;
  text-decoration: none;
  &:before {
    content: '';
  }

  ${this}:hover{
    background-color: #846f5f;
    color: white;
  transition: color 0.5s ease-in;
  transition: background-color 0.5s ease-in-out;
  }  
`
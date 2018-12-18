import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainWrapper = styled.div`
  display: flex;
  background: #fff;
  height: auto;
  position: relative;
  @media (min-width: 425px) {
      
  }
  @media (min-width: 500px) {
    
  }
  @media (min-width: 768px) {
    position: initial;
  
  }
  @media (min-width: 1024px) {
  
  }
  @media (min-width: 1200px) {
    
  }
  
  @media (min-width: 1400px) {
    
  }

`
export const LeftDiv = styled.div`
  position: relative;
  display: none;
  background-color: #fff;
  @media (min-width: 425px) {
      
  }
  @media (min-width: 500px) {
    
  }
  @media (min-width: 768px) {
    display: initial;
    width: 10%;  
  }
  @media (min-width: 1024px) {
  
  }
  @media (min-width: 1200px) {
    
  }
  
  @media (min-width: 1400px) {
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
  /* width: 50%;
  height: 50%; */
  @media (min-width: 425px) {
      
  }
  @media (min-width: 500px) {
    
  }
  @media (min-width: 768px) {
    
  }
  @media (min-width: 1024px) {
  
  }
  @media (min-width: 1200px) {
    
  }
  @media (min-width: 1400px) {
 
  }
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
  /* justify-content: flex-end; */
`
export const StyledLi = styled.li`
  list-style-type: none;
  .active {
    padding-bottom: 12px;
    border-bottom: 5px solid #ffe600;
  }
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #483E37;
  margin: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 25px;
  }  
`
export const HamburgerMenu = styled.div`
  position: absolute;
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
  opacity: ${props => props.isVisible ? '1'  : '0'};
  flex-direction: column;
  visibility: ${props => props.isVisible ? 'visible'  : 'hidden'};
  height: ${props => props.isVisible ? '280px'  : '0px'};
  transition: height 0.5s ease, visibility 0s;
`
export const HoverLink = styled(Link)`
  font-size: 23px;
  width: 50%;
  padding: 10px;
  color: #483E37;
  margin-left: 10px;
  text-decoration: none;
  &:before {
    content: '';
  }
  
`
import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainWrapper = styled.div`
  display: flex;
  background: #fff;
  /* margin-bottom: 1.45 rem; */
  @media (min-width: 1400px) {
    height: auto;
  }
`
export const LeftDiv = styled.div`
  position: relative;
  @media (min-width: 1400px) {
    width: 10%;  
    background-color: #fff;
    }
`
export const IconDiv = styled.div`
    /* display: flex; */
  @media (min-width: 1400px) {
      width: 10%;
      padding: 15px 0.5%;
    }
`
export const RightDiv = styled.div`
  position: relative;
  display:flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: 1400px) {
      width: 80%;
      background-color: #fff;

    }
`
export const Logo = styled.img`
  margin: 0;
  padding: 0;
  /* width: 50%;
  height: 50%; */
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
  margin-right: 100px;
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
  color: #000;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 25px;
  margin: 10px;
  
`

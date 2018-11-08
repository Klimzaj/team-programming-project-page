import styled from 'styled-components'
import { Link } from 'gatsby'

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const TopDiv = styled.div`
  background-color: #50453d;
  padding-top: 60px;
  padding-left: 40px;
`
export const BottomDiv = styled.div`
  background-color: #483e37;
  text-align: center;
`
export const BottomP = styled.p`
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 15px 0;
  font-size: 14px;
`
export const TopEls = styled.div`
  display: flex;
`
export const BottomEls = styled.div`
  display: flex;
`
export const PDiv = styled.div`
  
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  margin: 0 5px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 18px;
`
export const StyledSpan = styled.span`
  color: #fff;
`
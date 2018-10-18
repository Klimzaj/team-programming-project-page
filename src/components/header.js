import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const MainWrapper = styled.div`
  background: #E9FFFB  ;
  margin-bottom: 1.45 rem;
`
const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`
const StyledH2 = styled.h2`
  margin: 0px;
`
const StyledLink = styled(Link)`
  color: #D644A1  ;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <MainWrapper>
    <ContentWrapper>
      <StyledH2>
        <StyledLink>
          {siteTitle}
        </StyledLink>
      </StyledH2>
    </ContentWrapper>
  </MainWrapper>
)

export default Header

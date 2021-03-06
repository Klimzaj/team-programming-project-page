import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './../Header'
import Footer from './../Footer'
import './layout.css'

import * as fonts from '../../assets/Fonts/'
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
  @font-face {
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: normal;
    src: local("Segoe UI"), url(${fonts.SegoeUI}) format("truetype");
  };
  @font-face{
    font-family: "Segoe UI";
    font-style: normal;
    font-weight: bold;
    src: local("Segoe UI"), url(${fonts.SegoeUIBold}) format("truetype");

  };
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            // margin: '0 auto',
            // maxWidth: 960,
            // padding: '0px 1.0875rem 1.45rem',
            // paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import Layout from '../components/Layout'
import * as Cookie from '../backend-data/Cookie/'
import styled from 'styled-components'

const windowGlobal = typeof window !== 'undefined' && window

const Wrapper = styled.div`
    display: block;
    width: 100%;
    height: auto;
    min-height: 700px;
    text-align: center;
`

class Logout extends React.Component{
    UNSAFE_componentWillMount() {
        if(windowGlobal){
            Cookie.deleteCookie('access')
            Cookie.deleteCookie('refresh')
            
        }
    }
    UNSAFE_componentDidMount(){
        
        if(windowGlobal){    
            window.location.replace("http://localhost:8000/");
        }
    
    }

    render(){
        return(
            <Layout>
                <Wrapper>
                    <h1>Logged out</h1>
                    <p>You may now safely leave the site.</p>
                </Wrapper>
            </Layout>
        )
    }
} 

export default Logout

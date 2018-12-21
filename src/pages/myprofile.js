import React from 'react'
import Layout from '../components/Layout'
import * as Cookie from '../components/Layout'
import styled from 'styled-components'
const Wrapper = styled.div`
    width: 100%;
    height: auto;
    min-height: 700px;

    h1 {
        text-align: center;
    }
`
class MyProfile  extends React.Component{
    render(){
        return(
            <Layout>
                <Wrapper>
                    <h1>Welcome, [username here]</h1>
                </Wrapper>

            </Layout>
        )
    }
}

export default MyProfile

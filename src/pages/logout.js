import React from 'react'
import Layout from '../components/Layout'
import * as Cookie from '../components/Cookie/'

const windowGlobal = typeof window !== 'undefined' && window


class Logout extends React.Component{
    UNSAFE_componentWillMount() {
        if(windowGlobal){
            Cookie.deleteCookie('access')
            Cookie.deleteCookie('refresh')
            // localStorage.removeItem('access')
            // localStorage.removeItem('refresh')
            // if(windowGlobal){
                window.location.replace("http://localhost:8000/");
            // }
        }
    }
    UNSAFE_componentDidMount(){
    }

    render(){
        return(
            <Layout>
                <h1>Logging out</h1>
                <p>You will be redirected to the home page.</p>
            </Layout>
        )
    }
} 

export default Logout

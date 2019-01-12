import React from 'react'
import Layout from '../components/Layout'
import * as paths from '../data/ApiPaths.js'

const windowGlobal = typeof window !== 'undefined' && window

class Logout extends React.Component{
    
    UNSAFE_componentWillMount = () => {
        if(windowGlobal){
            console.log('get access: ', localStorage.getItem('access'))
            console.log('get refresh: ', localStorage.getItem('refresh'))
            
    
            console.log('removing items from localStorage')
            localStorage.removeItem('access')
            localStorage.removeItem('refresh')
    
    
            console.log('get access: ', localStorage.getItem('access'))
            console.log('get refresh: ', localStorage.getItem('refresh'))
    
            //redirect
            setTimeout(window.location.replace(paths.domainName), 500)

        }
    }

    render(){
        return(
            <Layout>  
                <div style={{height: '800px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <h1>Logged out</h1>
                    <p>You will be redirected to the main page.</p>
                </div>
            </Layout>
        )
    }
} 

export default Logout

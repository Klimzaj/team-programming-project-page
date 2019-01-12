import React from 'react'
import Layout from '../components/Layout'
import * as paths from '../data/ApiPaths'
const windowGlobal = typeof window !== 'undefined' && window

class MyProfile  extends React.Component{

    UNSAFE_componentWillMount = () => {
        // console.log('access: ', localStorage.getItem('access'))
        if(windowGlobal && localStorage.getItem('access') !== 'undefined'){
            window.location.replace(paths.domainName + '/login')      
        }
    }

    render(){
        return(
            <Layout>
                <h1>Welcome, [username here]</h1>
            </Layout>
        )
    }
}

export default MyProfile

import React from 'react'
import Layout from '../components/Layout'

const windowGlobal = typeof window !== 'undefined' && window

class MyProfile  extends React.Component{

    UNSAFE_componentWillMount = () => {
        if(windowGlobal && localStorage.getItem('access'))
          window.location.replace("http://localhost:8000/login")      
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

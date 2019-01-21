import React from 'react'
import Layout from '../components/Layout'
const windowGlobal = typeof window !== 'undefined' && window

class MyProfile  extends React.Component{

    UNSAFE_componentWillMount = () => {
        // && localStorage.getItem('access') !== 'undefined'
        // console.log('access: ', localStorage.getItem('access'))
        if(windowGlobal){
            // window.location.replace('https://kitchenhelper.netlify.com/')      
            console.log('get access: ', localStorage.getItem('access'))
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

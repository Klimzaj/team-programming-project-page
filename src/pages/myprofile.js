import React from 'react'
import Layout from '../components/Layout'
const windowGlobal = typeof window !== 'undefined' && window

class MyProfile  extends React.Component{

    UNSAFE_componentWillMount = () => {

        // console.log('access: ', localStorage.getItem('access'))
        // if(windowGlobal && localStorage.getItem('access') !== 'undefined'){
            // window.location.replace('https://kitchenhelper.netlify.com/')      
        // }
        console.log('get access: ', localStorage.getItem('access'))


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

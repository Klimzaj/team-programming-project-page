import axios from 'axios'
import * as Cookie from '../Cookie/'
import * as ApiRequestPaths from '../ApiRequestPaths/'
const windowGlobal = (typeof window !== 'undefined' && window)


export function refreshPostRequest(data) {
    axios.post(ApiRequestPaths.refreshPost, data, {
        headers: {
          'Content-Type':'application/json',},
        }).then(function (response) {
        //handle success
          Cookie.setCookie('access', response.access, 600000)//10minutes
                    
        })
        .catch(function (response, error) {
    //handle error
            console.log('response: ', response)
            console.log('error: ', error);
    });
}
export function loginPostRequest(data) {
    console.log(data)
    console.log(ApiRequestPaths.loginPost)
    axios.post(ApiRequestPaths.loginPost.toString(), data, {
        headers: {
          'Content-Type':'application/json',},
        }).then(function (response) {
        //handle success
          Cookie.setCookie('access', response.access, 600000)//10minutes
          Cookie.setCookie('refresh', response.refresh)//10minutes
  
            //redirect
            if(windowGlobal){
              window.location.replace("http://localhost:8000/myprofile");
            }
            
        })
        .catch(function (response, error) {
    //handle error
            console.log('response: ', response)
            console.log('error: ', error);
        });
}


export function registerPostRequest(data) {
    axios.post(ApiRequestPaths.registerPost, data, {
        headers: {
          'Content-Type':'application/json',},
        }).then(function (response) {//handle success

            Cookie.setCookie('access', response.access, 600000)//10minutes
            Cookie.setCookie('refresh', response.refresh, 600000)//10minutes
  
            //redirect
            if(windowGlobal){
                window.location.replace("http://localhost:8000/login");
            }
            
        })
        .catch(function (response, error) {
      //handle error
        //   console.log(reponse)
          console.log('An error has occured: ', error);
        });
}
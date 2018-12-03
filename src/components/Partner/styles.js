import styled from 'styled-components'
import {Link} from 'gatsby'

export const MainWrapper = styled.div`
    max-width: 1920px;  
    
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 0px;
    
`
export const Title = styled.h2`
    color: #4B4B4B;
    text-align: center;
    text-transform: uppercase;
    font-size: 3rem;
    /* margin-top: 25px; */
    /* margin-bottom: 25px; */

    margin: 25px 0 25px 0;

    @media (max-width: 768px) {
        /* font-size: 2rem;
        line-height: 2rem; */
    }
`

export const Underline = styled.div`
    display: block;
    width: 100px;
    height: 6px;
    background-color: #FFE600;
    margin-bottom: 50px;
    @media(min-width: 768px) {
        width: 200px;
    }
`

export const MainText = styled.div`
    max-width: 1000px;
    text-indent: 50px;
    
    text-align: justify;
    font-size: 1.5rem;
    line-height: 1.5rem;
    padding: 0px 1rem 0px 1rem;

    @media (max-width: 768px) {
    }
    

    
`

export const Button = styled(Link)`
    height: 100px;
    
    width: 500px;


    background-color: #FFE600;

    margin: 50px 0 50px 0;

    font-size: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-shadow: 0px 2px 5px #d9d9d9; 
    color: white;
    box-shadow: 0px 2px 6px #949494; 
    text-transform: uppercase;
    text-decoration: none;

    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-right-radius: 35px;

  
    @media (max-width: 768px) {
        width: 300px;
        font-size: 1.2rem;
        line-height: 1.2rem;

    } 
`
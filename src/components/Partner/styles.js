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
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 4rem;
    margin-top: 25px;
    margin-bottom: 25px;

    @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 2rem;
    }
`

export const Underline = styled.div`
    display: block;
    width: 245px;
    height: 10px;
    background-color: #FFE600;
    margin-bottom: 75px;
`

export const MainText = styled.div`
    max-width: 1000px;
    text-indent: 50px;
    word-wrap: break-word;
    font-size: 2rem;
    line-height: 2.5rem;
    padding: 0px 10px 0px 10px;
    @media (max-width: 768px) {
        font-size: 1.3rem;
        line-height: 1.9rem;
    }
    

    
`

export const Button = styled(Link)`
    height: 100px;
    
    width: 500px;

    background-color: #FFE600;

    margin-top: 100px;
    margin-bottom: 100px;

    font-size: 1.5rem;
    line-height: 1.2rem;
    text-align: center;
    
    display: flex;
    justify-content: center;
    align-items: center;

    text-shadow: 0px 1px 1px #c9c9c9; 
    color: white;
    box-shadow: 0px 3px 13px #888888; 
    text-transform: uppercase;
    text-decoration: none;

    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;

  
    @media (max-width: 768px) {
        width: 300px;
        font-size: 1.2rem;
        line-height: 1.2rem;

    } 
`
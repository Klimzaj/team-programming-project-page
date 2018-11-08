import styled from 'styled-components'

export const MainWrapper = styled.div`
    max-width: 1920px;  
    
    height: 300px;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    margin: 0 auto;
    padding: 0px;
    
    @media (min-width: 768px) {
      /* flex-direction: row; */
    }
`
export const Title = styled.h2`
    color: #4B4B4B;
    text-transform: uppercase;
    margin-top: 20px;
`

export const Underline = styled.div`
    display: block;
    width: 190px;
    height: 9px;
    background-color: #FFE600;
    margin-bottom: 20px;
`

export const MainText = styled.div`
    max-width: 500px;
    text-indent: 50px;
    word-wrap: break-word;
`

export const Button = styled.button`
    all: initial;
    width: 500px;
    height: 200px;
    max-width: 
    display: flex;
    justify-content: center;
    align-items: center;
    
    display: block;
    border-radius: 50px;
    color: white;
    background-color: #FFE600;

`
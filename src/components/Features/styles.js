import styled from 'styled-components'

export const MainWrapper = styled.div`
    max-width: 1920px;  
    
    height: 500px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0px;
    
    @media (min-width: 768px) {
      /* flex-direction: row; */
    }
`

export const FeatureWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        max-width: 500px;
        text-indent: 50px;
        padding-right: 10px;
        word-wrap: break-word;
    }
    img {
        margin: 50px;
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
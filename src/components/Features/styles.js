import styled from 'styled-components'

export const MainWrapper = styled.div`
    max-width: 1920px;  
    
    height: auto;

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

export const FeatureList = styled.div`
    margin-bottom: 3rem;
`

export const FeatureWrapper = styled.div`
    
    display: flex;
    justify-content: flex-start;
    /* justify-content: center; */
    align-items: center;

    p {
        max-width: 1000px;
        text-indent: 50px;
        /* word-wrap: break-word; */
        text-align: justify;
        font-size: 1.5rem; 
        line-height: 1.5rem;
        padding: 0px 1rem 0px 1rem;
    }
    img {
        margin: 50px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 1.3rem;
        line-height: 1.5rem;
        img {
            margin-top: 1rem;        }
        
    }
`

export const Title = styled.h2`
    color: #4B4B4B;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 4rem;
    margin-top: 25px;

     @media (max-width: 768px) {
        font-size: 2rem;
        line-height: 2rem;
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
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

export const FeatureWrapper = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        max-width: 1000px;
        text-indent: 50px;
        word-wrap: break-word;
        font-size: 2rem;
        line-height: 2.5rem;
        padding: 0px 10px 0px 10px;
    }
    img {
        margin: 50px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 1.3rem;
        line-height: 1.9rem;
    
    }
`

export const Title = styled.h2`
    color: #4B4B4B;
    text-transform: uppercase;
    margin-top: 20px;
    font-size: 4rem;
    margin-top: 25px;
    /* margin-bottom: 25px; */

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
`
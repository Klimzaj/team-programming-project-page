import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background-color: lightblue;
`
export const MainElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const Image = styled.div`
    width: 100%;
    height: 435px;
    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media(min-width: 1024px){
        height: 600px;
    }
`

export const SearchInput = styled.input`
    all: initial;

    background-color: white;
    width: 400px;
    height: 50px;

    position: relative;
    top: 100px;
    
    border-radius: 40px;

    padding-left: 20px;
    margin-left: 20px;

    @media(max-width: 320px){
        width: 200px;
    }

    @media(max-width: 500px){
        width: 200px;
    }

    @media(min-width: 1024){
        top: 200px;
    }
`

export const MainText = styled.h2 `
    position: relative;
    top: 100px;
    color: white;
    font-size: 2rem;
    margin-left: 20px;
    display: flex;
     @media(max-width: 320px){
        font-size: 1.5rem;
    }

    @media(max-width: 500px){
         width: 200px;
        font-size: 1.5rem;
    }
`

export const RecipesWrapper = styled.div`
    height: auto;
    width: 100%;
`
export const Magnifier = styled.div`
    
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    z-index: 999;
    /* background-color: red; */
    /* float: right; */
    position: relative;
    left: 380px;
    top: 137px;
    @media(max-width: 500px){
        left: 190px;
    }
`

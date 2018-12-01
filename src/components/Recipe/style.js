import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    background-color: #FFF8F2;
    padding: 50px 0 50px 0;

    display: flex;
    flex-direction: column;

    /* margin: 20px 0 20px 0; */
`

export const Top = styled.div`
    min-height: 200px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Left = styled.div`
    width: 50%;
    height: auto;

    display: flex;
    justify-content: center;

    /* background-color: lightgreen; */
    
   

`
export const Image = styled.div`
    width: 100%;
    max-width: 500px;
    height: 235px;

    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
` 

export const Right = styled.div`
    width: 50%;
    /* background-color: lightblue; */

    display: flex;
    flex-direction: column;


`


export const Components = styled.div`
    width: 100%;
    height: auto;
    padding: 0px 0 50px 0;
`
export const ToDo = styled.div`
    width: 100%;
    height: auto;
`

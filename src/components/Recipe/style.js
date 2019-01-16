import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    /* max-width: 1500px; */
    background-color: #FFF8F2;
    padding: 50px 0 50px 0;

    margin: auto;
    /* margin: 20px 0 20px 0; */
`
export const AddintionalWrapper = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    flex-direction: column;

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

    padding: 0 1rem 0 1rem;
    /* background-color: lightgreen; */
    
   

`
export const Image = styled.div`
    width: 100%;
    max-width: 500px;
    height: 235px;

    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
` 

export const Right = styled.div`
    width: 50%;
    /* background-color: lightblue; */
    padding: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;


`


export const Components = styled.div`
    width: 100%;
    height: auto;
    padding: 1rem 1rem 2rem 1rem;
    p {
        text-indent: 2rem;
    }
`
export const ToDo = styled.div`
    width: 100%;

    height: auto;
    padding: 0 1rem 0 1rem;
    p {
        text-indent: 2rem;
    }
`

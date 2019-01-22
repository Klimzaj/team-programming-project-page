import styled from 'styled-components'
import Link from 'gatsby-link'

export const MainWrapper = styled.div`
    z-index: 0;
    
    width: 100%;
    height: 611px;

    background-image: url(${props => props.source});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-position-y: top;

    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);


    display: flex;
    flex-direction: column;
    align-items: center;



    h2 {
        text-align:center;
        color: white;
        font-size: 3rem;
        padding: 0rem 1rem 0rem 0rem;
        @media (min-width: 768px) {
            font-size: 3rem;
        }
    } 

`
export const SubmitButton = styled.input`
    display: block;
    margin: 0 auto;
    padding: 13px 29px;
    line-height: 17px;
    font-size: 14px;
    border: none;
    cursor: pointer;
    outline: none;

    background: #ffe600;

    border-radius: 20px;

    -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

    ${this}:active{
      background-color: #C6B305;
      color: white;
      text-decoration: none !important;
      transition: all 0.25s ease;
    }
    ${this}:hover{
      cursor: pointer;
      text-decoration: underline;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input[type='text'],input[type='password'],input[type='email'] {
        all: initial;
        background-color: white;
        padding: 0.3rem 0.2rem;
        border-radius: 3px;

        z-index: 2;
        /* opacity: 0.8; */
        /* color: white; */
        outline: none;
        border-bottom: 2px solid #ffe600;
        &::-webkit-input-placeholder {
            color: grey;
        }
    }

    label {
        z-index: 1;
        display: inline-block;
        display: block;
        position:relative;
        left: 2px;
        bottom: -29px;
        transition: all 150ms ease-in;
        color: #ffffff;
        cursor: default;
    }
    label.field-active {
        transform: translateY(-30px);
        font-size: .8rem;
    }
    .floating-label {
        -webkit-appearance: none !important;
    }

    input[type="text"]:focus::-webkit-input-placeholder{
        opacity: 0;
        transition: opacity 0.5s ease; 
    }

    input[type="text"]:not(:focus)::-webkit-input-placeholder{
        opacity: 1;
        transition: opacity 0.5s ease; 
    }

`

export const SmallP = styled.p`
    font-size: 13px;
    color: white;
    margin-right: 5px;
`
export const SmallDiv = styled.div`
    display: flex;
    margin-top: 5px;
`
export const LinkToLogin = styled(Link)`
    color: 'white'; 
    font-style: italic;
    font-size: 0.8rem; 
    text-decoration: none;
    ${this}:visited{
        color: white;
    }
    ${this}:hover, ${this}:active{
        text-decoration: underline;
    }
`
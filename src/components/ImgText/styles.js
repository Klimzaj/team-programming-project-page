import styled from 'styled-components'

export const MainWrapper = styled.div`
  display: flex;
  height: auto;
  margin: 0;
  max-width: 1920px;
  padding: 0px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;

  -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);

  @media (min-width: 768px) {
    flex-direction: row;
  }
    /* box-shadow: 0 2px 2px 0 rgba(255, 0, 0, 0.07); */

`
export const YellowStripe = styled.div`
  max-width: 240px;
  height: 10px;
  background-color: #FFE600;
  z-index: 10000;
  border: 2px solid red;
`

export const Image = styled.div`
  width: 100%;
  height:140px;
  z-index: 999;
  background-image: url(${props => props.ImgBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
  background-position-y: bottom;
  @media (min-width: 425px) {
    height: 200px;
    background-position-x: 0px;
  }
  @media (min-width: 500px) {
    height: 300px;
    background-position-y: -50px;
  }
  @media (min-width: 768px) {
    height: 300px;
    width: 65%;
    background-position-y: -30px;
    background-position-x: 0px;
  }
  @media (min-width: 1024px) {
    /* background-position-y: -70px; */
    height: 300px;
  }
  @media (min-width: 1200px) {
    /* background-position-y: -70px; */
    height: 390px;
  }
  @media (min-width: 1400px) {
    background-position-y: -75px;
    height: 450px;
  }
`
export const Text = styled.div`
  position: relative;
  width: 100%;
  background-color: #836F60;
  
  h2, p {
    color: #fff;
  }
  h2 {
    font-size: 3rem;
    padding: 1rem 1rem 0.1rem 1rem;
    
    @media (min-width: 425px) {
      
    }
    @media (min-width: 500px) {
      
    }
    @media (min-width: 768px) {
      font-size: 32px;
      padding: 10px;
    
    }
    @media (min-width: 1024px) {
    
    }
    @media (min-width: 1200px) {
      font-size: 48px;
    }
    @media (min-width: 1400px) {
      font-size: 54px;
    }
  }
  
  p{
    font-size: 1.5rem;
    padding: 0.1rem 1rem 1rem 1rem;
    line-height: 1.2;
    margin: 0px;
    @media (min-width: 425px) {
    
    }
    @media (min-width: 500px) {
    
    }
    @media (min-width: 768px) {
      font-size: 21px;
      padding: 15px;
      line-height: 1.1;
    }
    @media (min-width: 1024px) {
      font-size: 26px;
    }
    @media (min-width: 1200px) {
      font-size: 28px;
    }
    @media (min-width: 1400px) {
      font-size: 36px;
    }
  }
    @media (min-width: 768px) {
      width: 35%;
      order: ${props => (props.Order ? props.Order : '1')};
    }
    @media (min-width: 1200px) {
      /* height: 390px; */
    }
    @media (min-width: 1400px) {
      /* height: 450px; */
    }
`
export const StyledLine = styled.div`
  width: 90px;
  height: 7px;
  position: relative;
  left: 1rem;
  margin-bottom: 1rem;
  background-color: #FFE600;
  @media(min-width: 1440px){
    width: 150px;
    height: 10px;
  }
`
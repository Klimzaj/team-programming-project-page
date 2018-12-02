import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  max-width: 500px;
  padding: 0 1rem 0 1rem;

  display: flex;
  flex-direction: column;

  input {
    all: initial;
    background-color: orange;
    height: 50px;
    width: 100%;
    border-radius: 30px;
    margin: 0.5rem 0 0.5rem 0;
    
    ${this}::placeholder {
      padding-left: 2rem; 
    }
  } 


`

const Addrecipe = () => (
  <Layout>
    <Wrapper>
      <h1>Dodaj przepis</h1>
      <input name= 'title' placeholder = 'Title'></input>
      <input name='description' placeholder = 'Description'></input>
      <label to ='component'>Lista składników: </label>


      <label to = 'recipe'>Sposób przygotowania: </label>
      
    </Wrapper>
  </Layout>
)

export default Addrecipe

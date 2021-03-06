import React from 'react'
import Layout from '../components/Layout'
import ImgText from '../components/ImgText'

import Partner from '../components/Partner'
import Features from '../components/Features'

import Img1 from '../images/bakingBread.jpg'
import Img2 from '../images/adults.jpg'

import clock from '../assets/clock.svg'
import money from '../assets/money.svg'
// import Test from './../components/test'

const Item = [
  {
    img: clock,
    text: 'Skorzystaj z naszej wyszukiwarki przepisów, aby w szybki i przyjemny sposób znaleźć pomysł na dzisiejszy posiłek! ',
  }, 
  {
    img: money,
    text: 'Powiemy Ci ile zapłacisz za produkty potrzebne do gotowania.',  
  }

]

const Text1 = [
  {
    title: 'Nie wiesz co ugotować?',
    text: 'Dzięki nam znajdziesz pomysł na obiad za który powiemy Ci, ile zapłacisz.'
  }
]
const Text2 = [
  {
    title: 'Gotowanie jest Twoja pasją?',
    text: 'Dołącz do ludzi, którzy dzielą się swoim doświadczeniem i smakiem!'
  }
]

const IndexPage = () => (
  <Layout>
    <ImgText Text={Text1} ImgEl={Img1}/>
    <Features item={Item} />
    <ImgText TextOrder={'-1'} Text={Text2} ImgEl={Img2} />
    <Partner/>
  </Layout>
)

export default IndexPage

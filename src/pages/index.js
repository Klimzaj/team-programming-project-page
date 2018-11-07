import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/Layout'
import ImgText from '../components/ImgText'

// import Features from '../components/Features'

import Img1 from '../images/baking-bread-cooking-1070880.jpg'
import Img2 from '../images/adult-casual-chef-1418355.jpg'

// import clock from '../assets/clock.svg'
// import money from '../assets/money.svg'

// const Item = [
//   {
//     img: clock,
//     text: 'Skorzystaj z naszej wyszukiwarki przepisów, aby w szybki i przyjemny sposób znaleźć pomysł na dzisiejszy posiłek! ',
//   }, 
//   {
//     img: money,
//     text: 'Powiemy Ci ile zapłacisz za produkty potrzebne do gotowania.',  
//   }

// ]

const Text1 = [
  {
    title: 'Nie wiesz co ugotować?',
    text: 'Dzięki nam znajdzijesz pomysł na obiad za który powiemy Ci, ile zapłacisz.'
  }
]
const Text2 = [
  {
    title: 'Gotowanie jest Twoja pasja?',
    text: 'Dołącz do ludzi, którzy dzielą się swoim doświadczeniem i smakiem!'
  }
]
const IndexPage = () => (
  <Layout>
    <ImgText Text={Text1} ImgEl={Img1}/>
    {/* <Features item={Item} /> */}
    <ImgText TextOrder={'-1'} Text={Text2} ImgEl={Img2} />
  </Layout>
)

export default IndexPage

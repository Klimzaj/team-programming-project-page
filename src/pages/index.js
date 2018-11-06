import React from 'react'
// import { Link } from 'gatsby'
import Layout from '../components/Layout'
import ImgText from '../components/ImgText'

import Img1 from '../images/baking-bread-cooking-1070880.jpg'
import Img2 from '../images/adult-casual-chef-1418355.jpg'

const Text1 = [
  {
    title: 'Nie wiesz co usmażyć?',
    text: 'Dzięki nam znajdzijesz pomysł na obiad za który powiemy Ci, ile zapłacisz, ale nawet my nie możemy zagwarantować, że tego nie zepsujesz.'
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
    <ImgText TextOrder={'-1'} Text={Text2} ImgEl={Img2} />
  </Layout>
)

export default IndexPage

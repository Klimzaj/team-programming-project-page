import React from 'react'
import Layout from '../components/Layout'
import ImgText from '../components/ImgText'

import Partner from '../components/Partner'
import Features from '../components/Features'

import Img1 from '../images/bakingBread.jpg'
import Img2 from '../images/adults.jpg'

import clock from '../assets/clock.svg'
import money from '../assets/money.svg'

const Item = [
  {
    img: clock,
    text: 'Use our recipe browser, so you can easly find the best idea for dinner, for you and your family.',    
  }, 
  {
    img: money,
    text: "We're about to tell you how much will you spend for components, that you need.",
  }

]

const Text1 = [
  {
    title: "Don't you have idea for a dinner?", 
    text: "Thanks to us, you can find idea for a dinner, and we're going to tell You, how much you're gonna spend on it"
  }
]
const Text2 = [
  {
    title: 'Is cooking Your passion?',
    text: 'Join people, which share their experience and sense of taste. '
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

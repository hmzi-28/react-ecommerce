import React from 'react'
import Carousel from '../Components/Carousel/Crousel'
import Feature from '../Components/Category/Category'
import TrendingProducts from '../Components/Trending/TrendingProducts'
import Banner from '../Components/Banner/Banner';
import Footer from '../Components/Footer/Footer'
import Offers from '../Components/Offers/Offers';
import productData from '../../db';
const Home = () => {
  return (
    <>
      <Carousel />
      <Feature  products={productData}/>
      <TrendingProducts  products={productData} />
      <Banner />
      <Offers/>
      <Footer/>

    </>

  )
}

export default Home
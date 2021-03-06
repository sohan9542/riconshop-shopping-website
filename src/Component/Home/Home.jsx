import React from 'react'
import Hero from './Hero/Hero'
import Products from './Products/Products'
import Qualitys from './Qualitys/Qualitys'
import Offer from './Offer/Offer'
import FeaturesProducts from './FeaturesProduct/FeaturesProducts'
import FooterTop from '../FooterTop/FooterTop'
           
const Home = (props) => {
    return (
        <>
            <Hero/>
            <Products handleProduct={props.handleProduct} handleWishList={props.handleWishList}/>
            <Qualitys />
            <Offer />
            <FeaturesProducts handleProduct={props.handleProduct} handleWishList={props.handleWishList}/>
            <FooterTop />
        </>
    )
}

export default Home

import React from 'react'
import classes from './hero.module.css'
import hero from '../../../image/hero.png'

const Hero = () => {
    return (
        <>
            <section className={classes.hero}>
                <div className={classes.container}>
                    <div className={classes.heroContainer}>
                        <div className={classes.heroInfo}>
                            <h2>THE BEST  <br /><span className={classes.styleBold}> ECOMMERCEWEBSITE</span></h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quam debitis animi. Cum, explicabo reprehenderit quaerat voluptatem invent .</p>
                            <br />
                            <button className={classes.buyButton}>BUY NOW</button>
                        </div>
                        <div className={classes.heroImg}>
                            <img src={hero} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero

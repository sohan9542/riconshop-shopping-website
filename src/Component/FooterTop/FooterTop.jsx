import React from 'react'
import classes from './footerTop.module.css'
import footer from '../../image/footer.PNG'
const FooterTop = () => {
    return (
        <>
            <section className={classes.footerTop}>
                <div className={classes.container}>
                    <div className={classes.footerTop__left}>
                        <h5>Any Special Cupon Code?</h5>
                        <p>Get discount from cupon code</p>
                        <div className={classes.cuponform}>
                            <input type="text" />
                            <button>Cupon Code</button>
                        </div>
                    </div>
                    <div className={classes.footerTop__right}>
                        <img src={footer} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FooterTop

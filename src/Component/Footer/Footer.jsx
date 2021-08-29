import React from 'react'
import classes from './footer.module.css'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Globe2, TelephoneFill, EnvelopeFill } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <>
            <section className={classes.footer}>
 
                <div className={classes.container}>
                    <div className={classes.social__info}>
                        <p>We're confident we've provide all the best for your. Stay conenct with us</p>
                        <ul className={classes.Socialfooter}>
                            <li> <Link><FaFacebookF /></Link> </li>
                            <li> <Link><AiOutlineTwitter /></Link> </li>
                            <li> <Link><FaLinkedinIn /></Link> </li>
                            <li> <Link><AiFillInstagram /></Link> </li>
                        </ul>
                    </div>
                    <div className={classes.footer__info}>
                        <div>
                            <ul>
                                <h6 className={classes.columnHeader}>Information</h6>
                                <br />
                                <li><Link to="delevery">Delivery Information</Link></li>
                                <li> <Link>Discount</Link> </li>
                                <li> <Link>Sitemap</Link> </li>
                                <li> <Link>Privacy Policy</Link>  </li>
                                <li> <Link>My Account</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h6 className={classes.columnHeader}>My Account</h6>
                                <br />
                                <li> <Link>Sign In</Link> </li>
                                <li> <Link>view Cart</Link> </li>
                                <li> <Link>My Wishlist</Link> </li>
                                <li> <Link>Check out</Link> </li>
                                <li> <Link>Track My Order</Link> </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <h6 className={classes.columnHeader}>Help</h6>
                                <br />
                                <li> <Link>F.A.Q.</Link> </li>
                                <li> <Link>Shipping</Link> </li>
                                <li> <Link>Contact Us</Link> </li>
                                <li> <Link>Privacy Policy</Link> </li>

                            </ul>
                        </div>
                        <div>
                            <h6 className={classes.columnHeader}>Contact Info</h6>
                            <br />
                            <li> <Link><Globe2 /> 1234 Your Address, County</Link> </li>
                            <li> <Link><TelephoneFill /> +1 234 567 9999 </Link> </li>
                            <li> <Link><EnvelopeFill /> mail@domain.com </Link> </li>
                        </div>
                    </div>

                </div>
                <div className={classes.copyright__info}>
                    <p>&copy; Copyright 2021 RiconShop All right Reserved -- Design By Sohanur Rahman (Front-End Dev)</p>
                </div>
            </section>
        </>
    )
}

export default Footer

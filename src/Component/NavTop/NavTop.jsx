import React from 'react';
import classes from './navtop.module.css';
import { BiPhone } from 'react-icons/bi'
import { AiOutlineMail, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';

const NavTop = () => {
    return (
        <>
            <section className={classes.NavTop}>

                <div className={classes.container}>
                    <div className={classes.navtop__info}>
                        <ul className={classes.companyInfo}>
                            <li><BiPhone /> <span>+1 123 456 789</span></li>
                            <li><AiOutlineMail /> <span>company@gmail.com</span></li>
                        </ul>
                        <ul className={classes.socialIcon}>
                            <li><FaFacebookF /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><FaLinkedinIn /></li>
                            <li><AiFillInstagram /></li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NavTop;

import React from 'react'
import classes from './product.module.css'
import { AiFillHeart } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import { MdDescription } from 'react-icons/md'
import { FaStar } from 'react-icons/fa'
const Product = (props) => {
    const { img, name, id, price, star } = props.product;
    const handleProduct = props.handleProduct;
    return (
        <>
            <div className={classes.card}>
                <div className={classes.card__head}>
                    <img src={img} alt="" />
                    <div className={classes.addToCart}>
                        <ul>
                            <li><AiFillHeart /></li>
                            <li onClick={()=> handleProduct(props.product)}><FaCartPlus /></li>
                            <li><MdDescription /></li>

                        </ul>
                    </div>
                </div>
                <div className={classes.card__body}>
                    <h6>{name}</h6>
                    <h5 style={{ color: 'rgb(30, 202, 30)', fontWeight: '500' }}>{price}$</h5>
                    <ul className={classes.stars}>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Product

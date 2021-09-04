import React from 'react'
import classes from './category__product.module.css'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const CategoryProduct = (props) => {
    const {id, name, img, price,} = props.product;
    return (
        <>
            <div className={classes.oneProduct}>
                <div className={classes.imgProduct}>
                    <img src={img} alt="" />
                </div>
                <div className={classes.descriptions}>
                    <h6><Link style={{color:'black', fontWeight:'400'}} to={'/description/' + id}>{name}</Link></h6>
                    <h6>{price}</h6>
                    <div className={classes.star}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CategoryProduct

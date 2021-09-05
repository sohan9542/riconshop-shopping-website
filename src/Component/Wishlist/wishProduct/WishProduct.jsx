import React, { useContext } from 'react'
import classes from './wishproduct.module.css'
import { Link } from 'react-router-dom';
import {FaMinusCircle} from 'react-icons/fa'
const WishProduct = (props) => {

    const { id, img, name, price,  categories } = props.product;
    const handleProduct = props.handleProduct;

    return (
        <>
            <ul className={classes.singleProduct}>
                <li className={classes.products}>
                    <img src={img} style={{ height: '100px', width: '80px', objectFit: 'contain' }} alt="name" />
                    <Link to={'/description/' + id}>{name}</Link>
                </li>
                <li>
                    {categories}
                </li>
                <li>
                    {price}$
                    <button className={classes.add__to__cart} onClick={()=> handleProduct(props.product)}>Add To Cart</button>
                    <FaMinusCircle className={classes.removeIcon} onClick={()=>props.handleWishRemove(id)} style={{marginLeft:'10px', color:'red'}}/>
                </li>
            </ul>
        </>
    )
}

export default WishProduct

import React from 'react'
import { useContext } from 'react';
import { RapperContent } from '../../../App';
import classes from './addedProduct.module.css'
import { Link } from 'react-router-dom';
import { FaMinusCircle } from 'react-icons/fa';
const AddedProduct = (props) => {
    const { id, img, name, price,  categories } = props.product;
    const {selectProduct} = useContext(RapperContent);
    const quantity = selectProduct.filter(pd => pd.name === name)
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
                    {quantity.length}
                </li>
                <li>
                    {price}$
                </li>
                <li>
                    {price * quantity.length}$
                    <FaMinusCircle className={classes.removeIcon} onClick={()=>props.handleRemove(id)} style={{marginLeft:'10px', color:'red'}}/>
                </li>
            </ul>
        </>
    )
}

export default AddedProduct

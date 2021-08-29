import React from 'react'
import { useContext } from 'react';
import { RapperContent } from '../../../App';
import classes from './addedProduct.module.css'
const AddedProduct = (props) => {
    const { id, img, name, newID, price, stock, categories } = props.product;
    const addedData = useContext(RapperContent);
    const quantity = addedData.filter(pd => pd.name === name)

        return (
            <>
                <ul className={classes.singleProduct}>
                    <li className={classes.products}>
                        <img src={img} style={{ height: '100px', width: '80px', objectFit: 'contain' }} alt="name" />
                        {name}
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
                    </li>
                </ul>
            </>
        )
    }

export default AddedProduct

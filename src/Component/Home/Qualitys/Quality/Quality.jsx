import { XDiamondFill } from "react-bootstrap-icons"
import classes from './quality.module.css'

import React from 'react'


const Quality = (props) => {
    const { name, theme } = props.product;
    return (
        <>
            <div className={classes.qCard}>
               <h2> <XDiamondFill /></h2>
                <h6>{name}</h6>
                <p>{theme}</p>
            </div>
        </>
    )
}

export default Quality
